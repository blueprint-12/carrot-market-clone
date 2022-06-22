////토큰 정보 가져오기

const getToken = () => {
  const token = localStorage.getItem("access_token");

  if (token) {
    return token;
  } else {
    return null;
  }
};

const setToken = (token) => {
  if (!token) {
    return false;
  }
  localStorage.setItem("access_token", token);
};

const delToken = () => {
  localStorage.removeItem("access_token");
};

//유저 닉네임 가져오기

const getNick = () => {
  const nickname = localStorage.getItem("nickname");

  if (nickname) {
    return nickname;
  } else {
    return null;
  }
};

const setNick = (nickname) => {
  if (!nickname) {
    return false;
  }
  localStorage.setItem("nickname", nickname);
};

const delNick = () => {
  localStorage.removeItem("nickname");
};

export { getToken, setToken, delToken, setNick, getNick, delNick };
