import axios from "axios";
import { getToken } from "../../shared/local_storage";

const API = "http://3.39.253.203";

const Token = getToken();

const initialState = {
  list: [],
};

const LOAD = "post/LOAD";
const UPLOAD = "post/UPLOAD";
const UPDATE = "post/UPDATE";
const DELETE = "post/DELETE";
const DETAIL = "post/DETAIL";

export function loadPost(load) {
  return { type: LOAD, load };
}

export function uploadPost(upload) {
  return { type: UPLOAD, upload };
}

export function updatePost(post_index, upload) {
  return { type: UPDATE, post_index, upload };
}

export function deletePost(post_index) {
  return { type: DELETE, post_index };
}

export function loadDetail(detail_list) {
  return { type: DETAIL, detail_list };
}

export const loadPostDB = () => {
  return function (dispatch) {
    axios
      .get(`${API}/api/post`, {
        headers: { Authorization: `${Token}` },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch(loadPost(response.data.postList));
        //console.log(dispatch(loadPost(response.data)));
      });
  };
};

export const uploadPostDB = (upload) => {
  return function (dispatch) {
    const formData = new FormData();

    const write = {
      title: upload.title,
      category: "default",

      price: upload.price,
      comment: upload.comment,
    };

    formData.append(
      "postDto",
      new Blob([JSON.stringify(write, { contentType: "application/json" })], {
        type: "application/json",
      })
    );

    formData.append("file", upload.file);

    axios
      .post(`${API}/api/post`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${Token}`,
        },
      })
      .then((response) => {
        // console.log(post);
        dispatch(uploadPost(upload));
      })
      .catch((error) => {
        window.alert("게시글 등록 실패😓");
        console.log("게시물 추가 에러" + error);
      });
  };
};

export const updatePostDB = (postID, update) => {
  return function (dispatch) {
    const formData = new FormData();

    const updateDoc = {
      title: update.title,
      category: "default",
      price: update.price,
      comment: update.comment,
    };

    formData.append(
      "postDto",
      new Blob(
        [JSON.stringify(updateDoc, { contentType: "application/json" })],
        {
          type: "application/json",
        }
      )
    );

    formData.append("file", update.file);

    axios
      .put(`${API}/api/post/${postID}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `${Token}`,
        },
        //mode: "cors",
      })
      .then((response) => {
        // console.log(response);
        dispatch(uploadPost(postID, formData));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const deletePostDB = (postID) => {
  return function (dispatch) {
    axios
      .delete(`${API}/api/post/${postID}`, {
        headers: {
          Authorization: `${Token}`,
        },
      })
      .then((response) => {
        dispatch(deletePost(postID));
      })
      .catch((error) => {
        console.log(postID);
      });
  };
};

export const loadDetailDB = (postID) => {
  return function (dispatch) {
    axios
      .get(`${API}/api/post/${postID}`, {
        headers: { Authorization: `${Token}` },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch(loadPost(response.data.post));
        //console.log(dispatch(loadPost(response.data)));
      });
  };
};

export const increaseFeedHeart = (postID) => {
  return function (dispatch) {
    axios
      .post(`${API}/api/post/${postID}`, {
        headers: { Authorization: `${Token}` },
      })
      .then((res) => {
        console.log(res);
        // dispatch(loadPost())
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      return { list: action.load };
    }
    case UPLOAD: {
      const upload_post_list = [...state.list, action.upload];
      return { list: upload_post_list };
    }
    case UPDATE: {
      const update_post_list = state.list.filter((idx) => {
        return parseInt(action.post_index) !== idx;
      });
      const new_list = [...update_post_list, action.upload];
      return { list: new_list };
    }
    case DELETE: {
      const delete_post_list = state.list.filter((idx) => {
        return parseInt(action.post_index) !== idx;
      });
      return { list: delete_post_list };
    }
    case DETAIL: {
      //console.log(action.post_list);
      return { list: action.detail };
    }
    default:
      return state;
  }
}
