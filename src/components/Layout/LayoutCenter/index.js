import classNames from 'classnames/bind';
import { useContext } from 'react';

import styles from './layoutCenter.module.scss';
import { ThemeContext } from '~/components/ThemeContext';

const cx = classNames.bind(styles);

function LayoutCenter({ children }) {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={cx('wrapper', darkMode && 'dark')}>
            <div className={cx('grid wide', 'inner')}>
                <div className={cx('container')}>{children}</div>
            </div>
        </div>
    );
}

export default LayoutCenter;
