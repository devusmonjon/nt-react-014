import { combineReducers, legacy_createStore } from "redux";
import { wishlist } from "./wishlist";
import { cart } from "./cart";
import { token } from "./token";

const reducers = combineReducers({
  wishlist,
  cart,
  token,
});

export const store = legacy_createStore(reducers);
