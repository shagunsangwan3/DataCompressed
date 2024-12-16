import React, { useState } from 'react';
import { Copy, CheckCircle2 } from 'lucide-react';
import TextArea from '../ui/TextArea';

interface OutputDisplayProps {
  output: string;
  stats?: {
    inputLength: number;
    outputLength: number;
    mode: 'compress' | 'decompress';
  };
}

const OutputDisplay: React.FC<OutputDisplayProps> = ({ output, stats }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <label className="block text-sm font-medium text-gray-700">
          Output
        </label>
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-sm text-indigo-600 hover:text-indigo-700"
        >
          {copied ? (
            <CheckCircle2 className="w-4 h-4" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <TextArea
        readOnly
        value={output}
        className="bg-gray-50"
        placeholder="Output will appear here..."
      />

      {stats && (
        <div className="mt-4 text-sm text-gray-600">
          <p>Original length: {stats.inputLength} characters</p>
          <p>
            {stats.mode === 'compress' ? 'Compressed' : 'Decompressed'} length:{' '}
            {stats.outputLength} characters
          </p>
          {stats.mode === 'compress' && (
            <p>
              Compression ratio:{' '}
              {((1 - stats.outputLength / stats.inputLength) * 100).toFixed(1)}%
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default OutputDisplay;