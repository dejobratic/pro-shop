import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

import FormContainer from "app/components/form-container/FormContainer"
import SignInForm from "app/components/sign-in-form/SignInForm"
import Warning from "app/components/warning/Warning"

import { selectUserAccountError } from "app/redux/user-account/user-account-selectors"

const UserAccountPage = ({ redirect }) => {
  const error = useSelector(selectUserAccountError)

  return (
    <>
      {error && <Warning variant="danger">{error}</Warning>}
      <SignInForm />

      <FormContainer>
        <div className="py-3">
          <div className="col">
            New Customer?{" "}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : "/register"}
            >
              Register
            </Link>
          </div>
        </div>
      </FormContainer>
    </>
  )
}

export default UserAccountPage
