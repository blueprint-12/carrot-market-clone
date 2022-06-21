import React from "react";
import styled from "styled-components";
import "../elements/modal.css";

import { useNavigate, useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

import Modal from "../components/Modal";
const DetailPage = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //파라미터로 postID값 가져오기
  const params = useParams();
  const postId = parseInt(params.poitId);
  const userId = null; //useSelector혹은 localstorage를 통해서 가져온다.

  React.useEffect(() => {
    // 포스트 아이디에 해당하는 게시물만 가져오기s
    // dispatch(getAPostDB(postId))
  }, []);

  const [modalOpen, setModalOpen] = React.useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

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
            postId={postId}
            open={modalOpen}
            close={closeModal}
            header="수정 및 삭제하기"
          ></Modal>
        </React.Fragment>
      </div>
      <ImageWrap>
        <img
          src="https://ichef.bbci.co.uk/news/640/cpsprodpb/17805/production/_105016269_roxy1.jpg"
          alt="고양이"
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
