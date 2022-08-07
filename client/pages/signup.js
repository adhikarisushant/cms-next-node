import React, { useState, useContext } from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import { AuthContext } from '../context/auth';
import {useRouter} from 'next/router';

const Signup = () => {
    // context
    const [auth, setAuth] = useState(AuthContext);

    // hook
    const router = useRouter();

    // state
    const [loading, setLoading] = useState(false);

    // process.env.NEXT_PUBLIC_API

  const onFinish = async (values) => {
    // console.log('Received values of form: ', values);
    setLoading(true);
    try {
        const { data } = await axios.post(
            `/signup`, 
            values
        );

        if (data?.error) {
            toast.error(data.error);
            setLoading(false);
        } else {    
            console.log("signup response => ", data )
            // save in context
            setAuth(data);

            // save in local storage
            localStorage.setItem("auth", JSON.stringify(data));

            toast.success('Successfully signed up');
            setLoading(false);

            // redirect
            router.push("/admin");
        }

    } catch (err) {
        toast.error('Signup failed. Please try again.')
        console.log(err)
        setLoading(false);
    }
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
                
                {/* username */}
            <Form.Item
                name="name"
                rules={[
                {
                    required: true,
                    message: 'Please input your name!',
                },
                ]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Name" />
            </Form.Item>

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
                <br />
                <br />
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
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