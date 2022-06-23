import { style } from "@mui/system";
import React, { useRef, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { idCheck, nickCheck, pwCheck } from "../shared/regex";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Image from "../elements/Image";
import { current } from "@reduxjs/toolkit";
import { Link, useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  //아이디 체크 (공백이거나 형식에 부합x => 알림창)
  const sameuserCheck = () => {
    if (username === "" || idCheck(username) === false) {
      return window.alert("아이디 양식을 지켜주세요!");
    }
    console.log(idCheck(username));

    //axios로 아이디 정보 중복 확인
    //에러 => 아이디 중복이라는 메세지
    axios({
      method: "get",
      url: `http://3.39.253.203/user/username/${username}`,
      method: "get",
      url: `http://3.39.253.203/user/username/${username}`,
    })
      .then((response) => {
        console.log(response.data);
        if (response.data.response) {
          alert(response.data.message);
        } else {
          alert(response.data.message);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  //유저닉네임 중복 체크 기능
  const samenickCheck = () => {
    if (nickCheck === "" || nickCheck(nickname) === false) {
      return alert("닉네임 양식을 지켜주세요!");
    }

    console.log(nickCheck(nickname));

    //axios로 닉네임 정보 중복 확인
    //에러 => '닉네임 중복'이라는 메세지
    axios({
      method: "get",
      url: `http://3.39.253.203/user/nickname/${nickname}`,
    })
      .then((response) => {
        console.log(response);
        if (response.data) {
          window.alert("닉네임 확인이 완료되었습니다!");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  // 회원가입 체크
  const signupCheck = () => {
    if (
      username === "" ||
      nickname === "" ||
      password === "" ||
      passwordCheck === ""
    ) {
      window.alert("모든 항목을 입력해주세요!");
      return;
    } //비밀번호와 비밀번호 확인이 다를 때
    if (password !== passwordCheck) {
      window.alert("비밀번호가 서로 다릅니다!");
      return;
    } //비밀번호 형식이 다를 떄
    if (pwCheck(password) === false) {
      window.alert(
        "비밀번호는 4글자 이상 20글자 이하의 영문과 숫자 조합으로 입력해주세요!"
      );
      return;
    }
    console.log(pwCheck(password));

    console.log(username, nickname, password, passwordCheck);

    // //axios로 회원가입 정보 확인
    axios({
      method: "post",
      url: `http://3.39.253.203/user/signup`,
      data: {
        username: username,
        nickname: nickname,
        password: password,
        passwordCheck: passwordCheck,
      },
    })
      .then((response) => {
        console.log(response);
        if (response.data.response === true) {
          window.alert("회원가입이 완료되었습니다!");
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <AllCont>
      <ImgCont>
        <div
          style={{
            width: "33%",
            display: "flex",
            marginLeft: "10px",
            boxSizing: "border-box",
          }}
        >
          <ArrowBackIosIcon />
        </div>
        <Img src="https://news.nateimg.co.kr/orgImg/hi/2020/11/06/0d78bb2f-2075-4ed8-afe3-79df75f67cad.jpg"></Img>
      </ImgCont>
      <Text>회원가입</Text>

      <Content>
        <Div>
          <Input
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            type="text"
            placeholder="영문 + 숫자로 4~20글자 조합"
          />
          <Button onClick={sameuserCheck}>아이디 중복 체크</Button>
        </Div>

        <Div>
          <Input
            onChange={(e) => {
              setNickname(e.target.value);
            }}
            type="text"
            placeholder="영문 + 숫자로 4~20글자 조합"
          />
          <Button onClick={samenickCheck}>닉네임 중복 체크</Button>
        </Div>
        <Input2
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          type="password"
          placeholder="비밀번호는 영문 + 숫자로 4~20글자 조합"
        />
        <Input2
          onChange={(e) => {
            setPasswordCheck(e.target.value);
          }}
          type="password"
          placeholder="비밀번호를 다시 입력해주세요"
        />
        <Button2
          onClick={signupCheck}
          style={{ margin: "10px 10px 15px 10px" }}
        >
          회원가입
        </Button2>
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
  /* justify-content: space-between; */
`;

const Img = styled.img`
  width: 33%;
  height: 50px;
  margin-left: -10px;
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
