import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './presentPage.module.scss';
import { ThemeContext, DataContext } from '~/components/Context';
import Loader from '~/components/Loader';

const cx = classNames.bind(styles);

function PresentPage() {
    const { darkMode } = useContext(ThemeContext);
    const { data, isLoading } = useContext(DataContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner', 'row', darkMode && 'dark')}>
                <div className={cx('image-container', 'col l-5 m-0 c-0')}>
                    <div className={cx('image')}>
                        <img src={data.img} alt="" />
                    </div>
                </div>
                <div className={cx('content-container', 'col l-7 m-12 c-12')}>
                    <div className={cx('content')}>
                        <h2>{data.title}</h2>
                        <p>{data.content}</p>
                    </div>
                    <div className={cx('signature')}>
                        <h4>Thân Gửi</h4>
                        <span>BOYS OF C3</span>
                    </div>
                </div>
            </div>
            {isLoading && <Loader />}
        </div>
    );
}

export default PresentPage;
