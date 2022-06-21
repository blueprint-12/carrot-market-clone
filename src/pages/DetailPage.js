import React, {useEffect} from "react";
import styled from "styled-components";
import { Link,useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

import { deletePostDB, loadDetailDB } from "../redux/modules/post"
//import Modal from "../components/Modal";


const DetailPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // //파라미터로 postID값 가져오기
  const {id} = useParams();
  const {title, price, image, category, timestamp, comment, nickname} = useSelector((state) => state.post.list);
  const currentUser = useSelector((state) => state.user.nickname);

  

  useEffect(() => {
    dispatch(loadDetailDB(id));
  }, []);

  const sameUser = nickname === currentUser;
  //console.log(sameUser);

  const deleteBtn = () => {
    dispatch(deletePostDB(id));
    navigate('/main');
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
      <ArrowBackIosIcon
        variant="text"
        style={{
          position: "relative",
          left: "20px",
          top: "12px",
          color: "lightgrey",
          fontSize: "1.7em",
          lineHeight: "0.5",
        }}
        onClick={() => navigate(-1)}
      ></ArrowBackIosIcon>
      <HomeIcon
        variant="text"
        style={{
          position: "relative",
          left: "50px",
          top: "10px",
          fontSize: "1.9em",
          color: "lightgrey",
          lineHeight: "2.3",
        }}
        onClick={() => navigate("/main")}
      ></HomeIcon>
      {/* 모달 */}
      {/* <React.Fragment>
        <Button
          variant="text"
          style={{
            position: "absolute",
            right: "0",
            top: "0",
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
      </React.Fragment> */}
      <ImageWrap>
        <img
          src={image}
          // alt={response.postTitle}
          style={{
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "-webkit-fill-available",
            width: "inherit",
          }} alt={id}
        />
      </ImageWrap>
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
  width: 100%;
  height: 50%;
  border-bottom: 1px solid lightgrey;
`;