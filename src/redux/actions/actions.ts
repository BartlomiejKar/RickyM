import { IRickyMortyResult } from "../../Models/RickyMortyResults";
import RickMortyServices from "../../Services/RickMorty.Services";
import { ACTION_TYPES } from "./actions.types";

export const asyncGetAllCharacters =
  () =>
  async (dispatch): Promise<void> => {
    const data = await RickMortyServices.GET_characters();
    dispatch({
      type: ACTION_TYPES.GET_CHARACTERS,
      payload: data.results,
    });
    dispatch({
      type: ACTION_TYPES.CHANGE_PAGE,
      payload: data.info,
    });
  };
export const asyncSearchCharacters =
  (payload) =>
  async (dispatch): Promise<void> => {
    const response = await RickMortyServices.GET_searchCharacters(payload, 400);
    dispatch({
      type: ACTION_TYPES.SEARCH_CHARACTERS,
      payload: response,
    });
  };
export const asyncGetNextPage = (payload: string) => async (dispatch) => {
  const response = await RickMortyServices.GET_charactersFromNextPage(payload);
  dispatch({
    type: ACTION_TYPES.ADD_RESULTS,
    payload: response.results,
  });
  dispatch({
    type: ACTION_TYPES.CHANGE_PAGE,
    payload: response.info,
  });
};
export const searchByStatus = (payload: string) => {
  return {
    type: ACTION_TYPES.STATUS_SEARCH,
    payload,
  };
};
export const searchByName = (payload: string) => {
  return {
    type: ACTION_TYPES.NAME_SEARCH,
    payload,
  };
};
export const searchBySpecies = (payload: Array<string>) => {
  return {
    type: ACTION_TYPES.SPECIES,
    payload,
  };
};

export const checkCheckbox = (payload: number) => {
  return {
    type: ACTION_TYPES.CHECKBOX,
    payload,
  };
};

export const checkAllCheckbox = (payload: Array<any> | undefined) => {
  const arrayOfID = payload?.map((element: any) => element.id);
  return {
    type: ACTION_TYPES.CHECK_ALL_CHECKBOX,
    payload: arrayOfID,
  };
};

export const RemoveCharacters = () => {
  return {
    type: ACTION_TYPES.REMOVE_CHARACTERS,
  };
};
export const ChangeStatus = (payload: Array<IRickyMortyResult>) => {
  return {
    type: ACTION_TYPES.CHANGE_STATUS,
    payload,
  };
};
