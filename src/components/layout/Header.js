import { useState } from "react";

import { Button, Col, Drawer, Image, Row } from "antd";
import { Link } from "react-router-dom";
import { UnorderedListOutlined } from '@ant-design/icons';

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  return (
    <header className="header">
      <Row className="header-row" justify="space-around" align="middle">
        <Col xs={24} sm={24} md={4} lg={6}>
          <Row align="middle" gutter={[12]}>
            <Col>
              <Image alt="" src="assets/home/instagram.svg" width={25} height={25} preview={false} />
            </Col>
            <Col>
              <Image alt="" src="assets/home/linkedin.svg" width={20} height={20} preview={false} />
            </Col>
            <Col>
              <Image alt="" src="assets/home/facebook.svg" width={25} height={25} preview={false} />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={16} lg={12}>
          <div className="logo">
            <Link to={"/"}>
              <Image alt="logo" src="assets/home/logo.png" width={80} preview={false} />
            </Link>
          </div>
          <nav className="header-nav-desktop">
            <Link to="/service" style={{ margin: "0 10px", padding: "6px 8px", color: "#333" }}>Our Services</Link>
            <Link to="/package" style={{ margin: "0 10px", padding: "6px 8px", color: "#333" }}>Our Packages</Link>
            <Link to="/who" style={{ margin: "0 10px", padding: "6px 8px", color: "#333" }}>Who We Are</Link>
            <Link to="/contact" style={{ margin: "0 10px", padding: "6px 8px", color: "#333" }}>Contact</Link>
          </nav>
        </Col>
        <Col xs={24} sm={24} md={4} lg={6}>
          <Row justify="end" align="middle" gutter={[12]}>
            <Col>
              <Button type="primary" shape="round">Book Now</Button>              
            </Col>
          </Row>
        </Col>
      </Row>
      <div className="header-trigger">
        <Button onClick={showDrawer}>
          <UnorderedListOutlined />
        </Button>
      </div>
      <Drawer
        title={
          <Image alt="logo" src="assets/home/logo.png" width={80} preview={false} />
        }
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
      >
        <Link to="/" style={{ display: "block", padding: "12px 8px", color: "#333" }}>Our Services</Link>
        <Link to="/about" style={{ display: "block", padding: "12px 8px", color: "#333" }}>Out Packages</Link>
        <Link to="/contact" style={{ display: "block", padding: "12px 8px", color: "#333" }}>Who We Are</Link>
        <Link to="/contact" style={{ display: "block", padding: "12px 8px", color: "#333" }}>Contact</Link>
      </Drawer>
    </header>
  );
};

export default Header;