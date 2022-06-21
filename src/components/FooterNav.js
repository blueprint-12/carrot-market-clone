import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";

// import ListAltIcon from "@mui/icons-material/ListAlt";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

//footerNav + AddpageBtn

const BottomNavbar = (props) => {
  const navigate = useNavigate();

  return (
    <NavCont>
      <Div>
        <IconButton onClick={() => navigate("/")}>
          <HomeIcon style={{ fontSize: "2rem" }}></HomeIcon>
        </IconButton>
        <span>홈</span>
      </Div>

      {/* <Div>
          <IconButton>
            <ListAltIcon sx={{ fontSize: 30 }}></ListAltIcon>
          </IconButton>
          <Text>동네생활</Text>
        </Div> */}

      {/* <Div>
          <IconButton>
            <LocationOnOutlinedIcon
              sx={{ fontSize: 30 }}
            ></LocationOnOutlinedIcon>
          </IconButton>
          <Text>내 근처</Text>
        </Div> */}

      <Div>
        <IconButton
          onClick={() => {
            navigate("/chat");
          }}
        >
          <ChatBubbleOutlineIcon style={{ fontSize: "2rem" }} />
        </IconButton>
        <span>채팅</span>
      </Div>
      <Div>
        <IconButton onClick={() => window.location.replace("/mypage")}>
          <PersonOutlineOutlinedIcon
            style={{ fontSize: "2rem" }}
          ></PersonOutlineOutlinedIcon>
        </IconButton>
        <span>나의 당근</span>
      </Div>
    </NavCont>
  );
};

export default BottomNavbar;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const NavCont = styled.div`
  width: 720px;
  display: flex;
  height: 100px;
  background-color: white;
  border-top: 1px solid #bbb;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;
