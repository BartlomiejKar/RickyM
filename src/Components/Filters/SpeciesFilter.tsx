import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { Species } from "../../Enums/Species.Enum";
import { searchBySpecies } from "../../redux/actions/actions";

const species = [
  {
    value: Species.HUMAN,
    label: Species.HUMAN,
  },
  {
    value: Species.ALIEN,
    label: Species.ALIEN,
  },
  {
    value: Species.HUMANOID,
    label: Species.HUMANOID,
  },
  {
    value: Species.POOPYBUTTHOLE,
    label: Species.POOPYBUTTHOLE,
  },
  {
    value: Species.MYTHOLOGICAL,
    label: Species.MYTHOLOGICAL,
  },
  {
    value: Species.UNKNOWN,
    label: Species.UNKNOWN,
  },
  {
    value: Species.ANIMAL,
    label: Species.ANIMAL,
  },
  {
    value: Species.DISEASE,
    label: Species.DISEASE,
  },
  {
    value: Species.ROBOT,
    label: Species.ROBOT,
  },
  {
    value: Species.CRONENBERG,
    label: Species.CRONENBERG,
  },
  {
    value: Species.PLANET,
    label: Species.PLANET,
  },
];

const SpeciesFilter = () => {
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(searchBySpecies(e.target.value));
  };
  return (
    <FormControl>
      <InputLabel variant="filled" htmlFor="Species">
        Species
      </InputLabel>
      <Select
        sx={{ width: 150 }}
        multiple
        defaultValue={[]}
        onChange={handleChange}
        inputProps={{
          name: "Species",
          id: "Species",
        }}
      >
        {species.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SpeciesFilter;
