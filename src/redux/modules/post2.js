import axios from "axios";

const initialState = {
    list: [],
};

const token = localStorage.getItem("token");

const LOAD = "post/LOAD";
const ADD = "post/ADD";
const UPDATE = "post/UPDATE";
const DELETE = "post/DELETE";
const LOADONE = "post/LOADONE";
const LOADCATEGORY = "post/LOADCATEGORY";



  
  export function addPost(post) {
    return { type: ADD, post };
  }
  


  export const addPostDB = (post) => {
    return function (dispatch) {
      const formData = new FormData();
  
      const infor = {
        title: post.title,
        category: post.category,
        contents: post.contents,
      };

    };
};
