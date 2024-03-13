import React from "react";
import Login from "./Loginpage/Login";
import Registerpage from "./Loginpage/Registerpage";
import Register from "./Caregiver/Register";
import Signup from "./Ragisterpage/Signup";
import Jobcard from "./Caregiver/Jobcard";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Seekarlogin from "./seekersignup/Seekarpostform";
import Signup1 from "./Ragisterpage/Signup1";
import HowItWork from "./Navigationpage/Howitwork";

function MyRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/registerpage" element={<Registerpage />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/jobcard" element={<Jobcard />} />
          <Route exact path="/Seekarlogin" element={<Seekarlogin />} />
          <Route exact path="/Signup1" element={<Signup1/>} />
          <Route exact path="/Howitwork" element={<HowItWork/>} />




        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default MyRoutes;
