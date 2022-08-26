import { useContext } from 'react';
import { ThemeContext } from '~/components/ThemeContext';
import classNames from 'classnames/bind';
import styles from './profilePage.module.scss';
import Input from '~/components/Input';
import Button from '~/components/Button';
import SwitchTheme from '~/components/SwitchTheme';

const cx = classNames.bind(styles);

function ProfilePage() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner', 'row', darkMode && 'dark')}>
                <div className={cx('col l-12 c-12 m-12')}>
                    <div className={cx('header')}>
                        <div
                            className={cx('header-content', darkMode && 'dark')}
                        >
                            <h3>Hồ Sơ Của Tôi</h3>
                            <p>Quản lý thông tin hồ sơ để bảo mật tài khoản</p>
                        </div>
                        <div className={cx('switch-Theme-btn')}>
                            <SwitchTheme hidenState />
                        </div>
                    </div>
                    <div className={cx('content', 'row', darkMode && 'dark')}>
                        <div className={cx('account', 'col l-7 m-12 c-12')}>
                            <div className={cx('user-name')}>
                                <p>Tên Đăng Nhập</p>
                                <p>Ngo Thuy An</p>
                            </div>
                            <div>
                                <p>Tên</p>
                                <Input darkMode={darkMode} />
                            </div>
                            <div>
                                <p>Mật Khẩu</p>
                                <Input type="password" darkMode={darkMode} />
                            </div>
                            <div>
                                <p>Link ảnh</p>
                                <Input type="text" darkMode={darkMode} />
                            </div>
                            <div className={cx('submit-btn')}>
                                <Button darkMode={darkMode}>Lưu</Button>
                            </div>
                        </div>
                        <div className={cx('col l-5 m-0 c-0')}>
                            <div className={cx('pre-avatar',darkMode && 'dark')}>
                                <img
                                    src="https://i.pinimg.com/736x/8a/12/ab/8a12ab01805e01b7ae3de60640e57565.jpg"
                                    alt="avarta"
                                ></img>
                                <p>Đây là hình ảnh xem trước avatar của bạn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;