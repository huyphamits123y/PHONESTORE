import { Button } from "antd";
import styled from "styled-components";

export const WrapperLogin = styled.div`
      width:480px;
      height:480px;
     background: rgb(215,227,230);
background: radial-gradient(circle, rgba(215,227,230,1) 0%, rgba(19,19,18,1) 100%);
      border: 2px solid rgba(255, 255, 255, .2);
      backdrop-filter: blur(30px);
      box-shadow: 0 0 10px rgba(0,0,0.2)
      color:#fff;
      
      padding: 30px 40px;
`
export const WrapperBody = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
//   background: rgb(238,174,202);
// background: rgb(238,174,202);
// background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,221,233,1) 100%);
  background-color: #444444;
  background-position: center;
`;

export const WrapperText = styled.h1`
     font-size:36px;
     text-align:center;
`
export const WrapperTextLight = styled.span`
      color: rgb(13,92,182);
      font-size:13px;
      cursor: pointer;
`
export const WrapperInputBox = styled.div`
      position:relative;
      width:100%;
      height:50px;
      
      margin: 30px 0;
      
      .icon{
      position:absolute;
      right:20px;
      top:50%;
      transform:translateY(-50%);
      font-size:16px;

       
      }
`
export const WrapperRemember = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 14.5px;
    margin: -15px 0 15px;
    label, input{
        accent-color: #fff;
        margin-right:4px;
    }
    a {
       color: #fff;
       text-decoration:none;
    }
    a:hover {
    text-decoration: underline;
    }
`
export const WrapperButton = styled(Button)`
width:100%;
height:45px;
background:#fff;
border:none;
outline: none;
border-radius: 40px;
box-shadow:0 0 10px rgba(0,0,0, .1);
cursor: pointer;
font-size: 16px;
color: #333;
font-weight: 700;

`
export const WrapperRegister = styled.div`
font-size:14.5px;
text-align:center;
margin: 20px 0 15px;
p, a{
   color: #fff;
   text-decoration:none;
   font-weight:600;
}
p a:hover{
text-decoration:underline;
}
`

