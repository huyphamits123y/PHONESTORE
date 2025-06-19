import React from "react";
import styled from "styled-components";
export const SearchBox = styled.div`
  background-color: #fff;
  padding: 15px;
  margin:0px auto;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`;

export const SearchInput = styled.input`
  border: 1px solid #DDDDDD;
  outline: none;
  font-size: 16px;
  border-radius: 5px;
  color:black;
  padding: 10px;
  flex: 1;
`;

export const SearchButton = styled.button`
  background-color: #28a745;
  color: white;
  font-size: 18px;
  padding: 10px 50px;
  margin-left:20px;
  border: none;
  cursor: pointer;
  border-radius: 20px;


  &:hover {
    background-color: #218838;
  }
`;
export const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  border-radius:10px;
  background-color: white;
   border: 1px solid #DDDDDD;
   margin-left:10px;

  cursor: pointer;
 
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 10px;
    border-radius:10px;
  width: 100%;
  background-color: white;

  border: 1px solid #ccc;
  z-index:999;
   
  max-height: 200px;
  overflow-y: auto;
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const DropdownItem = styled.li`
  padding: 10px;
  cursor: pointer;
  color:black;

  &:hover {
    background-color: #f0f0f0;
  }

  &.selected {
    color: green;
    font-weight: bold;
  }
`;
