import { useState } from 'react'
import { Menu } from 'antd'
import {
  UserAddOutlined,
  UserOutlined,
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from '@ant-design/icons'
import ToggleTheme from './ToggleTheme'
import Link from 'next/link'

const { SubMenu } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click", e);
    setCurrent(e.key);
  }

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" theme="dark">
      <Menu.Item key="mail" icon={<MailOutlined />}>
        <Link href="/">
          <a>CMS</a>
        </Link>
      </Menu.Item>
      <Menu.Item key="signup" icon={<UserAddOutlined />}>
        <Link href="/signup">
          SignUp
        </Link>
        
      </Menu.Item>
      <Menu.Item key="signin" icon={<UserOutlined />}>
        <Link href="/signin">
            SignIn
        </Link>
      </Menu.Item>
      <SubMenu
        key="SubMenu"
        icon={<SettingOutlined />}
        title="Dashboard"
        style={{ marginLeft: "auto" }}
      >
        <Menu.ItemGroup title="Management">
            <Menu.Item key="setting:1">Management</Menu.Item>
            <Menu.Item key="setting:2">
              <Link href="/admin">
                <a>Admin</a>
              </Link>
            </Menu.Item>
        </Menu.ItemGroup>
      </SubMenu>

      <Menu.Item>
          <ToggleTheme />
      </Menu.Item>
    </Menu>
  );

};

export default TopNav;