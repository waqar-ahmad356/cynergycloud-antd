import React from 'react';
import { Row, Col, Typography,Grid, Slider } from 'antd';
import CountinuousSlider from '../Swiper/CounterSlider';



const {useBreakpoint}=Grid;

const Testimonials = () => {
    const screens=useBreakpoint();
  return (
    <div
      style={{
        padding: screens.lg?'65px 0px 127px 0px': '28px 0px 59px 0px',
       display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"
      }}
    >
      <Row  align="middle" gutter={[0, 24]} style={{marginBottom:screen.lg?"24px":"12px"}}>
        {/* Title and Subtitle Section */}
        <Col span={24} style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",gap:"0px"}}>
          
            <Typography.Title
              level={1}
              style={{
                color: '#0f172a',
                fontSize: screens.lg?'56px':'24px',
                lineHeight: screens.lg?'85px':'37px',
                fontWeight: '700',
                marginBottom:"0px"
                
              }}
            >
              Testimonials
            </Typography.Title>
            <Typography
              style={{
                color: '#6f6c90',
                fontSize: screens.lg?'21px': '10px',
                lineHeight: screens.lg?'35px': '15px',
                fontWeight: '400',
               
              }}
            >
              See How Teams Are Thriving with SynergyCloud
            </Typography>
          
        </Col>

        {/* Slider Section */}
        <Col>
        
        </Col>
      </Row>
     <CountinuousSlider/>
      
    
    </div>
  );
};

export default Testimonials;
