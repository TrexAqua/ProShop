import React from 'react'
import { Route } from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { Container, Navbar, Nav, NavLink, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { logout } from '../Actions/userActions'
import SearchBox from './SearchBox'
const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector(state => state.userLogin)

  const { userInfo } = userLogin

  const logoutHandler = () => {
    if (window.confirm('Are You Sure You Wanna Logout?')) {
      dispatch(logout())    
    }
  }

  return (
    <header>
      <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
          <Link to='/'>
            <Navbar.Brand>Proshop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Route render={({ history }) => <SearchBox history={history}/>}/>
            <Nav className="ml-auto">             
              <NavLink to='/cart' as={Link}><i className="fas fa-shopping-cart"></i>Cart</NavLink> 
              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>                
                    <NavDropdown.Item as={Link} to='/profile'>Profile</NavDropdown.Item>                  
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : <NavLink to='/login' as={Link}><i className="fas fa-user"></i>Sign In</NavLink>}  
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>                
                    <NavDropdown.Item as={Link} to='/admin/userlist'>Users</NavDropdown.Item>                  
                    <NavDropdown.Item as={Link} to='/admin/productlist'>Products</NavDropdown.Item>                  
                    <NavDropdown.Item as={Link} to='/admin/orderlist'>Orders</NavDropdown.Item>                  
                  
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
export default Header
