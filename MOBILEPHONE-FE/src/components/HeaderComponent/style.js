import styled from "styled-components"
import { Button, Row } from "antd";
import { Header } from "antd/es/layout/layout";
export const WrapperHeader = styled(Header)`
display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  .nav a, .auth-links a {
  margin: 0 15px;
  color: #333;
  text-decoration: none;

}
  .auth-links a {
  font-weight: bold;
}

`;
export const WrapperNav = styled.nav`
background-color: #111111;
font-family: "Times New Roman", Times, serif;
  padding: 10px;
  display: flex;
 
 
  align-items: center;
  font-size: 16px;

  .menu-item {
    
    position: relative;
    z-index:999;
    padding:20px;
    

    &:hover .dropdown-content {
      display: block;
    }
    &:hover{
   
    
    background-color:#444444;
    }
      &:hover .dropdown-job {
      display: block;
    }
      &:hover .dropdown-page {
      display: block;
    }
  }

  a {
    color: #333;
    padding:20px;
    text-decoration: none;
  }
}

a {
  color: #333;
  text-decoration: none;
}
`

export const WrapperDropdownContent = styled.div`
 display: none;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  a {
    display: block;
    padding: 8px 0;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #4caf50;
    }
  }

  .icon {
    margin-right: 10px;
  }

  .highlight {
    color: red;
  }
`
export const WrapperDropdownJob = styled.div`
 display: none;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  a {
    display: block;
    padding: 8px 0;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #4caf50;
    }
  }

  .icon {
    margin-right: 10px;
  }

  .highlight {
    color: red;
  }
`
export const WrapperDropdownPage = styled.div`
 display: none;
  position: absolute;
  top: 40px;
  left: 0;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  a {
    display: block;
    padding: 8px 0;
    color: #333;
    text-decoration: none;

    &:hover {
      color: #4caf50;
    }
  }

  .icon {
    margin-right: 10px;
  }

  .highlight {
    color: red;
  }
`
export const WrapperHeaderRow = styled(Row)`

      padding: 10px 120px;
      align-items:center;
      gap:16px;
      flex-wrap:nowrap;
      width:1270px;
      padding:10px 0;
      background-color: rgb(26,148,255)
      
`
export const WrapperTextHeader = styled.span`
     font-size: 18px;
     color: #fff;
     font-weight:bold;
     text-align: left;
`

export const WrapperHeaderAccount = styled.div`
       display:flex;
       align-items:center;
       color:#fff;
       gap:10px;
       font-size:12px;
`
export const WrapperTextHeaderSmall = styled.span`
       font-size:12px;
       color:#fff;
       white-space:nowrap
`
export const WrapperContentPopup = styled.p`
cursor: pointer;
&:hover{
color : rgb(26,148,255);


}

`
