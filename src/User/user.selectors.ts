import type { IState } from "../state";

export const selectUserId = (state: IState) => state.user.id;
