import { shopAction } from "app/redux/shop/shop-actions"

const INITIAL_STATE = {
	error: null,
	products: [],
	areProductsLoaded: false,
}

const shopReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case shopAction.LOAD_SHOP_PRODUCTS_START:
			return {
				...state,
				error: null,
				areProductsLoaded: false,
			}

		case shopAction.LOAD_SHOP_PRODUCTS_SUCCESS:
			return {
				...state,
				error: null,
				products: action.payload,
				areProductsLoaded: true,
			}

		case shopAction.LOAD_SHOP_PRODUCTS_FAILURE:
			return {
				...state,
				error: action.payload,
				areProductsLoaded: true,
			}

		default:
			return state
	}
}

export default shopReducer
