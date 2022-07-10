import {
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IRickyMortyResult } from "../../Models/RickyMortyResults";
import {
  asyncGetNextPage,
  checkAllCheckbox,
} from "../../redux/actions/actions";
import SingleRow from "../SingleRow/SingleRow";

const headerTitle = ["Name", "Avatar", "Origin", "Episodes", "Status"];

interface IProps {
  results: Array<IRickyMortyResult> | undefined;
}

const MainTable: React.FC<IProps> = ({ results }) => {
  const { infoAboutPages, name, species, status } = useSelector(
    (state: any) => state.getCharacters
  );

  // state, ktory po zmianie strony zaciaga nowa strone rezultatow
  // gdy przechodzimy wstecz nie pobiera, poniewaz page jest mniejszy niz ostatnia strona
  const [lastPage, setLastPage] = useState(0);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [checkbox, setCheckbox] = useState(false);

  const dispatch = useDispatch();

  const handleChangePage = (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
    newPage > lastPage && setLastPage(newPage);
  };
  const handleChangeRowsPerPage = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };
  useEffect(() => {
    //pobieram dane tylko wtedy gdy mam puste filtry, poniewaz filtry i tak pobieraja globalnie
    if (
      infoAboutPages.next &&
      !name.length &&
      !species.length &&
      !status.length
    ) {
      dispatch(asyncGetNextPage(infoAboutPages.next) as any);
    }
  }, [lastPage, dispatch]);
  useEffect(() => {
    // przekierowuje na pierwsza strone po wyszukiwaniu
    setPage(0);
    setLastPage(0);
  }, [name, species, status]);
  useEffect(() => {
    checkbox
      ? dispatch(checkAllCheckbox(results))
      : dispatch(checkAllCheckbox([]));
  }, [checkbox, dispatch, results]);
  return (
    <TableContainer
      sx={{
        maxWidth: 1160,
        borderRadius: 5,
        margin: "auto",
        background: "#FFFFFF",
      }}
    >
      {!results && (
        <Typography variant="h2" mt={2} align="center">
          No results
        </Typography>
      )}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox
                color="primary"
                value={checkbox}
                onChange={() => setCheckbox(!checkbox)}
              />
            </TableCell>
            {headerTitle.map((header) => (
              <TableCell sx={{ fontFamily: "Oswald" }} key={header}>
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {results
            ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((element) => (
              <SingleRow key={element.id} element={element} />
            ))}
        </TableBody>
      </Table>
      {results?.length && (
        <TablePagination
          component="div"
          count={infoAboutPages.count}
          page={page}
          onPageChange={handleChangePage}
          rowsPerPage={rowsPerPage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage=""
          rowsPerPageOptions={[5, 10, 20]}
        />
      )}
    </TableContainer>
  );
};

export default MainTable;
