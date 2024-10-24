import React from "react";
import { Row, Col,Grid, Typography, Button } from "antd"; // Import Ant Design components
import arrow from "../../assets/arrow.png"; // Arrow icon for the button
import desktop from "../../assets/desktop-app.png"; // Image for desktop view in hero section

import './Hero.css'; // Create a separate CSS file for additional styling if needed

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;
const Hero = () => {
  const screens = useBreakpoint();
  return (
    <>
      {/* Hero Section: Main container for the hero content */}
      <div style={{padding:screens.lg?"94px 94px 0px 94px":"16px 16px 0px 16px"}}>
        <Row
          justify="center"
          align="middle"
          style={{display:"flex",flexDirection:"column",gap:screens.lg?"30px":"16px"}}
          id="hero"
        >
          {/* Text Content: Heading and description */}
          <Col style={{display:"flex",flexDirection:"column",gap:screens.lg?"16px":"8px"}} >
            <div  style={{ textAlign: "center"}}>
              {/* Hero Heading */}
              <Title 
              className="hero-heading"
                level={2}
                style={{
                  color: "#0F172A",
                  fontWeight: "bold",
                  fontSize:screens.lg? "56px":"24px" // Fixed font size for larger screens
                }}
              >
                Unlock Seamless 
                <br className="mobile-only" />
                Creativity 
                <br className="mobile-only" />
                with SynergyCloud: 
                
                Where Teams Connect and Ideas Flourish!
              </Title>
              {/* Hero Description */}
              <Paragraph 
                style={{
                  color: "#0F172A",
                  fontSize:screens.lg? "24px":"16px",
                  fontFamily: 'Montserrat',
                  lineHeight:screens.lg?"33px":"23px",
                  margin: "0",
                }}
              >
                Empower Your Team to Communicate, Collaborate, and Create—All in One Place!
              </Paragraph>
            </div>
          </Col>

          {/* Button Section: Start For Free button */}
          <Col style={{marginBottom:screens.lg?"94px":"46px"}}>
            <div >
              {/* Button Text */}
              <Button
               className="start-btn"
                href="#"
                style={{
                  backgroundColor: "#0B608B",
                  color: "white",
                  borderRadius: "58px",
                  fontSize: screens.lg?"28px":"18px",
                  display: "flex",
                  alignItems: "center",
                  width: screens.lg?"331px":"220px",
                  height:screens.lg?"76px":"38px",
                }}
              >
                Start For Free
                <img src={arrow} alt="" style={{ marginLeft: "12px" }} />
              </Button>
            </div>
          </Col>
        </Row>

        {/* Image Section: Displays the desktop image and background animation */}
        <Row justify="center" align="middle" style={{ position: "relative" }}>
          {/* Image Section: Displays the desktop image */}
          <Col>
            <img
              src={desktop}
              alt=""
              
              style={{
                borderRadius: screens.lg?"23px":"6px", 
                border: screens.lg?"6px solid #4C1D95":"2px solid #4C1D95 ", 
                width: "100%", 
                height: "auto",
                
              }}
            />

            {/* Background Animation 
            <div
              className="background-animation"
              style={{
                position: "absolute",
                top: screens.lg?"-40%":"-20%",
                left:0,
                display:"inline",
                width: "100%",
                height: "100%",
               
                backgroundSize: "cover",
                backgroundPosition: "center",
                zIndex: -1,
                
              }}
            />*/}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Hero;
