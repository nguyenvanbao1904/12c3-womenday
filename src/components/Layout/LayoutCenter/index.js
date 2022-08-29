import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './layoutCenter.module.scss';
import { ThemeContext } from '~/components/Context';

const cx = classNames.bind(styles);

function LayoutCenter({ children }) {
    const { darkMode } = useContext(ThemeContext);

    if (!localStorage.getItem('userId')) {
        if (!(window.location.pathname === '/login')) {
            window.location.href = '/login';
        }
    }

    return (
        <div className={cx('wrapper', darkMode && 'dark')}>
            <div className={cx('inner', 'grid wide')}>
                <div className={cx('container')}>{children}</div>
            </div>
        </div>
    );
}

export default LayoutCenter;
