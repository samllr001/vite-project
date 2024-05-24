import AppButton from "../../../components/UI/AppButton/AppButton";
import AppHeader from "../../../components/UI/AppHeader/AppHeader";
import AppInput from "../../../components/UI/AppInput/AppInput";
import AppLink from "../../../components/UI/AppLink/AppLink";
import "./LoginPage.css";

export const LoginPage = () => {
    return (
        <div className="loginForm">
        {/* <h1>Зарегистрироваться</h1> */}
        <AppHeader/>
        <label>
            {/* <input type="text" />
            <input type="tel" /> */}
            <AppInput/>
            <AppInput/>
        </label>
        {/* <button>Далее</button> */}
        <AppButton/>
        {/* <a href="#">Забыли пароль?</a> */}
        <AppLink/>
        </div>
    );
};