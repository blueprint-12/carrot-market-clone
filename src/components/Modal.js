import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";
import {deletePostDB} from "../redux/modules/post";

const Modal = (props) => {
  const { open, close, header } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {id} = useParams();
  

  const delete_post = () => {
    dispatch(deletePostDB(id));
    navigate(-1);
  };
  const update_post = () => {
    navigate(`/post/edit/${id}`);
  };
  //console.log(useParams(id))

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
