import React from 'react';
import { Row, Col,Grid, Typography, Space } from 'antd';
import logo from '../../assets/logo.png'; // Importing the logo image
import linkedin from '../../assets/linkedin.png'; // Importing the LinkedIn icon
import phone from '../../assets/phone2.png'; // Importing the phone icon
import location from '../../assets/Location.png'; // Importing the location icon
import info from '../../assets/info.png'; // Importing the info icon

const {useBreakpoint}=Grid;
// Footer component
const Footer = () => {
    const screens = useBreakpoint();
  return (
    <div style={{ padding: screens.lg?"94px 150px ":"28px" }} id="footer">
      <Row
        justify="space-between"
        gutter={[16, 32]}
        style={{ flexDirection:screens.lg? 'row':"column", flexWrap: 'wrap' }}
      >
        {/* Left section: Logo and Tagline */}
        <Col xs={24} lg={8}>
          <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
          <div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",gap:screens.lg?"94px":'16px'}}>
          <div>
            <img
              src={logo}
              alt="Company Logo"
              style={{ width: '100%', maxWidth: '265px', height: '55px' }}
            />
            <Typography style={{ color: '#0F172A', fontSize: '16px',width:"263px" }}>
              Empower Your Team to Communicate, Collaborate, and Create—All in One Place!
            </Typography>
            </div>
            <img src={linkedin} alt="LinkedIn" style={{ width: '28px', height: '28px' }} />
            </div>
          </Space>
        </Col>

        {/* Center section: Quick Links */}
        <Col xs={24} lg={8}>
          <Space direction="vertical" size="middle" style={{ display: 'flex',flexDirection:"column" }}>
            <Typography.Title level={3} style={{ color: '#0F172A', fontSize: screens.lg?'28px':'24px',fontWeight:"600" }}>
              Quick Links
            </Typography.Title>
            <ul style={{ display:"flex",flexDirection:"column",gap:screens.lg?"28px":"16px", padding: 0, listStyle: 'none', margin: 0 }}>
              {['About Us', 'Testimonials', 'Pricing', 'Contact Us'].map((text, index) => (
                <li key={index}>
                  <Typography style={{ fontSize:screens.lg?'24px': '16px', color: '#0F172A' }}>{text}</Typography>
                </li>
              ))}
            </ul>
          </Space>
        </Col>

        {/* Right section: Contact Information */}
        <Col xs={24} lg={8}>
          <Space direction="vertical" size="middle" style={{ display: 'flex',flexDirection:"column" }}>
            <Typography.Title level={3} style={{ color: '#0F172A', fontSize: '28px' }}>
              Contact
            </Typography.Title>
            <Space direction="vertical" size="middle">
              <Space>
                <img src={info} alt="Email" style={{ width: '28px', height: '28px' }} />
                <Typography style={{ fontSize: screens.lg?'24px': '16px', color: '#0F172A' }}>
                  info@synergycloud.com
                </Typography>
              </Space>
              <Space>
                <img src={phone} alt="Phone" style={{ width: '28px', height: '28px' }} />
                <Typography style={{ fontSize: screens.lg?'24px': '16px', color: '#0F172A' }}>650-285-9974</Typography>
              </Space>
              <Space>
                <img src={location} alt="Location" style={{ width: '28px', height: '28px' }} />
                <Typography style={{ fontSize: screens.lg?'24px': '16px', color: '#0F172A' }}>
                  110 Nottingham Street, Boston MA 02090
                </Typography>
              </Space>
            </Space>
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
