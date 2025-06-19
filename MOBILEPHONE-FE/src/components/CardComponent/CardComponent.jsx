import React, { useState } from 'react'
import Meta from 'antd/lib/card/Meta'
import { Card, Image } from 'antd'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperReporText, WrapperStyleTextSell } from './style'
// import imageProduct from '../../assets/images/imagess.png';
// import { StarFilled } from '@ant-design/icons'
// import logo from '../../assets/images/logo.png'
// import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils';
import { Navigate, useNavigate } from 'react-router-dom';
// import * as OrderService from '../../services/OrderService'
// import { useDispatch, useSelector } from 'react-redux';
// import { useQuery, useQueryClient } from "@tanstack/react-query";
const CardComponent = (props) => {

    const { countInStock, description, image, name, price, type, discount, selled, id } = props
    console.log('name', name)
    const navigate = useNavigate();




    const handleNavigateProduct = (id) => {
        navigate(`/productdetails/${id}`)
    }





    return (
        <WrapperCardStyle
            hoverable
            headStyle={{ width: '200px', height: '200px' }}

            style={{ width: 240 }}
            bodyStyle={{ padding: '10px' }}

            cover={<Image style={{ width: "240px", height: "250px", padding: '10px' }} src={image} alt="image product" preview={false} />}
            onClick={() => handleNavigateProduct(id)}
        >


            <div style={{ marginBottom: '0px !important', display: 'block', width: '250px' }}>
                <StyleNameProduct>{name}</StyleNameProduct>

                <WrapperReporText>
                    <span style={{ marginRight: '4px' }}>

                    </span>


                </WrapperReporText>
                <WrapperPriceText>
                    <span style={{ marginRight: '8px' }}>{convertPrice(price)}</span>


                </WrapperPriceText>
            </div>
        </WrapperCardStyle>
    )
}
export default CardComponent