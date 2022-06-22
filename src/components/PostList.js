import React, { useEffect } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Image from "../elements/Image";
import { loadPostDB } from "../redux/modules/post";

import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";

const PostList = (props) => {
  const dispatch = useDispatch();
  const postLoad = useSelector((state) => state.post?.list);
  //const navigate = useNavigate();

  useEffect(() => {
    dispatch(loadPostDB());
  }, []);

  return (
    <>
      <ListCont>
        {postLoad?.length > 0 &&
          postLoad.map((p, idx) => {
            return (
              <div key={idx} height="20%">
                <Link to={`/detail/${p.id}`} style={{color:"black", textDecoration:'none'}}>
                  <Post key={idx}>
                    <ImageBox>
                      <Image src={p.image} alt={p.id}></Image>
                    </ImageBox>

                    <Contents>
                      <div
                        style={{
                          gap: "0.5rem",
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                        }}
                      >
                        <span>{p.title}</span>
                        <span>{p.timestamp}</span>
                        <span>{p.price} 원</span>
                        <span>{p.category}</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "flex-end",
                        }}
                      >
                        <ItemLike>
                          {/* <span>{p.likenum}</span> */}
                          <IconButton>
                            <FavoriteBorderOutlinedIcon fontSize="large" />
                          </IconButton>
                        </ItemLike>
                      </div>
                    </Contents>
                  </Post>
                </Link>
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
  padding: 10px;
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
  /* flex-direction: row; */
  width: 70%;

  /* padding: 8px 0px; */
  justify-content: space-between;

  & > div {
    margin-bottom: 10px;
  }

  & > span {
  }
`;
const ItemTitle = styled.div`
  /* padding-top: 5px; */
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
