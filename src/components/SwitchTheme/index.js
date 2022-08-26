import { useContext, useEffect, useRef } from 'react';

import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './switchTheme.module.scss';
import { ThemeContext } from '~/components/ThemeContext';

const cx = classNames.bind(styles);

function SwitchTheme({ hidenState }) {
    const { darkMode, setDarkMode } = useContext(ThemeContext);
    const inputRef = useRef();

    const handeChange = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            inputRef.current.checked = true;
        } else {
            inputRef.current.checked = false;
        }
    }, [darkMode]);

    return (
        <div className={cx('wrapper')}>
            <input
                type="checkbox"
                className={cx('checkbox')}
                id="checkbox"
                onChange={handeChange}
                ref={inputRef}
            />
            <label htmlFor="checkbox" className={cx('label')}>
                <FontAwesomeIcon icon={faMoon} />
                <FontAwesomeIcon icon={faSun} />
                <div className={cx('ball')} />
            </label>
            {!hidenState && (
                <span className={cx('state', darkMode && 'dark')}>
                    {darkMode ? 'DARK' : 'LIGHT'}
                </span>
            )}
        </div>
    );
}

export default SwitchTheme;
