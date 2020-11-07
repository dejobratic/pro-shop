import React from "react"
import { useSelector } from "react-redux"

import SignInForm from "app/components/sign-in-form/SignInForm"
import SignUpForm from "app/components/sign-up-form/SignUpForm"
import Warning from "app/components/warning/Warning"

import { selectUserLoginError } from "app/redux/user-login/selectors"

const UserAccountPage = () => {
  const error = useSelector(selectUserLoginError)

  return (
    <>
      {error && <Warning variant="danger">{error}</Warning>}
      <div className="row">
        <div className="col">
          <SignInForm />
        </div>
        <div className="col">
          <SignUpForm />
        </div>
      </div>
    </>
  )
}

export default UserAccountPage
