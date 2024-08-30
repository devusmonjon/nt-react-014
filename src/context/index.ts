import { combineReducers, legacy_createStore } from "redux";
import { wishlist } from "./wishlist";
import { cart } from "./cart";

const reducers = combineReducers({
  wishlist,
  cart,
});

export const store = legacy_createStore(reducers);
