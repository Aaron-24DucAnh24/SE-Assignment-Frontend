import "./login.css";
import img1 from "./img/slide1.png";
import img2 from "./img/slide3.png";
import img3 from "./img/slide2.webp";
import Header from "./Header/Header.js";
import Footer from "./footer/footer.js";
import "./slides";
import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const UsernameHandler = (event) => {
        setUsername(event.target.value);
        console.log("value is:", event.target.value);
        console.log(username);
    };

    const PasswordHandler = (event) => {
        setPassword(event.target.value);
        console.log("value is:", event.target.value);
        console.log(password);
    };

    const LoginHandler = () => {
        if (username === password && username === "backofficer") {
            console.log("login as backofficer");
        }
    };

    // password witching----------------------------

    const passwordSwitch = () => {
        var passwordInput = document.querySelector(".authen__password");
        var passwordIcon = document.querySelector(".password-icon");
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }

        if (passwordIcon.classList.contains("fa-eye-slash")) {
            passwordIcon.classList.remove("fa-eye-slash");
            passwordIcon.classList.add("fa-eye");
        } else {
            passwordIcon.classList.remove("fa-eye");
            passwordIcon.classList.add("fa-eye-slash");
        }
    };

    return (
        <div>
            <Header />
            <div className="body">
                <div className="authen-section">
                    <div className="authen__wrap">
                        <div className="authen__label">
                            Đăng nhập vào hệ thống
                        </div>
                        <div className="authen__desc">
                            Sử dụng
                            <i>Tên đăng nhập</i>
                            và
                            <i>Mật khẩu</i>
                            được cung cấp
                        </div>
                        <form action="/back-officer" className="authen__form">
                            <div className="authen__input-wrap">
                                <input
                                    name="loginName"
                                    maxLength="124"
                                    type="text"
                                    className="authen__input authen__login-name"
                                    placeholder="Tên đăng nhập"
                                    value={username}
                                    onChange={UsernameHandler}
                                />
                            </div>
                            <div className="authen__input-wrap authen__input-wrap--password">
                                <input
                                    name="passWord"
                                    type="password"
                                    maxLength="16"
                                    className="authen__input authen__password"
                                    placeholder="Mật khẩu"
                                    value={password}
                                    onChange={PasswordHandler}
                                />
                                <label
                                    className="authen__input-icon clickable"
                                    htmlFor="password-swicher"
                                >
                                    <i className="fa-solid fa-eye-slash password-icon"></i>
                                </label>
                                <input
                                    type="checkbox"
                                    id="password-swicher"
                                    style={{ display: "none" }}
                                    onClick={passwordSwitch}
                                />
                            </div>
                            <button
                                className="authen__btn clickable"
                                onClick={LoginHandler}
                            >
                                <a href="/back-officer">Đăng nhập</a>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="slider-section">
                    <img src={img1} alt="" className="slide" />
                    <img src={img2} alt="" className="slide" />
                    <img src={img3} alt="" className="slide" />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
