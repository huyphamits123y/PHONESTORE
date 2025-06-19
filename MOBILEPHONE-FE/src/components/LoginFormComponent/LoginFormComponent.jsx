import React, { useEffect, useState } from "react"
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import * as UserService from '../../services/UserService';
import { useLocation, useNavigate } from "react-router";
import { WrapperBody, WrapperButton, WrapperInputBox, WrapperLogin, WrapperRegister, WrapperRemember, WrapperTextLight } from "./style";
import InputForm from "../InputFormComponent/InputFormComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { useMutationHooks } from "../../hooks/useMutationHook";
import login from '../../components/Assets/login.png';

import { jwtDecode } from "jwt-decode";

import { Alert, Button, Input, Modal } from 'antd';
import { useDispatch } from 'react-redux'

import { updateUser } from "../../redux/slides/userSlide";
// Import CSS của antd
const LoginFormComponent = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const [errorMessage, setErrorMessage] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const mutation = useMutationHooks(
        async (data) => {
            const res = UserService.loginUser(data)
            return res;
        }
    )
    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
        console.log('res', res)

    }
    const { data, isSuccess, isError } = mutation;
    useEffect(() => {
        if (isSuccess && data?.status === "OK") {
            if (location?.state) {
                navigate(location?.state)
            } else {
                navigate('/')
            }
            console.log('data', data)
            localStorage.setItem('access_token', JSON.stringify(data?.access_token))
            if (data?.access_token) {
                const decoded = jwtDecode(data?.access_token)
                console.log('decoded', decoded)
                if (decoded?.id) {
                    handleGetDetailsUser(decoded?.id, data?.access_token);
                    console.log('decoded id', decoded?.id);
                    console.log('decoded token', decoded?.access_token)


                }
            }
        } else if (isError) {

            setErrorMessage('Tài khoản hoặc mật khẩu không chính xác');
            setShowAlert(true);


        }
    }, [isSuccess, isError])
    const handleSignIn = () => {
        mutation.mutate({
            email,
            password
        })
    }
    const onChangeHandleEmail = (value) => {
        setEmail(value)
    }
    const onChangeHandlePassword = (value) => {
        setPassword(value)
    }

    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleNavigateSignUp = () => {
        navigate('/sign-up')

    }

    return (

        <WrapperBody>

            <img style={{ width: '280px', height: '480px' }} src={login} alt="login"></img>

            <WrapperLogin>
                <form action="">
                    <h1>Đăng nhập</h1>
                    <WrapperInputBox>
                        <InputForm style={{ marginBottom: '10px', width: '400px', height: '10px' }} placeholder="Email" value={email} onChange={onChangeHandleEmail} />
                        <FaUserAlt className="icon" />

                    </WrapperInputBox>
                    <WrapperInputBox>
                        <InputForm placeholder="Password" style={{ marginBottom: '10px', width: '400px', height: '10px' }} value={password} type="password" onChange={onChangeHandlePassword} />

                        <FaLock className="icon" />
                    </WrapperInputBox>
                    <WrapperRemember>
                        <label>
                            <input type="checkbox" />Remember me
                        </label>
                        <a href="#">Forgot password</a>
                    </WrapperRemember>


                    <ButtonComponent
                        disable={!email.length || !password.length}
                        onClick={handleSignIn}
                        size={40}



                        textButton={'Đăng nhập'}

                    ></ButtonComponent>
                    <WrapperRegister>
                        <p>Bạn chưa có tài khoản?<WrapperTextLight onClick={handleNavigateSignUp} style={{ cursor: 'pointer' }}> Đăng Ký</WrapperTextLight></p>
                    </WrapperRegister>
                    {showAlert && <Alert message={errorMessage} type="error" closable onClose={() => setShowAlert(false)} style={{ marginTop: '2px' }} />}
                </form>
            </WrapperLogin>
            <Modal
                title="Login Failed"
                visible={isModalVisible}
                onOk={handleOk}


            >
                <p>{errorMessage}</p>
            </Modal>

        </WrapperBody>
    )
}
export default LoginFormComponent