export const DemoFileTriggerUsage = `
import React, { useState } from 'react';
import { FileTrigger, Button } from '@mono/components';

// Basic usage
export const BasicFileTrigger = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  return (
    <FileTrigger onSelect={handleFileSelect}>
      <Button variant="primary">Choose File</Button>
    </FileTrigger>
  );
};

// File type restrictions
export const ImageFileTrigger = () => {
  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      console.log('Selected images:', Array.from(files));
    }
  };

  return (
    <FileTrigger
      acceptedFileTypes={['image/*']}
      onSelect={handleFileSelect}
    >
      <Button variant="secondary">Select Images</Button>
    </FileTrigger>
  );
};

// Multiple file selection
export const MultipleFileTrigger = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      setSelectedFiles(Array.from(files));
    }
  };

  return (
    <div>
      <FileTrigger
        allowsMultiple={true}
        onSelect={handleFileSelect}
      >
        <Button variant="primary">Select Multiple Files</Button>
      </FileTrigger>

      {selectedFiles.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h4>Selected Files:</h4>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {file.name} ({Math.round(file.size / 1024)} KB)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

// Specific file types
export const DocumentFileTrigger = () => {
  return (
    <FileTrigger
      acceptedFileTypes={['.pdf', '.doc', '.docx', '.txt']}
      onSelect={(files) => {
        if (files) {
          console.log('Document selected:', files[0].name);
        }
      }}
    >
      <Button variant="tertiary">Upload Document</Button>
    </FileTrigger>
  );
};

// Directory selection
export const DirectoryFileTrigger = () => {
  const handleDirectorySelect = (files: FileList | null) => {
    if (files) {
      console.log('Selected directory with', files.length, 'files');
    }
  };

  return (
    <FileTrigger
      acceptDirectory
      onSelect={handleDirectorySelect}
    >
      <Button variant="secondary">Select Folder</Button>
    </FileTrigger>
  );
};

// With different button variants
export const VariantFileTriggers = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <FileTrigger onSelect={(files) => console.log('Primary:', files)}>
        <Button variant="primary">Primary Upload</Button>
      </FileTrigger>

      <FileTrigger onSelect={(files) => console.log('Secondary:', files)}>
        <Button variant="secondary">Secondary Upload</Button>
      </FileTrigger>

      <FileTrigger onSelect={(files) => console.log('Tertiary:', files)}>
        <Button variant="tertiary">Tertiary Upload</Button>
      </FileTrigger>

      <FileTrigger onSelect={(files) => console.log('Danger:', files)}>
        <Button variant="danger">Replace File</Button>
      </FileTrigger>
    </div>
  );
};

// With different button sizes
export const SizedFileTriggers = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <FileTrigger onSelect={(files) => console.log('Small:', files)}>
        <Button size="small" variant="primary">Small</Button>
      </FileTrigger>

      <FileTrigger onSelect={(files) => console.log('Medium:', files)}>
        <Button size="medium" variant="primary">Medium</Button>
      </FileTrigger>

      <FileTrigger onSelect={(files) => console.log('Large:', files)}>
        <Button size="large" variant="primary">Large</Button>
      </FileTrigger>
    </div>
  );
};

// Audio and video files
export const MediaFileTriggers = () => {
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <FileTrigger
        acceptedFileTypes={['audio/*']}
        onSelect={(files) => console.log('Audio:', files)}
      >
        <Button variant="primary">Select Audio</Button>
      </FileTrigger>

      <FileTrigger
        acceptedFileTypes={['video/*']}
        onSelect={(files) => console.log('Video:', files)}
      >
        <Button variant="secondary">Select Video</Button>
      </FileTrigger>

      <FileTrigger
        acceptedFileTypes={['audio/*', 'video/*']}
        allowsMultiple={true}
        onSelect={(files) => console.log('Media:', files)}
      >
        <Button variant="tertiary">Select Media Files</Button>
      </FileTrigger>
    </div>
  );
};

// With file validation and preview
export const FileValidationTrigger = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  const handleFileSelect = (files: FileList | null) => {
    if (!files) return;

    const fileArray = Array.from(files);
    const newErrors: string[] = [];

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    fileArray.forEach(file => {
      if (file.size > maxSize) {
        newErrors.push(\`\${file.name} is too large (max 5MB)\`);
      }
    });

    if (newErrors.length === 0) {
      setSelectedFiles(fileArray);
      setErrors([]);
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div>
      <FileTrigger
        acceptedFileTypes={['image/*']}
        allowsMultiple={true}
        onSelect={handleFileSelect}
      >
        <Button variant="primary">Select Images (Max 5MB each)</Button>
      </FileTrigger>

      {errors.length > 0 && (
        <div style={{ marginTop: '1rem', color: 'red' }}>
          <h4>Errors:</h4>
          <ul>
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      {selectedFiles.length > 0 && (
        <div style={{ marginTop: '1rem' }}>
          <h4>Valid Files:</h4>
          <ul>
            {selectedFiles.map((file, index) => (
              <li key={index}>
                {file.name} - {Math.round(file.size / 1024)} KB
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
`;
