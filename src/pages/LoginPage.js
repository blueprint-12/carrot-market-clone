import React, { useRef } from "react";
import styled from "styled-components";
import { idCheck, pwCheck } from "../shared/regex";

import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { setNick, setToken } from "../shared/local_storage";

// import { LoginSuccessDB } from "../redux/modules/user";

const LoginPage = () => {
  const navigate = useNavigate();

  const id_ref = useRef("");
  const pw_ref = useRef("");
  console.log(id_ref.current.value, pw_ref.current.value);

  // function idCheck(id) {
  //   const regExp = /^[A-Za-z0-9]{4,20}$/;
  //   console.log(id);
  //   if (regExp.test(id)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
  // 요청
  const loginHandler = async (e) => {
    e.preventDefault();

    // console.log(id_ref.current.value, pw_ref.current.value);

    //유효성 검사
    const id = id_ref.current.value;
    const pw = pw_ref.current.value;
    //어차피 required 라서 별도의 alert는 설정 X
    if (id === "" || pw === "") {
      return;
    }
    console.log(idCheck(id));
    if (idCheck(id) === false) {
      return window.alert("아이디를 확인해주세요!");
    }
    if (pwCheck(pw) === false) {
      return window.alert("패스워드를 확인해주세요!");
    }

    let data = {
      username: id,
      password: pw,
    };

    await axios
      .post("http://3.39.253.203/user/login", data)
      .then((res) => {
        const TOKEN = res.headers?.authorization;
        const NICK_NAME = res.data.nickname;
        console.log(TOKEN, NICK_NAME);
        if (res.data.response === true) {
          window.alert(res.data.message);
          setToken(TOKEN);
          setNick(NICK_NAME);
          window.location.href = "/main";
        } else {
          window.alert(res.data.message);
          id_ref.current.value = "";
          pw_ref.current.value = "";
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // navigate("/main");
  };

  return (
    // <Div as ="form" className="loginForm" onSubmit={handleSubmit(onSubmit)}>
    //   <Div>
    //     <ImgCont>
    //       <Img src="https://news.nateimg.co.kr/orgImg/hi/2020/11/06/0d78bb2f-2075-4ed8-afe3-79df75f67cad.jpg"></Img>
    //     </ImgCont>
    //     <Title>로그인</Title>
    //     <Input type="text" placeholder="아이디를 입력해주세요" name="username"
    //     {...register("username",{required: true, minLength:4, maxLength:20})}
    //     />
    //     <Input type="password" placeholder="비밀번호를 입력해주세요" name="password"
    //     {...register("password",{required: true, minLength:4, maxLength:20})} />
    //   </Div>
    //   <Div2>
    //     <Button type="submit" onClick={handleSubmit(onSubmit)}>로그인</Button>
    //     <Link to="/signup">
    //       <Button2>회원가입</Button2>
    //     </Link>
    //   </Div2>
    // </Div>
    <div>
      <Div onSubmit={loginHandler}>
        <ImgCont>
          <Img src="https://news.nateimg.co.kr/orgImg/hi/2020/11/06/0d78bb2f-2075-4ed8-afe3-79df75f67cad.jpg"></Img>
        </ImgCont>
        <Title>로그인</Title>
        <Input
          type="text"
          required
          placeholder="아이디를 입력해주세요"
          ref={id_ref}
        />
        <Input
          type="password"
          required
          placeholder="비밀번호를 입력해주세요"
          ref={pw_ref}
        />

        <Div2>
          {/* <Button onClick={loginHandler}>로그인</Button> */}
          <Button>로그인</Button>
          <Link to="/signup">
            <Button2>회원가입</Button2>
          </Link>
        </Div2>
      </Div>
    </div>
  );
};

const Div = styled.form`
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
