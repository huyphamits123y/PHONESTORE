import React, { useEffect, useState } from "react"
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

import { WrapperBody, WrapperButton, WrapperInputBox, WrapperLogin, WrapperRegister, WrapperRemember } from "./style";
import InputForm from "../InputFormComponent/InputFormComponent";
import { WrapperTextLight } from "./style";
import { useLocation, useNavigate } from "react-router";
import { useMutationHooks } from "../../hooks/useMutationHook";

import login from '../../components/Assets/login.png';
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import * as UserService from '../../services/UserService';
import { Alert, Button, Input, Modal } from 'antd';
const SignUpFormComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [showAlert, setShowAlert] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const onChangeHandleEmail = (value) => {
        setEmail(value);

    }
    const onChangeHandlePassword = (value) => {
        setPassword(value)
    }
    const mutation = useMutationHooks(
        async (data) => {
            const res = UserService.createUser(data);
            return res;
        }
    )
    const { data, isSuccess, isError, error } = mutation
    useEffect(() => {
        if (isSuccess && data.status === 'OK') {
            navigate('/sign-in')

        } else if (isError) {

            setErrorMessage('Vui lòng nhập đúng email hoặc vui lòng nhập email khác');
            setShowAlert(true);

        }
    }, [isSuccess, isError])
    const handleOk = () => {
        setIsModalVisible(false);
    };
    const handleSignUp = () => {
        mutation.mutate({
            email,
            password
        })

    }
    return (
        <WrapperBody>
            <img style={{ width: '280px', height: '480px' }} src={login} alt="login"></img>
            <WrapperLogin>
                <form action="">
                    <h1>Đăng Ký</h1>

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

                    </WrapperRemember>
                    <ButtonComponent
                        disable={!email.length || !password.length}
                        onClick={handleSignUp}
                        size={40}



                        textButton={'Đăng Ký'}

                    ></ButtonComponent>
                    <Modal
                        title="Registration Failed"
                        visible={isModalVisible}
                        onOk={handleOk}
                    >
                        <p>{errorMessage}</p>
                    </Modal>
                    {showAlert && <Alert message={errorMessage} type="error" closable onClose={() => setShowAlert(false)} style={{ marginTop: '2px' }} />}

                </form>
            </WrapperLogin>

        </WrapperBody>
    )
}
export default SignUpFormComponent