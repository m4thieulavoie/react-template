import type { UserState } from "../state";
import type { UserAction } from "./user.actions";
import { UserActionTypes } from "./user.actions";

const userReducer = (
  state: UserState = {} as UserState,
  action: UserAction
) => {
  switch (action.type) {
    case UserActionTypes.SET_ID:
      return {
        ...state,
        id: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
