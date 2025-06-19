import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"

import ip16s from '../../components/Assets/ip16s.png';
import ip16s1 from '../../components/Assets/ip16s1.png';
import ip16s2 from '../../components/Assets/ip16s2.png';
import ip16s3 from '../../components/Assets/ip16s3.png';
import tgdd from '../../components/Assets/tgdd.png';
import FooterComponent from "../../components/FooterComponent/FooterComponent";

import { ImageContainer, LeftSection, MenuContainer, MenuItem, OptionButton, Options, Price, ProductPageContainer, RightSection, Thumbnail, ThumbnailGallery, Title, WrapperProducts } from "./style";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import * as ProductService from '../../services/ProductService';
import { addOrderProduct } from "../../redux/slides/OrderSlide";
import LikeButtonComponent from "../../components/LikeButtonComponent/LikeButtonComponent";
import CommentComponent from "../../components/CommentComponent/CommentComponent";
import { convertPrice, initFacebookSDK } from "../../utils";

const ProductDetailsPage = () => {
    const [selectedStorage, setSelectedStorage] = useState('128GB');
    const [selectedColor, setSelectedColor] = useState('White');

    const user = useSelector((state) => state?.user);
    const storages = ['128GB', '256GB', '512GB', '1TB'];
    const [product, setProduct] = useState({});
    const [numProduct, setNumProduct] = useState(1)
    const dispatch = useDispatch()


    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {
        initFacebookSDK()

    }, [])
    useEffect(() => {
        const fetchGetDetailsProduct = async () => {

            const res = await ProductService.getDetailsProduct(id);
            setProduct(res.data);

            return res.data;



        }
        fetchGetDetailsProduct();
    }, [id])

    console.log('data', product)
    console.log('userID', user?.id);
    console.log('name', product.name);
    console.log('image', product.image);
    console.log('price', product.price);
    console.log('productid', product._id)
    const handleAddOrderProduct = () => {
        if (!user?.id) {
            navigate('/sign-in', { state: location?.pathname })
        } else {
            console.log('addproduct')
            dispatch(addOrderProduct({


                orderItem: {
                    userId: user?.id,
                    name: product?.name,
                    amount: numProduct,
                    image: product?.image,
                    price: product?.price,
                    product: product?._id,
                    provinces: "",
                    districts: "",
                    wards: "",
                    location: "",

                },


            }))


        }

    }
    const colors = ['White', 'Gold', 'Gray'];

    const [selectedImage, setSelectedImage] = useState(ip16s); // Replace with actual image URL
    const thumbnails = [ip16s, ip16s1, ip16s2, ip16s3]; // Replace with actual URLs
    return (
        <div style={{ backgroundColor: "#444444" }}>
            <HeaderComponent user={user}></HeaderComponent>

            <ProductPageContainer>
                <LeftSection>
                    <>
                        <ImageContainer>
                            <img src={product.image} alt="Product" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                        </ImageContainer>
                        {/* <ThumbnailGallery>
                            {thumbnails.map((thumb, index) => (
                                <Thumbnail
                                    key={index}
                                    src={thumb}
                                    selected={selectedImage === thumb}
                                    onClick={() => setSelectedImage(thumb)}
                                />
                            ))}
                        </ThumbnailGallery> */}
                        {/* <ThumbnailGallery>

                            <Thumbnail
                                key={1}
                                src={product.image}

                            />

                        </ThumbnailGallery> */}
                    </>
                </LeftSection>
                <RightSection>
                    <div>
                        <Title>{product.name}</Title>
                        <Price>{product.price}₫</Price>

                        <div>
                            <h4>Storage:</h4>
                            <Options>
                                {storages.map((storage) => (
                                    <OptionButton
                                        key={storage}
                                        selected={selectedStorage === storage}
                                        onClick={() => setSelectedStorage(storage)}
                                    >
                                        {storage}
                                    </OptionButton>
                                ))}
                            </Options>
                        </div>

                        <div>
                            <h4>Color:</h4>
                            <Options>
                                {colors.map((color) => (
                                    <OptionButton
                                        key={color}
                                        selected={selectedColor === color}
                                        onClick={() => setSelectedColor(color)}
                                    >
                                        {color}
                                    </OptionButton>
                                ))}
                            </Options>
                        </div>
                        <LikeButtonComponent dataHref="https://developers.facebook.com/docs/plugins/" />
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>

                            <ButtonComponent
                                size={40}
                                bordered={false}
                                styleButton={{
                                    background: '#0099FF',
                                    height: '48px',
                                    width: '220px',
                                    border: 'none',
                                    borderRadius: '4px'
                                }}
                                onClick={handleAddOrderProduct}
                                textButton={'Chọn mua'}
                                styleTextButton={{ color: '#fff', fontSize: '15px', fontWeight: '700' }}
                            ></ButtonComponent>



                        </div>
                    </div>

                </RightSection>

            </ProductPageContainer>
            <CommentComponent dataHref="https://developers.facebook.com/docs/plugins/comments#configurator" width="1270" />





            <div >
                <img style={{ width: '100%', height: '400px' }} src={tgdd} alt="background"></img>
            </div>
            <FooterComponent />
        </div>
    )
}
export default ProductDetailsPage