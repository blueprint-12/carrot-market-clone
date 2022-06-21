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

const DetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // //파라미터로 postID값 가져오기
  const { id } = useParams();
  const { title, price, image, category, timestamp, comment, nickname } =
    useSelector((state) => state.post.list);
  const currentUser = useSelector((state) => state.user.nickname);

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

  const sameUser = nickname === currentUser;
  //console.log(sameUser);

  const deleteBtn = () => {
    dispatch(deletePostDB(id));
    navigate("/main");
  };
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
`;
const ImageWrap = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 50%;
  border-bottom: 1px solid lightgrey;
`;

const Div = styled.div``;
