import React, { useState, useEffect } from "react";

import styled from "styled-components";
import EmptyHeartImg from "../assets/blank_heart.png";
import HeartImg from "../assets/fill_heart.png";

const Heart = styled.img`
  width: 20px;
  height: 20px;
`;

const HeartButton = ({ like, onClick }) => {
  return <Heart src={like ? HeartImg : EmptyHeartImg} onClick={onClick} />;
};

export default HeartButton;
