// Utility functions for compression operations
export const compressData = (data: string): string => {
  if (!data) return '';
  let compressed = '';
  let count = 1;
  let current = data[0];

  for (let i = 1; i <= data.length; i++) {
    if (i < data.length && data[i] === current) {
      count++;
    } else {
      compressed += (count > 1 ? count : '') + current;
      if (i < data.length) {
        current = data[i];
        count = 1;
      }
    }
  }
  return compressed;
};

export const decompressData = (data: string): string => {
  if (!data) return '';
  let decompressed = '';
  let count = '';

  for (let i = 0; i < data.length; i++) {
    if (!isNaN(parseInt(data[i]))) {
      count += data[i];
    } else {
      const repeatCount = count ? parseInt(count) : 1;
      decompressed += data[i].repeat(repeatCount);
      count = '';
    }
  }
  return decompressed;
};