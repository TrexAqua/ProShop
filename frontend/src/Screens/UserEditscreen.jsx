import React, { useState, useEffect } from 'react'
import Formcontainer from '../Components/Formcontainer'
import { Link } from 'react-router-dom'
import { Form, Button} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import { getUserDetails, editUser } from '../Actions/userActions'
import { USER_EDIT_RESET } from '../Constants/userConstants'
const UserEditscreen = ({ match, history }) => {
    const userId = match.params.id

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)

    const dispatch = useDispatch()

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails

    const userEdit = useSelector(state => state.userEdit)
    const { loading:loadingEdit, error:errorEdit,success: successEdit } = userEdit
    
    useEffect(() => {
        if (successEdit) {
            dispatch({ type: USER_EDIT_RESET })
            history.push('/admin/userlist')
        } else {
            if (!user.name || user._id !== userId) {
            dispatch(getUserDetails(userId))
        } else {
            setName(user.name)
            setEmail(user.email)
            setIsAdmin(user.isAdmin)
        }
        }
    },[user, userId, dispatch, successEdit, history])

    const sumbitHandler = (e) => {
        if(window.confirm('Are You Sure?')){e.preventDefault()
        dispatch(editUser({_id: userId, name,email,isAdmin}))}
     }

    return (

        <>
            <Link to='/admin/userList' className='btn btn-light my-3'>
                Go Back?
            </Link>
        <Formcontainer>
                <h1>Edit User</h1>
                {loadingEdit && <Loader/>}
                {errorEdit && <Message variant='danger'>{errorEdit}</Message>}
                {loading === true ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                    <Form onSubmit={sumbitHandler}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e)=> setName(e.target.value)}></Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Adress</Form.Label>
                    <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e)=> setEmail(e.target.value)}></Form.Control>
                </Form.Group>

                 <Form.Group controlId='isadmin'>
                    <Form.Check type='checkbox' label='Is Admin?'checked={isAdmin} onChange={(e)=> setIsAdmin(e.target.checked)}></Form.Check>
                </Form.Group>
                <Button type='sumbit' variant='primary'>
                    Update
                </Button>
            </Form>
            )}
            
        </Formcontainer>
        </>

    )
}

export default UserEditscreen
