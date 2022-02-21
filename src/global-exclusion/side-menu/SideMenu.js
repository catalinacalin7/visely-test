import React from "react";
import "antd/dist/antd.css";
import "../../index.css";
import "./SideMenu.css";
import { Menu } from "antd";
import {
  LikeOutlined,
  SettingOutlined,
  SearchOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;

class SideMenu extends React.Component {
  handleClick = e => {
    console.log("click ", e);
  };

  render() {
    return (
      <div className="inline-block min-height">
        <div className="visely-logo-wrapper">
          <img
            src={require("../../images/visely-logo.svg").default}
            className="visely-logo"
            alt="mySvgImage"
          />
        </div>
        <Menu
          onClick={this.handleClick}
          style={{ width: 136 }}
          defaultSelectedKeys={["6"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
        >
          <SubMenu key="sub1" icon={<SearchOutlined />} title="Search">
            <Menu.ItemGroup key="g1" title="Essentials">
              <Menu.Item key="1">Setup</Menu.Item>
              <Menu.Item key="2">Search Filters</Menu.Item>
              <Menu.Item key="3">Pin or Exclude</Menu.Item>
              <Menu.Item key="4">Redirect Rules</Menu.Item>
              <Menu.Item key="5">Analytics</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup key="g2" title="Relevancy">
              <Menu.Item key="6">Relevancy Configuration</Menu.Item>
              <Menu.Item key="7">A/B Tests</Menu.Item>
              <Menu.Item key="8">Personalization</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu key="sub2" icon={<LikeOutlined />} title="Recommendations">
            <Menu.Item key="9">Recommendation 1</Menu.Item>
            <Menu.Item key="10">Recommendations 2</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<SettingOutlined />} title="Settings">
            <Menu.Item key="11">Settings 1</Menu.Item>
            <Menu.Item key="12">Settings 2</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default SideMenu;
