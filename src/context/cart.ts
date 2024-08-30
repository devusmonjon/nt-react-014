"ue client";
import { IProduct } from "@/interfaces";
import { getFromStorage, saveToStorage } from "./local-storage";

export const cart = (
  state: IProduct[] = [],
  action: { type: "TOGGLE_CART"; payload: IProduct }
) => {
  try {
    state = JSON.parse(getFromStorage("cart") || "[]");
  } catch (err) {
    console.warn(err);
  }
  let payload = action.payload;
  switch (action.type) {
    case "TOGGLE_CART":
      let index = state.findIndex(
        (item: IProduct) => item.id === action.payload.id
      );
      if (index < 0) {
        payload.qunatity = 1;
        state = [...state, payload];
      } else {
        state = state.filter((item: IProduct) => item.id !== payload.id);
      }
      try {
        saveToStorage("cart", state);
      } catch (err) {
        console.warn(err);
      }
      return state;
    default:
      return state;
  }
};
