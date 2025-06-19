import React from 'react';
import { Button } from 'antd';
import { WrapperButton } from "./style"
const ButtonComponent = ({ size, styleButton = {}, styleTextButton, textButton, disable, ...rests }) => {
    return (
        <WrapperButton
            style={{
                ...styleButton,
                background: disable ? '#ccc' : styleButton.background,
                cursor: disable ? 'not-allowed' : 'pointer'
            }}
            size={size}
            disabled={disable} // Sử dụng thuộc tính disabled của Ant Design
            {...rests}
        >
            <span style={styleTextButton}>{textButton}</span>
        </WrapperButton>
    );
};

export default ButtonComponent;
