import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './homepage.module.scss';
import Button from '~/components/Button';
import { homeImage } from '~/static/imgs';
import { ThemeContext } from '~/components/Context';

const cx = classNames.bind(styles);

function HomePage() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('row ')}>
                <div
                    className={cx(
                        'col l-6 m-6 c-12',
                        'content',
                        darkMode && 'dark',
                    )}
                >
                    <p>Hey, Thúy An cùng mình khám phá bất ngờ này nhé !</p>
                    <Button>
                        <Link to="/present">let's go !!!</Link>
                    </Button>
                </div>
                <div
                    className={cx(
                        'col l-6 m-6 c-0',
                        'image',
                        darkMode && 'dark',
                    )}
                >
                    <img src={homeImage} alt=""></img>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
