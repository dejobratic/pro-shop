import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import UserAccountPage from "app/pages/user-account/UserAccountPage"
import Loader from "app/components/loader/Loader"

import { selectUserAccount } from "app/redux/user-account/user-account-selectors"

const UserAccountPageContainer = ({ history, location }) => {
  const { currentUser, isLoaded } = useSelector(selectUserAccount)
  const redirect = location.search ? location.search.split("=")[1] : "/"

  useEffect(() => {
    if (currentUser) {
      history.push(redirect)
    }
  }, [history, currentUser, redirect])

  if (isLoaded) return <UserAccountPage redirect={redirect} />

  return <Loader />
}

export default UserAccountPageContainer
