import React from "react";
import styled from "styled-components";
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
`;

export const FilterBar = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterDropdown = styled.div`
  position: relative;
  width: 200px;
`;
export const FilterButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #2b6cb0;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
`;
export const DropdownItem = styled.div`
  padding: 10px;
  background-color: ${(props) => (props.active ? '#2b6cb0' : 'white')};
  color: ${(props) => (props.active ? 'white' : 'black')};
  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }
`;
export const DropdownContent = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  z-index: 1;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
`;
export const JobList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const JobCard = styled.div`
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: white;
`;

export const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const JobTitle = styled.h2`
  font-size: 18px;
  color: #2b6cb0;
`;

export const JobCompany = styled.p`
  font-size: 14px;
  color: #4a5568;
`;

export const JobLocation = styled.p`
  font-size: 14px;
  color: #718096;
`;

export const JobSalary = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #e53e3e;
`;

export const JobDescription = styled.p`
  font-size: 14px;
  color: #2d3748;
  margin-top: 10px;
`;

export const JobAction = styled.button`
  background-color: ${(props) => (props.primary ? '#3182ce' : 'white')};
  color: ${(props) => (props.primary ? 'white' : '#3182ce')};
  border: 1px solid #3182ce;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.primary ? '#2b6cb0' : '#ebf8ff')};
  }
`;
