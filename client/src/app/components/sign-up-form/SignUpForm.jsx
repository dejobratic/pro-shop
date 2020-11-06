import React, { useState } from "react"
import { useDispatch } from "react-redux"

import FormContainer from "app/components/form-container/FormContainer"
import FormInput from "app/components/form-input/FormInput"
import Button from "app/components/button/Button"

import {
  userSignUp,
  userSignUpFailure,
} from "app/redux/user-account/user-account-actions"

const SignUpForm = () => {
  const dispatch = useDispatch()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmedPassword) {
      dispatch(userSignUpFailure("Passwords must match."))
      return
    }

    dispatch(userSignUp({ name, email, password }))
  }

  return (
    <FormContainer>
      <h1>Sign Up</h1>
      <form onSubmit={onSubmit}>
        <FormInput
          name="name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          label="name"
          required
        />

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

        <FormInput
          name="confirmedPassword"
          type="password"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          label="confirm password"
          required
        />

        <Button type="submit" value="Submit form">
          Sign Up
        </Button>
      </form>
    </FormContainer>
  )
}

export default SignUpForm
