import {Button, Col, Form, Image, Input, Row, Typography} from "antd";

const { Title } = Typography;

const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
};

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

const Contact = () => {
    const onFinish = values => {
        console.log(values);
    };

    return (
        <div className="contact">
            <Row gutter={[32, 32]} style={{ margin: 0 }} justify="center">
                <Col xs={24} sm={24} md={12} lg={10} className="contact-content-left">
                    <Title level={3} className="contact-title">
                        Get in touch...
                    </Title>
                    <Title level={5} className="contact-subtitle">
                        From the moment you arrive to the moment you depart, we will take care of every detail, leaving you free to focus on your game and the golfing adventure of a lifetime.
                    </Title>
                    <Title level={5} className="contact-description">
                        concierge@golftrailblazers.com
                    </Title>
                    <Title level={5} className="contact-subdescription">
                        Tel : (+44) 0345 548 2050
                    </Title>
                    <Row align="middle" gutter={[12]} style={{ marginTop: '3rem' }}>
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
                <Col xs={24} sm={24} md={12} lg={14} className="contact-content-right">
                    <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{ width: "100%" }}
                        validateMessages={validateMessages}
                    >
                        <Form.Item name='firstname' label="First Name" rules={[{ required: true }]}>
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item name='lastname' label="Last Name" rules={[{ required: true }]}>
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item name='email' label="Email" rules={[{ required: true, type: 'email' }]}>
                            <Input size="large" />
                        </Form.Item>
                        <Form.Item name='message' label="Message" rules={[{ required: true }]}>
                            <Input.TextArea size="large" rows={6} />
                        </Form.Item>
                        <Form.Item label={null}>
                            <Button type="primary" htmlType="submit" shape="round" size="large">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>
        </div>
    )
}

export default Contact;
