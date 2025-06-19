import React, { useState } from "react"
import { AdvancedFilter, DropdownButton, DropdownContainer, DropdownItem, DropdownList, FilterIcon, SearchBox, SearchButton, SearchContainer, SearchInput, WrapperDiv, WrapperDropdownSearch, WrapperSearchBar } from './style';

import { FaChevronDown } from "react-icons/fa";

const SearchComponent = () => {
    const provinces = [
        "Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "Khánh Hòa",
        "Kiên Giang", "Kon Tum", "Lai Châu", "Lâm Đồng", "Lạng Sơn", "Lào Cai",
        // Thêm các tỉnh khác...
    ];
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState("");

    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelect = (province) => {
        setSelectedProvince(province);
        setIsOpen(false);
    };
    return (

        <SearchBox>
            <SearchInput type="text" placeholder="Từ khóa, chức danh hoặc công ty" />



            <DropdownContainer>
                <DropdownButton onClick={toggleDropdown} style={{ color: 'black' }}>
                    {selectedProvince || "Tất cả địa điểm"}
                    <FaChevronDown style={{ margin: '0px 10px', fontSize: '10px', color: 'black' }} />
                </DropdownButton>
                {isOpen && (
                    <DropdownList>
                        {provinces.map((province, index) => (
                            <DropdownItem
                                key={index}
                                onClick={() => handleSelect(province)}
                                className={province === selectedProvince ? 'selected' : ''}
                            >
                                {province}
                            </DropdownItem>
                        ))}
                    </DropdownList>
                )}
            </DropdownContainer>


            <SearchButton>TÌM VIỆC</SearchButton>


        </SearchBox>
    )
}
export default SearchComponent