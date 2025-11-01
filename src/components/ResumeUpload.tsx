import React, { useState } from 'react';

const ResumeUpload: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleUpload = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) { setMessage('Please select or drop a file.'); return; }
    if (!file.type.match('application/pdf') && !file.type.match('text/plain')) {
      setMessage('Please upload a PDF or TXT file.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setMessage('File size must be less than 5MB.');
      return;
    }
    setMessage('Upload successful! Processing...');
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault(); setDragActive(false);
    handleUpload(e.dataTransfer.files);
  };

  return (
    <section className="resume-upload">
      <h2>Upload Your Resume</h2>
      <form className="upload-form" onSubmit={(e) => { e.preventDefault(); handleUpload((e.currentTarget.elements.namedItem('resume') as HTMLInputElement).files); }}>
        <div
          className={`drop-zone ${dragActive ? 'drag-active' : ''}`}
          onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
          onDragLeave={() => setDragActive(false)}
          onDrop={handleDrop}
        >
          <label htmlFor="resumeUpload">Select or drag your resume (PDF or TXT, &lt;5MB):</label>
          <input type="file" id="resumeUpload" name="resume" accept=".pdf,.txt" onChange={(e) => handleUpload(e.target.files)} />
          <p>Drag and drop your file here or click to browse</p>
        </div>
        <button type="submit" className="cta-button">Analyze Now</button>
        {message && <div className="message" style={{ color: message.includes('successful') ? '#00BFFF' : '#FF0000' }}>{message}</div>}
      </form>
    </section>
  );
};

export default ResumeUpload;