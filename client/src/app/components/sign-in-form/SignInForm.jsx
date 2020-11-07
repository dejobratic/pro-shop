import React, { useState } from "react"
import { useDispatch } from "react-redux"

import FormContainer from "app/components/form-container/FormContainer"
import FormInput from "app/components/form-input/FormInput"
import Button from "app/components/button/Button"

import { userSignIn } from "app/redux/user-login/user-login-actions"

const SignInForm = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(userSignIn(email, password))
  }

  return (
    <FormContainer>
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <FormInput
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          required
        />

        <Button type="submit" value="Submit form">
          Sign In
        </Button>
      </form>
    </FormContainer>
  )
}

export default SignInForm
