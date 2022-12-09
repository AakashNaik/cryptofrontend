import { createStore } from "redux";
import loginReducer from "./reducers/reduce";

function configureStore(state = { user: false, useraddr: '', nftList: [], data: [], nftListbool: false }) {
  return createStore(loginReducer,state);
}

export default configureStore;
