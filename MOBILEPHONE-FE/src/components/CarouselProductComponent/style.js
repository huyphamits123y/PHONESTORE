import styled from 'styled-components';
import Slider from "react-slick"; // Import Slider ở đây

export const WrapperSliderStyle = styled.div` // Thay đổi từ Slider sang div
    position: relative;
    width:70%;
   
  margin: 10px auto;
     
    
    
   
    
   

    

`;
export const ItemCard = styled.div`
width: calc(100% - 30px); /* Chiều rộng trừ đi khoảng cách (10px * 2) */
height:400px;
    margin: 0 10px; /* Khoảng cách ngang giữa các ItemCard */
    border-radius: 15px;
    border: 1px solid #333333;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    cursor: pointer;
    background-color: #333333;


`;
