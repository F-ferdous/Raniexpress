import { fetchCart, fetchUser } from "../utils/fetchLocalStoageData";

const userInfo = fetchUser();
const cartInfo = fetchCart();
export const InitialState = {
  user: userInfo,
  foodItems: null,
  cartShow: false,
  cartItems: cartInfo,
};
