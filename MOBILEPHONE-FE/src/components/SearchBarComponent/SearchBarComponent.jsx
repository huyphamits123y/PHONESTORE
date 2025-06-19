import React, { useState } from 'react';

import { AdvancedFilter, DropdownButton, DropdownContainer, DropdownItem, DropdownList, FilterIcon, SearchBox, SearchButton, SearchContainer, SearchInput, WrapperDiv, WrapperDropdownSearch, WrapperSearchBar } from './style';
import { WrapperDropdownJob } from '../HeaderComponent/style';

import { FaChevronDown } from "react-icons/fa";
const SearchBarComponent = () => {

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
        // <WrapperSearchBar>
        //     <input
        //         type="text"
        //         placeholder="Từ khóa, chức danh hoặc công ty"
        //         className="search-input"
        //     />
        //     <select className="location-select">
        //         <option value="">Tất cả địa điểm</option>
        //         {/* Add more locations here */}
        //     </select>
        //     <button className="search-button">TÌM VIỆC</button>
        //     <div className="advanced-search">
        //         <a href="#advanced">+ Lọc nâng cao</a>
        //     </div>
        // </WrapperSearchBar>



        <SearchContainer>
            <SearchBox>
                <SearchInput type="text" placeholder="Từ khóa, chức danh hoặc công ty" style={{ color: "black" }} />


                {/* <WrapperDiv>
                    <div style={{ margin: '0px 10px' }}>
                        <a style={{ borderLeft: '1px solid black', borderRight: '1px solid black', padding: '10px' }} href="#"
                        >{location} <FaChevronDown style={{ fontSize: '10px', color: 'black' }} /></a>

                    </div>
                    <WrapperDropdownSearch className="dropdown-search">
                        <div>
                            <h4>Tiện ích cho bạn</h4>
                            <a href="#"><span className="icon">🔍</span>Tìm việc làm</a>
                            <a href="#"><span className="icon">📊</span>Việc làm của tôi</a>
                            <a href="#"><span className="icon">💼</span>Việc làm theo ngành nghề</a>
                            <a href="#"><span className="icon">💰</span>Việc làm bán thời gian/thực tập</a>

                        </div>
                    </WrapperDropdownSearch>
                </WrapperDiv> */}
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
        </SearchContainer>

    );
};

export default SearchBarComponent;
