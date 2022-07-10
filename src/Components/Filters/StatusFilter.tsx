import { MenuItem, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { StatusInfo } from "../../Enums/Status.Enum";
import { searchByStatus } from "../../redux/actions/actions";

const status = [
  {
    label: StatusInfo.ALL,
    value: "",
  },
  {
    value: StatusInfo.ALIVE,
    label: StatusInfo.ALIVE,
  },
  {
    value: StatusInfo.DEAD,
    label: StatusInfo.DEAD,
  },
  {
    value: StatusInfo.UNKNOWN,
    label: StatusInfo.UNKNOWN,
  },
];
const StatusFilter = () => {
  const dispatch = useDispatch();
  const handleChange = (e: any) => {
    dispatch(searchByStatus(e.target.value));
  };
  return (
    <TextField
      sx={{ width: 150 }}
      id="outlined-select-currency"
      select
      label="Status"
      defaultValue={""}
      onChange={handleChange}
    >
      {status.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default StatusFilter;
