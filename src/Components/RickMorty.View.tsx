import React, { useEffect } from "react";
import "./RickMorty.scss";

import AppHeader from "./AppHeader/AppHeader";
import MainTable from "./Table/MainTable";
import TableHeader from "./TableHeader/TableHeader";
import { useDispatch, useSelector } from "react-redux";
import { asyncGetAllCharacters } from "../redux/actions/actions";

const RickMortyView = () => {
  const resultsArray = useSelector((state: any) => state.getCharacters.results);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetAllCharacters() as any);
  }, [dispatch]);

  return (
    <div className="rickmorty__container">
      <AppHeader />
      <TableHeader />
      <MainTable results={resultsArray} />
    </div>
  );
};

export default RickMortyView;
