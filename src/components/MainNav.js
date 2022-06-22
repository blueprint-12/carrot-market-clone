import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import LogoutTwoToneIcon from "@mui/icons-material/LogoutTwoTone";
import IconButton from "@mui/material/IconButton";
import { Logout } from "../redux/modules/user";
import { useDispatch } from "react-redux";

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

  return (
    <NavCont>
      <div>
        <IconButton
          onClick={() => {
            window.location.replace("/search");
          }}
        >
          <SearchOutlinedIcon style={{ fontSize: "2rem" }} />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate("/category");
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
};

const NavCont = styled.div`
  width: 720px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 50px;
  background-color: white;
  border-bottom: 1px solid #bbb;
  padding: 0px 16px 8px 16px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export default MainNav;
