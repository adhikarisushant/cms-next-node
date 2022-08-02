import { Layout } from 'antd';
import AdminLayout from '../../components/layout/AdminLayout';

const { Content, Sider } = Layout;

function Admin () {
    return(
        <AdminLayout>
            <h1>AdminLayout Page props</h1>
            <p>...</p>  
        </AdminLayout>
    )
}

export default Admin;