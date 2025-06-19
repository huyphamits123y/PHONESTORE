import React from 'react';


import { HeaderWrapper, HighlightedText, JobCount, SubText, WrapperMainContent } from './style';
import SearchBarComponent from '../SearchBarComponent/SearchBarComponent';

const MainContentComponent = () => {
    return (
        // <WrapperMainContent>
        //     <h1>CÓ <span className="highlight">+21,955</span> CÔNG TY ĐANG TUYỂN</h1>
        //     <p>Job Search Engine Đầu Tiên Do Người Việt Phát Triển</p>
        //     <SearchBarComponent />
        // </WrapperMainContent>
        <HeaderWrapper>
            <JobCount>
                CÓ <HighlightedText>+71.108</HighlightedText> VIỆC LÀM ĐANG TUYỂN
            </JobCount>
            <SubText>Job Search Engine Đầu Tiên Do Người Việt Phát Triển</SubText>
            <SearchBarComponent />
        </HeaderWrapper>

    );
};

export default MainContentComponent;