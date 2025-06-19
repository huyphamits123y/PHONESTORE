import styled from "styled-components";
import React from "react";
import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f5f5f5;
  }
`;
export const CartItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  margin-bottom: 8px;
  border-radius: 8px;

  img {
    width: 80px;
    height: 80px;
    border-radius: 8px;
    object-fit: cover;
  }

  .info {
    flex: 1;
    margin-left: 16px;
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      padding: 8px;
      margin: 0 4px;
      border: none;
      background-color: #007bff;
      color: #fff;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        background-color: #0056b3;
      }
    }
  }
`;
export const ProductListWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 16px;
  background-color:#fff;
`;
export const SummaryWrapper = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  max-width: 800px;
  margin: 16px auto;

  .total {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 16px 0;
  }

  button {
    width: 100%;
    padding: 12px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;

    &:hover {
      background-color: #0056b3;
    }
  }
`;
export const FormWrapper = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  margin-top: 16px;

  h3 {
    font-size: 18px;
    margin-bottom: 16px;
  }

  .form-group {
    margin-bottom: 16px;

    label {
      display: block;
      font-size: 14px;
      margin-bottom: 8px;
    }

    input,
    select {
      width: 100%;
      padding: 8px;
      font-size: 14px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
  }

  .radio-group {
    display: flex;
    gap: 16px;
    margin-bottom: 16px;

    label {
      display: flex;
      align-items: center;

      input {
        margin-right: 8px;
      }
    }
  }
`;