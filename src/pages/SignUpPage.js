import React from "react";
import styled from "styled-components";
const SignUpPage = () => {
  return (
    <>
      <Text>회원가입</Text>
      <Grid>
        <Input type="text" placeholder="아이디를 입력해주세요" />
        <Button>아이디 중복 체크</Button>
        <br />
        <Input type="text" placeholder="닉네임을 입력해주세요" />
        <Button>닉네임 중복 체크</Button>
        <br />
        <Input2 type="text" placeholder="설정할 비밀번호를 입력해주세요" />
        <br />
        <Input2 type="text" placeholder="비밀번호를 다시 입력해주세요" />
        <br />
        <Button2>회원가입</Button2>
      </Grid>
    </>
  );
};
const Grid = styled.div`
  height: 20px;
`;
const Text = styled.div`
  font-size: 30px;
  font-weight: bold;
  padding: 10px;
`;
const Input = styled.input`
  width: 150px;
  padding: 13px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;
const Button = styled.button`
  width: 150px;
  /* height: 45px; */
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background-color: orange;
  color: white;
  padding: 16px;
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
  width: 330px;
  padding: 13px;
  margin: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
`;
const Button2 = styled.button`
  width: 350px;
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
