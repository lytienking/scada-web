import banner from '../../../UTBanner.jpg';
import './Header.scss';

export default function Header() {
  return (
    <div className="header">
      <div className="banner">
        <img src={banner} alt="logo" />
      </div>
      <nav className="navigation">
        <div className="navigation-menu expanded">
          <ul>
            <li>
              <a href="/">Scada</a>
            </li>
            <li>
              <a href="/chart">Biểu đồ</a>
            </li>
            <li>
              <a href="/value">Bảng giá trị</a>
            </li>
            <li>
              <a href="/remote">Điều khiển</a>
            </li>
            <li>
              <a href="/about">Giới thiệu</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
