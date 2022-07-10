import React, { useEffect } from "react";
import "./TableHeader.scss";
import { useDispatch, useSelector } from "react-redux";
import { asyncSearchCharacters } from "../../redux/actions/actions";
import ChangeStatusButton from "../Buttons/ChangeStatusButton";
import RemoveButton from "../Buttons/RemoveButton";
import OriginFilter from "../Filters/OriginFilter";
import SearchComponent from "../Filters/SearchComponent";
import SpeciesFilter from "../Filters/SpeciesFilter";
import StatusFilter from "../Filters/StatusFilter";

const TableHeader = () => {
  const { name, status, species } = useSelector(
    (state: any) => state.getCharacters
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncSearchCharacters({ name, status, species }) as any);
  }, [name, status, species, dispatch]);
  return (
    <div className="table-header__container">
      <div className="table-header__filters-wrapper">
        <SearchComponent />
        <SpeciesFilter />
        <OriginFilter />
        <StatusFilter />
      </div>
      <div className="table-header__buttons-wrapper">
        <RemoveButton />
        <ChangeStatusButton />
      </div>
    </div>
  );
};

export default TableHeader;
