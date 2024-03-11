import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import UploadFile from "./UploadFile";


import KeepOrganized from "./KeepOrganized";
import AddReviewer from "./AddReviewer";
import { PortfolioForm } from "./PortfolioForm";


export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* This is my home page */}
      <Route path="/login" element={<Login />} /> {/* This is my login page */}
      <Route path="/register" element={<Register />} /> {/* This is my register page */}
      <Route path="/upload-file" element={<UploadFile />} /> {/* This is my upload file page */}
     
      

     <Route path="/create-new-portfolio" element={<PortfolioForm />} />{/* This is my create a new portfolio page */}


      <Route path="/keep-organized" element={<KeepOrganized />} /> {/* This is my keep organized page */}
      <Route path="/add-reviewer" element={<AddReviewer />} />   {/* This is my add reviewer page */}
      <Route path="*" element={<Home />} /> {/* Default route */}
    </Routes>
  );
}

