import { productsActions } from "app/redux/products/actions"

const INITIAL_STATE = {
  error: null,
  data: [],
  isDataLoaded: false,
}

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case productsActions.LOAD_PRODUCTS_START:
      return {
        ...state,
        error: null,
        isDataLoaded: false,
      }

    case productsActions.LOAD_PRODUCTS_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.payload,
        isDataLoaded: true,
      }

    case productsActions.LOAD_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload,
        isDataLoaded: true,
      }

    default:
      return state
  }
}

export default productsReducer
