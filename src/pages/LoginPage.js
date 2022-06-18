import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const LoginPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Text>로그인</Text>
      <Input type="text" placeholder="아이디를 입력해주세요" />
      <br />
      <Input type="text" placeholder="비밀번호를 입력해주세요" />
      <br />
      <Button>로그인</Button>
      <Button2
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </Button2>
    </>
  );
};
const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
`;
const Input = styled.input`
  width: 330px;
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
