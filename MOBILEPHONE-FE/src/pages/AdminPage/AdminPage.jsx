import React from 'react'
import { Menu } from 'antd'
import { useState } from "react";
import { AppstoreOutlined, MailOutlined, SettingOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent';
import AdminUser from '../../components/AdminUser/AdminUser';
import AdminProduct from '../../components/AdminProduct/AdminProduct';
import AdminCategory from '../../components/AdminCategory/AdminCategory';
import { useSelector } from 'react-redux';
// import OrderAdmin from '../../components/OrderAdmin/OrderAdmin';
const AdminPage = () => {
    const [openKeys, setOpenKeys] = useState(['user'])
    const user = useSelector((state) => state?.user);
    const [SelectedKeys, SetSelectedKeys] = useState('')
    const renderPage = (key) => {
        switch (key) {
            case 'user':
                return (
                    <AdminUser />
                )
            case 'product':
                return (
                    <AdminProduct />
                )
            case 'category':
                return (
                    <AdminCategory />
                )
            // case 'order':
            //     return (
            //         <OrderAdmin />
            //     )
            default:
                return <></>
        }

    }
    const items = [
        {
            key: 'user',
            label: 'Người dùng',
            icon: <UserOutlined />,

        },
        {
            key: 'product',
            label: 'Sản phẩm',
            icon: <AppstoreOutlined />,

        },
        {
            key: 'category',
            label: 'Danh mục',
            icon: <AppstoreOutlined />,

        },
        // {
        //     key: 'order',
        //     label: 'Đơn hàng',
        //     icon: <ShoppingCartOutlined />,

        // },

    ];

    const onClick = (e) => {
        console.log('click ', e);
        SetSelectedKeys(e.key);
        console.log('label', e.key)
    };
    return (

        <>
            <HeaderComponent isHiddenSearch isHiddenCart user={user} />
            <div style={{ display: 'flex' }}>
                <Menu
                    onClick={onClick}
                    style={{
                        width: 256,
                        boxShadow: '1px 1px 2px #ccc',
                        height: '100vh'
                    }}
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}

                    mode="inline"
                    items={items}
                />
                <div style={{ flex: 1, padding: '15px' }}>
                    {/* {SelectedKeys === '6' && <span>Key la 6</span>} */}
                    {renderPage(SelectedKeys)}

                </div>
            </div>
        </>
    )
}
export default AdminPage