import classNames from 'classnames/bind';
import styles from './button.module.scss';

const cx = classNames.bind(styles);

function Button({ children, darkMode, isActive }) {
    return (
        <button
            className={cx('button', darkMode && 'dark', isActive && 'active')}
            onClick={(e) => e.preventDefault()}
        >
            {children}
        </button>
    );
}

export default Button;
