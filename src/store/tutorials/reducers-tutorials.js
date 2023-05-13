import {
  CREATE_TUTORIAL,
  GET_ALL_TUTORIALS,
  UPDATE_TUTORIAL,
  DELETE_TUTORIAL,
  DELETE_ALL_TUTORIALS,
} from "./types";

const initialState = [];

const ReducerTutorials = (tutorials = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CREATE_TUTORIAL:
      return [...tutorials, payload];

    case GET_ALL_TUTORIALS:
      return payload;

    case UPDATE_TUTORIAL:
      return tutorials.map((tutorial) => {
        if (tutorial.id === payload.id) {
          return {
            ...tutorial,
            ...payload,
          };
        } else {
          return tutorial;
        }
      });

    case DELETE_TUTORIAL:
      return tutorials.filter(({ id }) => id !== payload.id);

    case DELETE_ALL_TUTORIALS:
      return [];

    default:
      return tutorials;
  }
};

export default ReducerTutorials;
