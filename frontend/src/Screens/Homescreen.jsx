import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import Product from '../Components/Product'
import { Col, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { listProducts } from '../Actions/productActions'
const Homescreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

  useEffect(() => { 
   dispatch(listProducts())
  }, [dispatch])
    
    
    return (
        <>
            <h1>Latest Products</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message>: <Row>
                {products.map((product) => {
                    return <Col sm={12} md={6} lg={4} xl={3}>
                        <Product key={product._id} product={product}/>
                    </Col>
                })}
            </Row>}
            
        </>
    )
}

export default Homescreen
