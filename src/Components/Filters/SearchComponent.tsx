import { InputAdornment, TextField } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { searchByName } from "../../redux/actions/actions";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const handleChange = useCallback(
    async (e: any) => {
      dispatch(searchByName(e.target.value));
    },
    [dispatch]
  );
  return (
    <TextField
      sx={{ width: 150 }}
      onChange={(e) => handleChange(e)}
      id="outlined-basic"
      label="Search"
      variant="outlined"
      InputProps={{
        endAdornment: (
          <InputAdornment position="start">
            <SearchOutlinedIcon color="info" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchComponent;
