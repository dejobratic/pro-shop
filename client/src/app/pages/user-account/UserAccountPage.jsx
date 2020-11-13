import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

import FormInput from "app/components/form-input/FormInput"
import Warning from "app/components/warning/Warning"
import Button from "app/components/button/Button"

import {
  userProfileUpdate,
  userProfileUpdateFailure,
} from "app/redux/user-account/actions"

import { selectUserAccountError } from "app/redux/user-account/selectors"

const UserAccountPage = ({ profile, orders }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState(profile.name)
  const [email, setEmail] = useState(profile.email)
  const [password, setPassword] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")

  const error = useSelector(selectUserAccountError)

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmedPassword) {
      dispatch(userProfileUpdateFailure("Passwords must match."))
    } else {
      dispatch(
        userProfileUpdate(
          {
            _id: profile._id,
            name,
            email,
            password,
          },
          profile.token //TODO: leaking logic fix
        )
      )
    }
  }

  return (
    <>
      {error && <Warning variant="danger">{error}</Warning>}
      <div className="row">
        <div className="col-md-3">
          <h2>User Profile</h2>
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
              Update
            </Button>
          </form>
        </div>
        <div className="col-md-9">
          <h2>Orders</h2>
          <div className="table-responsive">
            <table className="table table-sm table-striped table-bordered table-hover">
              <thead className="thead-light">
                <tr>
                  <th>Id</th>
                  <th>Date</th>
                  <th>Total</th>
                  <th>Paid</th>
                  <th>Delivered</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>
                      <Link to={`/orders/${order._id}`}>{order._id}</Link>
                    </td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>${order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: "red" }}
                        ></i>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserAccountPage
