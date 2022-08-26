import classNames from 'classnames/bind';
import styles from './input.module.scss';

const cx = classNames.bind(styles);

function Input({ type, placeholder, darkMode }) {
    return (
        <input
            className={cx('input', darkMode && 'dark')}
            type={type ? type : 'text'}
            placeholder={placeholder ? placeholder : ''}
            spellCheck="false"
        />
    );
}

export default Input;
