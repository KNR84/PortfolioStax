import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

import UploadFile from "./UploadFile";

import KeepOrganized from "./KeepOrganized";
import AddReviewer from "./AddReviewer";

import { PortfolioForm } from "./PortfolioForm";
import PortfolioList from "./PortfolioList";
import { EditPortfolio } from "./PortfolioEdit";

import { StudentForm } from "./StudentForm";
import StudentList from "./StudentList";
import { EditStudent } from "./StudentEdit";
import { PortfolioItemForm } from "./PortfolioItemForm";
import { EditPortfolioItem } from "./PortfolioItemEdit";
import PortfolioItemList from "./PortfolioItemList";


export default function ApplicationViews() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* This is my home page */}
      <Route path="*" element={<Home />} /> {/* Default route */}
      <Route path="/login" element={<Login />} /> {/* This is my login page */}
      <Route path="/register" element={<Register />} /> {/* This is my register page */}
      
      
      <Route path="/upload/file" element={<UploadFile />} /> {/* This is my upload file page */}
     
      

     <Route path="/create/new/portfolio" element={<PortfolioForm />} />{/* This is my create a new portfolio page */}
     <Route path="/portfolio/list" element={<PortfolioList />} />
     <Route path="/portfolios/edit/:id" element={<EditPortfolio />} />

     <Route path="/create/new/student" element={<StudentForm />} />{/* This is my create a new student page */}
     <Route path="/student/list" element={<StudentList/>} />
     <Route path="/students/edit/:id" element={<EditStudent />} />

     <Route path="/create/new/portfolioItem" element={<PortfolioItemForm />} />{/* This is my create a new portfolio item page */}
     <Route path="/portfolioItem/list" element={<PortfolioItemList/>} />
     <Route path="/portfolioItems/edit/:id" element={<EditPortfolioItem />} />


      <Route path="/keep/organized" element={<KeepOrganized />} /> {/* This is my keep organized page */}
     
      <Route path="/add/reviewer" element={<AddReviewer />} />   {/* This is my add reviewer page */}
      
    </Routes>
  );
}

