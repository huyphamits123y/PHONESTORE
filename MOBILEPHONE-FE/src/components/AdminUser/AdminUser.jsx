import React from 'react'

import ModalComponent from "../ModalComponent/ModalComponent";
import TableComponent from '../TableComponent/TableComponent'
import { useEffect } from "react"
import { PlusCircleFilled, DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Button, Modal, Form } from 'antd'
import { WrapperHeader, WrapperUploadFile } from './style'
import { useState } from 'react'
import { getBase64 } from '../../utils'
import * as UserService from '../../services/UserService';
import { useMutationHooks } from "../../hooks/useMutationHook";
import InputComponent from '../InputComponent/InputComponent';
import * as message from '../../components/Message/Message';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { useSelector } from 'react-redux'
const AdminUser = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const [rowSelected, setRowSelected] = useState('')
    const user = useSelector((state) => state?.user)
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
    const queryClient = useQueryClient();
    const renderAction = () => {
        return (
            <div>
                <DeleteOutlined style={{ color: 'organe', fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)} />

                <EditOutlined style={{ color: 'organe', fontSize: '30px', cursor: 'pointer' }} onClick={handleDetailsUser} />
            </div>
        )
    }

    const [stateUser, setStateUser] = useState({
        name: '',
        email: '',
        phone: '',
        isAdmin: false,

    })
    const [stateUserDetails, setStateUserDetails] = useState({
        name: '',
        email: '',
        phone: '',
        isAdmin: false,


    })
    const mutation = useMutationHooks(
        (data) => {
            const {
                name,
                email,
                phone,
                isAdmin,

            } = data
            const res = UserService.createUser(
                {
                    name,
                    email,
                    phone,
                    isAdmin
                }
            )
            return res;
        }
    )

    const mutationUpdate = useMutationHooks(

        async (data) => {

            const { id, token, ...rests } = data;


            const res = await UserService.updateUser(id, rests, token);


            return res;
        }
    );
    const mutationDelete = useMutationHooks(

        async (data) => {

            const { id, token } = data;


            const res = await UserService.deleteUser(id, token);


            return res;
        }
    );


    const [form] = Form.useForm();
    const getAllUser = async () => {
        const res = await UserService.getAllUser(user?.access_token)
        console.log('getalluser', res.data)
        return res;
    }
    const fetchGetDetailsUser = async (rowSelected) => {
        console.log('row', rowSelected)
        try {
            const res = await UserService.getDetailsUser(rowSelected)

            if (res?.data) {
                setStateUserDetails({
                    name: res?.data?.name,
                    email: res?.data?.email,
                    phone: res?.data?.phone,
                    isAdmin: res?.data.isAdmin
                })
            }
            else {
                console.log('that bai')
            }
            console.log('res', res)
        } catch (e) {
            console.log('error', e)
        }


    }

    useEffect(() => {
        form.setFieldsValue(stateUserDetails)
    }, [form, stateUserDetails])
    useEffect(() => {
        if (rowSelected) {
            fetchGetDetailsUser(rowSelected)
        }

    }, [rowSelected])

    console.log('stateUserDetails', stateUserDetails)
    const { data, isLoading, isSuccess, isError } = mutation
    const { data: dataUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
    const { data: dataDelete, isSuccess: isSuccessDelete, isError: isErrorDelete } = mutationDelete
    console.log('dataUpdated', dataUpdated)
    const { isLoading: isLoadinguser, data: users } = useQuery({ queryKey: ['user'], queryFn: getAllUser })
    console.log('userrrrrrrrrrrr', users)
    useEffect(() => {
        if (isSuccess && data?.status === 'OK') {
            message.success()
            handleCancel();
            queryClient.invalidateQueries('user');
        } else if (isError) {
            message.error()
        }
    }, [isSuccess])
    useEffect(() => {
        if (isSuccessUpdated && dataUpdated?.status === 'OK') {
            message.success()
            handleCloseDrawer()
            queryClient.invalidateQueries('user');
        } else if (isErrorUpdated) {
            message.error()
        }
    }, [isSuccessUpdated])

    useEffect(() => {
        if (isSuccessDelete && dataDelete?.status === 'OK') {
            message.success();
            queryClient.invalidateQueries('user');
        } else if (isErrorDelete) {
            message.error();
        }
    }, [isSuccessDelete, isErrorDelete, dataDelete, queryClient]);

    const onFinish = () => {
        mutation.mutate(stateUser)
        console.log('finish', stateUser);


    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.name.length - b.name.length
        },
        {
            title: 'Email',
            dataIndex: 'email',
            sorter: (a, b) => a.email.length - b.email.length
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            sorter: (a, b) => a.email.length - b.email.le
        },
        {
            title: 'Admin',
            dataIndex: 'isAdmin',
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: renderAction
        },
    ];


    const dataTable = users?.data?.map((user) => ({ ...user, key: user._id, isAdmin: user.isAdmin ? 'TRUE' : 'FALSE' })) || [];

    console.log('datatable', dataTable)


    console.log('user', user)
    const onUpdateUser = async () => {


        mutationUpdate.mutate({ id: rowSelected, ...stateUserDetails, access_token: user?.access_token })


    }

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateUser({
            name: '',
            email: '',
            phone: '',
            isAdmin: ''
        })
        form.resetFields();
    };
    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
        setStateUserDetails({
            name: '',
            email: '',
            phone: '',
            isAdmin: ''
        })
        form.resetFields();
    };




    const handleOnchange = (e) => {
        setStateUser({
            ...stateUser,
            [e.target.name]: e.target.value
        })
        console.log('e.target.name', e.target.name, e.target.value)

    }
    const handleOnchangeDetails = (e) => {
        console.log('check', e.target.name, e.target.value)
        setStateUserDetails({
            ...stateUserDetails,
            [e.target.name]: e.target.value
        })
        console.log('e.target.name', e.target.name, e.target.value)

    }
    const handleCancelDelete = () => {
        setIsModalOpenDelete(false)
    }

    const handleDetailsUser = () => {
        if (rowSelected) {
            fetchGetDetailsUser()
            console.log('fetdetailuẻ', rowSelected)

        }
        setIsOpenDrawer(true)
        console.log('rowSelected', rowSelected)
    }

    const handleDeleteUser = async () => {
        try {
            await mutationDelete.mutate({ id: rowSelected, access_token: user?.access_token }, {
                onSettled: () => {
                    queryClient.invalidateQueries('user');
                }
            });
        } catch (error) {
            console.error("Error deleting product:", error);
            message.error('Failed to delete product');
        }
    };


    return (
        <div>
            <WrapperHeader>Quản lí người dùng</WrapperHeader>
            <div>
                <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }}><PlusCircleFilled style={{ fontSize: '60px' }} /></Button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <TableComponent columns={columns} data={dataTable} onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            setRowSelected(record._id)
                        }
                    }
                }} />
            </div>
            <Modal forceRender title="Tạo sả phẩm" open={isModalOpen} onCancel={handleCancel} footer={null}>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 16,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    form={form}

                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <InputComponent value={stateUser.name} onChange={handleOnchange} name="name" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email',
                            },
                        ]}
                    >
                        <InputComponent value={stateUser.email} onChange={handleOnchange} name="email" />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Phone!' }]}
                    >
                        <InputComponent value={stateUser.phone} onChange={handleOnchange} name="phone" />
                    </Form.Item>






                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
            <ModalComponent
                forceRender
                title="Xóa sản phẩm"
                isOpen={isModalOpenDelete}
                onCancel={handleCancelDelete}
                footer={[
                    <button style={{ backgroundColor: '#fff', color: 'rgb(26,148,255)', marginRight: '10px' }} key="cancel" onClick={handleCancelDelete}>Cancel</button>,
                    <button style={{ backgroundColor: '#fff', color: 'rgb(26,148,255)' }} key="ok" onClick={handleDeleteUser}>OK</button>,
                ]}
                onOk={handleDeleteUser}
            >
                <div>Bạn có muốn xóa người dùng này không</div>
            </ModalComponent>
            <DrawerComponent title='Chi tiet nguoi dung' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">

                <Form
                    name="basic"
                    labelCol={{
                        span: 2,
                    }}
                    wrapperCol={{
                        span: 22,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onUpdateUser}
                    form={form}

                    autoComplete="off"
                >
                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ]}
                    >
                        <InputComponent value={setStateUserDetails.name} onChange={handleOnchangeDetails} name="name" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your email!',
                            },
                        ]}
                    >
                        <InputComponent value={setStateUserDetails.type} onChange={handleOnchangeDetails} name="email" />
                    </Form.Item>
                    <Form.Item
                        label="Phone"
                        name="phone"
                        rules={[{ required: true, message: 'Please input your Phone!' }]}
                    >
                        <InputComponent value={setStateUserDetails.phone} onChange={handleOnchangeDetails} name="phone" />
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 16,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            Apply
                        </Button>
                    </Form.Item>
                </Form>

            </DrawerComponent>
        </div>
    )
}
export default AdminUser