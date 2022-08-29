import { useContext } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './homepage.module.scss';
import Button from '~/components/Button';
import { homeImage } from '~/static/imgs';
import { ThemeContext, DataContext } from '~/components/Context';
import Loader from '~/components/Loader';

const cx = classNames.bind(styles);

function HomePage() {
    const { darkMode } = useContext(ThemeContext);
    const { data, isLoading } = useContext(DataContext);

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
                    <p>Hey, {data.name} cùng mình khám phá bất ngờ này nhé !</p>
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
            {isLoading && <Loader />}
        </div>
    );
}

export default HomePage;
