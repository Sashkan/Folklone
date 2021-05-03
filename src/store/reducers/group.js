import {
  CREATE_GROUP,
  DELETE_GROUP,
  RESET_GROUP,
  SELECT_GROUP
} from "../actions";

const initialState = {
  groups: [],
  loading: false,
  selected: null
};

const groupReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_GROUP:
      return {
        ...state,
        groups: [...state.groups, action.payload]
      };
    case DELETE_GROUP:
      return {
        ...state,
        groups: state.groups.filter((group) => group.id !== action.payload),
        loading: false
      };
    case SELECT_GROUP:
      return {
        ...state,
        selected: action.payload
      };
    case RESET_GROUP:
      return {
        ...state,
        selected: null
      };
    default:
      return state;
  }
};

export default groupReducer;
