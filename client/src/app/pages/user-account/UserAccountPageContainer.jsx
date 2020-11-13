import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import UserAccountPage from "app/pages/user-account/UserAccountPage"
import Loader from "app/components/loader/Loader"

import { loadUserProfile, loadUserOrders } from "app/redux/user-account/actions"
import { selectUserAccount } from "app/redux/user-account/selectors"

import { selectCurrentUser } from "app/redux/user-login/selectors"

const UserAccountPageContainer = ({ history }) => {
  const dispatch = useDispatch()
  const currentUser = useSelector(selectCurrentUser)

  useEffect(() => {
    if (currentUser) {
      dispatch(loadUserProfile(currentUser._id, currentUser.token))
      dispatch(loadUserOrders(currentUser._id, currentUser.token))
    } else {
      history.push("/login")
    }
  }, [history, dispatch, currentUser])

  const { profile, orders, isDataLoaded } = useSelector(selectUserAccount)

  if (isDataLoaded)
    return (
      <UserAccountPage
        profile={{ ...profile, token: currentUser.token }}
        orders={orders}
      /> //TODO: leaking logic fix
    )

  return <Loader />
}

export default UserAccountPageContainer
