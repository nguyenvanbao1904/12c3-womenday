import { useContext, useEffect, useRef, useState } from 'react';
import { ThemeContext, DataContext } from '~/components/Context';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './profilePage.module.scss';
import Input from '~/components/Input';
import { defaultAvatar } from '~/static/imgs';
import Button from '~/components/Button';
import SwitchTheme from '~/components/SwitchTheme';
import Loader from '~/components/Loader';

const cx = classNames.bind(styles);

function ProfilePage() {
    const userId = localStorage.getItem('userId');

    const { darkMode } = useContext(ThemeContext);
    const { data, setData, isLoading, setIsLoading } = useContext(DataContext);

    const nameInputRef = useRef();
    const passInputRef = useRef();
    const avatarUrlInputRef = useRef();

    const [isActive, setIsActive] = useState(false);

    function handelAvatarError(e) {
        e.target.src = defaultAvatar;
    }

    useEffect(() => {
        nameInputRef.current.focus();
    }, []);

    function changeData() {
        const newdata = {
            name: nameInputRef.current.getValue()
                ? nameInputRef.current.getValue()
                : data.name,
            avatar: avatarUrlInputRef.current.getValue()
                ? avatarUrlInputRef.current.getValue()
                : data.avatar,
        };

        fetch(`https://server-womenday.glitch.me/data/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newdata),
        })
            .then((response) => response.json())
            .then((newData) => setData(newData))
            .catch(() => alert('Thực hiện không thành công'))
            .finally(() => setIsLoading(false));
    }

    function changePassword() {
        const newPass = {
            password: passInputRef.current.getValue(),
        };

        fetch(`https://server-womenday.glitch.me/users/${userId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newPass),
        })
            .then(() => alert('Thay đổi thành công'))
            .catch(() => alert('Thực hiện không thành công'))
            .finally(() => setIsLoading(false));
    }

    function handelPutData() {
        if (isActive) {
            setIsLoading(true);
            changeData();
            changePassword();

            nameInputRef.current.setValue('');
            passInputRef.current.setValue('');
            avatarUrlInputRef.current.setValue('');
            nameInputRef.current.focus();
        }
    }

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
                                <p>Tên hiện tại</p>
                                <p>{data.name}</p>
                            </div>
                            <div>
                                <p>Tên</p>
                                <Input
                                    type="text"
                                    darkMode={darkMode}
                                    ref={nameInputRef}
                                    setIsActiveBtn={setIsActive}
                                />
                            </div>
                            <div>
                                <p>Mật Khẩu</p>
                                <Input
                                    type="password"
                                    darkMode={darkMode}
                                    ref={passInputRef}
                                    setIsActiveBtn={setIsActive}
                                />
                            </div>
                            <div>
                                <p>Link ảnh</p>
                                <Input
                                    type="text"
                                    darkMode={darkMode}
                                    ref={avatarUrlInputRef}
                                />
                            </div>
                            <div className={cx('btn')}>
                                <Button darkMode={darkMode} isActive={isActive}>
                                    <span onClick={handelPutData}>Lưu</span>
                                </Button>
                                <Button darkMode={darkMode} isActive>
                                    <Link to={'/'}>Về trang chủ</Link>
                                </Button>
                            </div>
                        </div>
                        <div className={cx('col l-5 m-0 c-0')}>
                            <div
                                className={cx('pre-avatar', darkMode && 'dark')}
                            >
                                <img
                                    src={data.avatar}
                                    alt="avarta"
                                    onError={handelAvatarError}
                                ></img>
                                <p>Đây là hình ảnh xem trước avatar của bạn</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {isLoading && <Loader />}
        </div>
    );
}

export default ProfilePage;
