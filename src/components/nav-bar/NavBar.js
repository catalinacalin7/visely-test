import React from "react";
import "antd/dist/antd.css";
import "./NavBar.css";
import { Button, Menu, Dropdown, Input, Divider, Avatar } from "antd";
import {
  MenuFoldOutlined,
  BellOutlined,
  BarChartOutlined,
  UserOutlined,
  DownOutlined,
  SearchOutlined
} from "@ant-design/icons";

const dropdownMenu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-bar-div">
        <MenuFoldOutlined className="menu-icon" />
        <div>
          <Button icon={<BellOutlined />}>Notifications</Button>
          <Button icon={<BarChartOutlined />}>Statistics</Button>
          <Divider type="vertical" />
          <Input prefix={<SearchOutlined />} placeholder="Search" />
          <Divider type="vertical" />
          <Avatar icon={<UserOutlined />} />
          <Dropdown overlay={dropdownMenu} trigger={["click"]}>
            <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
              Stan Lee <DownOutlined />
            </a>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default NavBar;
