import { Checkbox, TableCell, TableRow } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SingleRow.scss";
import { IRickyMortyResult } from "../../Models/RickyMortyResults";
import StatusElement from "./Status.Element";
import { StatusInfo } from "../../Enums/Status.Enum";
import { useDispatch, useSelector } from "react-redux";
import { checkCheckbox } from "../../redux/actions/actions";
import RickMortyServices from "../../Services/RickMorty.Services";
import { IEpisode } from "../../Models/Episodes.model";

interface IPRops {
  element: IRickyMortyResult;
}

const SingleRow: React.FC<IPRops> = ({ element }) => {
  const [origin, setOrigin] = useState(null);
  const checkedBox = useSelector(
    (state: any) => state.getCharacters.allCheckbox
  );
  const dispatch = useDispatch();
  const handleCheckbox = (id: number) => {
    dispatch(checkCheckbox(id));
  };

  const displayRandomEpisodes = async (episode: Array<string>) => {
    const randomEpisodes = episode.sort(() => 0.5 - Math.random()).slice(0, 2);
    if (randomEpisodes) {
      await RickMortyServices.GET_episodes(randomEpisodes).then((data) =>
        setOrigin(data)
      );
    }
  };
  useEffect(() => {
    displayRandomEpisodes(element.episode);
  }, [element.episode]);
  return (
    <TableRow
      sx={{
        bgcolor: element.status === StatusInfo.DEAD ? "#F6F8FA" : "transparent",
      }}
    >
      <TableCell width={10}>
        <Checkbox
          id={`${element.id}`}
          color="primary"
          checked={checkedBox.some((id: number) => id === element.id)}
          onChange={() => handleCheckbox(element.id)}
        />
      </TableCell>
      <TableCell width={200}>
        <span className="singleRow__name">{element.name}</span>
        <br />
        <span className="singleRow__species">{element.species}</span>
      </TableCell>

      <TableCell width={100}>
        <img className="singleRow__image" src={element.image} alt="icon" />
      </TableCell>

      <TableCell width={200} sx={{ fontWeight: "600" }}>
        <p>{element.origin.name}</p>
      </TableCell>

      <TableCell width={200}>
        <div className="singleRow__episodes">
          {origin?.map((el: IEpisode) => (
            <p className="singleRow__episodes--paragraph" key={el.id}>
              {el.name}
            </p>
          ))}
        </div>
      </TableCell>

      <TableCell width={50} sx={{ fontWeight: 700 }}>
        <StatusElement status={element.status} />
      </TableCell>
    </TableRow>
  );
};

export default SingleRow;
