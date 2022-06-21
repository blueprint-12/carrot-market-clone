import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//components

// pages
import DetailPage from "../pages/DetailPage";
import MainPage from "../pages/MainPage";
import LoginPage from "../pages/LoginPage";
import PostEditPage from "../pages/PostEditPage";
// import PostWritePage from "../pages/PostWritePage";
import PostWritePage2 from "../pages/PostWritePage2";
import SignUpPage from "../pages/SignUpPage";

import { useSelector } from "react-redux";



function App() {
  // const dispatch = useDispatch();
  // const token = localStorage.getItem("token");

  const Check = useSelector((state) => state.user.isLogin);
  
  console.log(Check);
  return (
    <div className="App">
      <Routes>
        { !Check 
        ? <>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        </>
        :
        <>
        <Route path="/main" element={<MainPage />} />
        <Route path="/postwrite" element={<PostWritePage2 />} />
        <Route path="/detail/:id" element={<DetailPage />} />
        <Route path="/post/edit/:id" element={<PostEditPage />} />
        </>
}
      </Routes>
    </div>
  );
}

export default App;
