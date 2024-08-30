"ue client";
import { IProduct } from "@/interfaces";
import { getFromStorage, saveToStorage } from "./local-storage";

export const wishlist = (
  state: IProduct[] = [],
  action: { type: "TOGGLE_WISHLIST"; payload: IProduct }
) => {
  try {
    state = JSON.parse(getFromStorage("wishlist") || "[]");
  } catch (err) {
    console.warn(err);
  }
  let payload = action.payload;
  switch (action.type) {
    case "TOGGLE_WISHLIST":
      let index = state.findIndex(
        (item: IProduct) => item.id === action.payload.id
      );
      if (index < 0) {
        state = [...state, payload];
      } else {
        state = state.filter((item: IProduct) => item.id !== payload.id);
      }
      try {
        saveToStorage("wishlist", state);
      } catch (err) {
        console.warn(err);
      }
      return state;
    default:
      return state;
  }
};
