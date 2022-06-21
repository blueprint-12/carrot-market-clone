import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
// import deletePostDB

const Modal = (props) => {
  const { open, close, header } = props;
  const history = useNavigate();
  const dispatch = useDispatch();
  const postId = props.postId;
  const postID = parseInt(postId);

  const delete_post = () => {
    // dispatch(deletePostDB(postId));
  };
  const update_post = (postId) => {
    history.push(`/post/edit/${postID}`);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openModal modal" : "modal"}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              ✖
            </button>
          </header>
          <main>
            <button onClick={update_post}>수정하기</button>
            <button onClick={delete_post}>삭제하기</button>
          </main>
        </section>
      ) : null}
    </div>
  );
};
export default Modal;
