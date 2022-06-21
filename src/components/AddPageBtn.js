import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const AddPageBtn = () => {
  const navigate = useNavigate();
  return (
    <Div>
      <Fab
        style={{
          backgroundColor: "#FF9F57",
          color: "white",
          position: "absolute",
          bottom: "120px",
          right: "20px",
        }}
        sx={{
          height: "70px",
          width: "70px",
        }}
        onClick={() => {
          navigate("/postwrite");
        }}
      >
        <AddIcon style={{ fontSize: "2rem" }} />
      </Fab>
    </Div>
  );
};
const Div = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
`;
export default AddPageBtn;
