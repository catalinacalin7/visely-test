import React from "react";
import "antd/dist/antd.css";
import "./index.css";
import GlobalExclusion from "./components/global-exclusion/GlobalExclusionPage";
import SearchRelevancies from "./components/search-relevancies/SearchRelevancies";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SideMenu from "./components/side-menu/SideMenu";
import NavBar from "./components/nav-bar/NavBar";

class App extends React.Component {
  render() {
    return (
      <div className="global-body">
        <SideMenu></SideMenu>
        <NavBar></NavBar>
        <div className="main-page">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<GlobalExclusion />} />
              <Route path="global-exclusion" element={<GlobalExclusion />} />
              <Route
                path="search-relevancies"
                element={<SearchRelevancies />}
              />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default App;
