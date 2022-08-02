import React from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import Link from 'next/link';

const Signup = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row>
        <Col span={8} offset={8}>
            <h1 style={{ paddingTop: '100px' }}>Signup</h1>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            >

                {/* email */}
            <Form.Item
                name="email"
                rules={[
                {
                    type: "email"
                }
                ]}
            >
                <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
            </Form.Item>

                {/* password */}
            <Form.Item
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your Password!',
                },
                ]}
            >
                <Input.Password
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>

            <Link href="/forgot-password">
                <a href="">Forgot Password!</a>
            </Link> 
                <br />
                <br />
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Register
                </Button>
                <br />
                <br />
                Or {" "}
                <Link href="/signin">
                    <a href="">Login now!</a>
                </Link> 
            </Form.Item>
            </Form>     
        </Col>     
    </Row>

  );
};

export default Signup;