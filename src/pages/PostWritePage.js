import React from "react";

import styled from "styled-components";

const PostWritePage = () => {
  return (
    <WriteForm>
      <Nav>
        <Button>X</Button>
        <div style={{ fontSize: "24px" }}>중고거래 글쓰기</div>
        <Button>완료</Button>
      </Nav>
      <Hr />
      <WriteBody>
        <ImageUpload>
          <label htmlFor="image">
            <Image1
              src="https://png.pngtree.com/element_our/20190601/ourlarge/pngtree-file-upload-icon-image_1344393.jpg"
              alt="uploadBtn"
            />
          </label>
          <input
            name="image"
            type="file"
            asset="img/*"
            style={{ display: "none" }}
          />
          <Image1
            src="https://dimg.donga.com/wps/NEWS/IMAGE/2022/01/28/111500268.2.jpg"
            alt="previewImage"
          />
        </ImageUpload>
        <DetailWrite>
          <Input1 height="10%" placeholder="글 제목" />
          {/* <Input1 as="select" height="10%" name="category" id="category" style={{padding: "0 10px"}}>
            <option value="none">카테고리 선택</option>
                <option value="디지털기기">디지털기기</option>
                <option value="생활가전">생활가전</option>
                <option value="가구&인테리어">가구/인테리어</option>
                <option value="유아동">유아동</option>
                <option value="생활&가공식품">생활/가공식품</option>
                <option value="유아도서">유아도서</option>
                <option value="스포츠/레저">스포츠/레저</option>
                <option value="여성패션">여성패션/잡화</option>
                <option value="남성패션">남성패션/잡화</option>
                <option value="게임&취미">게임/취미</option>
                <option value="뷰티&미용">뷰티/미용</option>
                <option value="반려동물용품">반려동물용품</option>
                <option value="도서&티켓&음반">도서/티켓/음반</option>
                <option value="기타">기타 중고물품</option>
                <option value="삽니다">삽니다</option>
          </Input1> */}
          <Input1 height="10%" placeholder="판매 가격" />
        </DetailWrite>
      </WriteBody>
    </WriteForm>
  );
};

const WriteForm = styled.form`
  width: 720px;
  height: 80vh;
  border: 3px solid lightgray;
  margin: 5% 10% 5%;
  padding: 0px;
`;

const Nav = styled.div`
  width: 100%;
  height: 10%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Button = styled.button`
  display: inline-block;
  margin: 3px 0 3px 0;
  border: none;
  size: 20px;
  color: black;
  background-color: white;
  font-size: 24px;
  font-weight: 300;
  line-height: 2;
`;

const WriteBody = styled.div`
  width: 100%;
  height: 100%;
  font-size: 20px;
`;

const ImageUpload = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: row;
  padding-bottom: 10px;
  margin-bottom: 10px;
`;

const Image1 = styled.img`
  width: 100px;
  height: 100px;
  margin: 10px;
  padding: 5px;
  margin: 0px 0px 5px 5px;
`;
const DetailWrite = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Input1 = styled.input`
  border: 1px 0px 1px 0px solid lightgray;
  width: 100%;
  height: ${(props) => props.height};
  margin: 0px;
  box-sizing: border-box;
  padding: 15px;
`;

const Hr = styled.hr`
  color: lightgray;
`;

export default PostWritePage;
