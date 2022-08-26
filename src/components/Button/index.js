import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, darkMode }) {
    return (
        <button className={cx('button', darkMode && 'dark')}>{children}</button>
    );
}

export default Button;
