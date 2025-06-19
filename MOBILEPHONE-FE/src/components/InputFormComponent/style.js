import React from 'react';
import { Input } from "antd"
import styled from "styled-components"

export const WrapperInputStyle = styled(Input)`
 
  background: transparent !important; /* Ghi đè các thuộc tính mặc định */
  
  outline: none;
  border: 2px solid rgba(255, 255, 255, 0.2) !important;
  border-radius: 40px;
  font-size: 16px;
  color: #fff;
  padding: 20px 45px 20px 20px;
  
 
`;