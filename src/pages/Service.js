import React from 'react';

import {Card, Col, Image, Row, Typography} from "antd";

const { Title } = Typography;

const destinations = [{
    id: 0,
    alt: "",
    src: "assets/service/destinations/1.jpg"
}, {
    id: 1,
    alt: "",
    src: "assets/service/destinations/2.jpg"
}, {
    id: 2,
    alt: "",
    src: "assets/service/destinations/3.jpg"
}, {
    id: 3,
    alt: "",
    src: "assets/service/destinations/4.jpg"
}, {
    id: 4,
    alt: "",
    src: "assets/service/destinations/5.jpg"
}, {
    id: 5,
    alt: "",
    src: "assets/service/destinations/6.jpg"
}]

const Service = () => {
    return (
        <div className="service">
            <div className="service-header">
                <div className="service-header-left" />
                <Title level={3} className="service-header-title">Our Services</Title>
                <Title className="service-header-description">Truly Unforgettable Vacations</Title>
            </div>
            <div className="service-content">
                <Row justify="center" gutter={[32, 32]} style={{ margin: 0 }}>
                    <Col xs={24} sm={24} md={12} lg={9}>
                        <Title level={3}>
                            The Best Golf Courses
                        </Title>
                        <Title level={5}>
                            We offer a range of golfing packages that cater to golfers of all skill levels. Whether you want to play on the iconic links courses of Scotland or explore the hidden gems of the Middle East, we can create a customised itinerary that meets your needs and exceeds your expectations.
                        </Title>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={9}>
                        <Title level={3}>
                            Amazing Hotels and Accommodation
                        </Title>
                        <Title level={5}>
                            Our accommodation boasts elegant and sophisticated design, featuring luxurious hotels and world-class amenities. Whether you're looking to indulge in a spa treatment, savor gourmet cuisine, or simply and take in the views, our properties offer everything you need.
                        </Title>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={9}>
                        <Title level={3}>
                            Luxury Travel
                        </Title>
                        <Title level={5}>
                            At our Golf Trailblazers, we believe that travel is not just a luxury, but a necessity for the soul. We invite you to embark on a journey with us, where you'll experience the world in a way you never thought possible.
                        </Title>
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={9}>
                        <Title level={3}>
                            Unrivaled concierge service
                        </Title>
                        <Title level={5}>
                            We will be there every step of the way, ensuring that your journey is seamless and stress-free. Our team of travel experts is available 24/7 to answer any questions you may have and to provide personalised recommendations based on your preferences.
                        </Title>
                    </Col>
                </Row>
                <Row justify="center" align="middle" gutter={[32, 32]} style={{ marginTop: '2rem', marginLeft: 0, marginRight: 0 }}>
                    {
                        destinations.map(destination => (
                            <Col xs={24} sm={24} md={12} lg={8} key={destination.id}>
                                <div className='destination-item' style={{ backgroundImage: `url('${destination.src}')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 400}} />
                            </Col>
                        ))
                    }
                </Row>
            </div>
            <div className="service-footer">
                <Row style={{ margin: 0, position: 'relative' }} justify="end">
                    <Col xs={24} sm={24} className="service-footer-sub-title">
                        <Title level={3}>
                            We look forward to welcoming our clients and sharing our passion for hospitality
                        </Title>
                        <Title level={5}>
                             - Golf Trailblazers
                        </Title>
                    </Col>
                    <Card className="service-footer-title">
                        <Title level={3}>
                            We look forward to welcoming our clients and sharing our passion for hospitality
                        </Title>
                        <Title level={5}>
                            - Golf Trailblazers
                        </Title>
                    </Card>
                    <Col xs={24} sm={24} md={16} lg={12}>
                        <Image alt="" src="assets/service/service-footer.jpg" width="100%" preview={false} />
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Service;
