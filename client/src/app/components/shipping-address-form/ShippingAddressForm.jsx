import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

import FormContainer from "app/components/form-container/FormContainer"
import FormInput from "app/components/form-input/FormInput"
import Button from "app/components/button/Button"

import {
  saveShippingAddress,
  saveCurrentCheckoutStep,
} from "app/redux/checkout/actions"

import {
  selectShippingAddress,
  selectCurrentCheckoutStep,
} from "app/redux/checkout/selectors"

const ShippingAddressForm = () => {
  const dispatch = useDispatch()
  const defaultAddr = useSelector(selectShippingAddress) || {}
  const currentCheckoutStep = useSelector(selectCurrentCheckoutStep)

  const [address, setAddress] = useState(defaultAddr.address)
  const [city, setCity] = useState(defaultAddr.city)
  const [postalCode, setPostalCode] = useState(defaultAddr.postalCode)
  const [country, setCountry] = useState(defaultAddr.country)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(saveShippingAddress({ address, city, postalCode, country }))
    dispatch(saveCurrentCheckoutStep(currentCheckoutStep + 1))
  }

  return (
    <FormContainer>
      <h2>Shipping</h2>
      <form onSubmit={onSubmit}>
        <FormInput
          name="address"
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          label="Street Address"
          required
        />

        <FormInput
          name="city"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          label="City"
          required
        />

        <FormInput
          name="postalCode"
          type="text"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
          label="Postal Code"
          required
        />

        <FormInput
          name="country"
          type="text"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          label="Country"
          required
        />

        <Button type="submit">Continue</Button>
      </form>
    </FormContainer>
  )
}

export default ShippingAddressForm
