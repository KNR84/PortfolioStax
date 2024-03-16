// //--working code starts here__________________________________________

// import React, { useState } from 'react';
// import axios from 'axios';

// function UploadFile() {
//   const [file, setFile] = useState(null);
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [error, setError] = useState(null);

//   function handleChange(event) {
//     setFile(event.target.files[0]);
//   }

//   async function handleSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       const response = await axios.post('https://localhost:5001/api/NewPortfolioUpload/upload?id=1', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data'
//         }
//       });

//       setUploadedFile(response.data.fileUrl);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//       setError(error.message);
//     }
//   }

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <h1>React File Upload</h1>
//         <input type="file" onChange={handleChange} />
//         <button type="submit">Upload</button>
//       </form>
//       {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
//       {error && <p>Error uploading file: {error}</p>}
//     </div>
//   );
// }



// code after styling
import React, { useState } from 'react';
import axios from 'axios';
import './UploadFile.css'; // Import CSS file for styling

function UploadFile() {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(null);
  const [fileChosen, setFileChosen] = useState(false); // Track whether a file has been chosen

  function handleChange(event) {
    setFile(event.target.files[0]);
    setFileChosen(true); // Set fileChosen to true when a file is chosen
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://localhost:5001/api/NewPortfolioUpload/upload?id=1', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setUploadedFile(response.data.fileUrl);
      // Redirect upon successful upload
      window.location.href = '/portfolioItem/list';
    } catch (error) {
      console.error('Error uploading file:', error);
      setError(error.message);
    }
  }

  return (
    <div className="App">
      <h1>Upload your file</h1>
      <form className="UploadForm" onSubmit={handleSubmit}>
        <input type="file" id="fileInput" onChange={handleChange} />
        <label htmlFor="fileInput">Choose File</label>
        {fileChosen && <span style={{ color: 'green', marginLeft: '5px' }}>&#10004;</span>} {/* Display checkmark when a file is chosen */}
        <button type="submit">Upload</button>
      </form>
      {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
      {error && <p>Error uploading file: {error}</p>}
    </div>
  );
}

export default UploadFile;










