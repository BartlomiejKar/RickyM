import { Button } from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import React from "react";
import { useDispatch } from "react-redux";
import { RemoveCharacters } from "../../redux/actions/actions";

const RemoveButton = () => {
  const dispatch = useDispatch();
  return (
    <Button
      onClick={() => dispatch(RemoveCharacters())}
      style={{ fontFamily: "Oswald" }}
      variant="contained"
      color="error"
      size="large"
      startIcon={<DeleteOutlineIcon />}
    >
      Remove characters
    </Button>
  );
};

export default RemoveButton;
