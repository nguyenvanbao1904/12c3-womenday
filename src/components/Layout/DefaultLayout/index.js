import Header from '../components/Header';
import classNames from 'classnames/bind';
import styles from './Default.module.scss';
import { ThemeContext } from '~/components/Context';
import { useContext } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { darkMode } = useContext(ThemeContext);

    if (!localStorage.getItem('userId')) {
        window.location.href = '/login';
    }

    return (
        <div className={cx('wrapper', darkMode && 'dark')}>
            <div className={cx('inner', 'grid wide')}>
                <Header />
                <div className={cx('container')}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
