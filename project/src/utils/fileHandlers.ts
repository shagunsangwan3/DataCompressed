import type { FileType } from '../types';

export const processFiles = async (
  files: File[],
  type: FileType
) => {
  const totalSize = files.reduce((acc, file) => acc + file.size, 0);
  const compressedSize = totalSize * 0.6; // Simulated 40% compression

  return {
    originalSize: totalSize,
    compressedSize,
    compressionRatio: ((totalSize - compressedSize) / totalSize) * 100
  };
};