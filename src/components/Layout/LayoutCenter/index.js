import classNames from 'classnames/bind';
import { useContext, useEffect } from 'react';

import styles from './layoutCenter.module.scss';
import { ThemeContext, DataContext } from '~/components/Context';
import Loader from '~/components/Loader';

const cx = classNames.bind(styles);

function LayoutCenter({ children }) {
    const { darkMode } = useContext(ThemeContext);
    const { isLoading, setIsLoading, data } = useContext(DataContext);

    if (!localStorage.getItem('userId')) {
        if (!(window.location.pathname === '/login')) {
            window.location.href = '/login';
        }
    }

    useEffect(() => {
        if (window.location.pathname === '/login') {
            setIsLoading(false);
        }
    }, [isLoading, setIsLoading]);

    useEffect(() => {
        if (window.location.pathname === '/login') {
            document.title = `Wellcome to C3 - Login `;
        } else {
            document.title = `Dear ${data.name}`;
        }
    }, []);

    return (
        <div className={cx('wrapper', darkMode && 'dark')}>
            <div className={cx('inner', 'grid wide')}>
                <div className={cx('container')}>{children}</div>
            </div>
            {isLoading && <Loader />}
        </div>
    );
}

export default LayoutCenter;
