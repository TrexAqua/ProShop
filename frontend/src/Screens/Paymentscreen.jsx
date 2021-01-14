import React, { useState } from 'react'
import Formcontainer from '../Components/Formcontainer'
import { Form, Button, Col, } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { savePaymentMethod } from '../Actions/cartAction'
import Checkoutsteps from '../Components/Checkoutsteps'
const Paymentscreen = ({ history }) => {
    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart
    
    if (!shippingAddress) {
        history.push('/shipping')
    }


    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const dispatch = useDispatch()

    const sumbitHandler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history.push('/placeorder')
    }

    return (
        <Formcontainer>
            <Checkoutsteps step1 step2 step3/>
            <h1>Payment Method</h1>
            <Form onSubmit={sumbitHandler}>
                <Form.Group>
                    <Form.Label as='legend'>
                        Select Method
                    </Form.Label>
                    <Col>
                        <Form.Check type='radio' label='PayPal Or Credit Card' id='PayPal' name='paymentMethod' value='PayPal' checked onChange={e => setPaymentMethod(e.target.value)}></Form.Check>
                    </Col>
                </Form.Group>
                <Button type='sumbit' variant='primary'>Continue</Button>
            </Form>
        </Formcontainer>
    )
}

export default Paymentscreen
