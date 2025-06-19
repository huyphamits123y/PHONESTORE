import React, { useEffect } from "react";
import { PlusCircleFilled, DeleteOutlined, EditOutlined } from "@ant-design/icons"
import { Button, Modal, Form } from 'antd'
import { WrapperHeader, WrapperUploadFile } from './style'
import TableComponent from '../TableComponent/TableComponent'
import { useState } from 'react'
import { getBase64, renderOptions } from '../../utils'
import * as ProductService from '../../services/ProductService';
import * as CategoryService from '../../services/CategoryService';
import { useMutationHooks } from "../../hooks/useMutationHook";
import InputComponent from '../InputComponent/InputComponent';
import * as message from '../../components/Message/Message';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import DrawerComponent from "../DrawerComponent/DrawerComponent";
import { useSelector } from 'react-redux'
import { Select, Space } from 'antd';

import ModalComponent from "../ModalComponent/ModalComponent";
const AdminCategory = () => {
    const [isOpenDrawer, setIsOpenDrawer] = useState(false)
    const [rowSelected, setRowSelected] = useState('')
    const [isModalOpenDelete, setIsModalOpenDelete] = useState(false)
    const user = useSelector((state) => state?.user)

    const queryClient = useQueryClient();
    const renderAction = () => {
        return (
            <div>
                <DeleteOutlined style={{ color: 'organe', fontSize: '30px', cursor: 'pointer' }} onClick={() => setIsModalOpenDelete(true)} />

                <EditOutlined style={{ color: 'organe', fontSize: '30px', cursor: 'pointer' }} onClick={handleDetailsCategory} />
            </div>
        )
    }

    const [stateCategory, setStateCategory] = useState({
        name: '',
        image: '',

    })
    const [stateCategoryDetails, setStateCategoryDetails] = useState({
        name: '',

        image: '',


    })
    const mutation = useMutationHooks(
        (data) => {
            const {
                name,
                image,
            } = data
            const res = CategoryService.createCategory(
                {
                    name,
                    image,
                }
            )
            return res;
        }
    )


    const mutationUpdate = useMutationHooks(

        async (data) => {

            const { id, token, ...rests } = data;


            const res = await CategoryService.updatedCategory(id, token, rests);


            return res;
        }
    );
    const mutationDelete = useMutationHooks(

        async (data) => {

            const { id, token } = data;


            const res = await CategoryService.deleteCategory(id, token);


            return res;
        }
    );


    const [form] = Form.useForm();
    const getAllCategory = async () => {
        const res = await CategoryService.getAllCategory()
        return res;
    }

    const fetchGetDetailsCategory = async (rowSelected) => {
        console.log('row category', rowSelected)
        try {
            const res = await CategoryService.getDetailsCategory(rowSelected)

            if (res?.data) {
                setStateCategoryDetails({
                    name: res?.data?.name,

                    image: res?.data?.image,

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
        form.setFieldsValue(stateCategoryDetails)
    }, [form, stateCategoryDetails])
    useEffect(() => {
        if (rowSelected) {
            fetchGetDetailsCategory(rowSelected)
        }

    }, [rowSelected])

    console.log('stateproductCategory', stateCategoryDetails)
    const { data, isLoading, isSuccess, isError } = mutation
    const { data: dataUpdated, isSuccess: isSuccessUpdated, isError: isErrorUpdated } = mutationUpdate
    const { data: dataDelete, isSuccess: isSuccessDelete, isError: isErrorDelete } = mutationDelete
    console.log('dataUpdated', dataUpdated)
    const queryCategory = useQuery({ queryKey: ['category'], queryFn: getAllCategory })
    const { isLoading: isLoadingCategory, data: category } = queryCategory
    console.log('category', category)
    useEffect(() => {
        if (isSuccess && data?.status === 'OK') {
            message.success()
            handleCancel();
            queryClient.invalidateQueries('category');
        } else if (isError) {
            message.error()
        }
    }, [isSuccess])
    useEffect(() => {
        if (isSuccessUpdated && dataUpdated?.status === 'OK') {
            message.success()
            handleCloseDrawer()
            queryClient.invalidateQueries('category');
        } else if (isErrorUpdated) {
            message.error()
        }
    }, [isSuccessUpdated])
    useEffect(() => {
        if (isSuccessDelete && dataDelete?.status === 'OK') {
            message.success()

            queryClient.invalidateQueries('category');
        } else if (isErrorDelete) {
            message.error()
        }
    }, [isSuccessDelete])
    const handleDetailsCategory = () => {
        if (rowSelected) {
            fetchGetDetailsCategory()
            console.log('fetdetai', rowSelected)

        }
        setIsOpenDrawer(true)
        console.log('rowSelected', rowSelected)
    }
    const onFinish = () => {

        const params = {

            name: stateCategory.name,

            image: stateCategory.image,

        }
        mutation.mutate(params, {
            onSettled: () => {
                queryCategory.refetch()
            }
        })


    };
    console.log('data category', data)
    useEffect(() => {

        if (isSuccess && data.status === 'OK') {
            console.log('Tạo danh mục thành công')
            message.success()
            handleCancel()
        } else {
            console.log('tao san pham that bai')
            message.error()
        }
    }, [isSuccess, isError])

    const [isModalOpen, setIsModalOpen] = useState(false);
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            render: (text) => <a>{text}</a>,
            sorter: (a, b) => a.name.length - b.name.length
        },

        {
            title: 'Action',
            dataIndex: 'action',
            render: renderAction
        },
    ];

    const dataTable = category?.data?.length && category?.data?.map((category) => {
        return { ...category, key: category._id }

    })


    console.log('user', user)
    const onUpdateProduct = async () => {

        mutationUpdate.mutate({ id: rowSelected, token: user?.access_token, ...stateCategoryDetails })


    }

    const handleCancel = () => {
        setIsModalOpen(false);
        setStateCategory({
            name: '',

            image: '',

        })
        form.resetFields();
    };
    const handleCloseDrawer = () => {
        setIsOpenDrawer(false);
        setStateCategoryDetails({
            name: '',
            image: '',
        })
        form.resetFields();
    };


    const handleOnchangeAvatar = async (info) => {
        const { file } = info; // Lấy đối tượng file từ thông tin của upload


        if (!file.url && !file.preview) {
            // Nếu không có url và preview, thực hiện chuyển đổi và gán preview
            file.preview = await getBase64(file.originFileObj);
        }
        setStateCategory({
            ...stateCategory,
            image: file.preview
        })
        // setAvatar(file.preview); // Lưu preview của file vào state
    };

    const handleOnchangeAvatarDetails = async (info) => {
        const { file } = info; // Lấy đối tượng file từ thông tin của upload
        if (!file.url && !file.preview) {
            // Nếu không có url và preview, thực hiện chuyển đổi và gán preview
            file.preview = await getBase64(file.originFileObj);
        }
        setStateCategoryDetails({
            ...stateCategoryDetails,
            image: file.preview
        })
        // setAvatar(file.preview); // Lưu preview của file vào state
    };
    const handleOnchange = (e) => {
        setStateCategory({
            ...stateCategory,
            [e.target.name]: e.target.value
        })
        console.log('e.target.name', e.target.name, e.target.value)

    }
    const handleOnchangeDetails = (e) => {
        console.log('check', e.target.name, e.target.value)
        setStateCategoryDetails({
            ...stateCategoryDetails,
            [e.target.name]: e.target.value
        })
        console.log('e.target.name', e.target.name, e.target.value)

    }
    const handleCancelDelete = () => {
        setIsModalOpenDelete(false)
    }

    const handleDeleteCategory = async () => {
        try {
            await mutationDelete.mutate({ id: rowSelected, token: user?.access_token }, {
                onSettled: () => {
                    queryClient.invalidateQueries('category');
                }
            });
        } catch (error) {
            console.error("Error deleting category:", error);
            message.error('Failed to delete category');
        }
    };
    const handleChangeSelect = (value) => {

        setStateCategory({
            ...stateCategory,
            type: value
        })


    }
    console.log('check stateCategory', stateCategory)
    return (
        <div>
            <WrapperHeader>Quản lí sản phẩm</WrapperHeader>
            <div>
                <Button style={{ height: '150px', width: '150px', borderRadius: '6px', borderStyle: 'dashed' }} onClick={() => setIsModalOpen(true)}><PlusCircleFilled style={{ fontSize: '60px' }} /></Button>
            </div>
            <div style={{ marginTop: '10px' }}>
                <TableComponent columns={columns} isLoading={isLoadingCategory} data={dataTable} onRow={(record, rowIndex) => {
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
                        <InputComponent value={stateCategory.name} onChange={handleOnchange} name="name" />
                    </Form.Item>



                    <Form.Item
                        label="image"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your image!',
                            },
                        ]}
                    >
                        <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button>Select File</Button>
                            {stateCategory?.image && (
                                <img src={stateCategory?.image} style={{
                                    height: '60px',
                                    width: '60px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginLeft: '10px'
                                }} alt="avatar" />
                            )}
                        </WrapperUploadFile>

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
            {/* <ModalComponent forceRender title="Xóa sản phẩm" open={isModalOpenDelete} onCancel={handleCancelDelete} footer={null} onOk={handleDeleteProduct}>
                <div>Bạn có muốn xóa sản phẩm này không</div>
            </ModalComponent> */}
            <div>

                {/* <ModalComponent
                    forceRender
                    title="Xóa sản phẩm"
                    isOpen={isModalOpenDelete}
                    onCancel={handleCancelDelete}
                    footer={[
                        <button style={{ backgroundColor: '#fff', color: 'rgb(26,148,255)', marginRight: '10px' }} key="cancel" onClick={handleCancelDelete}>Cancel</button>,
                        <button style={{ backgroundColor: '#fff', color: 'rgb(26,148,255)' }} key="ok" onClick={handleDeleteProduct}>OK</button>,
                    ]}
                    onOk={handleDeleteProduct}
                >
                    <div>Bạn có muốn xóa sản phẩm này không</div>
                </ModalComponent> */}
                <ModalComponent
                    forceRender
                    title="Bạn có muốn xóa danh mục này không"
                    isOpen={isModalOpenDelete}
                    onCancel={handleCancelDelete}

                    onOk={handleDeleteCategory}
                >
                    <div>Bạn có muốn xóa danh mục này không</div>
                </ModalComponent>
            </div>
            <DrawerComponent title='Chi tiết danh mục' isOpen={isOpenDrawer} onClose={() => setIsOpenDrawer(false)} width="90%">

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
                    onFinish={onUpdateProduct}
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
                        <InputComponent value={setStateCategoryDetails.name} onChange={handleOnchangeDetails} name="name" />
                    </Form.Item>




                    <Form.Item
                        label="image"
                        name="image"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your image!',
                            },
                        ]}
                    >
                        <WrapperUploadFile onChange={handleOnchangeAvatarDetails} maxCount={1}>
                            <Button>Select File</Button>
                            {setStateCategoryDetails?.image && (
                                <img src={setStateCategoryDetails?.image} style={{
                                    height: '60px',
                                    width: '60px',
                                    borderRadius: '50%',
                                    objectFit: 'cover',
                                    marginLeft: '10px'
                                }} alt="avatar" />
                            )}
                        </WrapperUploadFile>

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
export default AdminCategory







