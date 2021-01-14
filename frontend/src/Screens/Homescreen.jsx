import React from 'react'
import Meta from '../Components/Meta'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../Components/Message'
import Loader from '../Components/Loader'
import Product from '../Components/Product'
import Paginate from '../Components/Paginate'
import { Col, Row } from 'react-bootstrap'
import { useEffect } from 'react'
import { listProducts } from '../Actions/productActions'
import ProductCarousel from '../Components/ProductCarousel'
const Homescreen = ({match}) => {
    const keyword = match.params.keyword

    const pageNumber = match.params.pageNumber || 1

    const dispatch = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products, pages, page } = productList
  useEffect(() => { 
      dispatch(listProducts(keyword, pageNumber))
      
  }, [dispatch, keyword, pageNumber ])
    return (
        <>
            <Meta/>
            {!keyword && <ProductCarousel/>}
            <h1>Latest Products</h1>
            {loading ? <Loader /> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                <Row>
                {products.map((product) => {
                    return <Col sm={12} md={6} lg={4} xl={3}>
                        <Product key={product._id} product={product}/>
                    </Col>
                })}
                    </Row>
                    <Paginate pages={pages} page={page} keyword={keyword ? keyword : ''}/>
            </>)}
            
        </>
    )
}

export default Homescreen
