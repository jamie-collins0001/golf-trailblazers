import { Col, Row, Typography } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

const Footer = () => {
  return (
    <footer className="footer">
      <Row>
        <Col xs={24} sm={24} md={12} lg={16}>
          <Title level={3}>
            Golf Trailblazers
          </Title>
          <Title level={5} style={{ marginTop: '16px' }}>
            A Scottish golf Company
          </Title>
          <Title level={5} style={{ marginTop: '8px', marginBottom: 0 }}>
            <Link style={{ color: "black" }}>
              concierge@golftrailblazers.com
            </Link>
          </Title>
          <Title level={5} style={{ marginTop: 0 }}>
            0345 548 2050
          </Title>
        </Col>
        <Col xs={24} sm={24} md={6} lg={4}>
          <Title level={3}>
            Hours
          </Title>
          <Title level={5} style={{ marginTop: '16px' }}>
            Monday - Saturday
          </Title>
          <Title level={5} style={{ marginTop: '8px', marginBottom: 0 }}>
            10 a.m - 10 p.m
          </Title>
        </Col>
        <Col xs={24} sm={24} md={6} lg={4}>
          <Title level={3}>
            Follow
          </Title>
          <Title level={5} style={{ margin: 0 }}>
            <Link style={{ color: "black" }}>
              Facebook
            </Link>
          </Title>
          <Title level={5} style={{ margin: 0 }}>
            <Link style={{ color: "black" }}>
              Instagram
            </Link>
          </Title>
          <Title level={5} style={{ margin: 0 }}>
            <Link style={{ color: "black" }}>
              Twitter
            </Link>
          </Title>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;