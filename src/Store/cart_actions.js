import { UiActions } from "./UI_slice";
import { cartActions } from "./cart_slice";
export const fetchCartdata = () => {
  return async (dispatch) => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://react-http-4e214-default-rtdb.firebaseio.com/cart.json"
      );

      if (!response.ok) {
        throw new Error("could not fetch the data");
      }

      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchdata();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      dispatch(
        UiActions.setnotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};

export const sendCartData = (cart) => {
  return async (dispatch) => {
    dispatch(
      UiActions.setnotification({
        status: "pending",
        title: "Sending...",
        message: "Sending cart data!",
      })
    );

    const sendRequest = async () => {
      const response = await fetch(
        "https://react-http-4e214-default-rtdb.firebaseio.com/cart.json",
        {
          method: "PUT",
          body: JSON.stringify({
            items: cart.items,
            totalQuantity: cart.totalQuantity,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Sending cart data failed.");
      }
    };

    try {
      await sendRequest();

      dispatch(
        UiActions.setnotification({
          status: "success",
          title: "Success!",
          message: "Sent cart data successfully!",
        })
      );
    } catch (error) {
      dispatch(
        UiActions.setnotification({
          status: "error",
          title: "Error!",
          message: "Sending cart data failed!",
        })
      );
    }
  };
};
export default fetchCartdata;

// const sendcartData=(cartData)=>{
//   return (dispatch)=>{
//     dispatch(
//     UiActions.setnotification({
//       status: "pending",
//       title: "Sending...",
//       message: "Sending cart data!",
//     }));
//   }
// }
