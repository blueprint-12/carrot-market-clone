import React, { useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

import { deletePostDB, loadDetailDB } from "../redux/modules/post";
import Modal from "../components/Modal";
import "../elements/modal.css";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";

const DetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // //파라미터로 postID값 가져오기
  const {id} = useParams();
  const {title, price, image, category, timestamp, comment, nickname} = useSelector((state) => state.post.list);
  
  const currentUser = useSelector((state) => state?.user.nickname);
  const sameUser = nickname === currentUser;
  //console.log(sameUser);

  const [modalOpen, setModalOpen] = React.useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    dispatch(loadDetailDB(id));
  }, []);

  

  
  // const [modalOpen, setModalOpen] = React.useState(false);
  // const openModal = () => {
  //   setModalOpen(true);
  // };
  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <DetailCont>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Div>
          <ArrowBackIosIcon
            variant="text"
            style={{
              position: "relative",
              left: "20px",
              top: "12px",
              color: "lightgrey",
              fontSize: "1.6em",
              lineHeight: "0.5",
            }}
            onClick={() => navigate(-1)}
          ></ArrowBackIosIcon>
          <HomeIcon
            variant="text"
            style={{
              position: "relative",
              left: "50px",
              top: "12px",
              fontSize: "1.9em",
              color: "lightgrey",
              lineHeight: "2.3",
            }}
            onClick={() => navigate("/main")}
          ></HomeIcon>
        </Div>
        {/* 모달 */}
        { sameUser ?
        <React.Fragment>
          <Button
            variant="text"
            style={{
              color: "lightgrey",
              zIndex: "9999",
              lineHeight: "3",
              backgroundColor: "transparent",
            }}
            onClick={openModal}
          >
            ***
          </Button>
          <Modal
            // postId={postId}
            open={modalOpen}
            close={closeModal}
            header="수정 및 삭제하기"
          ></Modal>
        </React.Fragment>
        : <Button
        variant="text"
        style={{
          color: "lightgrey",
          zIndex: "9999",
          lineHeight: "3",
          backgroundColor: "transparent",
        }}
        disabled
      >
        ***
      </Button> }
      </div>
      
      <ImageWrap>
        <img
          src={image}
          alt={id}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "-webkit-fill-available",
            width: "inherit",
          }}
        />
      </ImageWrap>
      <Div style={{height:"100%", top:"0"}}>
      <ContentWrap >
      
      <ItemArea FS="1.3em">{nickname}</ItemArea>
      <ItemArea sytle={{fontSize: "1.3em"}}>{title}</ItemArea>
      <ItemArea style={{fontSize: "1em"}}>{category}&nbsp;&nbsp;&nbsp;{timestamp}&nbsp;&nbsp;올림</ItemArea>
      <ItemArea FS="100px">{comment}</ItemArea>
      </ContentWrap>
      
        <IconButton>
          <FavoriteBorderOutlinedIcon fontSize="large" /> 0
        </IconButton>
        <Footer>
        <ItemArea FS="100px">{price}
        <button style={{fontSize:"15px", color: "white", backgroundColor:"#FF8A3D", width:"100px", height:"3em", borderRadius:"5px"
      }}>채팅하기</button>
        </ItemArea>
      </Footer>
        </Div>
      
    </DetailCont>
  );
};

//얘는 위치를 어디에 둬야할 지 몰라서 우선 주석 처리해놓을게요!
/*
      { !sameUser ? 
      <>
      <button disabled>edit</button>
      <button disabled>delete</button> 
      </>
      :
      <>
      <Link to={`/post/edit/${id}`} props={{title}}>
      <button>edit</button>
      </Link>
      <button onClick={deleteBtn}>delete</button>
      </>
      }
      <div>{title} {price} {category} {timestamp} {comment}</div>

*/

export default DetailPage;



const DetailCont = styled.div`
  box-sizing: border-box;
  width: 720px;
  height: 90vh;
  background-color: #eee;
  border-radius: 10px;
  flex-direction: column;
  
`;
const ImageWrap = styled.div`
  
  top: 0;
  width: 100%;
  height: 50%;
  border-bottom: 1px solid lightgrey;
`;

const Div = styled.div``;

const ContentWrap = styled.div`
  top: 0;
  width:100%;
  display: flex;
  flex-direction: column;
  
  font-size: ${(props) => props.FS};
  outLine: 1px solid red;
  height: 20%;
`

const ItemArea = styled.div`
  padding-top: 5px;
  
  width:100%;
  
`;

const Footer = styled.div`
  outline: 1px solid blue;
  width:100%;
  

`