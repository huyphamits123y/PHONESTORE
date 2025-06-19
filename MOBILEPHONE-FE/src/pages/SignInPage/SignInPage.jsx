import FooterComponent from "../../components/FooterComponent/FooterComponent"
import HeaderComponent from "../../components/HeaderComponent/HeaderComponent"
import LoginFormComponent from "../../components/LoginFormComponent/LoginFormComponent"

const SignInPage = () => {
    return (
        <div>
            <HeaderComponent></HeaderComponent>

            <LoginFormComponent />
            <FooterComponent />
        </div>
    )
}
export default SignInPage