import { useEffect, useState } from "react";
import FooterComponent from "../../components/FooterComponent/FooterComponent"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import { CartItemWrapper, FormWrapper, GlobalStyles, ProductListWrapper, SummaryWrapper } from "./style";
import axios from "axios";
import { Table, Button, Row, Col, Modal, Form, InputNumber } from 'antd';
import { fetchDistricts, fetchProvinces, fetchWards } from "../../services/AddressService";
import { useDispatch, useSelector } from 'react-redux';
import * as OrderService from '../../services/OrderService';
import { decreaseAmount, increaseAmount, removeAllUserProducts, removeOrderProduct } from "../../redux/slides/OrderSlide";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import InputForm from "../../components/InputForm/InputForm";
import { useNavigate } from "react-router";
import * as message from '../../components/Message/Message';
import { useMutationHooks } from "../../hooks/useMutationHook";
const CartPage = () => {
    const user = useSelector((state) => state?.user);
    const order = useSelector((state) => state?.order);
    console.log('ordersss', order);
    console.log('orderItems', order.orderItems)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // const [provinces, setProvinces] = useState({ data: [] });
    const [provinces, setProvinces] = useState([]);
    const [districts, setDistricts] = useState([]);
    const [wards, setWards] = useState([]);
    const [location, setLocation] = useState('');
    const [fullName, setFullName] = useState('');
    const [phone, setPhone] = useState('');
    const [filteredOrderItems, setFilteredOrderItems] = useState([]);

    const [indexLocationProvince, setIndexLocationProvince] = useState(0);
    const [indexLocationDistricts, setIndexLocationDistricts] = useState(0);
    const [indexLocationWards, setIndexLocationWards] = useState(0);

    const [wardIndex, setWardIndex] = useState(-1);


    const filterOrderItemsByUser = (orderItems, userId) => {
        return orderItems.filter(item => item?.userId === userId);
    };

    useEffect(() => {
        if (order?.orderItems && user?.id) {
            const filteredItems = filterOrderItemsByUser(order.orderItems, user.id);
            setFilteredOrderItems(filteredItems);
        }
    }, [order?.orderItems, user?.id]); // Re-run effect when orderItems or user.id changes
    useEffect(() => {
        const fetchProvinces = async () => {
            try {
                const response = await axios.get("https://esgoo.net/api-tinhthanh/1/0.htm");
                setProvinces(response.data.data);
            } catch (error) {
                console.error("Error fetching provinces:", error.message);
            }
        };

        fetchProvinces();
    }, []);
    console.log("data ........", provinces)






    const [gender, setGender] = useState("Anh");

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSelectChangeProvinces = (e) => {
        const selectedValue = e.target.value; // Lấy giá trị đã chọn
        // const index = e.target.selectedIndex; // Lấy index đã chọn

        setIndexLocationProvince(e.target.selectedIndex) // lay vi tri index




    };
    const handleSelectChangeWards = (e) => {
        const selectedValue = e.target.value; // Lấy giá trị đã chọn
        // const index = e.target.selectedIndex; // Lấy index đã chọn

        setIndexLocationWards(e.target.selectedIndex) // lay vi tri index




    };
    useEffect(() => {
        console.log("provinces", provinces[indexLocationProvince - 1]);
        console.log("district", districts[indexLocationDistricts - 1]);
        console.log("wards", wards[indexLocationWards - 1]);
    }, [indexLocationDistricts, indexLocationProvince, indexLocationWards])
    const handleSelectChangeDistricts = (e) => {

        setIndexLocationDistricts(e.target.selectedIndex)




    };
    const handleOnChange = (value) => {
        setLocation(value)

    }
    const handleOnChangeName = (value) => {
        setFullName(value)

    }
    const handleOnChangePhone = (value) => {
        setPhone(value)

    }

    const mutationAddOrder = useMutationHooks(

        async (data) => {

            const { id, token, ...rests } = data;


            const res = await OrderService.createOrder(token, { ...rests },);


            return res;
        }
    );
    const handleOrderProduct = async () => {
        // console.log('token', user?.access_token);
        // console.log('orderitem', dataorder);
        // console.log('totalprice', calculateTotal());
        // console.log('name', fullName);
        // console.log('location', location);
        // console.log('provinces', provinces[indexLocationProvince - 1].name);
        // console.log('districts', districts[indexLocationDistricts - 1].name);
        // console.log('wards', wards[indexLocationWards - 1].name)
        if (user?.access_token && filteredOrderItems.length > 0 && location !== '' && provinces[indexLocationProvince - 1] !== '' && districts[indexLocationDistricts - 1] !== '' && wards[indexLocationWards - 1] && phone !== '' && fullName !== '') {
            mutationAddOrder.mutate({

                token: user?.acess_token, orderItems: filteredOrderItems, paymentMethod: 'COD', deliveryMethod: 'FAST', totalPrice: calculateTotal(), fullName: fullName, location: location, provinces: provinces[indexLocationProvince - 1].name, districts: districts[indexLocationDistricts - 1].name, wards: wards[indexLocationWards - 1].name, phone: phone, user: user?.id

            })
            dispatch(removeAllUserProducts({ userId: user?.id }))
        } else {
            alert('Vui lòng nhập đầy đủ thông tin!')
        }
        // console.log('token', user?.access_token);
        // console.log('orderitem', dataorder);
        // console.log('totalprice', calculateTotal());
        // console.log('fullname', user?.name);
        // console.log('location', location);
        // console.log('provinces', provinces[indexLocationProvince - 1]);
        // console.log('districts', districts[indexLocationDistricts - 1]);
        // console.log('wards', wards[indexLocationWards - 1])
        // const res = await OrderService.createOrder(token, { ...rests },);



    }
    const { data, isSuccess, isError } = mutationAddOrder
    console.log('datasssss', data)
    useEffect(() => {
        if (isSuccess && data.status === "OK") {
            message.success('Đặt hành thành công')
            handleNavigateHistory(user?.id)
        } else if (isError) {
            console.log("error", isError)
            // message.error('Đặt hàng thất bại')
            message.error()
        }

    }, [isSuccess, isError])
    const handleNavigateHistory = (id) => {
        navigate(`/history/${id}`);
    }



    useEffect(() => {
        const fetchDistrictsByProvince = async () => {
            if (indexLocationProvince > 0) {
                const selectedProvince = provinces[indexLocationProvince - 1];
                if (selectedProvince) {
                    console.log("Selected Province:", selectedProvince);

                    try {
                        const response = await fetchDistricts(selectedProvince.id);
                        setDistricts(response);
                        console.log("Districts:", response);
                    } catch (error) {
                        console.error("Error fetching districts:", error.message);
                    }
                }
            }
        };

        fetchDistrictsByProvince();
    }, [indexLocationProvince, provinces]);
    useEffect(() => {
        const fetchWardssByDistricts = async () => {
            if (indexLocationDistricts > 0) {
                const selectedDistricts = districts[indexLocationDistricts - 1];
                if (selectedDistricts) {
                    console.log("Selected Districts:", selectedDistricts);

                    try {
                        const response = await fetchWards(selectedDistricts.id);
                        setWards(response);
                        console.log("Wards:", response);
                    } catch (error) {
                        console.error("Error fetching wards:", error.message);
                    }
                }
            }
        };

        fetchWardssByDistricts()
    }, [indexLocationDistricts, districts.data]);

    const handleQuantityChange = (type, idProduct) => {
        if (type === 'increase') {
            dispatch(increaseAmount({ idProduct, userId: user?.id }));
        } else if (type === 'decrease') {
            dispatch(decreaseAmount({ idProduct, userId: user?.id }));
        }
    };
    const columns = [
        {
            title: 'Tất cả',
            dataIndex: 'product',
        },
        {
            title: 'Đơn giá',
            dataIndex: 'price',
            render: (price) => `${price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`
        },
        {
            title: 'Số lượng',
            dataIndex: 'quantity',
            render: (text, record) => (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button onClick={() => handleQuantityChange('decrease', record.key)}>-</Button>
                    <InputNumber
                        min={1}
                        value={record.quantity}
                        readOnly
                    />
                    <Button onClick={() => handleQuantityChange('increase', record.key)}>+</Button>
                </div>
            ),
        },
        {
            title: 'Thành tiền',
            dataIndex: 'total',
            render: (text, record) => `${(record.price * record.quantity).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`

        },

        {
            title: '',
            dataIndex: 'action',
            render: (text, record) => (

                <Button type="link" onClick={() => dispatch(removeOrderProduct({ idProduct: record.key, userId: user?.id }))}>🗑</Button>

            ),
        },
    ];
    const dataorder = order.orderItems
        .filter(item => item?.userId === user?.id) // Lọc các item có userId bằng user.id
        .map(item => ({
            key: item.product,
            product: (
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img
                        src={item.image}
                        alt={item.name}
                        style={{ marginRight: 10, width: '100px' }}
                    />
                    <span>{item.name}</span>
                </div>
            ),
            price: item.price,
            quantity: item.amount, // Sử dụng amount từ Redux store
            total: item.price * item.amount,
        }));
    const calculateTotal = () => dataorder.reduce((acc, item) => acc + item.total, 0).toFixed(2);


    return (
        <div>
            <HeaderComponent user={user}></HeaderComponent>
            <GlobalStyles />



            <ProductListWrapper>
                <Col span={16}>
                    <Table columns={columns} dataSource={dataorder} pagination={false} />
                </Col>
                <Row justify="space-between" style={{ marginBottom: 10, fontWeight: 'bold' }}>
                    <Col>Tổng tiền sản phẩm</Col>
                    <Col>{Number(calculateTotal()).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</Col>
                </Row>
            </ProductListWrapper>




            <SummaryWrapper>

                <FormWrapper>
                    <h3>Thông tin khách hàng</h3>
                    <div className="radio-group">
                        <label>
                            <input
                                type="radio"
                                name="gender" // Name giống nhau để chỉ chọn 1 trong 2
                                value="Anh"
                                checked={gender === "Anh"}
                                onChange={handleGenderChange}
                            />
                            Anh
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="gender" // Name giống nhau để chỉ chọn 1 trong 2
                                value="Chị"
                                checked={gender === "Chị"}
                                onChange={handleGenderChange}
                            />
                            Chị
                        </label>
                    </div>

                    {/* <div className="form-group">
                        <label>Họ và Tên</label>
                        <input type="text" placeholder="Nhập họ và tên" />
                    </div>
                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input type="text" placeholder="Nhập số điện thoại" />
                    </div> */}
                    <div className="form-group">
                        <InputForm placeholder="Họ tên" value={fullName} onChange={handleOnChangeName} />

                    </div>
                    <div className="form-group">
                        <InputForm placeholder="Số điện thoại" value={phone} onChange={handleOnChangePhone} />

                    </div>
                    <h3>Chọn hình thức nhận hàng</h3>
                    <label >
                        <input type="radio" name="delivery" checked="true" value="delivery" style={{ marginBottom: '10px' }} /> Giao tận nơi
                    </label>


                    <div className="form-group">
                        <select onChange={handleSelectChangeProvinces} defaultValue="">

                            <option value="" disabled>
                                Chọn tỉnh/thành phố
                            </option>

                            {provinces.map((province, index) => (
                                <option key={index} value={province.name}>
                                    {province.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <select onChange={handleSelectChangeDistricts} defaultValue="">
                            <option value="" disabled>
                                Chọn huyện
                            </option>

                            {districts.map((district, index) => (
                                <option key={index} value={district.name}>
                                    {district.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <select onChange={handleSelectChangeWards} defaultValue="">

                            <option value="" disabled>
                                Chọn đường
                            </option>

                            {wards.map((wards, index) => (
                                <option key={index} value={wards.name}>
                                    {wards.name}
                                </option>
                            ))}
                        </select>
                    </div>


                    <div className="form-group">
                        <InputForm placeholder="Số nhà" value={location} onChange={handleOnChange} />

                    </div>

                </FormWrapper>
                <div className="total" style={{ display: 'flex', marginLeft: '570px', marginTop: '20px' }}>
                    <h4>Tổng tiền: </h4>
                    <span style={{ marginBottom: '7px', color: "#FF0000" }}> {Number(calculateTotal()).toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
                </div>

                <ButtonComponent

                    onClick={handleOrderProduct}
                    size={40}



                    textButton={'Đặt hàng'}

                ></ButtonComponent>
            </SummaryWrapper>


            <FooterComponent />
        </div>
    )
}
export default CartPage