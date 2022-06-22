//아이디 체크 (아이디는 최소 4글자 이상, 20글자 이하 영문 + 숫자)
function idCheck(id) {
  const regExp = /^[A-Za-z0-9]{4,20}$/;
  if (regExp.test(id)) {
    return true;
  } else {
    return false;
  }
}
//닉네임 체크 (닉네임은 최소 4글자 이상, 20글자 이하 + 영문 + 숫자)
function nickCheck(nick) {
  const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,20}$/;
  if (regExp.test(nick)) {
    return true;
  } else {
    return false;
  }
}
//비밀번호 체크 (비밀번호는 최소 4글자 이상, 20글자 이하 + 영문 + 숫자)
function pwCheck(pw) {
  const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,20}$/;
  if (regExp.test(pw)) {
    return true;
  } else {
    return false;
  }
}
export { idCheck, nickCheck, pwCheck };
