import React from "react";
import styles from "./SingleItem.module.css";
import { connect } from "react-redux";
import { addToCart } from "../../redux/Shopping/shopping-action";

const SingleItem = ({ currentItem, addToCart }) => {
  const { id, title, image, description, price } = currentItem;
  return (
    <div className={styles.singleItem}>
      <img className={styles.singleItem__image} src={image} alt={title} />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{title}</p>
        <p className={styles.details__description}>{description}</p>
        <p className={styles.details__price}>$ {price}</p>

        <button
          className={styles.details__addBtn}
          onClick={() => addToCart(id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
	return {
		currentItem: state.shop.currentItem,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (id) => dispatch(addToCart(id)),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleItem);
