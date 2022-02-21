import React from "react";
import "antd/dist/antd.css";
import { Typography, Breadcrumb, Radio, Divider } from "antd";
import "./SearchRelevancies.css";
import { QuestionCircleOutlined } from "@ant-design/icons";
import TabsContent from "./tabs-content/TabsContent";
import PreviewChanges from "./preview-changes/PreviewChanges";

const { Text } = Typography;

const SearchRelevancies = () => {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Relevancy</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Search Relevancies</Breadcrumb.Item>
      </Breadcrumb>

      <div className="flex space-between margin-top-6">
        <div className="search-rel-wrapper backbackground-white wrapper-border height-fit-content search-wrapper-padding">
          <Text>
            <strong>SEARCH RELEVANCIES </strong>
            <span className="gray-text">
              — Select page on which to apply new variation.
            </span>
          </Text>

          <div className="search-item-div flex align-center ">
            <Text>
              Select page &nbsp;
              <QuestionCircleOutlined /> :
            </Text>
            <div className="margin-left-8">
              <span className="radio-group-container-1">
                <Radio.Group buttonStyle="solid">
                  <Radio.Button value="c">Search</Radio.Button>
                  <Radio.Button value="d">Collection</Radio.Button>
                </Radio.Group>
              </span>
            </div>
          </div>

          <Divider />

          <Text>
            <strong>VARIATION </strong>
            <span className="gray-text">
              — Choose variation to use with Visely Search engine or create a
              new one.
            </span>
          </Text>

          <TabsContent></TabsContent>
        </div>

        <div className="preview-changes-wrapper backbackground-white wrapper-border search-wrapper-padding">
          <PreviewChanges></PreviewChanges>
        </div>
      </div>
    </div>
  );
};

export default SearchRelevancies;
