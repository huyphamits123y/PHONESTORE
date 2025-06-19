import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import InputForm from "../../components/InputFormComponent/InputFormComponent"

import slider1 from '../../components/Assets/slider1.png';
import slider4 from '../../components/Assets/slider4.png';
import slider5 from '../../components/Assets/slider5.png';
import slider6 from '../../components/Assets/slider6.png';
import listip from '../../components/Assets/listip.png';
import listmac from '../../components/Assets/listmac.png';
import listipad from '../../components/Assets/listipad.png';
import listwatch from '../../components/Assets/listwatch.png';
import listtn from '../../components/Assets/listtn.png';
import listpk from '../../components/Assets/listpk.png';
import tgdd from '../../components/Assets/tgdd.png';
import slider2 from '../../components/Assets/slider2.png';
import ip16s from '../../components/Assets/ip16s.png';
import mac from '../../components/Assets/mac.png';
import background1 from '../../components/Assets/background1.png';

import slider3 from '../../components/Assets/slider3.png';
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import { CgEnter } from "react-icons/cg";
import CardComponent from '../../components/CardComponent/CardComponent';

import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useSelector } from "react-redux";
import { MenuContainer, MenuItem, WrapperProducts } from "./style";
import { useEffect, useState } from "react";
import { useLocation } from 'react-router'
import * as ProductService from '../../services/ProductService';
import * as CategoryService from '../../services/CategoryService';
const CategoryProductPage = () => {
    const { state } = useLocation();
    const users = useSelector((state) => state?.user);
    console.log('state', state);
    const arrImages = [
        { src: slider4 },
        { src: slider5 },
        { src: slider6 }
    ];
    const [product, setProduct] = useState([])
    const [category, setCategory] = useState([])

    const items = [
        { name: 'FPT Telecom', jobs: '409 việc làm', arrImages: listip },
        { name: 'VUS', jobs: '12 việc làm', arrImages: listmac },
        { name: 'Shopee Việt Nam', jobs: '8 việc làm', arrImages: listipad },
        { name: 'MSB', jobs: '111 việc làm', arrImages: listwatch },
        { name: 'Nhất Tín Logistics', jobs: '29 việc làm', arrImages: listtn },
        { name: 'Nhất Tín Logistics', jobs: '29 việc làm', arrImages: listpk },

    ];
    useEffect(() => {
        const getAllCategorys = async () => {
            const res = await CategoryService.getAllCategory();
            setCategory(res.data)
            return res.data;
        }
        getAllCategorys()


    }, [])
    const nameAndImages = category.map((item) => ({
        name: item.name,
        image: item.image
    }));
    const [selectedItem, setSelectedItem] = useState('Tất cả');
    const menuItems = ['Tất cả', 'iPhone 16', 'iPhone 15', 'iPhone 14', 'iPhone 13', 'iPhone 12', 'iPhone 11'];
    useEffect(() => {
        const getProductType = async () => {
            try {
                // Gọi API để lấy danh sách sản phẩm dựa trên 'iPhone'
                const res = await ProductService.getAllProductSearchCategory(state);
                // Gán dữ liệu vào state
                setProduct(res.data);
            } catch (error) {
                console.error("Error fetching products in frontend:", error); // In ra lỗi nếu có
            }
        }
        getProductType();


    }, [state])
    console.log('product', product)

    const user = useSelector((state) => state?.user);
    console.log('user', user)
    return (
        <div style={{ backgroundColor: "#444444" }}>
            <HeaderComponent user={users}></HeaderComponent>
            {/* <MainContentComponent></MainContentComponent> */}
            <div style={{ marginTop: "30px" }}>
                <SliderComponent arrImages={arrImages} ></SliderComponent>
            </div>
            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>Danh mục</h1>
            <CarouselComponent items={nameAndImages} />
            {/* <MenuContainer>
                {menuItems.map((item) => (
                    <MenuItem
                        key={item}
                        selected={selectedItem === item}
                        onClick={() => setSelectedItem(item)}
                    >
                        {item}
                    </MenuItem>
                ))}
                    
            </MenuContainer> */}
            <h1 style={{ color: "#fff", textAlign: "center" }}>{state}</h1>
            <div id="container" style={{ width: '1270px', margin: '10px auto', paddingBottom: '20px' }}>
                <WrapperProducts>
                    {
                        product.map((product) => (

                            <CardComponent
                                key={product._id}
                                countInStock={product.countInStock}
                                description={product.description}
                                image={product.image}
                                name={product.name}
                                price={product.price}
                                type={product.type}
                                selled={product.selled}
                                discount={product.discount}
                                id={product._id}
                            />


                        ))
                    }




                    {/* <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />

                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    />
                    <CardComponent
                        key={1}
                        countInStock={1}
                        description={"huy"}
                        image={ip16s}
                        name={"Huy"}
                        price={123}
                        rating={4}
                        type={"huy"}
                        selled={3}
                        discount={3}
                        id={1}
                    /> */}
                </WrapperProducts>
            </div>

            <div >
                <img style={{ width: '100%', height: '400px' }} src={tgdd} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default CategoryProductPage