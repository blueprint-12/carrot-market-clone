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

import { useSelector, useDispatch } from "react-redux";

// import { actionCreators as userActions } from "../redux/modules/user";
// import { actionCreators as postActions } from "../redux/modules/post";
import { useEffect } from "react";
import { useParams } from "react-router";

function App() {
  // const dispatch = useDispatch();
  // const token = localStorage.getItem("token");

  useEffect(() => {
    // if (token) {
    //   dispatch(userActions.isLogin(token));
    // }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/postwrite" element={<PostWritePage2 />} />
        <Route path="/detail" element={<DetailPage />} />
        {/* <Route path="/detail/:postId" element={<DetailPage />} /> */}
        <Route path="/post/edit/:postId" element={<PostEditPage />} />
      </Routes>
    </div>
  );
}

export default App;
