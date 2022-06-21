import React from "react";
import styled from "styled-components";

const Navbar = (props) => {
  // const { children } = props;

  return (
    <NavCont
    // width="100%"
    // height="none"
    // fixed
    // top="0px"
    // bg="white"
    // border_bottom="1px solid #bbb"
    // padding="8px 16px"
    >
      {/* {children} */}
    </NavCont>
  );
};

const NavCont = styled.div`
  width: 720px;
  height: 15vh;
  background-color: white;
  border-bottom: 1px solid #bbb;
  padding: 8px 16px;
`;

export default Navbar;
