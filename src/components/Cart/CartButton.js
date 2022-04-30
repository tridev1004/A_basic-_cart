import classes from "./CartButton.module.css";
import { UiActions } from "../../Store/UI_slice";
import { useDispatch, useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
 const cartQuantity= useSelector((state)=>state.cart.totalQuantity)
  const togglecartHAndler = () => {
    dispatch(UiActions.toggle());
    dispatch(UiActions.toggle());
  };
  return (
    <button onClick={togglecartHAndler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartQuantity}</span>
    </button>
  );
};

export default CartButton;
