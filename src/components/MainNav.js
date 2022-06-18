import React from "react";
import Grid from "../elements/Grid";

const MainNav = (props) => {
  const { children } = props;

  return (
    <>
      <Grid
        flex_end
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

export default MainNav;
