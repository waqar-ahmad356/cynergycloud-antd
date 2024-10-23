import React from "react";
import { Row, Col,Grid, Typography } from "antd"; // Importing Ant Design components
import about_img from '../../assets/right.png'; // Importing the image to be used in the component

const { Title, Paragraph } = Typography; // Destructure Typography for easier access
const { useBreakpoint } = Grid;
// About component definition
const About = () => {
  const screens = useBreakpoint();
  return (
    <div id="about" style={{ padding:screens.lg?"94px":"0px 16px"}}>
      <Row 
        justify="center" 
        align="middle" 
        gutter={[5,16]} // Space between columns
        style={{flexDirection:screens.lg?'row':'column-reverse'}}
      >
        {/* Image section */}
        <Col xs={24} lg={12}>
          <img 
            src={about_img} 
            alt="About" 
            style={{
              width:screens.lg?"500px":"262px",
              height:screens.lg?"450px":"209px"
            }} 
          />
        </Col>

        {/* Content section */}
        <Col xs={24} lg={12}>
          <div style={{ display: 'flex', flexDirection: 'column', gap:screens.lg? '30px':'0px' }}>
            <Title 
              level={2} 
              style={{ 
                color: "#0F172A", 
                fontSize:screens.lg? '65px':'24px', // Font size for small devices
                fontWeight: 700, 
                marginBottom: '0px',
                textAlign: 'left'
              }}
            >
              About Us
            </Title>
            <Paragraph 
              style={{ 
                color: "#0F172A", 
                fontSize: screens.lg? '24px':'16px', // Font size for small devices
                lineHeight: screens.lg?"42px":'28px', // Line height for better readability
                marginBottom: '0px',
                width: '100%', // Limit width on large devices
                textAlign: 'left',
                fontWeight:"400",
                
              }}
            >
              At SynergyCloud, we believe that seamless communication is the backbone of productive teams. Designed for the modern workplace, our platform fosters real-time collaboration, efficient communication, and organized workflows. Whether your team is remote, hybrid, or in-office, we make staying connected effortless.
            </Paragraph>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default About; // Exporting the component for use in other parts of the application
