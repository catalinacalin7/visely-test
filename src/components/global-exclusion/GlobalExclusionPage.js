import React, { useEffect } from "react";
import "antd/dist/antd.css";
import GlobalExclTab from "./global-exclusion-tab/GlobalExclTab";
import { Tabs, Breadcrumb } from "antd";

import "./GlobalExclusionPage.css";

const { TabPane } = Tabs;

const GlobalExclusion = () => {
  useEffect(() => {});

  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Search</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Pins & Excludes</Breadcrumb.Item>
      </Breadcrumb>
      <div className="tabs-div">
        <Tabs type="card">
          <TabPane tab="Pins & Excludes" key="1">
            <div className="global-exclusion-tab">Pins & Excludes</div>
          </TabPane>
          <TabPane tab="Global Exclusion" key="2">
            <GlobalExclTab></GlobalExclTab>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default GlobalExclusion;
