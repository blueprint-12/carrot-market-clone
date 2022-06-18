import React from "react";
import Grid from "../elements/Grid";

const Navbar = (props) => {
  const { children } = props;

  return (
    <>
      <Grid
        width="100%"
        height="none"
        fixed
        top="0px"
        bg="white"
        border_bottom="1px solid #bbb"
        padding="8px 16px"
      >
        {children}
      </Grid>
    </>
  );
};

export default Navbar;
