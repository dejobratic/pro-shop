import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import FormContainer from "app/components/form-container/FormContainer"
import SignInForm from "app/components/sign-in-form/SignInForm"
import SignUpForm from "app/components/sign-up-form/SignUpForm"
import Warning from "app/components/warning/Warning"

import { selectUserAccountError } from "app/redux/user-account/user-account-selectors"

const UserAccountPage = () => {
  const error = useSelector(selectUserAccountError)

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
