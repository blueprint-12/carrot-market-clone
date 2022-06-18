// post.js

import axios from "axios";

// Actions
const LOAD = "post/LOAD";
const CREATE = "post/CREATE";
const UPDATE = "post/UPDATE";
const DELETE = "post/DELETE";

//카테고리 별로 로드
const LOADCATEGORY = "post/LOADCATEGORY";

//Initial State(초기값)
const initialState = {
  list: [
    {
      id: 1,
      title: "타이틀",
      price: 10000,
      image: "url",
      fileName: "",
      category: "",
      timestamp: "00:00:00",
    },
    {
      id: 2,
      title: "타이틀2",
      price: 10000,
      image: "url",
      fileName: "",
      category: "",
      timestamp: "00:00:00",
    },
    {
      id: 3,
      title: "타이틀3",
      price: 10000,
      image: "url",
      fileName: "",
      category: "",
      timestamp: "00:00:00",
    },
    {
      id: 4,
      title: "타이틀4",
      price: 10000,
      image: "url",
      fileName: "",
      category: "",
      timestamp: "00:00:00",
    },
    {
      id: 5,
      title: "타이틀5",
      price: 10000,
      image: "url",
      fileName: "",
      category: "",
      timestamp: "00:00:00",
    },
  ],
};

// Action Creators(액션 생성자)
export function loadPost(post_list) {
  console.log(post_list);
  return { type: LOAD, post_list };
}

export function createPost(post) {
  return { type: CREATE, post };
}

export function updatePost(post) {
  return { type: UPDATE, post };
}

export function removePost(post) {
  return { type: DELETE, post };
}

//middlewares (미들웨어)
//리덕스 청크는 액션(객체)을 리턴하는 것이 아니라 함수를 리턴한다.
//로드 포스트 백엔드(서버로부터 데이터 가져오는 함수)
//리턴되는 함수는 인자로 dispatch를 받는데 그래야 어떤 액션을 일으킬 수 있기 떄문!
export const loadPostDB = () => {
  return function (dispatch) {
    axios.get(`서버주소`).then((res) => {
      console.log(res.data);
      dispatch(loadPost(res.data.postList));
    });
  };
};

//리듀서
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "post/LOAD": {
      console.log(action.post_list);
      return { list: action.post_list };
    }
    default:
      return state;
  }
}

//미들웨어 (중간다리)
// Reducer
// export function getWidget() {
//   return (dispatch) =>
//     get("/widget").then((widget) => dispatch(updateWidget(widget)));
// }
