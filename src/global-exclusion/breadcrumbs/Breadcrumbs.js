import React from "react";
import "antd/dist/antd.css";
import "./Breadcrumbs.css";
import { Breadcrumb } from "antd";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Search</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Pins & Excludes</Breadcrumb.Item>
      </Breadcrumb>
    );
  }
}

export default Breadcrumbs;
