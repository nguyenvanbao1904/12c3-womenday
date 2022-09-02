import { useContext } from 'react';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '~/components/Button';
import styles from './errorPage.module.scss';
import { ThemeContext } from '~/components/Context';

const cx = classNames.bind(styles);

function ErrorPage() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner', darkMode && 'dark')}>
                <h1>Trang này không tồn tại</h1>
                <p>Hãy thử tải lại trang, sự cố này có thể chỉ là tạm thời.</p>
                <p>
                    Nếu bạn nhập địa chỉ theo cách thủ công, hãy kiểm tra lại
                    xem có chính xác không ?
                </p>
                <Button darkMode={darkMode} isActive>
                    <Link to="/">Quay về trang chủ</Link>
                </Button>
            </div>
        </div>
    );
}

export default ErrorPage;
