import React, { useState } from "react"
import { ItemCard, WrapperSliderStyle } from "./style";
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";
const CarouselProductComponent = ({ items }) => {
    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000
    };

    const navigate = useNavigate();
    console.log('items', items)

    const datas = items.map((item) => ({
        _id: item?._id,
        price: item?.price

    }))
    console.log('datas', datas)
    const ids = items.map((item) => item?._id);
    console.log('ids', ids)
    console.log('datas', datas)

    const data = {
        name: items?.name,
        price: items?.price

    }
    console.log('data', data)


    const handleNavigateProduct = (id) => {
        navigate(`/productdetails/${id}`)
    }

    return (
        <WrapperSliderStyle>
            <Slider {...settings}>
                {/* <ItemCard> */}
                {items.map((item, index) => (
                    <div key={index} style={{ padding: '0 10px', marginLeft: '100px' }}>
                        <ItemCard onClick={() => handleNavigateProduct(item?._id)}>

                            <img src={item.image} alt="slider" width="100%" height="274px" />
                            <p style={{ padding: '10px', background: '#333333', width: '200px', margin: '10px auto', color: '#fff' }}>{item.name}</p>
                            <p style={{ padding: '10px', background: '#333333', width: '200px', margin: '10px auto', color: '#fff' }}>{item.price}VND</p>
                        </ItemCard>
                    </div>
                ))}

            </Slider>
        </WrapperSliderStyle>
    );
}
export default CarouselProductComponent