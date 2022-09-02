import classNames from 'classnames/bind';
import { useContext, useEffect, useRef, useState } from 'react';

import styles from './loginPage.module.scss';
import { logo } from '~/static/imgs';
import { loginImage } from '~/static/svgs';
import Button from '~/components/Button';
import Input from '~/components/Input';
import SwitchTheme from '~/components/SwitchTheme';
import { ThemeContext, UserContext } from '~/components/Context';
import Loader from '~/components/Loader';

const cx = classNames.bind(styles);

function LoginPage() {
    const { darkMode } = useContext(ThemeContext);
    const { user, setUser, url } = useContext(UserContext);

    const userInputRef = useRef();
    const passInputRef = useRef();

    const [isLoading, setIsLoading] = useState(false);
    const [isWarning, setIsWarning] = useState(false);

    function handelClickForgotPass() {
        alert('Tính năng chưa được hỗ trợ');
    }

    function checkLogin(userCheck) {
        if (userCheck) {
            if (userCheck.password === passInputRef.current.getValue()) {
                window.location.href = '/';
                localStorage.setItem('userId', userCheck.id);
                setIsWarning(false);
            } else {
                setIsWarning(true);
            }
        } else {
            setIsWarning(true);
        }
    }

    useEffect(() => {
        setIsLoading(true);

        fetch(url)
            .then((response) => response.json())
            .then((user) => setUser(user))
            .catch(() => alert('Thực hiện không thành công'))
            .finally(() => setIsLoading(false));
    }, [url, setUser]);

    function handelLogin() {
        const userCheck = user.find((dataUser) => {
            return dataUser.userName === userInputRef.current.getValue();
        });

        checkLogin(userCheck);
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner', 'row', darkMode && 'dark')}>
                <div className={cx('image', 'col l-6 m-0 c-0')}>
                    <div className={cx('logo')}>
                        <img src={logo} alt="logo" />
                    </div>
                    <div className={cx('img-container')}>
                        <img src={loginImage} alt="" />
                    </div>
                </div>
                <div className={cx('content-container', 'col l-6 m-12 c-12')}>
                    <div className={cx('content')}>
                        <SwitchTheme hidenState />
                        <h3>Sign in and enjoy</h3>
                        <form>
                            <Input
                                placeholder="User Name"
                                darkMode={darkMode}
                                ref={userInputRef}
                                setIsWarning={setIsWarning}
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                darkMode={darkMode}
                                ref={passInputRef}
                                noCheckTrim
                                setIsWarning={setIsWarning}
                            />
                            {isWarning && (
                                <small>
                                    Tài khoản hoặc mật khẩu chưa chính xác !
                                </small>
                            )}
                            <span onClick={handelClickForgotPass}>
                                Forgot Password ?
                            </span>
                            <div
                                className={cx('login-btn')}
                                onClick={handelLogin}
                            >
                                <Button darkMode={darkMode} isActive>
                                    continue
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {isLoading && <Loader></Loader>}
        </div>
    );
}

export default LoginPage;
