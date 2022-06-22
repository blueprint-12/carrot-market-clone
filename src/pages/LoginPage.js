import React from "react";
import styled from "styled-components";
import axios from "axios";

import { Link } from "react-router-dom";
const LoginPage = () => {
  
  const username = React.useRef();
  const password = React.useRef();

  // const loginHandler = () => {
  //   axios({
  //     method:"post",
  //     url:`/user/login`,
  //     data:{
  //       username: username.current.value,
  //       password: password.current.value
  //     }
  //   })
  //   .then((response)=>{
  //     if(response.data.result === true) {

  //     }
  //   })
  // };

  return (
    <Div>
      <Div>
        <ImgCont>
          <Img src="https://news.nateimg.co.kr/orgImg/hi/2020/11/06/0d78bb2f-2075-4ed8-afe3-79df75f67cad.jpg"></Img>
        </ImgCont>
        <Title>로그인</Title>
        <Input ref={username} type="text" placeholder="아이디를 입력해주세요" />
        <Input ref={password} type="text" placeholder="비밀번호를 입력해주세요" />
      </Div>
      <Div2>
        <Button>로그인</Button>
        <Link to="/signup">
          <Button2>회원가입</Button2>
        </Link>
      </Div2>
    </Div>
  );
};

const Div = styled.div`
  width: 720px;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
`;
const Div2 = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ImgCont = styled.div`
  width: 55%;
  display: flex;
  border-bottom: 1px solid #bbb;
  align-items: center;
  justify-content: center;
`;

const Img = styled.img`
  width: 120px;
  height: 50px;
`;
const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
  padding: 10px;
`;
const Input = styled.input`
  width: 40%;
  padding: 13px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;
const Button = styled.button`
  width: 150px;
  height: 50px;
  padding: 16px;
  justify-content: center;
  text-align: center;
  margin: 10px;
  color: white;
  background-color: orange;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  :hover {
    cursor: pointer;
    background: #ccc;
    transition: 0.5s ease;
  }
`;
const Button2 = styled.button`
  width: 150px;
  height: 50px;
  padding: 16px;
  justify-content: center;
  text-align: center;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  color: orange;
  :hover {
    cursor: pointer;
    background: #ccc;
    transition: 0.5s ease;
  }
`;
export default LoginPage;
