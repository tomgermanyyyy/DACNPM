import { OPEN_NAV, CLOSE_NAV } from '../actions/types';

const initialState = { open: false };

export default function (state = initialState, action) {
  const { type } = action;

  switch (type) {
    case OPEN_NAV:
      return { ...state, open: true };

    case CLOSE_NAV:
      return { ...state, open: false };

    default:
      return state;
  }
}
