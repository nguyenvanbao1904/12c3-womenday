import { useContext } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import styles from './menuMobile.module,.scss';
import SwitchTheme from '~/components/SwitchTheme';
import { ThemeContext } from '~/components/Context';

const cx = classNames.bind(styles);

function MenuMobile({ handelAvatarError, show, setShow }) {
    const { darkMode } = useContext(ThemeContext);

    function handelClickCloseMenu(e) {
        if (e.target === e.currentTarget) {
            setShow(false);
        }
    }

    return (
        <div
            className={cx('wrapper', darkMode && 'dark', show && 'show')}
            onClick={handelClickCloseMenu}
        >
            <div className={cx('inner')}>
                <div className={cx('avatar')}>
                    <img onError={handelAvatarError} src="" alt="avatar" />
                </div>
                <div className={cx('list-options', darkMode && 'dark')}>
                    <ul>
                        <li>
                            <FontAwesomeIcon icon={faUser} />
                            <span>
                                <Link to="/profilePage">Profile</Link>
                            </span>
                        </li>
                        <li>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} />
                            <span>
                                <Link to="/login">Đăng xuất</Link>
                            </span>
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

export default MenuMobile;
