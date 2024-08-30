import { combineReducers, legacy_createStore } from "redux";
import { wishlist } from "./wishlist";

const reducers = combineReducers({
  wishlist,
});

export const store = legacy_createStore(reducers);
