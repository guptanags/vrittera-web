import React, { useState } from 'react';

const ResumeUpload: React.FC = () => {
  const [message, setMessage] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);

  // Handle file input or drag-and-drop upload
  const handleUpload = (files: FileList | null) => {
    const file = files?.[0];
    if (!file) {
      setMessage('Please select or drop a file.');
      return;
    }
    if (!file.type.match('application/pdf') && !file.type.match('text/plain')) {
      setMessage('Please upload a PDF or TXT file.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setMessage('File size must be less than 5MB.');
      return;
    }
    setMessage('Upload successful! Processing...');
    // Placeholder for server submission
    const formData = new FormData();
    formData.append('resume', file);
    // Uncomment and replace with actual API endpoint
    // axios.post('/api/upload', formData)
    //   .then(response => setMessage('Analysis complete! Check your dashboard.'))
    //   .catch(error => setMessage('Error processing upload.'));
  };

  // Handle form submission (file input)
  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const fileInput = document.getElementById('resumeUpload') as HTMLInputElement;
    handleUpload(fileInput.files);
  };

  // Drag-and-drop event handlers
  const handleDrag = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.type === 'dragenter' || event.type === 'dragover') {
      setDragActive(true);
    } else if (event.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setDragActive(false);
    handleUpload(event.dataTransfer.files);
  };

  return (
    <section className="resume-upload">
      <h2>Upload Your Resume</h2>
      <form className="upload-form" onSubmit={handleFormSubmit}>
        <div
          className={`drop-zone ${dragActive ? 'drag-active' : ''}`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <label htmlFor="resumeUpload">Select or drag your resume (PDF or TXT,  &lt; 5MB):</label>
          <input
            type="file"
            id="resumeUpload"
            name="resume"
            accept=".pdf,.txt"
            onChange={(e) => handleUpload(e.target.files)}
          />
          <p>Drag and drop your file here or click to browse</p>
        </div>
        <button type="submit" className="cta-button">Analyze Now</button>
        {message && <div className="message" style={{ color: message.includes('successful') ? '#00BFFF' : '#FF0000' }}>{message}</div>}
      </form>
    </section>
  );
};

export default ResumeUpload;