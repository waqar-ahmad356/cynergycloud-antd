import React from "react";
import { Card, Typography, Input, Button,Row,Col, Grid } from "antd";
import phone from "../../assets/phone.png";
import location from "../../assets/location2.png";
import email from "../../assets/email.png";
import './Contact.css'

const { TextArea } = Input;
const {useBreakpoint}=Grid;

const Contact = () => {
  const screens=useBreakpoint();
  return (
    <div
      style={{
        padding: screens.lg?"89px 94px":"17px 0px 39px 0px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
        
        
      }}
      id="contact"
    >
      <div
        style={{
          display: "flex",
          flexDirection: screens.lg?"row":"column",
        
          gap: screens.lg?"34px":"39px",
          padding: "11px",
          maxWidth:"1000px",
          borderRadius:screens.lg? "12px":"",
          boxShadow: screens.lg?"0px 0px 70.583px 35.292px rgba(0, 0, 0, 0.03)":"none",
        }}
      >
        {/* Contact Us section */}
        <div
          style={{
            backgroundColor: "#22739C",
            borderRadius: "12px",
            padding: screens.lg?"47px 47px 200px 47px":"16px",
            color: "#fff",
            
            width:screens.lg?"470px":"100%"
          }}
        >
        <div style={{display:"flex",
            flexDirection:"column",
            
            justifyContent:"space-between",
            gap:screens.lg?"130px":"9px",}}>
        <div>
          <Typography.Title style={{color:"#fff",fontSize:screens.lg?"38px":"24px"}} >Contact Us</Typography.Title>
          <Typography.Text style={{ color: "#C9C9C9", fontSize: "16px" }}>
            Say something to start a live chat!
          </Typography.Text>
</div>
          {/* Contact information items */}
          <div style={{display:"flex",flexDirection:"column",gap:screens.lg?"56px":"9px"}} >
          <div style={{display:"flex",gap:screens.lg?"29px":"8px"}}>
            <img src={phone} style={{width:screens.lg?"28px":"19px",height:screens.lg?"28px":"21px"}}></img>
            <Typography.Text style={{ color: "#fff", fontSize:screens.lg?"24px": "16px"}}>+1012 3456 789</Typography.Text>
          </div>
          <div style={{display:"flex",gap:screens.lg?"29px":"8px"}}>
            <img src={email} style={{width:screens.lg?"28px":"19px",height:screens.lg?"28px":"21px"}}></img>
            <Typography.Text style={{ color: "#fff", fontSize:screens.lg?"24px": "16px"}}>demo@gmail.com</Typography.Text>
          </div>
          <div style={{display:"flex",gap:screens.lg?"29px":"8px"}}>
            <img src={location} style={{width:screens.lg?"28px":"19px",height:screens.lg?"28px":"21px"}}></img>
            <Typography.Text style={{ color: "#fff", fontSize:screens.lg?"24px": "16px"}}>132 Dartmouth Street Boston, Massachusetts 02156 United States</Typography.Text>
          </div>
            
            
          </div>
          </div>
        </div>

        {/* Contact form section */}
        <div style={{ padding: "16px", marginTop:screens.lg? "90px":"0px" }}>
      <form style={{ display: "flex", flexDirection: "column", gap: screens.lg? "94px":"24px" }}>
        {/* Use Row and Col for layout */}
        <Row gutter={[28, 0]} style={{ flexWrap: "wrap" }}>
          <Col xs={24} lg={12}>
            <InputField label="First Name" placeholder="Shaoor"/>
          </Col>
          <Col xs={24} lg={12}>
            <InputField label="Last Name" />
          </Col>
        </Row>
        <Row gutter={[28, 0]} style={{ flexWrap: "wrap" }}>
          <Col xs={24} lg={12}>
            <InputField label="Email" />
          </Col>
          <Col xs={24} lg={12}>
            <InputField label="Phone Number" placeholder="+92-3124700158" />
          </Col>
        </Row>
        <div>
          <Typography.Text style={{ fontSize: "20px", color: "#8D8D8D", fontWeight: "600" }}>Messages</Typography.Text>
          <Input.TextArea
            rows={1}
            placeholder="write your message"
            style={{ borderBottom: screens.lg? "1px solid #8D8D8D":"1px solid #170F49", width: "100%",resize:"none" }}
          />
        </div>
        <Button
              type="primary"
              htmlType="submit"
              style={{
                marginTop: screens.lg?"-42px": "0px",
                alignSelf: "flex-start",
                width:screens.lg?"261px":"148px",
                height:screens.lg?"75px":"33px",
                borderRadius: "58px",
                backgroundColor: "#22739C",
                color: "#fff",
                fontSize:screens.lg?"21px":"16px",
                fontWeight:screens.lg?"700":"500",
                marginLeft:"auto",

              }}
            >
              Send Message
            </Button>
      </form>
    </div>
      </div>
    </div>
  );
};



const InputField = ({ label, placeholder }) => (
  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
    <Typography.Text style={{ fontSize: screen.lg? "28px":"20px", fontWeight: "600" }}>{label}</Typography.Text>
    <Input
      placeholder={placeholder}
      style={{
        borderBottom:screen.lg? "1px solid #8D8D8D":"1px solid #170F49",
       
        
      }}
    />
  </div>
);

export default Contact;
