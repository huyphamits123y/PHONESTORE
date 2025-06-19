import React from 'react';
import styled from 'styled-components';
import { AppStore, CompanyInfo, ContactInfo, FooterBottom, FooterContainer, FooterHeading, FooterLink, FooterSection, FooterTop, Icon, Logo, MobileApps, PlayStore, SocialIcons, Tagline } from './style';
import logo from '../Assets/logo.png';
import topzone from '../Assets/topzone.png';
import apple from '../Assets/apple.png';
import tgdd from '../Assets/tgdd.png';
import google from '../Assets/google.png';
const FooterComponent = () => {
    return (
        <FooterContainer>
            <FooterTop>
                <FooterSection>
                    <Logo src={topzone} alt="JobOko Logo" />

                    <ContactInfo>
                        <p>LIÊN HỆ</p>
                        <p>Điện thoại: 0349.369.139</p>
                        <p>Email: huyzxv123@gmail.com</p>
                        <SocialIcons>
                            <Icon>📞</Icon>
                            <Icon>🌐</Icon>
                            <Icon>✉️</Icon>
                        </SocialIcons>
                    </ContactInfo>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>Hệ thống cửa hàng</FooterHeading>
                    <FooterLink>Xem 86 cửa hàng</FooterLink>
                    <FooterLink>Nội quy cửa hàng</FooterLink>
                    <FooterLink>Chất lượng phục vụ</FooterLink>
                    <FooterLink>Chính sách bảo hành và đổi trả</FooterLink>

                </FooterSection>
                <FooterSection>
                    <FooterHeading>Hỗ trợ khách hàng</FooterHeading>
                    <FooterLink>Điều kiện giao dịch chung</FooterLink>
                    <FooterLink>Hướng dẫn mua hàng online</FooterLink>
                    <FooterLink>Chính sách giao hàng</FooterLink>
                    <FooterLink>Hướng dẫn thanh toán</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>Về thương hiệu TopZone</FooterHeading>
                    <FooterLink>Tích điểm quà tặng Vip</FooterLink>
                    <FooterLink>Giới thiệu TopZone</FooterLink>
                    <FooterLink>Bán hàng doanh nghiệp</FooterLink>
                </FooterSection>
                <FooterSection>
                    <FooterHeading>Trung tâm bảo hành TopCare</FooterHeading>
                    <FooterLink>Giới thiệu TopCare</FooterLink>

                </FooterSection>
            </FooterTop>
            <FooterBottom>
                <CompanyInfo>
                    <p>CÔNG TY CỔ PHẦN TopZone</p>


                </CompanyInfo>
                <MobileApps>
                    <AppStore src={apple} alt="App Store" />
                    <PlayStore src={google} alt="Google Play" />
                </MobileApps>
            </FooterBottom>
        </FooterContainer>
    );
};

export default FooterComponent;
