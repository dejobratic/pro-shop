import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"

import OrderDetailsPage from "app/pages/order-details/OrderDetailsPage"
import Loader from "app/components/loader/Loader"
import Warning from "app/components/warning/Warning"

import { loadOrderDetails } from "app/redux/order-details/actions"

import { selectOrder } from "app/redux/order-details/selectors"
import { selectCurrentUser } from "app/redux/user-login/selectors"

const OrderDetailsPageContainer = ({ match }) => {
  const orderId = match.params.orderId
  const dispatch = useDispatch()

  const { token } = useSelector(selectCurrentUser)

  useEffect(() => {
    dispatch(loadOrderDetails(orderId, token))
  }, [dispatch, orderId, token])

  const { error, data: order, isDataLoaded } = useSelector(selectOrder)

  if (error) return <Warning variant="danger">{error}</Warning>

  if (isDataLoaded) return <OrderDetailsPage order={order} />

  return <Loader />
}

export default OrderDetailsPageContainer
