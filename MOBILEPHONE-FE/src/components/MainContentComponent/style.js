import styled from "styled-components"
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
export const WrapperMainContent = styled.main`

background-color: #003b8e;
  color: white;
  padding: 50px 0;
  h1 {
  font-size: 36px;
  }
  .highlight {
  color: #4caf50;
}
  .main-content p {
  margin-bottom: 30px;
  font-size: 18px;
}
`
export const HeaderWrapper = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #fff;
  background-color: #0c4c97;
`;

export const JobCount = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

export const HighlightedText = styled.span`
  color: #71ba5b;
`;

export const SubText = styled.p`
  font-size: 18px;
  margin-top: 10px;
  color: #bbb;
`


