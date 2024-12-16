import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, File, Image, Video, Folder } from 'lucide-react';
import type { FileType } from '../types';

interface FileUploaderProps {
  onFileSelect: (files: File[], type: FileType) => void;
  fileType: FileType;
}

const FileUploader: React.FC<FileUploaderProps> = ({ onFileSelect, fileType }) => {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    onFileSelect(acceptedFiles, fileType);
  }, [onFileSelect, fileType]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const getIcon = () => {
    switch (fileType) {
      case 'folder':
        return <Folder className="w-12 h-12 text-indigo-600" />;
      case 'image':
        return <Image className="w-12 h-12 text-indigo-600" />;
      case 'video':
        return <Video className="w-12 h-12 text-indigo-600" />;
      default:
        return <File className="w-12 h-12 text-indigo-600" />;
    }
  };

  return (
    <div
      {...getRootProps()}
      className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
        ${isDragActive ? 'border-indigo-600 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400'}`}
    >
      <input {...getInputProps()} />
      <div className="flex flex-col items-center">
        {getIcon()}
        <p className="mt-4 text-gray-600">
          {isDragActive ? (
            'Drop the files here...'
          ) : (
            <>
              <Upload className="w-5 h-5 inline mr-2" />
              Drag & drop files or click to select
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default FileUploader;