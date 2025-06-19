// import Slider from "react-slick";
// import styled from "styled-components";
// export const WrapperSliderStyle = styled(Slider)`
//        & .slick-arrow.slick-prev {
//          left:12px;
//          top:50%;
//          z-index:10;
//          &::before{
//             font-size:40px;
//             color:#fff;
//          }
//        }
//        & .slick-arrow.slick-next{
//         right:28px;
//         top:50%;
//         z-index:10;
//         &::before {
//             font-size:40px;
//             color:#fff;
//         }
//        }
//        & .slick-dots {
//         z-index: 10;
//         bottom: -2px !important;
//         li {
//             button {
//                 &::before {
//                     color:rgb(255,255,0.5);
//                 }
//             }
//         }
//         li.active {
//             button {
//                 &::before {
//                     color: #fff;
//                 }
//             }
//         }

//     }
// `

import styled from 'styled-components';
import Slider from "react-slick"; // Import Slider ở đây

export const WrapperSliderStyle = styled.div` // Thay đổi từ Slider sang div
    position: relative;
    width:90%;
    
    
    margin:0px auto;
    border-radius: 20px;
    overflow: hidden;
    
    & .slick-arrow.slick-prev {
        left: 12px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #444444;
        }
    }

    & .slick-arrow.slick-next {
        right: 28px;
        top: 50%;
        z-index: 10;
        &::before {
            font-size: 40px;
            color: #444444;
        }
    }

    & .slick-dots {
        z-index: 10;
        bottom: -2px !important;
        li {
            button {
                &::before {
                    color: rgba(255, 255, 255, 0.5);
                }
            }
        }
        li.slick-active {
            button {
                &::before {
                    color: #444444;
                }
            }
        }
    }
`;
