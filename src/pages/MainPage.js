import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import MainNav from "../components/MainNav";
import FooterNav from "../components/FooterNav";

// IconButton API 사용

//패키지 추가설치(@material-ui/icons) 후 해결 / ->패키지 삭제 후 재설치하면 되는 경우 있음
//카테고리 경로 페이지 없음

import PostList from "../components/PostList";
import AddPageBtn from "../components/AddPageBtn";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const is_login = useSelector((state) => state.user.is_login);

  // if (is_login) {  }
  return (
    <Div>
      {/* <Div> */}
      <MainNav />
      <PostList />
      <Div>
        <FooterNav />
        <AddPageBtn />
      </Div>
      {/* </Div> */}
    </Div>
  );
};

const Div = styled.div`
  width: 720px;

  /* border-radius: 10px ; */
`;
export default MainPage;
