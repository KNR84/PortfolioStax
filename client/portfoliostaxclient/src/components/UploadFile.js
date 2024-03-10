// import React, { useState } from 'react';

// function UploadFile() {
//   const [filePath, setFilePath] = useState('');

//   const handleFileChange = (e) => {
//     const path = URL.createObjectURL(e.target.files[0]);
//     setFilePath(path);
//     alert(path)
//   };

//   const handleButtonClick = () => {
//     // Trigger file input
//     document.getElementById('fileInput').click();
//   };

//   return (
//     <div>
//       <input
//         type="file"
//         id="fileInput"
//         style={{ display: 'none' }}
//         onChange={handleFileChange}
//       />
//       <button onClick={handleButtonClick}>Upload File</button>
//       <p>File Path: {filePath}</p>
//     </div>
//   );
// }

// export default UploadFile;

/////--------------------------------------------^^^Barry's site

// import React, { useState } from 'react';
// import axios from 'axios';


// function UploadFile() {

//   const [file, setFile] = useState()

//   function handleChange(event) {
//     setFile(event.target.files[0])
//   }

//   function handleSubmit(event) {
//     event.preventDefault()
//     const url = 'http://localhost:3000/uploadFile';
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('fileName', file.name);
//     const config = {
//       headers: {
//         'content-type': 'multipart/form-data',
//       },
//     };
//     axios.post(url, formData, config).then((response) => {
//       console.log(response.data);
//     });

//   }

//   return (
//     <div className="App">
//         <form onSubmit={handleSubmit}>
//           <h1>React File Upload</h1>
//           <input type="file" onChange={handleChange}/>
//           <button type="submit">Upload</button>
//         </form>
//     </div>
//   );
// }

// export default UploadFile;

//------------------------------------------- Working sort of


// import React, {useState} from 'react';
// import axios from 'axios';

// function UploadFile() {

//   const [file, setFile] = useState();
//   const [uploadedFile, setUploadedFile] = useState();
//   const [error, setError] = useState();

//   function handleChange(event) {
//     setFile(event.target.files[0]);
//   }
  
//   function handleSubmit(event) {
//     event.preventDefault();
//     const url = 'http://localhost:3000/uploadFile'; // <<< UPDATE THIS TO MATCH YOUR SERVER URL (PROBABLY 5001)
//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('fileName', file.name);
//     const config = {
//       headers: {
//         'content-type': 'multipart/form-data',
//       },
//     };
//     axios.post(url, formData, config)
//       .then((response) => {
//         console.log(response.data);
//         setUploadedFile(response.data.file);
//       })
//       .catch((error) => {
//         console.error("Error uploading file: ", error);
//         setError(error);
//       });
//   }

//   return (
//     <div className="App">
//         <form onSubmit={handleSubmit}>
//           <h1>React File Upload</h1>
//           <input type="file" onChange={handleChange}/>
//           <button type="submit">Upload</button>
//         </form>
//         {uploadedFile && <img src={uploadedFile} alt="Uploaded content"/>}
//         {error && <p>Error uploading file: {error.message}</p>}
//     </div>
//   );
// }

// export default UploadFile;


//--help from ChatGPT below this line

import React, { useState } from 'react';
import axios from 'axios';

function UploadFile() {
  const [file, setFile] = useState(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [error, setError] = useState(null);

  function handleChange(event) {
    setFile(event.target.files[0]);
  }

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://localhost:5001/api/FileUpload/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setUploadedFile(response.data.fileUrl);
    } catch (error) {
      console.error('Error uploading file:', error);
      setError(error.message);
    }
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>React File Upload</h1>
        <input type="file" onChange={handleChange} />
        <button type="submit">Upload</button>
      </form>
      {uploadedFile && <img src={uploadedFile} alt="Uploaded content" />}
      {error && <p>Error uploading file: {error}</p>}
    </div>
  );
}

export default UploadFile;
