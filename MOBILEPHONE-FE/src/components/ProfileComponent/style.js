import React from 'react';
import styled from 'styled-components';

// Styled Components
export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h2`
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 80px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

export const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const ToggleLabel = styled.label`
  font-size: 14px;
  margin-left: 10px;
`;

export const RadioGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

export const RadioInput = styled.input`
  margin-right: 5px;
`;

export const SaveButton = styled(Button)`
  width: 100%;
`;