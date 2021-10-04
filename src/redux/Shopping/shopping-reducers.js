import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
	products: [
		{
			id: 1,
			title: "This is the COOLEST Cube Ever",
			description:
				"This cube will keep you busy the entire day and it is very fun to play with",
			price: 15.0,
			image:
				"https://images.unsplash.com/photo-1591991731833-b4807cf7ef94?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
		},
		{
			id: 2,
			title: "Large Coffee Cup",
			description:
				"Get a big cup of coffee every morning before the day starts",
			price: 20.0,
			image:
				"https://images.unsplash.com/photo-1572119865084-43c285814d63?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
		},
		{
			id: 3,
			title: "Books That CHANGED My Life",
			description:
				"These books will keep you busy all throughout the entire lockdown and give you some great advise from famous people",
			price: 150.0,
			image:
				"https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1374&q=80",
		},
	], //id , title, description, price, img
	cart: [], //id , title, description, price, img, qunatity
	currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			// get the item data from the product array
			const item = state.products.find((prod) => prod.id === action.payload.id);

			// Check if item is in the cart already yes- returns true else false
			const inCart = state.cart.find((item) =>
				item.id === action.payload.id ? true : false,
			);
			return {
				// Copy the current state
				...state,
				// update the cart array
				cart: inCart
					? // If the item is in cart
					  state.cart.map((item) =>
							// Find the item
							item.id === action.payload.id
								? // If found increment the quantity
								  { ...item, qty: item.qty + 1 }
								: // Else return the state as it is
								  item,
					  )
					: // If not in cart, pass an new object with quantity initialised to 1
					  [...state.cart, { ...item, qty: 1 }],
			};
		case actionTypes.REMOVE_FROM_CART:
			return {
				// copy the current state
				...state,
				// returns all item whose id doesnot match with action payload id so basically the item is not contained the returned array
				cart: state.cart.filter((item) => item.id !== action.payload.id),
			};
		case actionTypes.ADJUST_QTY:
			return {
				...state,
				cart: state.cart.map((item) =>
					// Update the value of quantity from reducer to the item value
					item.id === action.payload.id
						? { ...item, qty: +action.payload.qty }
						: item,
				),
			};
		case actionTypes.LOAD_CURRENT_ITEM:
			return {
				...state,
				currentItem: action.payload,
			};
		default:
			return state;
	}
};

export default shopReducer;
