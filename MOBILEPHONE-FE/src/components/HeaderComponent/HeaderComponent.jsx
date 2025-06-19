import React, { useEffect, useState } from 'react';
import logo from '../Assets/logo.png';
import topzone from '../Assets/topzone.png';
import camera1 from '../Assets/camera1.png';
import { WrapperContentPopup, WrapperDropdownContent, WrapperDropdownJob, WrapperHeader, WrapperNav, WrapperTextHeaderSmall } from './style';
import { useSelector } from 'react-redux';
import { CgProfile } from "react-icons/cg";
import * as CategoryService from '../../services/CategoryService';


import { CiCamera } from "react-icons/ci";
import { UserOutlined, CaretDownOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { SlNote } from "react-icons/sl";
import { LuLogOut } from "react-icons/lu";
import { Col, Row, Badge, Popover, Button } from 'antd'
import { ImProfile } from "react-icons/im";
import { PiPackageDuotone } from "react-icons/pi";
import { IoPersonAddSharp } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { resetUser } from '../../redux/slides/userSlide';
import { useNavigate } from 'react-router-dom';
const HeaderComponent = (user) => {
    // const user = useSelector((state) => state?.user);
    // console.log('user', user.email)
    // console.log('user', user.access_token)

    // const nameCategory = category.map((item) => ({
    //     name: item.name,
    // }));
    const [category, setCategory] = useState([])
    const order = useSelector((state) => state.order)
    // const user = useSelector((state) => state.user)
    console.log('order', order?.orderItems)
    console.log('header user', user?.user)
    console.log('header id', user?.user?.id)
    const data = user?.user;
    console.log('data', data)

    const users = {
        email: data?.email,
        access_token: data?.access_token,
        isAdmin: data?.isAdmin,

    };
    console.log('useersss', users.email)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = () => {
        dispatch(resetUser())
        window.location.reload();

    }

    const content = (
        <div>
            <WrapperContentPopup onClick={handleLogout}>Đăng xuất</WrapperContentPopup>
            <WrapperContentPopup onClick={() => navigate('/profile-user')}>Thông tin người dùng</WrapperContentPopup>
            {users?.isAdmin && (
                <WrapperContentPopup onClick={() => navigate('/system-admin')}>Quản lí hệ thống</WrapperContentPopup>

            )}

        </div>

    );
    useEffect(() => {

        const getAllCategorys = async () => {
            const res = await CategoryService.getAllCategory();
            setCategory(res.data)
            return res.data;
        }
        getAllCategorys()


    }, [])

    // const namess = category.map((item) => ({
    //     name: item.name,
    // }));
    // console.log('category', namess)

    const handleNavigateType = (type) => {
        navigate("/categoryproduct", { state: type })
    }
    const handleNavigateHistory = (id) => {
        navigate(`/history/${id}`)
    }
    return (
        // <WrapperHeader>

        <WrapperNav>
            <div className="logo">
                <img style={{ width: '150px', height: '50px', marginLeft: '40px' }} src={topzone} alt="logo" />
            </div>

            {/* {
                namess.map((names) => (
                    <div className="menu-item">
                        <a onClick={() => handleNavigateType(names.name)} style={{ color: "#fff", cursor: 'pointer' }}>{names.name}</a>

                    </div>

                ))

            } */}


            <div className="menu-item">
                <a onClick={() => handleNavigateType('iPhone')} style={{ color: "#fff", cursor: 'pointer' }}>Iphone</a>

            </div>
            <div className="menu-item">
                <a onClick={() => handleNavigateType('Mac')} style={{ color: "#fff", cursor: 'pointer' }}>Mac</a>
            </div>
            <div className="menu-item">
                <a onClick={() => handleNavigateType('iPad')} style={{ color: "#fff", cursor: 'pointer' }}>iPad</a>

            </div>
            <div className="menu-item">
                <a onClick={() => handleNavigateType('Watch')} style={{ color: "#fff", cursor: 'pointer' }}>Watch</a>

            </div>
            <div className="menu-item">
                <a onClick={() => handleNavigateType('Tai nghe, loa')} style={{ color: "#fff", cursor: 'pointer' }}>Tai nghe, Loa</a>

            </div>
            <div className="menu-item">
                <a onClick={() => handleNavigateType('Phụ kiện')} style={{ color: "#fff", cursor: 'pointer' }}>Phụ Kiện</a>

            </div>
            {users?.access_token ? (

                <>

                    <Popover content={content} trigger="click">
                        <div style={{ cursor: 'pointer', color: '#fff' }}>{users?.length ? users : users?.email}</div>
                    </Popover>
                </>




            ) : (
                <div className="auth-links">
                    <a href="#" style={{ color: "#fff" }} onClick={() => navigate("/sign-in")}>Đăng nhập</a>
                    <a href="#" style={{ color: "#fff" }} onClick={() => navigate("/sign-up")}>Đăng ký</a>
                </div>
            )}

            {/* .some : kiểm tra xem có ít nhất một order?.orderItems thỏa mãn điều kiện hay không */}
            {order?.orderItems?.some(item => item.userId === user?.user?.id) ? (
                <div style={{ marginLeft: '100px', cursor: 'pointer' }} onClick={() => navigate('/cart')}>
                    <Badge
                        count={order?.orderItems?.filter(item => item?.userId === user?.user?.id).length}
                        size="small"
                    >
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>

                </div>
            ) : (
                <div style={{ marginLeft: '100px', cursor: 'pointer' }} onClick={() => navigate('/cart')}>
                    <Badge count={0} size="small">
                        <ShoppingCartOutlined style={{ fontSize: '30px', color: '#fff' }} />
                    </Badge>
                    <WrapperTextHeaderSmall>Giỏ hàng</WrapperTextHeaderSmall>

                </div>
            )}

            {users?.access_token && (
                <div style={{ cursor: 'pointer', marginLeft: '20px' }} onClick={() => handleNavigateHistory(user?.user.id)}>
                    <Badge count={0} size="small">
                        <FontAwesomeIcon
                            icon={faBagShopping}
                            style={{
                                fontSize: '30px',
                                color: '#ffffff',
                                borderRadius: '5px'
                            }}
                        />
                    </Badge>
                    <WrapperTextHeaderSmall>Đơn hàng</WrapperTextHeaderSmall>
                </div>
            )}
        </WrapperNav>
    );
};

export default HeaderComponent;