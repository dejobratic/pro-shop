import React, { useEffect } from "react"
import { useSelector } from "react-redux"

import UserLoginPage from "app/pages/user-login/UserLoginPage"
import Loader from "app/components/loader/Loader"

import { selectUserLogin } from "app/redux/user-login/selectors"

const UserLoginPageContainer = ({ history, location }) => {
  const { currentUser, isLoaded } = useSelector(selectUserLogin)
  const redirect = location.search ? location.search.split("=")[1] : "/"

  useEffect(() => {
    if (currentUser) {
      history.push(redirect)
    }
  }, [history, currentUser, redirect])

  if (isLoaded) return <UserLoginPage redirect={redirect} />

  return <Loader />
}

export default UserLoginPageContainer
