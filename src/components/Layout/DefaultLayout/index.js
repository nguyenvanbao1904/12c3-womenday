import Header from '../components/Header';
import classNames from 'classnames/bind';
import styles from './Default.module.scss';
import { ThemeContext, DataContext } from '~/components/Context';
import { useContext, useEffect } from 'react';
import Loader from '~/components/Loader';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const { darkMode } = useContext(ThemeContext);
    const { data, isLoading } = useContext(DataContext);

    if (!localStorage.getItem('userId')) {
        window.location.href = '/login';
    }

    useEffect(() => {
        document.title = `Dear ${data.name}`;
    }, [data]);

    return (
        <div className={cx('wrapper', darkMode && 'dark')}>
            <div className={cx('inner', 'grid wide')}>
                <Header />
                <div className={cx('container')}>{children}</div>
            </div>
            {isLoading && <Loader />}
        </div>
    );
}

export default DefaultLayout;
