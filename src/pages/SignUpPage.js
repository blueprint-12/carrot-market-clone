import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";

import Image from "../elements/Image";
const SignUpPage = () => {
  return (
    <AllCont>
      <ImgCont>
        <Img src="https://news.nateimg.co.kr/orgImg/hi/2020/11/06/0d78bb2f-2075-4ed8-afe3-79df75f67cad.jpg"></Img>
      </ImgCont>
      <Text>회원가입</Text>

      <Content>
        <Div>
          <Input type="text" placeholder="아이디를 입력해주세요" />
          <Button>아이디 중복 체크</Button>
        </Div>
        <Div>
          <Input type="text" placeholder="닉네임을 입력해주세요" />
          <Button>닉네임 중복 체크</Button>
        </Div>
        <Input2 type="text" placeholder="설정할 비밀번호를 입력해주세요" />

        <Input2 type="text" placeholder="비밀번호를 다시 입력해주세요" />

        <Button2 style={{ margin: "10px 10px 15px 10px" }}>회원가입</Button2>
      </Content>
    </AllCont>
  );
};

const AllCont = styled.div`
  width: 720px;
  display: flex;
  flex-direction: column;
  background-color: white;
  align-items: center;
  border-radius: 10px;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  font-size: 30px;
  font-weight: 500;
  padding: 10px;
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
const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Input = styled.input`
  width: 25%;
  height: 16px;
  padding: 14px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;
const Button = styled.button`
  width: 150px;
  /* height: 16px; */
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: orange;
  color: white;
  padding: 14px;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin: 10px;
  :hover {
    cursor: pointer;
    background: #ccc;
    transition: 0.5s ease;
  }
`;
const Input2 = styled.input`
  width: 350px;
  padding: 13px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;
const Button2 = styled.button`
  width: 380px;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: orange;
  color: white;
  padding: 16px;
  justify-content: center;
  align-items: center;
  margin: 10px;
  :hover {
    cursor: pointer;
    background: #ccc;
    transition: 0.5s ease;
  }
`;
export default SignUpPage;
