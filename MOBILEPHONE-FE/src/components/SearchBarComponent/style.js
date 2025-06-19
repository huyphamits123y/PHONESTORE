import styled from "styled-components"
import { Button } from "antd";
import { Header } from "antd/es/layout/layout";
export const WrapperSearchBar = styled.div`

display: flex;
  justify-content: center;
  align-items: center;
.search-input, .location-select {
  padding: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 5px;
}
  .search-button {
  background-color: #00c200;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
  .advanced-search {
  margin-top: 10px;
}

.advanced-search a {
  color: white;
  text-decoration: none;
}


`
export const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const SearchBox = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 800px;
  width: 100%;
`;

export const SearchInput = styled.input`
  border: none;
  outline: none;
  font-size: 16px;
  padding: 10px;
  flex: 1;
`;

export const SearchButton = styled.button`
  background-color: #28a745;
  color: white;
  font-size: 18px;
  padding: 10px 50px;
  border: none;
  cursor: pointer;
  border-radius: 20px;
  margin-left: 10px;

  &:hover {
    background-color: #218838;
  }
`;

export const AdvancedFilter = styled.div`
  display: flex;
  align-items: center;
  margin-left: 10px;
  font-size: 16px;
  color: #999;
`;

export const FilterIcon = styled.span`
  margin-right: 5px;
`
export const WrapperDropdownSearch = styled.div`
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
export const WrapperDiv = styled.div`

   
    position: relative;
    padding:10px 0;
 &:hover .dropdown-search {
      display: block;
    }
`





export const DropdownContainer = styled.div`
  position: relative;
  width: 200px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: white;
 border-left: 2px solid black;
 border-right: 2px solid black;
 border-top: 2px solid #FFFFFF;
 border-bottom: 2px solid #FFFFFF;
  cursor: pointer;
 
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
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

