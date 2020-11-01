import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import ProductDetailsPage from "app/pages/product-details/ProductDetailsPage"
import Loader from "app/components/loader/Loader"
import Warning from "app/components/warning/Warning"

import { loadProductDetails } from "app/redux/product-details/product-details-actions"

import { selectProduct } from "app/redux/product-details/product-details-selectors"

const ProductDetailsPageContainer = ({ match }) => {
  const productId = match.params.productId
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadProductDetails(productId))
  }, [dispatch, productId])

  const { error, data, isDataLoaded } = useSelector(selectProduct)

  if (error) return <Warning variant="danger">{error.message}</Warning>

  if (isDataLoaded) return <ProductDetailsPage product={data} />

  return <Loader />
}

export default ProductDetailsPageContainer
