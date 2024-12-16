import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { compressAndEncrypt, decryptAndDecompress } from '../../utils/secureCompression';
import Button from '../ui/Button';
import { Download } from 'lucide-react';

interface SecureFileHandlerProps {
  userId: string;
  mode: 'compress' | 'decompress';
}

const SecureFileHandler: React.FC<SecureFileHandlerProps> = ({ userId, mode }) => {
  const [files, setFiles] = useState<File[]>([]);
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<Blob | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
    setResult(null);
  }, []);

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const handleProcess = async () => {
    if (!files.length) return;
    setProcessing(true);

    try {
      if (mode === 'compress') {
        const compressed = await compressAndEncrypt(files, userId);
        setResult(compressed);
      } else {
        const decompressed = await decryptAndDecompress(files[0], userId);
        const zip = await compressAndEncrypt(decompressed, userId);
        setResult(zip);
      }
    } catch (error) {
      console.error('Processing error:', error);
    }

    setProcessing(false);
  };

  const handleDownload = () => {
    if (!result) return;
    
    const url = URL.createObjectURL(result);
    const a = document.createElement('a');
    a.href = url;
    a.download = mode === 'compress' ? 'compressed.zip' : 'decompressed.zip';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div
        {...getRootProps()}
        className="border-2 border-dashed rounded-lg p-8 text-center cursor-pointer hover:border-indigo-400"
      >
        <input {...getInputProps()} />
        <p className="text-gray-600">
          Drop your {mode === 'compress' ? 'files' : 'compressed file'} here
        </p>
      </div>

      {files.length > 0 && (
        <div>
          <h3 className="font-medium mb-2">Selected Files:</h3>
          <ul className="space-y-1">
            {files.map((file) => (
              <li key={file.name} className="text-sm text-gray-600">
                {file.name} ({(file.size / 1024).toFixed(2)} KB)
              </li>
            ))}
          </ul>

          <Button
            onClick={handleProcess}
            disabled={processing}
            className="mt-4"
            fullWidth
          >
            {processing ? 'Processing...' : mode === 'compress' ? 'Compress' : 'Decompress'}
          </Button>
        </div>
      )}

      {result && (
        <div className="text-center">
          <Button onClick={handleDownload} variant="secondary">
            <Download className="w-4 h-4 mr-2 inline" />
            Download {mode === 'compress' ? 'Compressed' : 'Decompressed'} Files
          </Button>
        </div>
      )}
    </div>
  );
};

export default SecureFileHandler;