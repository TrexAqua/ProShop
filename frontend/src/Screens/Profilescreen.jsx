import React, { useState, useEffect } from 'react'
import { Form, Button, Row, Col, Table, Nav } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import {Link} from 'react-router-dom'
import { getUserDetails, updateUserProfile } from '../Actions/userActions'
import {listMyOrders} from '../Actions/orderActions'
const Profilescreen = ({location, history}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const updateUser = useSelector(state => state.updateUser)
    
    const orderListMy = useSelector(state => state.orderListMy)
    const { loading:loadingOrders,error:errorOrders, orders } = orderListMy

    const { success } = updateUser
    
    useEffect(() => {
        if (!userInfo) {
            history.push('/login')
        } else {
            if (!userInfo.name) {
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(userDetails.user.name)
                setEmail(userDetails.user.email)              
            }
        }
    },[dispatch, history, userInfo, user, userDetails])

    const sumbitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords Do Not Match!')
        } else {
            dispatch(updateUserProfile({ id: user._id, name, email, password }))
        }      
     }

    return <Row>
        <Col md={3}>
            <h2>User Profile</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {success && <Message variant='success'>Profile Updated</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading&&<Loader/>}
            <Form onSubmit={sumbitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e)=> setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Adress</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                 <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' placeholder='Enter password' value={password} onChange={(e)=> setPassword(e.target.value)}></Form.Control>
                </Form.Group>
                 <Form.Group controlId='confirmPassword'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type='password' placeholder='Confirm Password' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)}></Form.Control>
                </Form.Group>
                <Button type='sumbit' variant='primary'>
                    Update
                </Button>
            </Form>
        </Col>
         <Col md={9}>
        <h2>My Orders</h2>
        {loadingOrders ? (
          <Loader />
        ) : errorOrders ? (
          <Message variant='danger'>{errorOrders}</Message>
        ) : (
          <Table striped bordered hover responsive className='table-sm'>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
                {orders.map((order) => {
    
                  return  <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice}</td>
                  <td>
                    {order.isPaid ? (
                      order.paidAt.substring(0, 10)
                    ) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                  </td>
                  <td>
                    {order.isDelivered === true ? order.deliveredAt.substring(0, 10) : (
                      <i className='fas fa-times' style={{ color: 'red' }}></i>
                    )}
                      </td>
                      <td>
                          <Nav.Link to={`/order/${order._id}`} as={Link}>
                            <Button className='btn-sm' variant='light'>Details</Button>
                          </Nav.Link>
                      </td>
                </tr>
              })}
            </tbody>
          </Table>
        )}
      </Col>
    </Row>
}

export default Profilescreen
