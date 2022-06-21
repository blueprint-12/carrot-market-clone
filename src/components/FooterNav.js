import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import Grid from "../elements/Grid";
import Text from "../elements/Text";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/material/IconButton";

import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

// import ListAltIcon from "@mui/icons-material/ListAlt";
// import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

const BottomNavbar = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid
        height="11%"
        fixed
        bottom="0px"
        bg="white"
        border_top=" 1px solid #bbb"
        padding="8px 16px"
        space_around
      >
        <Div>
          <IconButton onClick={() => navigate("/")}>
            <HomeIcon sx={{ fontSize: 30 }}></HomeIcon>
          </IconButton>
          <Text>홈</Text>
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
            <ChatBubbleOutlineIcon
              sx={{ fontSize: 30 }}
            ></ChatBubbleOutlineIcon>
          </IconButton>
          <Text>채팅</Text>
        </Div>

        <Div>
          <IconButton onClick={() => window.location.replace("/mypage")}>
            <PersonOutlineOutlinedIcon
              sx={{ fontSize: 30 }}
            ></PersonOutlineOutlinedIcon>
          </IconButton>
          <Text>나의 당근</Text>
        </Div>
      </Grid>
    </>
  );
};

export default BottomNavbar;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
