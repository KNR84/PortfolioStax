// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import Hello from "./Hello";
// import Login from "./Login";
// import Register from "./Register";
// import Portfolio from "./Portfolio";
// import UploadFile from "./UploadFile";

// export default function ApplicationViews() {
//   return (
//     <Routes>
//       <Route path="/" element={<Hello />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//       <Route path="/portfolio-year-selector" element={<Portfolio />} />
//       <Route path="/upload-file" element={<UploadFile />} />
//     </Routes>
//   );
// }


import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Portfolio from "./Portfolio";
import UploadFile from "./UploadFile";

export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* This is your home page */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/portfolio-year-selector" element={<Portfolio />} />
      <Route path="/upload-file" element={<UploadFile />} />
      <Route path="*" element={<Home />} /> {/* Default route */}
    </Routes>
  );
}

