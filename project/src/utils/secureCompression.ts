import JSZip from 'jszip';
import CryptoJS from 'crypto-js';

const generateKey = (userId: string) => {
  // Generate a unique key based on user ID and a secret
  return CryptoJS.SHA256(userId + 'YOUR_SECRET_KEY').toString();
};

export const compressAndEncrypt = async (files: File[], userId: string): Promise<Blob> => {
  const zip = new JSZip();
  const key = generateKey(userId);

  // Add files to zip
  for (const file of files) {
    const arrayBuffer = await file.arrayBuffer();
    const encrypted = CryptoJS.AES.encrypt(
      arrayBuffer.toString(),
      key
    ).toString();
    zip.file(file.name, encrypted);
  }

  // Generate zip file with metadata
  zip.file('metadata.json', JSON.stringify({
    userId,
    timestamp: Date.now(),
    fileCount: files.length
  }));

  return await zip.generateAsync({ type: 'blob' });
};

export const decryptAndDecompress = async (
  compressedBlob: Blob,
  userId: string
): Promise<File[]> => {
  const key = generateKey(userId);
  const zip = await JSZip.loadAsync(compressedBlob);
  const files: File[] = [];

  // Verify metadata
  const metadata = await zip.file('metadata.json')?.async('string');
  if (!metadata) throw new Error('Invalid compressed file');
  
  const { userId: fileUserId } = JSON.parse(metadata);
  if (fileUserId !== userId) throw new Error('Unauthorized');

  // Extract and decrypt files
  for (const filename of Object.keys(zip.files)) {
    if (filename === 'metadata.json') continue;
    
    const encrypted = await zip.file(filename)?.async('string');
    if (!encrypted) continue;

    const decrypted = CryptoJS.AES.decrypt(encrypted, key).toString(
      CryptoJS.enc.Utf8
    );
    
    const blob = new Blob([decrypted]);
    files.push(new File([blob], filename));
  }

  return files;
};