import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const PostWritePage2 = () => {
  //이미지 미리보기
  const [image, setImage] = React.useState("");
  //서버에 보내는 이미지 url
  const [imageUrl, setImageUrl] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [price, setPrice] = React.useState(0);
  const [content, setContent] = React.useState("");

  const reader = new FileReader();

  const encodeFileToBase64 = (fileBlob) => {
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve) => {
      reader.onload = () => {
        setImage(reader.result);
        // resolve();
      };
    });
  };

  const changeTitle = (e) => {
    setTitle(e.target.value);
  };

  const changePrice = (e) => {
    setPrice(e.target.value);
  };

  const changeContent = (e) => {
    setContent(e.target.value);
  };

  const changeImageUrl = (e) => {
    setImageUrl(e.target.files[0]);
  };

  const submitHandler = () => {
    if (imageUrl === "" || title === "" || content === "" || price === "") {
      alert("모든 사항을 기입해주세요.");
      return;
    } else {
      // dispatch(PostActions.addPost(imageUrl, title, content, price));
    }
  };
  return (
    <PostCont>
      <HeaderNav>
        <Link to="/main">
          <HeaderBtn>
            <ArrowBackOutlinedIcon sx={{ fontSize: "2rem" }} />
          </HeaderBtn>
        </Link>
        <Title>중고거래 글쓰기</Title>
        {/* <Link to="/main"> */}
        <HeaderBtn onClick={submitHandler} style={{ color: "#FF8A3C" }}>
          완료
        </HeaderBtn>
        {/* </Link> */}
      </HeaderNav>

      <FormBody id="postForm" name="postForm">
        <Div>
          <label htmlFor="image">
            <AddBtn>
              <PhotoCameraIcon sx={{ fontSize: "40px" }} />
              <input
                id="image"
                name="image"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => {
                  changeImageUrl(e);
                  encodeFileToBase64(e.target.files[0]);
                }}
              ></input>
            </AddBtn>
          </label>
          <div style={{ width: "120px", height: "120px", margin: "10px" }}>
            {image && (
              <img
                src={image}
                alt="preview-img"
                style={{
                  width: "100%",
                  height: "100%",
                  backgroundSize: "cover",
                }}
              />
            )}
          </div>
        </Div>
        <DetailCont>
          <Input
            type="text"
            id="title"
            name="title"
            placeholder="글 제목"
            onChange={changeTitle}
          />
          <Input
            type="number"
            id="price"
            name="price"
            placeholder="₩"
            onChange={changePrice}
          />
          <label htmlFor="price" />
        </DetailCont>

        <label htmlFor="content" />
        <textarea
          name="content"
          id="content"
          className="content"
          rows="10"
          style={{
            height: "70%",
            border: "1px solid #FAFAFA",
            fontSize: "20px",
            resize: "none",
            boxSizing: "border-box",
            padding: "10px",
          }}
          placeholder={` 게시글 내용을 작성해주세요. (가품 및 판매금지품목은 게시가 제한될 수 있어요.)`}
          onChange={changeContent}
        ></textarea>
      </FormBody>
    </PostCont>
  );
};
const PostCont = styled.div`
  width: 720px;
  box-sizing: border-box;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 10px;
  background-color: white;
  height: 600px;
  gap: 1rem;
  /* box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5); */
  & > * {
    width: 100%;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 500;
`;
const Div = styled.div`
  width: 100%;
  display: flex;
  /* border-bottom: 1px solid #ddd; */
  /* padding: 10px 16px; */
  /* gap: 15px; */
`;
const FormBody = styled.form`
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  display: flex;
  border-bottom: 1px solid #ddd;
  /* padding: 10px 16px; */
  /* gap: 15px; */
`;

const HeaderNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 2px solid #ddd;
  padding: 10px;
  justify-content: space-between;
`;
const HeaderBtn = styled.button`
  border: none;
  background-color: white;
  width: 50px;
  height: 50px;
  font-size: 1rem;
  font-weight: 500;
  margin: 0 10px;
  border-radius: 10px;

  &:hover {
    background-color: #eee;
  }
`;

const AddBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  border: 1px solid #ddd;
  background-color: white;
  margin: 10px;

  /* transition: 0.5s; */
  cursor: pointer;

  &:hover {
    background-color: #212123;
    color: white;
  }
`;
const UploadImage = styled.img`
  width: 120px;
  height: 120px;
  background-size: cover;
  margin: 10px;

  /* background-color: #eee; */
  background-image: url("https://via.placeholder.com/120");
`;

const DetailCont = styled.div``;

const Input = styled.input`
  box-sizing: border-box;
  font-size: 1.1em;
  height: 50%;
  width: 100%;
  border: 1px solid #fafafa;
  padding: 15px;
`;

export default PostWritePage2;
