import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import Image from "../elements/Image";
import { loadPostDB } from "../redux/modules/post";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";

const PostList = (props) => {
  const post_list = useSelector((state) => state.post?.list);
  console.log(post_list);
  //   const page = useSelector((state) => state.post?.page);

  //   const is_login = useSelector((state) => state.user.is_login);

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadPostDB());
  });
  return (
    <>
      <ListCont>
        {post_list.map((p) => {
          return (
            <div key={p.postId} height="20%">
              <Post key={p.postId}>
                <ImageBox>
                  <Image src={p.image}></Image>
                </ImageBox>
                <Contents>
                  <ItemTitle>{p.title}</ItemTitle>
                  <ItemTime>{p.timestamp}</ItemTime>
                  <ItemPrice>{p.price} 원</ItemPrice>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      alignItems: "center",
                    }}
                  >
                    <ItemLike>
                      <IconButton>
                        <FavoriteBorderOutlinedIcon fontSize="large" />
                      </IconButton>
                    </ItemLike>
                  </div>
                </Contents>
              </Post>
            </div>
          );
        })}
      </ListCont>
    </>
  );
};

const ListCont = styled.div`
  width: 720px;

  background-color: white;
  height: 75vh;
  overflow: auto;
  padding: 0px 16px;
`;
const Post = styled.div`
  width: 100%;
  border-bottom: 1px solid #bbb;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 8px 0px; */
`;

const ImageBox = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  background-image: cover;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  /* padding: 8px 0px; */

  & > div {
    margin: 5px;
  }
`;
const ItemTitle = styled.div`
  padding-top: 5px;
  font-size: 1.3rem;
`;
const ItemTime = styled.div`
  color: #a29e9d;
`;
const ItemPrice = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
`;
const ItemLike = styled.div``;

export default PostList;
