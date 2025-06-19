import React, { useEffect } from 'react'
import { useState } from 'react'
import { WrapperHeader, WrapperInput, WrapperLable, WrapperUploadFile } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { WrapperContentProfile } from './style'
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";
import { useSelector } from 'react-redux'
import * as UserService from '../../services/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import { message, Button, Upload } from 'antd'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide'
import { UploadOutlined } from '@ant-design/icons';

import { getBase64 } from '../../utils'
import HeaderComponent from '../../components/HeaderComponent/HeaderComponent'
import FooterComponent from '../../components/FooterComponent/FooterComponent'
const ProfilePage = () => {
    const user = useSelector((state) => state.user)
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const dispatch = useDispatch()
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    useEffect(() => {
        setEmail(user?.email);
        setName(user?.name);
        setPhone(user?.phone);
        setAddress(user?.address)

    }, [user])
    const handleOnchangeName = (value) => {
        setName(value)

    }
    const handleOnchangePhone = (value) => {
        setPhone(value)

    }

    const handleOnchangeAddress = (value) => {
        setAddress(value)

    }
    const handleOnchangeEmail = (value) => {
        setEmail(value)

    }
    const handleupdate = () => {
        mutation.mutate({ id: user?.id, email, name, address, phone, access_token: user?.access_token })

    }
    const mutation = useMutationHooks(
        async (data) => {
            const { id, access_token, ...rests } = data
            const res = UserService.updateUser(id, rests, access_token)
            return res;
        }
    )
    const { data, isSuccess, IsError } = mutation;
    useEffect(() => {
        if (isSuccess) {
            message.success()
            handleGetDetailsUser(user?.id, user?.access_token)

        } else if (IsError) {
            message.error()


        }
    })
    const handleGetDetailsUser = async (id, token) => {
        const res = await UserService.getDetailsUser(id, token)
        dispatch(updateUser({ ...res?.data, access_token: token }))
        console.log('res', res)
    }



    return (
        <div>
            <HeaderComponent user={user}></HeaderComponent>
            <div style={{ width: '1270px', margin: '0 auto' }}>
                <WrapperHeader>Thông tin người dùng</WrapperHeader>
                <WrapperContentProfile>
                    <WrapperInput>
                        <WrapperLable htmlFor='name'>name</WrapperLable>
                        <InputForm style={{ width: '300px' }} value={name} onChange={handleOnchangeName} />
                        <ButtonComponent

                            onClick={handleupdate}
                            size={40}


                            styleButton={{


                                width: 'fit-content',
                                height: '30px',
                                padding: '4px 6px 6px',

                                border: '1px solid rgb(26,148,255)',
                                borderRadius: '4px',

                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26,148,255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLable htmlFor='email'>Email</WrapperLable>
                        <InputForm style={{ width: '300px' }} value={email} onChange={handleOnchangeEmail} />
                        <ButtonComponent

                            onClick={handleupdate}
                            size={40}


                            styleButton={{


                                width: 'fit-content',
                                height: '30px',
                                padding: '4px 6px 6px',

                                border: '1px solid rgb(26,148,255)',
                                borderRadius: '4px',

                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26,148,255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLable htmlFor='phone'>Phone</WrapperLable>
                        <InputForm style={{ width: '300px' }} value={phone} onChange={handleOnchangePhone} />
                        <ButtonComponent

                            onClick={handleupdate}
                            size={40}


                            styleButton={{


                                width: 'fit-content',
                                height: '30px',
                                padding: '4px 6px 6px',

                                border: '1px solid rgb(26,148,255)',
                                borderRadius: '4px',

                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26,148,255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>
                        <WrapperLable htmlFor='address'>Address</WrapperLable>
                        <InputForm style={{ width: '300px' }} value={address} onChange={handleOnchangeAddress} />
                        <ButtonComponent

                            onClick={handleupdate}
                            size={40}


                            styleButton={{


                                width: 'fit-content',
                                height: '30px',
                                padding: '4px 6px 6px',

                                border: '1px solid rgb(26,148,255)',
                                borderRadius: '4px',

                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26,148,255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>
                    <WrapperInput>

                        <ButtonComponent

                            onClick={handleupdate}
                            size={40}


                            styleButton={{


                                width: 'fit-content',
                                height: '30px',
                                padding: '4px 6px 6px',

                                border: '1px solid rgb(26,148,255)',
                                borderRadius: '4px',

                            }}
                            textButton={'Cập nhật'}
                            styleTextButton={{ color: 'rgb(26,148,255)', fontSize: '15px', fontWeight: '700' }}
                        ></ButtonComponent>
                    </WrapperInput>

                </WrapperContentProfile>
            </div>
            <FooterComponent></FooterComponent>
        </div>

    )

}
export default ProfilePage