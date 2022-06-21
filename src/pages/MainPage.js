import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import Grid from "../elements/Grid";
import MainNav from "../components/MainNav";
import FooterNav from "../components/FooterNav";
import Text from "../elements/Text";

// IconButton API 사용
import IconButton from "@mui/material/IconButton";

// 아이콘 경로 예시대로 실행 X @material-ui/icons/아이콘명 으로해야 작동
// ->패키지 추가설치(@material-ui/icons) 후 해결
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
//카테고리 경로 페이지 없음

import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import PostList from "../components/PostList";

const MainPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const is_login = useSelector((state) => state.user.is_login);

  // if (is_login) {  }
  return (
    <Div>
      <Grid bg="#ccc">
        <MainNav>
          {/* <Text bold size="150%" padding="0 0 0 10px">
            {userLocation}
          </Text> */}
          <div>
            <IconButton
              onClick={() => {
                window.location.replace("/search");
              }}
            >
              <SearchOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                navigate("/category");
              }}
            >
              <MenuOutlinedIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                // dispatch(userActions.logout());
              }}
            >
              <LogoutTwoToneIcon />
            </IconButton>
          </div>
        </MainNav>

        <PostList />
        <Fab
          style={{
            backgroundColor: "#FF9F57",
            color: "white",
            position: "fixed",
            bottom: "13%",
            right: "10%",
          }}
          onClick={() => {
            navigate("/write");
          }}
        >
          <AddIcon />
        </Fab>
        <FooterNav />
      </Grid>
    </Div>
  );
};

const Div = styled.div`
  max-width: 720px;
`;
export default MainPage;
