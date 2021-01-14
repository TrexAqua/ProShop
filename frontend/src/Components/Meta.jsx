import React from 'react'
import {Helmet} from 'react-helmet'
const Meta = ({title,description,keywords}) => {
    return (
        <div>
            <Helmet>  
                <title>{title}</title>
                <meta name='description' content={description}/>
                <meta name='keywords' content={keywords}/>
            </Helmet>
        </div>
    )
}

Meta.defaultProps = {
title:'Welcome To ProShop',
content:'We sell cheap products',
keywords: 'electronics,cheap electronics',
    
}

export default Meta
