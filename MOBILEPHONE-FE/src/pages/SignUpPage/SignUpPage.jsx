import FooterComponent from "../../components/FooterComponent/FooterComponent"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import LoginFormComponent from "../../components/LoginFormComponent/LoginFormComponent"
import SignUpFormComponent from "../../components/SignUpFormComponent/SignUpFormComponent"

const SignUpPage = () => {
    return (
        <div>

            <HeaderComponent></HeaderComponent>
            <SignUpFormComponent />
            <FooterComponent />
        </div>
    )
}
export default SignUpPage