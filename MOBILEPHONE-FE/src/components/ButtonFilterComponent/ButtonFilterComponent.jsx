import React, { useState } from "react";
import { Container, DropdownContent, DropdownItem, FilterBar, FilterButton, FilterDropdown, JobCard, JobCompany, JobDescription, JobHeader, JobList, JobLocation, JobSalary, JobTitle } from "./style";
import { FaChevronDown } from "react-icons/fa";
const ButtonFilerComponent = () => {
    const [showDropdownTime, setShowDropdownTime] = useState(false);
    const [showDropdownSalary, setShowDropdownSalary] = useState(false);
    const [showDropdownExperience, setShowDropdownExperience] = useState(false);
    const [showDropdownType, setShowDropdownType] = useState(false);
    const [showDropdownRank, setShowDropdownRank] = useState(false);

    const [selectedTime, setSelectedTime] = useState('Tất cả thời gian');

    const [selectedSalary, setSelectedSalary] = useState('Mức lương');
    const [selectedExperience, setSelectedExperience] = useState('Tất cả kinh nghiệm');
    const [selectedType, setSelectedType] = useState('Tất cả loại hình');
    const [selectedRank, setSelectedRank] = useState('Tất cả cấp bậc');

    // const toggleDropdownTime = () => {
    //     setShowDropdownTime(!showDropdownTime);
    //     if (showDropdownType === true) {
    //         setShowDropdownType(!showDropdownType)
    //     }
    //     if (showDropdownRank === true) {
    //         setShowDropdownRank(!showDropdownRank)
    //     }
    //     if (showDropdownExperience === true) {
    //         setShowDropdownExperience(!showDropdownExperience)
    //     }
    //     if (showDropdownSalary === true) {
    //         setShowDropdownSalary(!showDropdownSalary)
    //     }
    // }
    // const toggleDropdownSalary = () => {
    //     setShowDropdownSalary(!showDropdownSalary)
    //     if (showDropdownType === true) {
    //         setShowDropdownType(!showDropdownType)
    //     }
    //     if (showDropdownRank === true) {
    //         setShowDropdownRank(!showDropdownRank)
    //     }
    //     if (showDropdownExperience === true) {
    //         setShowDropdownExperience(!showDropdownExperience)
    //     }
    //     if (showDropdownTime === true) {
    //         setShowDropdownTime(!showDropdownTime)
    //     }
    // }

    // const toggleDropdownExperience = () => {
    //     setShowDropdownExperience(!showDropdownExperience);
    //     if (showDropdownType === true) {
    //         setShowDropdownType(!showDropdownTime)
    //     }
    //     if (showDropdownRank === true) {
    //         setShowDropdownRank(!showDropdownRank)
    //     }
    //     if (showDropdownSalary === true) {
    //         setShowDropdownSalary(!showDropdownSalary)
    //     }
    //     if (showDropdownTime === true) {
    //         setShowDropdownTime(!showDropdownTime)
    //     }
    // }
    // const toggleDropdownRank = () => {
    //     setShowDropdownRank(!showDropdownRank)
    // }
    // if (showDropdownType === true) {
    //     setShowDropdownType(!showDropdownTime)
    // }

    // if (showDropdownSalary === true) {
    //     setShowDropdownSalary(!showDropdownSalary)
    // }
    // if (showDropdownTime === true) {
    //     setShowDropdownTime(!showDropdownTime)
    // }
    // if (showDropdownType === true) {
    //     setShowDropdownType(!showDropdownTime)
    // }

    // ;
    // const toggleDropdownType = () => {
    //     setShowDropdownType(!showDropdownType)
    //     if (showDropdownTime === true) {
    //         setShowDropdownTime(!showDropdownTime)
    //     }
    //     if (showDropdownRank === true) {
    //         setShowDropdownRank(!showDropdownRank)
    //     }
    //     if (showDropdownExperience === true) {
    //         setShowDropdownExperience(!showDropdownExperience)
    //     }
    //     if (showDropdownSalary === true) {
    //         setShowDropdownSalary(!showDropdownSalary)
    //     }

    // }
    const toggleDropdownTime = () => {
        setShowDropdownTime((prev) => !prev);
        setShowDropdownSalary(false);
        setShowDropdownExperience(false);
        setShowDropdownType(false);
        setShowDropdownRank(false);
    };

    const toggleDropdownSalary = () => {
        setShowDropdownSalary((prev) => !prev);
        setShowDropdownTime(false);
        setShowDropdownExperience(false);
        setShowDropdownType(false);
        setShowDropdownRank(false);
    };

    const toggleDropdownExperience = () => {
        setShowDropdownExperience((prev) => !prev);
        setShowDropdownTime(false);
        setShowDropdownSalary(false);
        setShowDropdownType(false);
        setShowDropdownRank(false);
    };

    const toggleDropdownType = () => {
        setShowDropdownType((prev) => !prev);
        setShowDropdownTime(false);
        setShowDropdownSalary(false);
        setShowDropdownExperience(false);
        setShowDropdownRank(false);
    };

    const toggleDropdownRank = () => {
        setShowDropdownRank((prev) => !prev);
        setShowDropdownTime(false);
        setShowDropdownSalary(false);
        setShowDropdownExperience(false);
        setShowDropdownType(false);
    };
    const deleteSearch = () => {
        setShowDropdownRank(false);
        setShowDropdownTime(false);
        setShowDropdownSalary(false);
        setShowDropdownExperience(false);
        setShowDropdownType(false);
        setSelectedTime('Tất cả thời gian');
        setSelectedType('Tất cả loại hình');
        setSelectedSalary('Tất cả mức lương');
        setSelectedRank('Tất cả cấp bấc');
        setSelectedExperience('Tất cả kinh nghiệm');


    }


    const selectTime = (time) => {
        setSelectedTime(time);
        setShowDropdownTime(false);

    };
    const selectSalary = (salary) => {
        setSelectedSalary(salary);
        setShowDropdownSalary(false);
    };
    const selectExprerience = (experience) => {
        setSelectedExperience(experience);
        setShowDropdownExperience(false);
    };
    const selectType = (type) => {
        setSelectedType(type);
        setShowDropdownType(false);

    };
    const selectRank = (rank) => {
        setSelectedRank(rank);
        setShowDropdownRank(false);
    };
    const jobsData = [
        {
            id: 1,
            title: 'Nhân Viên Kinh Doanh',
            company: 'Công Ty Cổ Phần Công Nghệ Sapo',
            location: 'Hà Nội, Hồ Chí Minh, Hải Phòng',
            salary: '6 - 13 Triệu VND + Hoa hồng',
            description: 'Có kinh nghiệm Tư vấn/Bán hàng/Sale/CSKH từ 3 tháng trở lên...',
        },
        {
            id: 2,
            title: 'Fresher Manual Tester',
            company: 'Công Ty TNHH Phần Mềm FPT',
            location: 'Hà Nội',
            salary: '5 - 7 Triệu VND',
            description: 'Tham gia kiểm thử các sản phẩm phần mềm...',
        },
        // Thêm dữ liệu mẫu khác nếu cần
    ];

    return (

        <Container>
            <FilterBar>
                <FilterDropdown>
                    <FilterButton onClick={toggleDropdownTime}>{selectedTime} <FaChevronDown style={{ margin: '0px 10px', fontSize: '10px', color: 'white' }} /></FilterButton>
                    <DropdownContent show={showDropdownTime}>
                        <DropdownItem active={selectedTime === 'Tất cả thời gian'} onClick={() => selectTime('Tất cả thời gian')}>
                            Tất cả thời gian
                        </DropdownItem>
                        <DropdownItem active={selectedTime === '24h trước'} onClick={() => selectTime('24h trước')}>
                            24h trước
                        </DropdownItem>
                        <DropdownItem active={selectedTime === '3 ngày trước'} onClick={() => selectTime('3 ngày trước')}>
                            3 ngày trước
                        </DropdownItem>
                        <DropdownItem active={selectedTime === '7 ngày trước'} onClick={() => selectTime('7 ngày trước')}>
                            7 ngày trước
                        </DropdownItem>
                        <DropdownItem active={selectedTime === '1 tháng trước'} onClick={() => selectTime('1 tháng trước')}>
                            1 tháng trước
                        </DropdownItem>
                    </DropdownContent>
                </FilterDropdown>
                <FilterDropdown>
                    <FilterButton onClick={toggleDropdownType}>{selectedType} <FaChevronDown style={{ margin: '0px 10px', fontSize: '10px', color: 'white' }} /></FilterButton>
                    <DropdownContent show={showDropdownType}>
                        <DropdownItem active={selectedType === 'Tất cả loại hình'} onClick={() => selectType('Tất cả loại hình')}>
                            Tất cả loại hình
                        </DropdownItem>
                        <DropdownItem active={selectedType === 'Toàn thời gian'} onClick={() => selectType('Toàn thời gian')}>
                            Toàn thời gian
                        </DropdownItem>
                        <DropdownItem active={selectedType === 'Bán thời gian '} onClick={() => selectType('Bán thời gian ')}>
                            Bán thời gian
                        </DropdownItem>
                        <DropdownItem active={selectedType === 'Thời vụ / Làm thêm'} onClick={() => selectType('Thời vụ / Làm thêm')}>
                            Thời vụ / Làm thêm
                        </DropdownItem>
                        <DropdownItem active={selectedType === 'Làm tại nhà / Hybrid'} onClick={() => selectType('Làm tại nhà / Hybrid')}>
                            Làm tại nhà / Hybrid
                        </DropdownItem>
                        <DropdownItem active={selectedType === 'Thực tập'} onClick={() => selectType('Thực tập')}>
                            Thực tập
                        </DropdownItem>
                    </DropdownContent>
                </FilterDropdown>
                <FilterDropdown>
                    <FilterButton onClick={toggleDropdownSalary}>{selectedSalary} <FaChevronDown style={{ margin: '0px 10px', fontSize: '10px', color: 'white' }} /></FilterButton>
                    <DropdownContent show={showDropdownSalary}>
                        <DropdownItem active={selectedSalary === 'Tất cả mức lương'} onClick={() => selectSalary('Tất cả mức lương')}>
                            Tất cả mức lương
                        </DropdownItem>
                        <DropdownItem active={selectedSalary === 'Dưới 10 triệu'} onClick={() => selectSalary('Dưới 10 triệu')}>
                            Dưới 10 triệu
                        </DropdownItem>
                        <DropdownItem active={selectedSalary === '10 - 15 triệu'} onClick={() => selectSalary('10 - 15 triệu')}>
                            10 - 15 triệu
                        </DropdownItem>
                        <DropdownItem active={selectedSalary === '15 - 20 triệu'} onClick={() => selectSalary('15 - 20 triệu')}>
                            15 - 20 triệu
                        </DropdownItem>
                        <DropdownItem active={selectedSalary === '20 - 30 triệu'} onClick={() => selectSalary('20 - 30 triệu')}>
                            20 - 30 triệu
                        </DropdownItem>
                        <DropdownItem active={selectedSalary === 'Trên 30 triệu'} onClick={() => selectSalary('Trên 30 triệu')}>
                            Trên 30 triệu
                        </DropdownItem>
                        <DropdownItem active={selectedSalary === 'Thỏa thuận'} onClick={() => selectSalary('Thỏa thuận')}>
                            Thỏa thuận
                        </DropdownItem>
                    </DropdownContent>
                </FilterDropdown>
                <FilterDropdown>
                    <FilterButton onClick={toggleDropdownRank}>{selectedRank} <FaChevronDown style={{ margin: '0px 10px', fontSize: '10px', color: 'white' }} /></FilterButton>
                    <DropdownContent show={showDropdownRank}>
                        <DropdownItem active={selectedRank === 'Tất cả cấp bậc'} onClick={() => selectRank('Tất cả cấp bậc')}>
                            Tất cả cấp bậc
                        </DropdownItem>
                        <DropdownItem active={selectedRank === 'Thực tập sinh'} onClick={() => selectRank('Thực tập sinh')}>
                            Thực tập sinh
                        </DropdownItem>
                        <DropdownItem active={selectedRank === 'Nhân viên'} onClick={() => selectRank('Nhân viên')}>
                            Nhân viên
                        </DropdownItem>
                        <DropdownItem active={selectedRank === 'Quản lí'} onClick={() => selectRank('Quản lí')}>
                            Quản lí
                        </DropdownItem>
                        <DropdownItem active={selectedRank === 'Lãnh đạo'} onClick={() => selectRank('Lãnh đạo')}>
                            Lãnh đạo
                        </DropdownItem>

                    </DropdownContent>
                </FilterDropdown>
                <FilterDropdown>
                    <FilterButton onClick={toggleDropdownExperience}>{selectedExperience} <FaChevronDown style={{ margin: '0px 10px', fontSize: '10px', color: 'white' }} /></FilterButton>
                    <DropdownContent show={showDropdownExperience}>
                        <DropdownItem active={selectedExperience === 'Tất cả kinh nghiệm'} onClick={() => selectExprerience('Tất cả kinh nghiệm')}>
                            Tất cả kinh nghiệm
                        </DropdownItem>
                        <DropdownItem active={selectedExperience === 'Dưới 1 năm'} onClick={() => selectExprerience('Dưới 1 năm')}>
                            Dưới 1 năm
                        </DropdownItem>
                        <DropdownItem active={selectedExperience === '1 - 3 năm'} onClick={() => selectExprerience('1 - 3 năm')}>
                            1 - 3 năm
                        </DropdownItem>
                        <DropdownItem active={selectedExperience === '3 - 5 năm'} onClick={() => selectExprerience('3 - 5 năm')}>
                            Quản lí
                        </DropdownItem>
                        <DropdownItem active={selectedExperience === 'Trên 5 năm'} onClick={() => selectExprerience('Trên 5 năm')}>
                            Trên 5 năm
                        </DropdownItem>
                        <DropdownItem active={selectedExperience === 'Không yêu cầu'} onClick={() => selectExprerience('Không yêu cầu')}>
                            Không yêu cầu
                        </DropdownItem>


                    </DropdownContent>

                </FilterDropdown>
                <button style={{ background: 'white', border: '1px solid blue', borderRadius: '10px', cursor: 'pointer' }} onClick={deleteSearch}>Xóa lọc</button>


                {/* Có thể thêm các bộ lọc khác */}
            </FilterBar>
            {/* <JobList>
                {jobsData.map((job) => (
                    <JobCard key={job.id}>
                        <JobHeader>
                            <div>
                                <JobTitle>{job.title}</JobTitle>
                                <JobCompany>{job.company}</JobCompany>
                                <JobLocation>{job.location}</JobLocation>
                            </div>
                            <JobSalary>{job.salary}</JobSalary>
                        </JobHeader>
                        <JobDescription>{job.description}</JobDescription>
                    </JobCard>
                ))}
            </JobList> */}
        </Container>
    )
}
export default ButtonFilerComponent
