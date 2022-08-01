import { Layout } from 'antd';
import { Children } from 'react';
import AdminNav from '../nav/AdminNav';

const { Content, Sider } = Layout;

function AdminLayout (props) {
    return(
        <Layout>
            <AdminNav />
            <Layout>
                <Content>
                    {props.children}
                </Content>
            </Layout>
        </Layout>
    )
}

export default AdminLayout;