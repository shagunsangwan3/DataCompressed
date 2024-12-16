// Types related to compression functionality
export type FileType = 'folder' | 'image' | 'video' | 'document';

export interface CompressionStats {
  originalSize: number;
  compressedSize: number;
  compressionRatio: number;
}