import classNames from 'classnames/bind';
import { useState, forwardRef, useImperativeHandle, useRef } from 'react';

import styles from './input.module.scss';

const cx = classNames.bind(styles);

function Input({ type, placeholder, darkMode, noCheckTrim }, ref) {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        getValue() {
            return noCheckTrim
                ? inputRef.current.value
                : inputRef.current.value.trim();
        },
    }));

    return (
        <input
            className={cx('input', darkMode && 'dark')}
            type={type ? type : 'text'}
            placeholder={placeholder ? placeholder : ''}
            spellCheck="false"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={inputRef}
        />
    );
}

export default forwardRef(Input);
