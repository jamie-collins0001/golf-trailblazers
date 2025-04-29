import React from 'react';
import { Button, Carousel, Col, Image, Row, Typography } from 'antd';

const { Title } = Typography;

const destinations = [{
  id: 0,
  alt: "",
  src: "assets/home/destination-item/1.jpg"
}, {
  id: 1,
  alt: "",
  src: "assets/home/destination-item/2.jpg"
}, {
  id: 2,
  alt: "",
  src: "assets/home/destination-item/3.jpg"
}, {
  id: 3,
  alt: "",
  src: "assets/home/destination-item/4.jpg"
}, {
  id: 4,
  alt: "",
  src: "assets/home/destination-item/5.jpg"
}, {
  id: 5,
  alt: "",
  src: "assets/home/destination-item/6.jpg"
}]

const Home = () => {
  return (
    <div className="home">
      <Carousel arrows infinite={false}>
        <div className='carousel-first'>
          <Title className='carousel-title'>
            UNFORGETTABLE GOLFING<br /> ADVENTURES IN THE LAND<br /> WHERE GOLF WAS BORN
          </Title>
          <Title level={4} className='carousel-sub-title'>Scotland's status as the home of golf is well-deserved. Rich history, iconic courses and welcoming culture make it a dream destination for golfers!</Title>
        </div>
        <div className='carousel-first'>
          <Title className='carousel-title'>
            UNFORGETTABLE GOLFING<br /> ADVENTURES IN THE LAND<br /> WHERE GOLF WAS BORN
          </Title>
          <Title level={4} className='carousel-sub-title'>Scotland's status as the home of golf is well-deserved. Rich history, iconic courses and welcoming culture make it a dream destination for golfers!</Title>
        </div>
      </Carousel>
      <div className='learn-more'>
        <Title className='learn-more-title'>
          YOUR GLOBAL GOLF TRAVEL EXPERTS
        </Title>
        <Title level={4} className='learn-more-sub-title'>At Golf Trailblazers, we believe that a golf vacation should be more than just a game of golf. It should be an experience that touches all your senses and creates memories that last a lifetime.</Title>
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <Button size='large' shape='round' ghost>
            LEARN MORE
          </Button>
        </div>
      </div>
      <div className='golf-destinations'>
        <Title style={{ textAlign: 'center', fontWeight: 'bold', margin: "3rem 0" }}>
          The world's most beautiful golf destinations
        </Title>
        <Row gutter={[30, 30]} style={{ margin: 0 }}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div>
              <Image alt='' src='assets/home/destination1.jpg' preview={false} width="100%" height="100%" />
            </div>
            <div>
              <Title level={3} style={{ textAlign: 'center', marginTop: '2rem' }}>World-Class Courses</Title>
              <Title level={5} style={{ width: '80%', textAlign: 'center', margin: 'auto' }}>
                Our mission is to provide you with personalised and customised travel solutions that meet your unique needs and preferences. Whether you are looking to play on some of the world’s most iconic golf courses, experience new cultures or simply relax and unwind in luxury accommodations, we have got you covered.
              </Title>
            </div>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <div>
              <Image alt='' src='assets/home/destination3.png' preview={false} width="100%" height="100%" />
            </div>
            <div>
              <Title level={3} style={{ textAlign: 'center', marginTop: '2rem' }}>Amazing Accommodation</Title>
              <Title level={5} style={{ width: '80%', textAlign: 'center', margin: 'auto' }}>
                We specialise in crafting bespoke itineraries that cater to your individual desires. From selecting the perfect golf courses to arranging for private transportation and top-notch accommodations, we take care of all the details so that you can focus on enjoying your golfing vacation to the fullest.
              </Title>
            </div>
          </Col>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Row gutter={[30, 30]}>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Image alt='' src='assets/home/clubhouse.jpg' preview={false} width="100%" height="100%" />
              </Col>
              <Col xs={24} sm={24} md={12} lg={12}>
                <Title level={2} className='golf-destination-title'>
                  With access to the world's most prestigious golf courses, our itineraries offer unparalleled opportunities on some of the finest courses and enjoy luxurious accommodations, exceptional cuisine, and ultimate service.
                </Title>
                <Title level={5} style={{ margin: 'auto' }}>
                  - Get in touch to start your journey today
                </Title>
              </Col>
            </Row>
          </Col>
          {
            destinations.map(destination => (
              <Col xs={24} sm={24} md={12} lg={8} key={destination.id}>
                <div className='destination-item' style={{ backgroundImage: `url('${destination.src}')`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: 400}} />
              </Col>
            ))
          }
        </Row>
      </div>
      <div className='quote'>
        <Row style={{ margin: 0 }} gutter={[30, 30]}>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Title level={2} style={{ color: 'white' }}>
              “Our resort offered luxurious accommodations, including guest rooms and suites with stunning views of the golf courses and surrounding landscape.”
            </Title>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Title level={2} style={{ color: 'white' }}>
              “The combination of beautiful weather, world-class golf courses, and luxurious accommodations made for a truly memorable trip.”
            </Title>
          </Col>
        </Row>
      </div>
      <div className='golf-trailblazers'>
        <Title className='golf-trailblazers-title'>
          Golf Trailblazers
        </Title>
        <Title level={4} className='golf-trailblazers-sub-title'>Let us take care of all the details, so you can focus on enjoying the game and creating memories that will last a lifetime. Contact us today to start planning your next luxury golf vacation.</Title>
        <div style={{ textAlign: 'center', marginTop: '5rem' }}>
          <Button variant="outlined" size='large' shape='round' ghost>
            BOOK NOW
          </Button>
        </div>
      </div>
      {/* <div className='golf-clubs'>
        <Title style={{ textAlign: 'center', fontWeight: 'bold', margin: 0 }}>
          Carnoustie Golf Club and The Smith Society have selected Golf Trailblazers as their partner of choice
        </Title>
        <div className='golf-club-content'>
          <Row gutter={[30, 30]} style={{ margin: 0 }}>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card title="" variant="borderless">
                <div className='golf-club-header'>
                  <Avatar src="assets/home/golf-club/1.jpg" />
                </div>
                <Title level={4} style={{ textAlign: 'center' }}>
                  The Carnoustie Golf Club
                </Title>
                <Title level={5} style={{ textAlign: 'center' }}>
                  An Artisan Club interwoven into the history of Scottish and World Golf. One of the ten oldest golf clubs in the world. A home to golf legends
                </Title>
              </Card>
            </Col>
            <Col xs={24} sm={24} md={12} lg={12}>
              <Card title="" variant="borderless">
                <div className='golf-club-header'>
                  <Avatar src="assets/home/golf-club/2.jpg" />
                </div>
                <Title level={4} style={{ textAlign: 'center' }}>
                  The Smith Society
                </Title>
                <Title level={5} style={{ textAlign: 'center' }}>
                  The Smith boys started the trailblazing golfing exodus in 1898, and it is fitting we continue to respect their memory.
                </Title>
              </Card>
            </Col>
          </Row>
        </div>
      </div> */}
    </div>
  )
}

export default Home;