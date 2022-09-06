import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import avt1 from '../../../avt1.jpg';
import avt2 from '../../../avt2.jpg';
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <h1 className="department">Khoa: Điện - Điện tử viễn thông</h1>
      <h3>Luận văn tốt nghiệp</h3>
      <p className="name">
        <strong>Đề tài:</strong> Ứng dụng mạng di động 4G và công nghệ xử lý ảnh để điều khiển và giám sát hệ thống chăm sóc cây trồng
      </p>
      <div className="info">
        <div className="teacher">
          <div className="teacher-left">
            <p>
              <strong>GVHD:</strong>
            </p>
          </div>
          <div className="teacher-right">
            <p>ThS. Trần Quang Vinh</p>
          </div>
        </div>
        <div className="student">
          <div className="student-left">
            <p>
              <strong>SVTH:</strong>
            </p>
          </div>
          <div className="student-right">
            <div className="lam">
              <div className="lam-left">
                <p>1751050023 - Trần Công Lâm - TD17A</p>
              </div>
              <div className="lam-right">
                <Avatar style={{ marginLeft: '20px', width: '70px', height: '70px' }} alt="avt" src={avt1} />
              </div>
            </div>
            <div className="vinh">
              <div className="vinh-left">
                <p>1751050053 - Nguyễn Khắc Vỉnh - TD17A</p>
              </div>
              <div className="vinh-right">
                <Avatar style={{ marginLeft: '20px', width: '70px', height: '70px' }} alt="avt" src={avt2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
