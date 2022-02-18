import React, { useEffect } from "react";
import "antd/dist/antd.css";
import SideMenu from "./side-menu/SideMenu";
import NavBar from "./nav-bar/NavBar";
import Breadcrumbs from "./breadcrumbs/Breadcrumbs";
import GlobalExclTab from "./global-exclusion-tab/GlobalExclTab";
import { Tabs } from "antd";

import "./GlobalExclusion.css";

const { TabPane } = Tabs;

const GlobalExclusion = () => {
  useEffect(() => {});

  return (
    <div className="global-body">
      <SideMenu></SideMenu>
      <NavBar></NavBar>
      <div className="main-page">
        <Breadcrumbs></Breadcrumbs>
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
    </div>
  );
};

export default GlobalExclusion;
