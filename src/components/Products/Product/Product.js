import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, loadCurrentItem } from "../../../redux/Shopping/shopping-action";
import styles from "./Product.module.css";

const Product = ({ productData, addToCart, loadCurrentItem }) => {
  const { id, image, title, description, price } = productData;
  return (
    <div className={styles.product}>
      <img className={styles.product__image} src={image} alt={title} />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{title}</p>
        <p className={styles.details__desc}>{description}</p>
        <p className={styles.details__price}>$ {price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${id}`}>
          <button
            className={`${styles.buttons__btn} ${styles.buttons__view}`}
            onClick={() => loadCurrentItem(productData)}
          >
           View Item
          </button>
        </Link>
        <button
          className={`${styles.buttons__btn} ${styles.buttons__add}`}
          onClick={() => addToCart(id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
    return{
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem:(item) => dispatch(loadCurrentItem(item))
    }
}


export default connect(null, mapDispatchToProps)(Product);
