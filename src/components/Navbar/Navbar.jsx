import React, { useState } from "react";
import { Menu, Button, Drawer} from "antd";
import { Link } from "react-scroll"; // Link for smooth scroll between sections
import { MenuOutlined } from "@ant-design/icons";
import logo from "../../assets/logo.png";
import './Navbar.css'


const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  // Function to toggle mobile drawer visibility
  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <Link to="hero" offset={0} smooth={true} duration={100}>
          <img
            src={logo}
            alt="Logo"
            preview={false}
           
            className="navbar-logo"
          />
        </Link>

        {/* Desktop Menu */}
        <Menu mode="horizontal" className="desktop-menu" style={{ borderBottom: 'none' }}>
          <Menu.Item key="about">
            <Link to="about" smooth={true} offset={-100} duration={100}>
              About Us
            </Link>
          </Menu.Item>
          <Menu.Item key="pricing">
            <Link to="pricing" smooth={true} offset={-30} duration={100}>
              Pricing
            </Link>
          </Menu.Item>
          <Menu.Item key="testimonials">
            <Link to="testimonials" smooth={true} offset={-80} duration={100}>
              Testimonials
            </Link>
          </Menu.Item>
          <Menu.Item key="contact">
            <Link to="contact" smooth={true} offset={-5} duration={100}>
              Contact Us
            </Link>
          </Menu.Item>
        </Menu>

        {/* Login and Sign Up section */}
        <div className="desktop-buttons">
          <a href="#login" className="login-link">
            Log In
          </a>
          <Button
            
            shape="round"
            size="large"
            className="signup-button"
          >
            <Link to="signup" smooth={true} offset={0} duration={100}>
              Sign Up
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Icon */}
        <Button
          className="mobile-menu-button"
          type=""
          icon={<MenuOutlined />}
          onClick={handleDrawerToggle}
        />

        {/* Mobile Drawer */}
        <Drawer
          title="Menu"
          placement="right"
          onClose={handleDrawerToggle}
          open={isDrawerOpen}
          className="mobile-menu-drawer"
        >
          <Menu mode="vertical" className="mobile-menu">
            <Menu.Item key="about" onClick={handleDrawerToggle}>
              <Link to="about" smooth={true} offset={-100} duration={100}>
                About Us
              </Link>
            </Menu.Item>
            <Menu.Item key="pricing" onClick={handleDrawerToggle}>
              <Link to="pricing" smooth={true} offset={-30} duration={100}>
                Pricing
              </Link>
            </Menu.Item>
            <Menu.Item key="testimonials" onClick={handleDrawerToggle}>
              <Link to="testimonials" smooth={true} offset={-80} duration={100}>
                Testimonials
              </Link>
            </Menu.Item>
            <Menu.Item key="contact" onClick={handleDrawerToggle}>
              <Link to="contact" smooth={true} offset={-5} duration={100}>
                Contact Us
              </Link>
            </Menu.Item>
            <Menu.Item key="login" onClick={handleDrawerToggle}>
              <a href="#login" className="login-link">
                Login
              </a>
            </Menu.Item>
            <Menu.Item key="signup" onClick={handleDrawerToggle}>
              <Button type="primary" shape="round">
                <Link to="signup" smooth={true} offset={0} duration={100}>
                  Sign Up
                </Link>
              </Button>
            </Menu.Item>
          </Menu>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;
