import {
  CREATE_CONTACT,
  DELETE_CONTACT,
  RESET_CONTACT,
  SELECT_CONTACT
} from "../actions";

const initialState = {
  contacts: [],
  loading: false,
  selected: null
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload]
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
        loading: false
      };
    case SELECT_CONTACT:
      return {
        ...state,
        selected: action.payload
      };
    case RESET_CONTACT:
      return {
        ...state,
        selected: null
      };
    default:
      return state;
  }
};

export default contactReducer;
