
import { useEffect, useState } from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent";
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent";
import { Table } from "antd"; // Sử dụng Ant Design Table
import { Button } from "antd"; // Nếu ButtonComponent không có sẵn
import {
    CartItemWrapper,
    FormWrapper,
    GlobalStyles,
    ProductListWrapper,
    SummaryWrapper,
} from "./style";
import listipad from "../../components/Assets/listipad.png";
import { useSelector } from "react-redux";
import * as message from '../../components/Message/Message';
import { useMutationHooks } from '../../hooks/useMutationHook';
import { useQuery, useQueryClient } from "@tanstack/react-query";
import * as OrderService from '../../services/OrderService';
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
const HistoryPage = () => {
    const user = useSelector((state) => state?.user);
    const [dataOrder, setDataOrder] = useState([]);
    console.log('id', user?.id)
    const queryClient = useQueryClient();
    // useEffect(() => {
    //     const getListOrder = async () => {
    //         const data = await OrderService.getListsOrder(user?.id);
    //         setDataOrder(data);
    //         console.log('data huy', data)


    //     }
    //     getListOrder();
    // }, [])
    // console.log('order huy', dataOrder.data)
    const fetchGetListOrder = async () => {
        return await OrderService.getListsOrder(user?.id);
    };

    const queryOrder = useQuery({
        queryKey: ['order'],
        queryFn: fetchGetListOrder
    });

    const { isLoading: isLoadingOrder, data: paymentOrders } = queryOrder;


    console.log('user', user?.id)
    console.log('orderid', paymentOrders?._id)
    console.log('payment', paymentOrders)
    const orders = paymentOrders?.data || [];
    console.log('orders', orders)
    const columns = [
        {
            title: "Tất cả",
            dataIndex: "product",
        },
        {
            title: "Đơn giá",
            dataIndex: "price",
            render: (price) =>
                `${price.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                })}`,
        },
        {
            title: "Số lượng",
            dataIndex: "quantity",
        },
        {
            title: "Thành tiền",
            dataIndex: "total",
            render: (_, record) =>
                `${(record.price * record.quantity).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                })}`,
        },
    ];


    // const orders = [
    //     {
    //         id: 1,
    //         name: "iPhone 16 Pro 1TB",
    //         image: listipad,
    //         price: 43990000,
    //         quantity: 1,
    //         isPaid: false,
    //         deliveryMethod: "Giao hàng nhanh",
    //     },
    //     {
    //         id: 2,
    //         name: "MacBook Pro M2",
    //         image: listipad,
    //         price: 49990000,
    //         quantity: 2,
    //         isPaid: true,
    //         deliveryMethod: "Giao hàng tiêu chuẩn",
    //     },
    // ];
    const mutationDelete = useMutationHooks(

        async (data) => {

            const { id, token } = data;


            const res = await OrderService.deleteOrder(id, token);


            return res;
        }
    );
    const { data: dataDelete, isSuccess: isSuccessDelete, isError: isErrorDelete } = mutationDelete
    useEffect(() => {
        if (isSuccessDelete && dataDelete?.status === 'OK') {
            message.success()

            queryClient.invalidateQueries('orders');
        } else if (isErrorDelete) {
            message.error()
        }
    }, [isSuccessDelete])

    return (
        <div>
            <HeaderComponent user={user}></HeaderComponent>
            <div>
                {/* {orders.map((order, index) => {
                    const data = [
                        {
                            key: order.name,
                            product: (
                                <div style={{ display: "flex", alignItems: "center" }}>
                                    <img
                                        src={order.image}
                                        alt={order.fullname}
                                        style={{ marginRight: 10, width: "50px", height: "50px" }}
                                    />
                                    <span>{order.name}</span>
                                </div>
                            ),
                            price: order.price,
                            quantity: order.quantity,
                            total: order.price * order.quantity,
                        },
                    ];

                    const totalPrice = order.price * order.quantity; */}

                {orders.map((order, index) => {
                    // Use the items from each order to create the table data
                    const data = order.orderItems.map(item => ({
                        key: item.product,
                        product: (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    style={{ marginRight: 10, width: '50px', height: '50px' }}
                                />
                                <span>{item.name}</span>
                            </div>
                        ),

                        price: item.price,
                        quantity: item.amount,
                        total: item.price * item.amount,


                    }));
                    const totalPrice = data.reduce((acc, item) => acc + item.total, 0);
                    console.log('userIDddd', order?._id)
                    console.log('orderuser', order?.user)
                    console.log('useremail', user?.email)

                    const checkIsPaid = () => {

                    }
                    const handlePaymentOrder = async () => {
                        try {
                            console.log('order_id', order?.id)
                            console.log('orderemail', order?.email)
                            const response = await OrderService.paymentorder(order?._id)
                            console.log('responese', response.data)
                            if (response?.data?.return_code === 1) {
                                const link = response.data.order_url
                                console.log('link', link)
                                window.location.href = link



                                // }
                                // const responese = await OrderService.sendEmailOrder(user?.email, order?._id)
                                // if (responese.data) {
                                //     console.log('mail gui thanh cong')
                                // }




                            }


                        } catch (error) {
                            console.log('error', error)
                        }

                    }

                    const handleDeleteOrder = async () => {
                        try {
                            console.log('id check', order?._id);
                            console.log('token check', user?.access_token)
                            await mutationDelete.mutate({ id: order?._id, token: user?.access_token }, {
                                onSettled: () => {
                                    queryClient.invalidateQueries('orders');
                                }
                            });
                        } catch (error) {
                            console.error("Error deleting order:", error);
                            message.error('Failed to delete order');
                        }
                    };

                    return (
                        <div
                            key={index}
                            style={{
                                width: "100%",
                                maxWidth: "1300px",
                                margin: "20px auto",
                                padding: "20px",
                                backgroundColor: "#fff",
                                borderRadius: "8px",
                                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                                overflowY: "auto",
                            }}
                        >
                            <h5>Đơn hàng {index + 1}</h5>
                            <h5>
                                Trạng thái:{" "}
                                <span style={{ color: order.isPaid ? "green" : "red" }}>
                                    {order.isPaid ? "Đã thanh toán" : "Chưa thanh toán"}
                                </span>
                            </h5>
                            <h5>
                                Phương thức vận chuyển:{" "}
                                <span style={{ color: "red" }}>{order.deliveryMethod}</span>
                            </h5>
                            <h5>
                                Tổng tiền cần thanh toán:{" "}
                                <span style={{ color: "red" }}>
                                    {totalPrice.toLocaleString("vi-VN", {
                                        style: "currency",
                                        currency: "VND",
                                    })}
                                </span>
                            </h5>

                            <Table columns={columns} dataSource={data} pagination={false} />

                            <div style={{ display: "flex", padding: "10px" }}>
                                {/* <Button
                                    onClick={() => alert(`Thanh toán đơn hàng ${index + 1}`)}
                                    disabled={order.isPaid}
                                    style={{
                                        background: "#fff",
                                        height: "48px",
                                        width: "220px",
                                        border: "1px solid rgb(13,92,182)",
                                        borderRadius: "4px",
                                        margin: "10px",
                                        fontWeight: "700",
                                        color: "rgb(13, 92, 182)",
                                    }}
                                >
                                    Thanh toán
                                </Button>
                                <Button
                                    onClick={() => alert(`Hủy đơn hàng ${index + 1}`)}
                                    disabled={order.isPaid}
                                    style={{
                                        background: "#fff",
                                        height: "48px",
                                        width: "220px",
                                        border: "1px solid rgb(13,92,182)",
                                        borderRadius: "4px",
                                        margin: "10px",
                                        fontWeight: "700",
                                        color: "rgb(13, 92, 182)",
                                    }}
                                >
                                    Hủy đơn hàng
                                </Button> */}
                                <ButtonComponent

                                    onClick={() => handlePaymentOrder()}
                                    disable={order?.isPaid}
                                    size={40}
                                    bordered={false}
                                    styleButton={{
                                        background: '#fff',
                                        height: '48px',
                                        width: '220px',
                                        border: '1px solid rgb(13,92,182)',
                                        borderRadius: '4px',
                                        margin: '10px',
                                    }}
                                    textButton={'Thanh toán'}
                                    styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px', fontWeight: '700' }}
                                ></ButtonComponent>
                                <ButtonComponent
                                    onClick={() => handleDeleteOrder()}
                                    disable={order?.isPaid}
                                    size={40}
                                    bordered={false}
                                    styleButton={{
                                        background: '#fff',
                                        height: '48px',
                                        width: '220px',
                                        border: '1px solid rgb(13,92,182)',
                                        margin: '10px',
                                        borderRadius: '4px'
                                    }}
                                    textButton={'Hủy đơn hàng'}
                                    styleTextButton={{ color: 'rgb(13, 92, 182)', fontSize: '15px', fontWeight: '700' }}
                                ></ButtonComponent>
                            </div>
                        </div>
                    );
                })}
            </div>
            <FooterComponent />
        </div>
    );
};

export default HistoryPage;
