import { useState } from 'react';
import { Layout } from 'antd';
import AdminLayout from '../../../components/layout/AdminLayout';
import  { Form, Input, Col, Row, Button } from 'antd';
import {EditOutlined} from '@ant-design/icons';
import axios from 'axios';
import {toast} from 'react-hot-toast';

const { Content, Sider } = Layout;

function Categories () {

    const [loading, setLoading] = useState(false);

    const onFinish = async (values) => {
        // console.log('values =>', values);
        try {
            setLoading(true);
            const { data } = await axios.post("/category", values);
            console.log(data);
            toast.success('Category created successfully');
            setLoading(false);
        } catch (err) {
            console.log(err);
            toast.error('Category create failed');
            setLoading(false);
        }
    }

    return(
        <AdminLayout>

            <Row>
                {/* first column */}
                <Col span={12}>
                <h1>Categories</h1>
                <p>Add new category</p> 

                <Form onFinish={onFinish}>
                    {/* name */}
                    <Form.Item
                        name="name"
                    >
                        <Input prefix={<EditOutlined className="site-form-item-icon" />} placeholder="Give it a name" />
                    </Form.Item>
                    <Button loading={loading} type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form>
                </Col>

                {/* second column */}
                <Col>
                    <p>Show categories list...</p>
                </Col>
            
            </Row>
          
        </AdminLayout>
    )
}

export default Categories;