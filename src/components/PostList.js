import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import Grid from "../elements/Grid";
import Text from "../elements/Text";
// import Image from "../elements/image";
import { loadPostDB } from "../redux/modules/post";

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
      <Grid bg="white" height="80%" fixed top="8%" padding="0px 16px">
        {post_list.map((p) => {
          return (
            <Grid key={p.postId} height="20%">
              <Post key={p.postId}>
                <ImageBox>
                  {/* <Image src={p.imageUrl}></Image> */}
                  <Contents>
                    <Text>{p.postTitle}</Text>
                    <Text bold>{p.price} 원</Text>
                  </Contents>
                </ImageBox>
              </Post>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

const Post = styled.div`
  width: 100%;
  border-bottom: 1px solid #bbb;
  margin: auto;
  display: flex;
  padding: 8px 0px;
`;

const ImageBox = styled.div`
  width: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Contents = styled.div`
  width: 70%;
  padding: 8px 0;
`;

export default PostList;
