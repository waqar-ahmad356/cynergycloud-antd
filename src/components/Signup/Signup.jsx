import React from "react";
import signup_img from "../../assets/Gif for synergy 1.png"; // Ensure the correct path
import { Typography, Input, Button, Row, Col, Grid } from "antd";
const {useBreakpoint}=Grid;
const Signup = () => {
    const screen=useBreakpoint();
  return (
    <div
      style={{
        padding:screen.lg? "120px 200px": "0 13px",
        backgroundColor:screen.lg? "#eee":"#fff",
        
        
        
      }}
      id="signup"
    >
      <Row
        gutter={[94, 47]}
        justify="center"
        align="middle"
        style={{ marginLeft:"0px",marginRight:"0px" }}
      >
        {/* Signup Form Section */}
        <Col xs={24} lg={12} style={{display:"flex",flexDirection:"column",gap:screen.lg?"75px":"39px"}}>
          {/* Signup Title */}
          <Typography.Title
            level={1}
            style={{ color: "#0F172A", fontSize:screen.lg? "56px":"29px", fontWeight: "600"}}
          >
            Sign Up
          </Typography.Title>

          {/* Signup Form */}
          <form >
            <Row gutter={[16,40]}  >
              {/* Full Name Input */}
              <Col span={24} style={{paddingLeft:"0px",paddingRight:"0px"}}>
                <div>
                  <Typography.Text
                    style={{
                      color: "#170F49",
                      fontSize: screen.lg?"28px":"14px",
                      fontWeight: "600",
                    }}
                  >
                    Full Name
                  </Typography.Text>
                  <Input
                    placeholder=""
                    style={{
                      borderBottom: "2px solid #170F49",
                      width: "100%",
                      backgroundColor: "transparent",
                      borderRadius: 0,
                    }}
                  />
                </div>
              </Col>

              {/* Email Input */}
              <Col span={24} style={{paddingLeft:"0px",paddingRight:"0px"}}>
                <div>
                  <Typography.Text
                    style={{
                      color: "#170F49",
                     fontSize: screen.lg?"28px":"14px",
                      fontWeight: "600",
                    }}
                  >
                    Email
                  </Typography.Text>
                  <Input
                    placeholder=""
                    style={{
                      borderBottom: "2px solid #170F49",
                      width: "100%",
                      backgroundColor: "transparent",
                      borderRadius: 0,
                    }}
                  />
                </div>
              </Col>

              {/* Password Input */}
              <Col span={24} style={{paddingLeft:"0px",paddingRight:"0px"}}>
                <div>
                  <Typography.Text
                    style={{
                      color: "#170F49",
                      fontSize: screen.lg?"28px":"14px",
                      fontWeight: "600",
                    }}
                  >
                    Password
                  </Typography.Text>
                  <Input
                    placeholder=""
                    style={{
                      borderBottom: "2px solid #170F49",
                      width: "100%",
                      backgroundColor: "transparent",
                      borderRadius: 0,
                    }}
                  />
                </div>
              </Col>

              {/* Create Account Button */}
              <Col span={24} style={{paddingLeft:"0px",paddingRight:"0px"}}>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#22739C",
                    border: "1.2px solid #22739C",
                    color: "#fff",
                    width:screen.lg?"276px": "146px",
                    height:screen.lg?"76px": "39px",
                    borderRadius: screen.lg?"58px":"30px",
                    fontWeight: "700",
                    fontSize:screen.lg?"21px":"12px"
                  }}
                >
                  Create Account
                </Button>
              </Col>
            </Row>
          </form>
        </Col>

        {/* Image Section */}
        <Col xs={24} lg={12} style={{paddingLeft:"0px",paddingRight:"0px"}}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
             
            }}
          >
            <img
              src={signup_img}
              alt="Signup Visual"
              style={{ maxWidth:screen.lg? "500px":"100%", height: "auto" }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Signup;
