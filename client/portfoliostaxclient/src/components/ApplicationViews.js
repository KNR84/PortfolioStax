import React from "react";
import { Route, Routes } from "react-router-dom";
import Hello from "./Hello";
import Login from "./Login";
import Register from "./Register";



export default function ApplicationViews() {

 return(
      <Routes>
        <Route path="/" element={<Hello />} />


        <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
       
        
      </Routes>
   );
 
}