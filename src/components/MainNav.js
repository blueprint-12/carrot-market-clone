import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import LoginIcon from "@mui/icons-material/Login";
import IconButton from "@mui/material/IconButton";
import { Logout } from "../redux/modules/user";
import { useDispatch } from "react-redux";
import { getToken } from "../shared/local_storage";

const MainNav = (props) => {
  const { children } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const OutToLogin = () => {
    // dispatch(Logout)
    localStorage.clear();
    window.alert("로그아웃 완료");
    window.location.href = "/";
  };

  // const isCheck = getToken();

  // if (isCheck) {
  return (
    <NavCont>
      <div>
        <IconButton
          onClick={() => {
            //검색아이콘 -> 메인화면으로 이동(페이지가 없음)
            window.location.replace("/main");
          }}
        >
          <SearchOutlinedIcon style={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton
          //메뉴아이콘(카테고리일듯) -> 메인화면으로 이동(페이지가 없음)
          onClick={() => {
            navigate("/main");
          }}
        >
          <MenuOutlinedIcon style={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton onClick={OutToLogin}>
          <LogoutTwoToneIcon style={{ fontSize: "2rem" }} />
        </IconButton>
      </div>
    </NavCont>
  );
  // } else {
  //   return (
  //     <NavCont>
  //       <div>
  //         <IconButton
  //           onClick={() => {
  //             window.location.replace("/");
  //           }}
  //         >
  //           <span style={{ fontSize: "1.3rem" }}>login</span>
  //           <LoginIcon style={{ fontSize: "2rem" }} />
  //         </IconButton>
  //         <IconButton
  //           onClick={() => {
  //             navigate("/signup");
  //           }}
  //         >
  //           <span style={{ fontSize: "1.3rem" }}>signup</span>
  //           <EmojiPeopleIcon style={{ fontSize: "2rem" }} />
  //         </IconButton>
  //       </div>
  //     </NavCont>
  //   );
  // }
};

const NavCont = styled.div`
  width: 720px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  /* height: 50px; */
  background-color: white;
  border-bottom: 1px solid #bbb;
  padding: 8px 16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default MainNav;
