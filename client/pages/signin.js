import React, { useState, useContext, useEffect } from 'react';
import { LockOutlined, UserOutlined, MailOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Col, Row } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { AuthContext } from '../context/auth';
import {useRouter} from 'next/router';

const Signin = () => {
    // context
    const [auth, setAuth] = useContext(AuthContext);

    // state
    const [loading, setLoading] = useState(false);

    // hooks    
    const router = useRouter();
    // const [ form ] = Form.useForm();

    useEffect(() => {
        if (auth?.token) {
            router.push("/");
        }
    }, [auth]);

    const onFinish = async (values) => {
    // console.log('Received values of form: ', values);

    try {
        setLoading(true);
        const {data} = await axios.post('/signin', values);
        if(data?.error) {
            toast.error(data.error);
            setLoading(false);
        } else {
            // console.log("signin response => ", data);

            // save user and token to context
            setAuth(data);

            // save user and token to localstorage
            localStorage.setItem('auth', JSON.stringify(data));
            toast.success("Successfully logged in");
            
            // redirect user
            if(data?.user?.role === "Admin") {
                router.push("/admin");
            } else if (data?.user?.role === "Author") {
                router.push("/author")
            } else {
                router.push("/subscriber")
            }

            // form.resetFields();
        }

    } catch (err) {
        console.log('err => ', err);
        setLoading(false);
        toast.error("Signin failed. Try again.");
    }
  };

  return (
    <Row>
        <Col span={8} offset={8}>
            <h1 style={{ paddingTop: '100px' }}>Signin</h1>
            <Form
            // form={form}
            name="normal_login"
            className="login-form"
            initialValues={{
                remember: true,
                // email: "sushant@email.com",
                // password: "123456", 
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

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                Login
                </Button>
                <br />
                <Link href="/forgot-password">
                    <a href="">Forgot Password!</a>
                </Link> 
                Or {" "}
                <Link href="/signup">
                    <a href="">Register now!</a>
                </Link> 
            </Form.Item>
            </Form>     
        </Col>     
    </Row>

  );
};

export default Signin;