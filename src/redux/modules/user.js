import axios from "axios";

const initialState = {
  isLogin: false,
  nickname: "",

}

// 유저Actions
const LOG_IN = "LOGIN";
const LOG_OUT = "LOGOUT";
//초기값 세팅 하고 여기에 아이디랑 토큰값 is_login을 true로 설정



// Action Creators
export function LoginSuccess(userinfo) {
  return { type: LOG_IN, userinfo};
}

export function Logout() {
  return { type: LOG_OUT};
}

export const LoginSuccessDB = (userinfo) => {
  return function(dispatch) {
    axios
        .post("http://3.39.253.203/user/login", userinfo)
        .then(function (response) {
          
          localStorage.setItem("access_token", response.headers.authorization);
          //localStorage.setItem("nickname", response.nickname);
          //console.log(response)
          dispatch(LoginSuccess(response.data))
          alert("success");
          
          
        })
        .catch(function (error) {
         // console.log(error);
          alert("Login Fail");
        });
  }
}

// 액션 크리에이터 + 비동기 처리

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOG_IN: {
      return {...state, isLogin:true, nickname: action.userinfo.nickname };
      //return {isLogin: action.access}
    }
    case LOG_OUT: {
      return {...state, isLogin: false, nickname: ""};
    }
    default:
      return state;
  }
}


