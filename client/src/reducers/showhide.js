import { SHOW_MODAL,HIDE_MODAL } from "../actions/types";

const initialState = false;

export default function (state= initialState,action) {
    const {type} = action;
    switch (type) {
        case SHOW_MODAL:
            return true;
        case HIDE_MODAL:
            return false;
        default:
            return state;
    }
}