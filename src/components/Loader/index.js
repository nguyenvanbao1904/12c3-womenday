import classNames from 'classnames/bind';
import styles from './loader.module.scss';

const cx = classNames.bind(styles);

function Loader() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('loader')}>
                <div className={cx('square')}></div>
                <div className={cx('square')}></div>
                <div className={cx('square', 'last')}></div>
                <div className={cx('square', 'clear')}></div>
                <div className={cx('square')}></div>
                <div className={cx('square', 'last')}></div>
                <div className={cx('square', 'clear')}></div>
                <div className={cx('square')}></div>
                <div className={cx('square', 'last')}></div>
            </div>
        </div>
    );
}

export default Loader;
