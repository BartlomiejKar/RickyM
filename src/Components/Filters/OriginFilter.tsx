import { MenuItem, TextField } from "@mui/material";
import React from "react";

const values = [
  {
    value: "??",
    label:
      "Hej, nie wiedziałem do końca co mam wyświetlić :) Lokacje czy origin. Na lokacje mamy api na origin musialby zebrac z wynikow :)",
  },
];
const OriginFilter = () => {
  return (
    <TextField
      sx={{ width: 150 }}
      id="outlined-select-currency"
      select
      label="Origin"
      defaultValue={""}
    >
      {values.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default OriginFilter;
