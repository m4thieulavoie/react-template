import type { Action } from "redux";

export const UserActionTypes = {
  SET_ID: "SET_USER_ID",
};

export interface UserAction extends Action {
  readonly payload: string;
}

export const setUserId = (payload: string): UserAction => ({
  type: UserActionTypes.SET_ID,
  payload,
});
