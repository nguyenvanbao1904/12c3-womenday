import classNames from 'classnames/bind';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './loginPage.module.scss';
import { logo } from '~/static/imgs';
import { loginImage } from '~/static/svgs';
import Button from '~/components/Button';
import Input from '~/components/Input';
import SwitchTheme from '~/components/SwitchTheme';
import { ThemeContext } from '~/components/ThemeContext';

const cx = classNames.bind(styles);

function LoginPage() {
    const { darkMode } = useContext(ThemeContext);

    function handelClickForgotPass() {
        alert('Tính năng chưa được hỗ trợ');
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
                            />
                            <Input
                                type="password"
                                placeholder="Password"
                                darkMode={darkMode}
                            />
                            <span onClick={handelClickForgotPass}>
                                Forgot Password ?
                            </span>
                            <Button darkMode={darkMode}>
                                <Link to="/">Continue</Link>
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
