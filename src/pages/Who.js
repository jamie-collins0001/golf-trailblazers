import {Col, Image, Row, Typography} from "antd";

const { Title } = Typography;

const Who = () => {
    return (
        <div className="who">
            <Row gutter={[32, 32]} style={{ margin: 0 }}>
                <Col xs={24} sm={24} md={24} lg={12} className="who-content-left">
                    <Title level={3} className="who-title">
                        Golf Trailblazers
                    </Title>
                    <Title level={5} className="who-subtitle">
                        A Scottish Golf Company
                    </Title>
                    <Title level={5} className="who-description">
                        Our services extend beyond just booking tee times and accommodation. We provide comprehensive travel planning assistance, including transportation, dining reservations, and sightseeing recommendations, to ensure that your trip is seamless and stress-free. We also offer golf lessons and coaching sessions with top instructors, so you can improve your game while enjoying the best golf courses in the world.
                    </Title>
                    <Title level={5} className="who-subdescription">
                        We believe that every golfing experience should be unforgettable, and we are dedicated to making that happen for our clients. So whether you’re looking to tee off at the Old Course in St Andrews. Scotland or Pebble Beach Golf Links in California, USA, we are here to help you create memories that will last a lifetime.
                    </Title>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12} className="who-content-right">
                    <Image alt='' src='assets/who/background.jpg' preview={false} width="100%" />
                </Col>
            </Row>
        </div>
    )
}

export default Who;
