import { ACTION_TYPES } from "../actions/actions.types";

const initialState = {
  infoAboutPages: {},
  results: [],
  name: "",
  status: "",
  species: "",
  allCheckbox: [],
};

const getCharacters = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.NAME_SEARCH:
      return {
        ...state,
        name: action.payload,
      };
    case ACTION_TYPES.STATUS_SEARCH:
      return {
        ...state,
        status: action.payload,
      };
    case ACTION_TYPES.SPECIES:
      return {
        ...state,
        species: action.payload,
      };
    case ACTION_TYPES.SEARCH_CHARACTERS:
      return { ...state, results: action.payload.results };
    case ACTION_TYPES.GET_CHARACTERS:
      return {
        ...state,
        results: action.payload,
      };
    case ACTION_TYPES.CHECKBOX:
      return {
        ...state,
        allCheckbox: state.allCheckbox.includes(action.payload)
          ? state.allCheckbox.filter((id) => id !== action.payload)
          : [...state.allCheckbox, action.payload],
      };
    case ACTION_TYPES.CHECK_ALL_CHECKBOX:
      return {
        ...state,
        allCheckbox: action.payload ? [...action.payload] : state.allCheckbox,
      };
    case ACTION_TYPES.REMOVE_CHARACTERS:
      const filteredArray = state.results?.filter((character) => {
        return (
          character.id !== state.allCheckbox.find((el) => el === character.id)
        );
      });
      return {
        ...state,
        results: filteredArray,
      };
    case ACTION_TYPES.CHANGE_STATUS:
      const newArr = state.results.map((el) => {
        return el.id === action.payload.id ? action.payload : el;
      });
      return {
        ...state,
        results: newArr,
      };
    case ACTION_TYPES.CHANGE_PAGE:
      return {
        ...state,
        infoAboutPages: action.payload,
      };
    case ACTION_TYPES.ADD_RESULTS:
      return {
        ...state,
        results: [...state.results, ...action.payload],
      };
    default:
      return state;
  }
};

export default getCharacters;
