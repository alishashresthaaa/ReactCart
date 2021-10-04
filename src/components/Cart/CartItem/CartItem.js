import React, {useState} from "react";
import styles from "./CartItem.module.css";
import { connect } from "react-redux";
import {
	removeFromCart,
	adjustQty,
} from "../../../redux/Shopping/shopping-action";

const CartItem = ({itemData, removeFromCart, adjustQty}) => {
    const { id, image, title, description, qty } = itemData;
    const [input, setInput] = useState(qty);
	const onChangeHandler = (e) => {
		setInput(e.target.value);
		adjustQty(id, e.target.value);
	};
  return (
    <div className={styles.cartItem}>
      <img className={styles.cartItem__image} src={image} alt={title} />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{title}</p>
        <p className={styles.details__desc}>{description}</p>
        <p className={styles.details__price}>$ 10.00</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className={styles.actions__deleteItemBtn}
          onClick={() => removeFromCart(id)}
        >
          <img
            src="https://image.flaticon.com/icons/svg/709/709519.svg"
            alt=""
          />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
	return {
		removeFromCart: (id) => dispatch(removeFromCart(id)),
		adjustQty: (id, value) => dispatch(adjustQty(id, value)),
	};
};



export default connect(null, mapDispatchToProps)(CartItem);

