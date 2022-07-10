import { Button } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import "./Buttons.scss";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ChangeStatus } from "../../redux/actions/actions";
import { IRickyMortyResult } from "../../Models/RickyMortyResults";

const ChangeStatusButton = () => {
  const dispatch = useDispatch();
  const { allCheckbox, results } = useSelector(
    (state: any) => state.getCharacters
  );

  const switchTypeStatus = (character: Array<IRickyMortyResult>) => {
    switch (character[0].status) {
      case "Alive":
        character[0].status = "Dead";
        return dispatch(ChangeStatus(character));
      case "unknown":
        let statusPossible = ["Dead", "Alive"];
        character[0].status =
          statusPossible[Math.floor(Math.random() * statusPossible.length)];
        return dispatch(ChangeStatus(character));
      default:
        return character;
    }
  };

  const changeStatus = async () => {
    const singleCharacter = await results?.filter(
      (character: IRickyMortyResult) =>
        character.id === allCheckbox.find((id: number) => id === character.id)
    );
    singleCharacter &&
      singleCharacter.length &&
      switchTypeStatus(singleCharacter);
  };
  return (
    <Button
      className={`${allCheckbox.length > 1 && "buttons__edit--hidden"}`}
      style={{ fontFamily: "Oswald" }}
      variant="contained"
      color="info"
      size="large"
      startIcon={<EditIcon />}
      onClick={changeStatus}
    >
      Change Status
    </Button>
  );
};

export default ChangeStatusButton;
