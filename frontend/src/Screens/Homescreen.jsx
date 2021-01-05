import React from 'react'
import Product from '../Components/Product'
import { Col, Row } from 'react-bootstrap'
import {useState, useEffect} from 'react'
const Homescreen = () => {
    const [products, setProducts] = useState([]) 
  useEffect(() => { 
    fetch('/api/products').then(res => res.json()).then(res => setProducts(res))
  }, [])
    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => {
                    return <Col sm={12} md={6} lg={4} xl={3}>
                        <Product key={product._id} product={product}/>
                    </Col>
                })}
            </Row>
        </>
    )
}

export default Homescreen
