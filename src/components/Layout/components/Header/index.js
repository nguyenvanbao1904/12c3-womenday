import { useContext } from 'react';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';
import { logo } from '~/static/imgs';
import { defaultAvatar } from '~/static/imgs';
import SwitchTheme from '~/components/SwitchTheme';
import { ThemeContext } from '~/components/ThemeContext';

const cx = className.bind(styles);

function Header() {
    const { darkMode } = useContext(ThemeContext);

    function handelAvatarError(e) {
        e.target.src = defaultAvatar;
    }

    return (
        <div className={cx('wrapper', 'row', darkMode && 'dark')}>
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
            <h1>Hello Thúy An</h1>
            <div className={cx('avatar-container')}>
                <img src="" onError={handelAvatarError} alt="avatar" />
                <div className={cx('sub-menu', darkMode && 'dark')}>
                    <ul>
                        <li>
                            <Link to="/profilePage">Tài Khoản Của Tôi</Link>
                        </li>
                        <li>
                            <Link to="/login">Đăng Xuất</Link>
                        </li>
                        <li>
                            <SwitchTheme />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;
