import React, { useState } from 'react'
import Formcontainer from '../Components/Formcontainer'
import { Form, Button, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveShippingAddress, shippingAddress } from '../Actions/cartAction'
import Checkoutsteps from '../Components/Checkoutsteps'
const Shippingscreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const [address, setAddress] = useState(shippingAddress.address)
    const [city, setCity] = useState(shippingAddress.city)
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode)
    const [phoneNumber, setPhoneNumber] = useState(shippingAddress.phoneNumber)

    const dispatch = useDispatch()

    const sumbitHandler = (e) => {
        e.preventDefault()
        dispatch(saveShippingAddress({ address, city, postalCode, phoneNumber }))
        history.push('/payment')
    }

    return (
        <Formcontainer>
            <Checkoutsteps step1 step2/>
            <h1>Shipping</h1>
            <Form onSubmit={sumbitHandler}>
                <Form.Group controlId='address'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control type='address' required placeholder='Enter address' value={address} onChange={(e)=> setAddress(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='city'>
                    <Form.Label>City</Form.Label>
                    <Form.Control type='address' required placeholder='Enter City' value={city} onChange={(e)=> setCity(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='postalCode'>
                    <Form.Label>Postal Code</Form.Label>
                    <Form.Control type='postalCode' required placeholder='Enter Postal Code' value={postalCode} onChange={(e)=> setPostalCode(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='phoneNumber'>
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type='phoneNumber' required placeholder='Enter Phone Number' value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)}></Form.Control>
                </Form.Group>

                <Button type='sumbit' variant='primary'>Continue</Button>
            </Form>
        </Formcontainer>
    )
}

export default Shippingscreen
