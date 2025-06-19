import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"

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
import ReactDOM from 'react-dom'
import * as CategoryService from '../../services/CategoryService';
import * as ProductService from '../../services/ProductService';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import slider3 from '../../components/Assets/slider3.png';
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import CarouselComponent from "../../components/CarouselComponent/CarouselComponent";
import { CgEnter } from "react-icons/cg";

import FooterComponent from "../../components/FooterComponent/FooterComponent";
import { useSelector } from "react-redux";
import { WrapperProducts } from "./style";
import CarouselProductComponent from "../../components/CarouselProductComponent/CarouselProductComponent";
import { useEffect, useState } from "react";
const HomePage = () => {
    const arrImages = [
        { src: slider4 },
        { src: slider5 },
        { src: slider6 }
    ];
    const items = [
        { name: 'FPT Telecom', jobs: '409 việc làm', arrImages: listip },
        { name: 'VUS', jobs: '12 việc làm', arrImages: listmac },
        { name: 'Shopee Việt Nam', jobs: '8 việc làm', arrImages: listipad },
        { name: 'MSB', jobs: '111 việc làm', arrImages: listwatch },
        { name: 'Nhất Tín Logistics', jobs: '29 việc làm', arrImages: listtn },
        { name: 'Nhất Tín Logistics', jobs: '29 việc làm', arrImages: listpk },

    ];
    const [category, setCategory] = useState([])
    const [product, setProduct] = useState([])
    const [productsearch, setProductSearch] = useState([])

    useEffect(() => {
        const getAllCategorys = async () => {
            const res = await CategoryService.getAllCategory();
            setCategory(res.data)
            return res.data;
        }
        getAllCategorys()


    }, [])
    useEffect(() => {
        const getAllProducts = async () => {
            const res = await ProductService.getAllProduct()
            setProduct(res.data)
            return res.data;
        }
        getAllProducts()


    }, [])
    const nameAndImages = category.map((item) => ({
        name: item.name,
        image: item.image
    }));
    const nameCategory = category.map((item) => ({
        name: item.name,
    }));
    const dataproduct = product.map((item) => ({
        name: item.name,
        image: item.image,
        type: item.type,
        price: item.price
    }));
    console.log('data product', dataproduct)
    // useEffect(() => {
    //     const fetchProductsForCategories = async () => {
    //         try {
    //             const data = {};

    //             for (const category of nameCategory) {
    //                 const res = await ProductService.getAllProductSearchCategory(category.name);
    //                 data[category.name] = res.data;
    //             }
    //             setProductSearch(data);
    //         } catch (error) {
    //             console.error('Error fetching products:', error);
    //         }
    //     };

    //     fetchProductsForCategories();
    // }, [nameCategory]);
    // console.log('productsearch', productsearch)


    console.log('category', category)
    console.log('product', product)
    // danh sách category
    // tất cả sản phẩm
    // lọc sản phẩm theo category


    const user = useSelector((state) => state?.user);
    console.log('user', user)
    return (
        <div style={{ backgroundColor: "#444444" }}>
            <HeaderComponent user={user}></HeaderComponent>
            {/* <MainContentComponent></MainContentComponent> */}

            <div style={{ marginTop: "30px" }}>
                <SliderComponent arrImages={arrImages} ></SliderComponent>

            </div>


            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>Danh mục</h1>
            <CarouselComponent items={nameAndImages} />



            <div>
                {nameCategory.map((category) => {
                    // Lọc các sản phẩm có type trùng với tên danh mục
                    const filteredProducts = product.filter(
                        (item) => item.type === category.name
                    );

                    return (
                        <div key={category.name}>
                            {/* Hiển thị tên danh mục */}
                            <h1 style={{ color: '#fff', padding: '10px', textAlign: 'center' }}>
                                {category.name}
                            </h1>

                            {/* Hiển thị danh sách các CarouselProductComponent */}
                            <div>
                                {/* Truyền danh sách sản phẩm (filteredProducts) vào CarouselProductComponent */}
                                {filteredProducts.length > 0 ? (
                                    <CarouselProductComponent items={filteredProducts} />
                                ) : (
                                    <p style={{ color: '#fff', textAlign: 'center' }}>
                                        Không có sản phẩm nào trong danh mục này.
                                    </p>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>





            <div >
                <img style={{ width: '100%', height: '400px' }} src={tgdd} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default HomePage