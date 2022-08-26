import { useContext } from 'react';
import classNames from 'classnames/bind';
import styles from './presentPage.module.scss';
import { ThemeContext } from '~/components/ThemeContext';

const cx = classNames.bind(styles);

function PresentPage() {
    const { darkMode } = useContext(ThemeContext);

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inner', 'row', darkMode && 'dark')}>
                <div className={cx('image-container', 'col l-5 m-0 c-0')}>
                    <div className={cx('image')}>
                        <img
                            src="https://cdn.glitch.global/015fd467-a0b0-4570-8ac3-0e07008b2d32/1.png?v=1646449803974"
                            alt=""
                        />
                    </div>
                </div>
                <div className={cx('content-container', 'col l-7 m-0 c-0')}>
                    <div className={cx('content')}>
                        <h2>✨ Àn Chao ✨</h2>
                        <p>
                            Vậy là một 8/3 nữa đến với lớp trưởng của 12C3. Lớp
                            trưởng chưa bao giờ là một công việc dễ dàng. Nhưng
                            với Bắp mọi chuyện đều suôn sẻ, thuận lợi. Lớp ta đã
                            đạt được nhiều thành tích, cũng như sự nổi tiếng
                            trong giới thầy cô .Tất cả là nhờ có sự giúp đỡ của
                            bạn. Chúc bạn giữ vững sự tự tin và tỏa sáng trên
                            con đường thành công!
                        </p>
                    </div>
                    <div className={cx('signature')}>
                        <h4>Thân Gửi</h4>
                        <span>BOYS OF C3</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PresentPage;
