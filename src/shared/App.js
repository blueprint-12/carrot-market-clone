import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

//components

// pages
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import Login from "../pages/Login";
import PostEdit from "../pages/PostEdit";
import PostWrite from "../pages/PostWrite";
import SignUp from "../pages/SignUp";

function App() {
  return (
    <div className="App">
      
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/write" element={<PostWrite />} />
        <Route path="/detail/:postId" element={<Detail />} />
        <Route path="/post/edit/:postId" element={<PostEdit />} />
      </Routes>
    </div>
  );
}

export default App;
