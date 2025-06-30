import React, { useState } from 'react';
import { FileTrigger, Button } from '@mono/components';
import styles from './DemoFileTrigger.module.scss';

interface DemoSectionProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const DemoSection: React.FC<DemoSectionProps> = ({ title, description, children }) => (
  <div className={styles.demoSection}>
    <div className={styles.demoHeader}>
      <h3 className={styles.demoTitle}>{title}</h3>
      {description && <p className={styles.demoDescription}>{description}</p>}
    </div>
    <div className={styles.demoContent}>
      {children}
    </div>
  </div>
);

interface TabProps {
  activeTab: string;
  tabKey: string;
  onClick: (tab: string) => void;
  children: React.ReactNode;
}

const Tab: React.FC<TabProps> = ({ activeTab, tabKey, onClick, children }) => (
  <button
    className={`${styles.tab} ${activeTab === tabKey ? styles.tabActive : ''}`}
    onClick={() => onClick(tabKey)}
  >
    {children}
  </button>
);

const DemoFileTrigger: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('variants');
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [eventLog, setEventLog] = useState<string[]>([]);

  const handleEvent = (eventType: string, files?: FileList | null) => {
    const timestamp = new Date().toLocaleTimeString();
    let message = `${timestamp}: ${eventType}`;

    if (files && files.length > 0) {
      const fileNames = Array.from(files).map(f => f.name).join(', ');
      message += ` - ${files.length} file(s): ${fileNames}`;
    }

    setEventLog(prev => [message, ...prev.slice(0, 9)]);
  };

  const handleFileSelect = (files: FileList | null) => {
    if (files) {
      const fileArray = Array.from(files);
      setSelectedFiles(fileArray);
      handleEvent('onSelect', files);
    }
  };

  const renderVariantsTab = () => (
    <DemoSection
      title="Variants"
      description="FileTrigger can be used with different button variants to maintain consistent design language."
    >
      <div className={styles.variantGrid}>
        <div className={styles.variantGroup}>
          <h4>Primary Button</h4>
          <FileTrigger onSelect={handleFileSelect}>
            <Button variant="primary">Choose File</Button>
          </FileTrigger>
        </div>

        <div className={styles.variantGroup}>
          <h4>Secondary Button</h4>
          <FileTrigger onSelect={handleFileSelect}>
            <Button variant="secondary">Browse Files</Button>
          </FileTrigger>
        </div>

        <div className={styles.variantGroup}>
          <h4>Tertiary Button</h4>
          <FileTrigger onSelect={handleFileSelect}>
            <Button variant="tertiary">Upload</Button>
          </FileTrigger>
        </div>

        <div className={styles.variantGroup}>
          <h4>Danger Button</h4>
          <FileTrigger onSelect={handleFileSelect}>
            <Button variant="danger">Replace File</Button>
          </FileTrigger>
        </div>

        <div className={styles.variantGroup}>
          <h4>Transparent Button</h4>
          <FileTrigger onSelect={handleFileSelect}>
            <Button variant="transparent">Select Document</Button>
          </FileTrigger>
        </div>
      </div>
    </DemoSection>
  );

  const renderSizesTab = () => (
    <DemoSection
      title="Sizes"
      description="FileTrigger works with different button sizes to accommodate various layout requirements."
    >
      <div className={styles.sizeGrid}>
        <div className={styles.sizeGroup}>
          <h4>Small</h4>
          <FileTrigger onSelect={handleFileSelect}>
            <Button size="small" variant="primary">Small Upload</Button>
          </FileTrigger>
        </div>

        <div className={styles.sizeGroup}>
          <h4>Medium (Default)</h4>
          <FileTrigger onSelect={handleFileSelect}>
            <Button size="medium" variant="primary">Medium Upload</Button>
          </FileTrigger>
        </div>

        <div className={styles.sizeGroup}>
          <h4>Large</h4>
          <FileTrigger onSelect={handleFileSelect}>
            <Button size="large" variant="primary">Large Upload</Button>
          </FileTrigger>
        </div>
      </div>

      <div className={styles.sizesComparison}>
        <h4>Size Comparison</h4>
        <div className={styles.sizesRow}>
          <FileTrigger onSelect={handleFileSelect}>
            <Button size="small" variant="secondary">Small</Button>
          </FileTrigger>
          <FileTrigger onSelect={handleFileSelect}>
            <Button size="medium" variant="secondary">Medium</Button>
          </FileTrigger>
          <FileTrigger onSelect={handleFileSelect}>
            <Button size="large" variant="secondary">Large</Button>
          </FileTrigger>
        </div>
      </div>
    </DemoSection>
  );

  const renderFileTypesTab = () => (
    <DemoSection
      title="File Type Restrictions"
      description="FileTrigger supports various file type restrictions and acceptance patterns."
    >
      <div className={styles.fileTypesGrid}>
        <div className={styles.fileTypeGroup}>
          <h4>Images Only</h4>
          <FileTrigger
            acceptedFileTypes={['image/*']}
            onSelect={handleFileSelect}
          >
            <Button variant="primary">Select Images</Button>
          </FileTrigger>
          <p className={styles.fileTypeInfo}>Accepts: image/*</p>
        </div>

        <div className={styles.fileTypeGroup}>
          <h4>Documents</h4>
          <FileTrigger
            acceptedFileTypes={['.pdf', '.doc', '.docx', '.txt']}
            onSelect={handleFileSelect}
          >
            <Button variant="secondary">Choose Document</Button>
          </FileTrigger>
          <p className={styles.fileTypeInfo}>Accepts: .pdf, .doc, .docx, .txt</p>
        </div>

        <div className={styles.fileTypeGroup}>
          <h4>Spreadsheets</h4>
          <FileTrigger
            acceptedFileTypes={['.xlsx', '.xls', '.csv']}
            onSelect={handleFileSelect}
          >
            <Button variant="tertiary">Upload Spreadsheet</Button>
          </FileTrigger>
          <p className={styles.fileTypeInfo}>Accepts: .xlsx, .xls, .csv</p>
        </div>

        <div className={styles.fileTypeGroup}>
          <h4>Audio Files</h4>
          <FileTrigger
            acceptedFileTypes={['audio/*']}
            onSelect={handleFileSelect}
          >
            <Button variant="primary">Select Audio</Button>
          </FileTrigger>
          <p className={styles.fileTypeInfo}>Accepts: audio/*</p>
        </div>

        <div className={styles.fileTypeGroup}>
          <h4>Video Files</h4>
          <FileTrigger
            acceptedFileTypes={['video/*']}
            onSelect={handleFileSelect}
          >
            <Button variant="secondary">Upload Video</Button>
          </FileTrigger>
          <p className={styles.fileTypeInfo}>Accepts: video/*</p>
        </div>
      </div>
    </DemoSection>
  );

  const renderMultipleFilesTab = () => (
    <DemoSection
      title="Multiple File Selection"
      description="FileTrigger supports both single and multiple file selection modes."
    >
      <div className={styles.multipleFilesGrid}>
        <div className={styles.multipleFileGroup}>
          <h4>Single File (Default)</h4>
          <FileTrigger onSelect={handleFileSelect}>
            <Button variant="primary">Select Single File</Button>
          </FileTrigger>
          <p className={styles.multipleFileInfo}>Allows selection of one file at a time</p>
        </div>

        <div className={styles.multipleFileGroup}>
          <h4>Multiple Files</h4>
          <FileTrigger
            allowsMultiple={true}
            onSelect={handleFileSelect}
          >
            <Button variant="secondary">Select Multiple Files</Button>
          </FileTrigger>
          <p className={styles.multipleFileInfo}>Allows selection of multiple files</p>
        </div>

        <div className={styles.multipleFileGroup}>
          <h4>Multiple Images</h4>
          <FileTrigger
            allowsMultiple={true}
            acceptedFileTypes={['image/*']}
            onSelect={handleFileSelect}
          >
            <Button variant="tertiary">Select Multiple Images</Button>
          </FileTrigger>
          <p className={styles.multipleFileInfo}>Multiple image files only</p>
        </div>

        <div className={styles.multipleFileGroup}>
          <h4>Directory Selection</h4>
          <FileTrigger
            acceptDirectory
            onSelect={handleFileSelect}
          >
            <Button variant="primary">Select Folder</Button>
          </FileTrigger>
          <p className={styles.multipleFileInfo}>Allows selection of entire directories</p>
        </div>
      </div>
    </DemoSection>
  );

  const renderEventsTab = () => (
    <DemoSection
      title="Events & File Information"
      description="FileTrigger provides comprehensive event handling and file information access."
    >
      <div className={styles.eventsDemo}>
        <div className={styles.eventControls}>
          <h4>Interactive File Selection</h4>
          <FileTrigger
            allowsMultiple={true}
            onSelect={(files: FileList | null) => {
              handleFileSelect(files);
              handleEvent('onSelect', files);
            }}
          >
            <Button variant="primary">Choose Files</Button>
          </FileTrigger>

          <button
            className={styles.clearButton}
            onClick={() => {
              setEventLog([]);
              setSelectedFiles([]);
            }}
          >
            Clear Log & Files
          </button>
        </div>

        <div className={styles.eventLog}>
          <h4>Event Log</h4>
          <div className={styles.logContainer}>
            {eventLog.length === 0 ? (
              <p className={styles.emptyLog}>No events yet. Select files using the button above.</p>
            ) : (
              <ul className={styles.logList}>
                {eventLog.map((event, index) => (
                  <li key={index} className={styles.logItem}>
                    {event}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className={styles.selectedFilesInfo}>
          <h4>Selected Files Information</h4>
          <div className={styles.filesList}>
            {selectedFiles.map((file, index) => (
              <div key={index} className={styles.fileItem}>
                <div className={styles.fileName}>{file.name}</div>
                <div className={styles.fileDetails}>
                  <span className={styles.fileSize}>
                    {(file.size / 1024).toFixed(2)} KB
                  </span>
                  <span className={styles.fileType}>{file.type || 'Unknown type'}</span>
                  <span className={styles.fileModified}>
                    {new Date(file.lastModified).toLocaleDateString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </DemoSection>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'variants':
        return renderVariantsTab();
      case 'sizes':
        return renderSizesTab();
      case 'fileTypes':
        return renderFileTypesTab();
      case 'multiple':
        return renderMultipleFilesTab();
      case 'events':
        return renderEventsTab();
      default:
        return renderVariantsTab();
    }
  };

  return (
    <div className={styles.demoContainer}>
      <div className={styles.demoHeader}>
        <h2 className={styles.componentTitle}>FileTrigger</h2>
        <p className={styles.componentDescription}>
          A file selection component built on React Aria Components that provides accessible file input functionality.
          Supports file type restrictions, multiple file selection, directory selection, and comprehensive event handling
          while maintaining consistent styling with your design system.
        </p>
      </div>

      <div className={styles.tabContainer}>
        <div className={styles.tabList}>
          <Tab activeTab={activeTab} tabKey="variants" onClick={setActiveTab}>
            Variants
          </Tab>
          <Tab activeTab={activeTab} tabKey="sizes" onClick={setActiveTab}>
            Sizes
          </Tab>
          <Tab activeTab={activeTab} tabKey="fileTypes" onClick={setActiveTab}>
            File Types
          </Tab>
          <Tab activeTab={activeTab} tabKey="multiple" onClick={setActiveTab}>
            Multiple Files
          </Tab>
          <Tab activeTab={activeTab} tabKey="events" onClick={setActiveTab}>
            Events
          </Tab>
        </div>
      </div>

      <div className={styles.tabContent}>
        {renderContent()}
      </div>
    </div>
  );
};

export default DemoFileTrigger;
