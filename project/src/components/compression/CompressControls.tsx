import React from 'react';
import Button from '../ui/Button';
import { Minimize2, Maximize2 } from 'lucide-react';

interface CompressControlsProps {
  mode: 'compress' | 'decompress';
  onModeChange: (mode: 'compress' | 'decompress') => void;
}

const CompressControls: React.FC<CompressControlsProps> = ({ mode, onModeChange }) => {
  return (
    <div className="flex gap-4 mb-6">
      <Button
        onClick={() => onModeChange('compress')}
        variant={mode === 'compress' ? 'primary' : 'secondary'}
        fullWidth
      >
        <div className="flex items-center justify-center gap-2">
          <Minimize2 className="w-5 h-5" />
          Compress
        </div>
      </Button>
      <Button
        onClick={() => onModeChange('decompress')}
        variant={mode === 'decompress' ? 'primary' : 'secondary'}
        fullWidth
      >
        <div className="flex items-center justify-center gap-2">
          <Maximize2 className="w-5 h-5" />
          Decompress
        </div>
      </Button>
    </div>
  );
};

export default CompressControls;