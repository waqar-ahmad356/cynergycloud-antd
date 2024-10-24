import React from "react";
import { Carousel, Card, Typography, Grid } from "antd";
import { Row, Col } from "antd";
import testimonial_icon from "../../assets/testimonial-icon.png"; // Import the icon
import "./Slider.css"; // Import custom styles for smooth scrolling

const{useBreakpoint}=Grid;
// Testimonials array
const testimonials = [
  {
    id: 1,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 2,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 3,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 4,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 5,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 6,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  {
    id: 7,
    icon: testimonial_icon,
    feedback: "Our remote team finally feels connected. The channels and integrations make.",
    name: "Jhone",
    company: "Company XYZ"
  },
  // Add more testimonials as needed...
];

const ContinuousSlider = () => {
  const screen=useBreakpoint();
  return (
    <div className="carousel-container">
      <Carousel
        autoplay={true}
        autoplaySpeed={3000}
        infinite={true}
        speed={3000}
        dots={false}
        slidesToShow={screen.lg?4:2}
        slidesToScroll={1}
        cssEase="linear"
        pauseOnHover={false}
      >
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-slide">
            <Card
              style={{
                backgroundColor: "#eeeeee",
                borderRadius: "12px",
                
                textAlign: "left",
              }}
            >
              <Row gutter={0}>
                <Col span={24}>
                  <img
                    src={testimonial.icon}
                    alt={testimonial.name}
                    style={{width: screen.lg? "79px":"35px", height:screen.lg? "84px":'37px', marginBottom: "5px" }}
                  />
                </Col>
                <Col span={24}>
                  <Typography.Text style={{ fontSize:screen.lg? "27px":"12px", color: "#413D45" }}>
                    {testimonial.feedback}
                  </Typography.Text>
                  <br />
                  </Col>
                  <Col span={24} style={{marginTop:screen.lg?"50px":"10px"}}>
                  <Typography.Text style={{ fontSize: screen.lg? "14px":"8px", color: "#67646A"}}>
                    {testimonial.name}, {testimonial.company}
                  </Typography.Text>
                </Col>
              </Row>
            </Card>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ContinuousSlider;
