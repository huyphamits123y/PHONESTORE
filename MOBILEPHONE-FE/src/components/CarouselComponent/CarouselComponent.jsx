import React from "react"
import { ItemCard, WrapperSliderStyle } from "./style";
import Slider from 'react-slick';
import { useNavigate } from "react-router-dom";
const CarouselComponent = ({ items }) => {
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000
    };

    const navigate = useNavigate();
    const handleNavigateType = (type) => {
        navigate("/categoryproduct", { state: type })
    }
    return (
        <WrapperSliderStyle>
            <Slider {...settings}>
                {/* <ItemCard> */}
                {items.map((item, index) => (
                    <div key={index} style={{ padding: '0 10px', marginLeft: '100px' }}>
                        <ItemCard onClick={() => handleNavigateType(item.name)}>
                            <img src={item.image} alt="slider" width="100%" height="274px" />
                            <p style={{ padding: '10px', background: '#333333', width: '200px', margin: '10px auto', color: '#fff' }}>{item.name}</p>
                        </ItemCard>
                    </div>
                ))}

            </Slider>
        </WrapperSliderStyle>
    );
}
export default CarouselComponent