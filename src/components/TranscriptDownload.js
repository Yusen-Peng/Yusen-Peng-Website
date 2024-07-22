import React from 'react';

const TranscriptDownload = () => {
  
    const downloadResume = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    // Set the href to the resume file path
    link.href = '/transcript_file.pdf';
    // Set the download attribute with a value (filename)
    link.download = 'yusenp_transcript.pdf';
    // Append the link to the body
    document.body.appendChild(link);
    // Programmatically click the link to trigger the download
    link.click();
    // Remove the link from the document
    document.body.removeChild(link);
  };

  return (
    <div className='Resume-section'>
        <header className='Research-heading'>transcript</header>
        <img className='Resume-cover' src='/transcript.png' alt=''/>
        <button className='Resume-button' onClick={downloadResume}><p>Download</p></button> 
    </div>
  );
}

export default TranscriptDownload;
