import React from 'react';
import {Routes, Route} from "react-router-dom";
import './App.css';

//components
import Header from "../components/header";
// pages
import Detail from '../pages/detail';
import Main from "../pages/main";
import Login from "../pages/login";
import PostEdit from "../pages/postedit";
import PostWrite from "../pages/postwrite";
import SignUp from "../pages/signup";






function App() {
  return ( 
    <div className="App">
      <Header/>
      <p>hi</p>
      <Routes>
        <Route path="/" element={<Login/>}/> 
        <Route path="/signup" element={<SignUp/>}/> 
        <Route path="/main"  element={<Main/>} /> 
        <Route path="/write" element={<PostWrite/>}/>
        <Route path="/detail/:postId" element={<Detail/>}/>          
        <Route path="/post/edit/:postId" element={<PostEdit/>}/> 
        
        
        
      </Routes>
    </div>
  )
}

export default App;
