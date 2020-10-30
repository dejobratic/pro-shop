import { productDetailsActions } from "app/redux/product-details/product-details-actions"

const INITIAL_STATE = {
	error: null,
	data: {},
	isDataLoaded: false,
}

const productDetailsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case productDetailsActions.LOAD_PRODUCT_DETAILS_START:
			return {
				...state,
				error: null,
				isDataLoaded: false,
			}

		case productDetailsActions.LOAD_PRODUCT_DETAILS_SUCCESS:
			return {
				...state,
				error: null,
				data: action.payload,
				isDataLoaded: true,
			}

		case productDetailsActions.LOAD_PRODUCT_DETAILS_FAILURE:
			return {
				...state,
				error: action.payload,
				data: {},
				isDataLoaded: true,
			}

		default:
			return state
	}
}

export default productDetailsReducer
