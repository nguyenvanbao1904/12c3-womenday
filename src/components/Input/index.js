import classNames from 'classnames/bind';
import {
    useState,
    forwardRef,
    useImperativeHandle,
    useRef,
    useEffect,
} from 'react';

import styles from './input.module.scss';

const cx = classNames.bind(styles);

function Input(
    { type, placeholder, darkMode, noCheckTrim, setIsWarning, setIsActiveBtn },
    ref,
) {
    const [value, setValue] = useState('');
    const inputRef = useRef();

    function handelChange(e) {
        setValue(e.target.value);
    }

    useImperativeHandle(ref, () => ({
        getValue() {
            if (inputRef.current.value) {
                return noCheckTrim
                    ? inputRef.current.value
                    : inputRef.current.value.trim();
            }
        },
        setValue(value) {
            inputRef.current.value = setValue(value);
        },
        focus() {
            inputRef.current.focus();
        },
    }));

    useEffect(() => {
        if (setIsActiveBtn) {
            if (type === 'password') {
                inputRef.current.value.trim().length < 8
                    ? setIsActiveBtn(false)
                    : setIsActiveBtn(true);
            }
        }
    }, [value, type, setIsActiveBtn]);

    return (
        <input
            className={cx('input', darkMode && 'dark')}
            type={type ? type : 'text'}
            placeholder={placeholder ? placeholder : ''}
            spellCheck="false"
            value={value}
            onChange={(e) => handelChange(e)}
            onFocus={() => (setIsWarning ? setIsWarning(false) : () => {})}
            ref={inputRef}
        />
    );
}

export default forwardRef(Input);
