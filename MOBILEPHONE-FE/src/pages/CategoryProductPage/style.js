import styled from "styled-components";
import ButtonComponent from '../../components/ButtonComponent/ButtonComponent';
export const WrapperTypeProduct = styled.div`
       display: flex;
       align-items: center;
       gap: 24px;
       justify-content: flex-start;
       border-bottom: 1px solid red;
       height:44px;
`

export const WrapperButtonMore = styled(ButtonComponent)`

&:hover {
       color:#fff;
       background:rgb(13,92,182);
       span {
              color:rgb(13,92,182)
       }
      
       text-align:center
}
`

export const WrapperProducts = styled.div`
       // display:flex;
       // justify-content:center;
       // gap: 15px;
       // margin-top:20px;
       // padding-bottom: 100px;
       // flex-wrap:wrap; 
       //  overflow: hidden;

       display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
  flex-wrap: wrap; 
  overflow: hidden;
  padding-bottom: 100px; /* Khoảng cách cố định với Footer */
  ${({ visibleProducts, totalProducts }) => visibleProducts >= totalProducts && `
    padding-bottom: 100px;
  `}
`
export const MenuContainer = styled.div`
  margin-left:100px;
  display: flex;
  
  justify-content: start;
  align-items: center;
  background-color: #444444;
  padding: 10px;
`;

export const MenuItem = styled.div`
  color: ${(props) => (props.selected ? '#fff' : '#aaa')};
  margin-right: 20px;
  padding:10px
  font-size: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    color: #fff;
    
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background-color: ${(props) => (props.selected ? '#fff' : 'transparent')};
    transition: background-color 0.3s;
  }
`;