import React from "react";
import styled from "styled-components";
export const FooterContainer = styled.footer`
  background-color: #444444;
  padding: 20px 50px;
  border-top: 1px solid #ccc;
`;

export const FooterTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
  border-bottom: 1px solid #ccc;
`;

export const FooterSection = styled.div`
  flex: 1;
  
  padding: 0 20px;
`;

export const Logo = styled.img`
  width: 150px;
  margin-bottom: 10px;
`;

export const Tagline = styled.p`
font-size:20px;
font-weight:bold;
  color: #555;
  margin-bottom: 20px;
`;

export const ContactInfo = styled.div`
  p {
    margin: 5px 0;
    font-size: 18px;
    color: #fff;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const Icon = styled.div`
  font-size: 20px;
  cursor: pointer;
`;

export const FooterHeading = styled.h3`
  font-weight:bold;
  color: #fff;
  font-size: 22px;
  margin-bottom: 10px;
  cursor:pointer;
`;

export const FooterLink = styled.a`
  display: block;
  cursor:pointer;
  color: #fff;
  font-size: 18px;
  margin-bottom: 8px;
  text-decoration: none;
  &:hover {
    color: #007bff;
  }
`;

export const FooterBottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 0;
`;

export const CompanyInfo = styled.div`
  p {
  font-weight:bold;
  color: #fff;
  font-size: 20px;
    margin: 5px 0;
   
  }
`;

export const MobileApps = styled.div`
  display: flex;
  gap: 20px;
`;

export const AppStore = styled.img`
  width: 120px;
  cursor:pointer;
`;

export const PlayStore = styled.img`
  width: 120px;
  cursor:pointer;
`;
