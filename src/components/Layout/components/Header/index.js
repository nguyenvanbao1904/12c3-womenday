import { useContext, useState } from 'react';
import className from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import { logo } from '~/static/imgs';
import { defaultAvatar } from '~/static/imgs';
import SwitchTheme from '~/components/SwitchTheme';
import { ThemeContext } from '~/components/Context';
import MenuMobile from '~/components/MenuMobile';

const cx = className.bind(styles);

function Header() {
    const { darkMode } = useContext(ThemeContext);
    const [showMenuMobile, setshowMenuMobile] = useState(false);

    function handelAvatarError(e) {
        e.target.src = defaultAvatar;
    }

    function handelClickMenu() {
        setshowMenuMobile(true);
    }

    function handelLogout() {
        localStorage.removeItem('userId');
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
                            <Link to="/login" onClick={handelLogout}>
                                Đăng Xuất
                            </Link>
                        </li>
                        <li>
                            <SwitchTheme />
                        </li>
                    </ul>
                </div>
            </div>
            <div className={cx('icon-menu-mobile')} onClick={handelClickMenu}>
                <FontAwesomeIcon icon={faBars} />
            </div>
            <MenuMobile
                handelAvatarError={handelAvatarError}
                show={showMenuMobile}
                setShow={setshowMenuMobile}
            />
        </div>
    );
}

export default Header;
