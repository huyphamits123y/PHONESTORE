import React, { useState } from 'react';
import styled from 'styled-components';
// Main container for the entire product page
export const ProductPageContainer = styled.div`
  display: flex;
  background-color: #333;
  color: #fff;
  padding: 20px;
`;

// Left section for the image gallery
export const LeftSection = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Right section for product details
export const RightSection = styled.div`
  flex: 1;
  padding: 20px;
`;
export const ImageContainer = styled.div`
  width: 300px;
  height: 500px;
  
  background-color: #222;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ThumbnailGallery = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
  border: ${(props) => (props.selected ? '2px solid #00f' : '1px solid #777')};
  cursor: pointer;
  border-radius: 4px;
`;
export const Title = styled.h2`
  font-size: 24px;
  color: #fff;
`;

export const Price = styled.div`
  font-size: 28px;
  color: #ffc107;
  margin: 10px 0;
`;

export const Options = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
`;

export const OptionButton = styled.button`
  background-color: ${(props) => (props.selected ? '#555' : '#222')};
  color: ${(props) => (props.selected ? '#fff' : '#aaa')};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #444;
  }
`;
