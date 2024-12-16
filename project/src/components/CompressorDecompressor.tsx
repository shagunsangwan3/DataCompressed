import React, { useState } from 'react';
import { FileText } from 'lucide-react';
import Card from './ui/Card';
import TextArea from './ui/TextArea';
import Button from './ui/Button';
import CompressControls from './compression/CompressControls';
import OutputDisplay from './compression/OutputDisplay';
import { compressData, decompressData } from '../utils/compression';

function CompressorDecompressor() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [mode, setMode] = useState<'compress' | 'decompress'>('compress');

  const handleProcess = () => {
    const result = mode === 'compress' 
      ? compressData(input)
      : decompressData(input);
    setOutput(result);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card>
          <div className="flex items-center justify-center mb-8">
            <FileText className="w-8 h-8 text-indigo-600 mr-3" />
            <h1 className="text-3xl font-bold text-gray-800">
              Data Compression Tool
            </h1>
          </div>

          <CompressControls mode={mode} onModeChange={setMode} />

          <div className="space-y-6">
            <TextArea
              label="Input Text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={
                mode === 'compress'
                  ? 'Enter text to compress...'
                  : 'Enter compressed text to decompress...'
              }
            />

            <Button fullWidth onClick={handleProcess}>
              {mode === 'compress' ? 'Compress' : 'Decompress'}
            </Button>

            {output && (
              <OutputDisplay
                output={output}
                stats={{
                  inputLength: input.length,
                  outputLength: output.length,
                  mode
                }}
              />
            )}
          </div>
        </Card>
      </div>
    </div>
  );
}

export default CompressorDecompressor;