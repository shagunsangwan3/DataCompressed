import React from 'react';

interface StatsProps {
  stats: {
    originalSize: number;
    compressedSize: number;
    compressionRatio: number;
  };
}

const CompressionStats: React.FC<StatsProps> = ({ stats }) => {
  return (
    <div className="bg-white rounded-lg shadow p-6 grid grid-cols-3 gap-4">
      <div className="text-center">
        <p className="text-sm text-gray-500">Original Size</p>
        <p className="text-2xl font-semibold text-gray-800">
          {(stats.originalSize / 1024).toFixed(2)} KB
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Compressed Size</p>
        <p className="text-2xl font-semibold text-gray-800">
          {(stats.compressedSize / 1024).toFixed(2)} KB
        </p>
      </div>
      <div className="text-center">
        <p className="text-sm text-gray-500">Compression Ratio</p>
        <p className="text-2xl font-semibold text-indigo-600">
          {stats.compressionRatio.toFixed(1)}%
        </p>
      </div>
    </div>
  );
};

export default CompressionStats;