import React from "react";
import "antd/dist/antd.css";
import {
  Tabs,
  Typography,
  Input,
  List,
  Button,
  Switch,
  Dropdown,
  Menu
} from "antd";
import {
  QuestionCircleOutlined,
  DragOutlined,
  DownOutlined,
  PlusOutlined,
  LineChartOutlined
} from "@ant-design/icons";
import "./TabsContent.css";
import { fieldsArray } from "./fields";

const { TabPane } = Tabs;
const { Text } = Typography;
const fields = fieldsArray;

const initialPanes = [
  { title: "New Variation 1", key: "1" },
  { title: "Default", key: "2" },
  {
    title: "Least Sold",
    key: "3"
  },
  { title: "Name", key: "4" }
];

const menu = (
  <Menu>
    <Menu.Item key="1">1st menu item</Menu.Item>
    <Menu.Item key="2">2nd menu item</Menu.Item>
  </Menu>
);

class TabsContent extends React.Component {
  newTabIndex = 0;

  state = {
    activeKey: initialPanes[0].key,
    panes: initialPanes
  };

  onChange = activeKey => {
    this.setState({ activeKey });
  };

  onEdit = (targetKey, action) => {
    this[action](targetKey);
  };

  add = () => {
    const { panes } = this.state;
    const activeKey = `newTab${this.newTabIndex++}`;
    const newPanes = [...panes];
    newPanes.push({
      title: "New Tab",
      content: "Content of new Tab",
      key: activeKey
    });
    this.setState({
      panes: newPanes,
      activeKey
    });
  };

  remove = targetKey => {
    const { panes, activeKey } = this.state;
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter(pane => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    this.setState({
      panes: newPanes,
      activeKey: newActiveKey
    });
  };

  render() {
    const { panes, activeKey } = this.state;
    return (
      <div className="margin-top-5 tabs-content-wrapper">
        <Tabs
          type="editable-card"
          onChange={this.onChange}
          activeKey={activeKey}
          onEdit={this.onEdit}
        >
          {panes.map(pane => (
            <TabPane
              tab={pane.title}
              key={pane.key}
              closable={pane.closable}
              className="border-gray"
            >
              <div className="flex space-between align-center customize-flex-wrapper">
                <Text className="gray-text font-size-7">
                  Customize and prioritize your variations until you get the
                  desired results:
                </Text>

                <div className="flex align-center fit-content">
                  <Text className="font-size-7">Variation name</Text>
                  <QuestionCircleOutlined className="font-size-8 margin-2" />
                  <span className="font-size-8">:</span>
                  <Input
                    placeholder="New Variation 1"
                    className="font-size-7"
                  />
                </div>
              </div>

              {fields.map(field => (
                <div className="flex space-between margin-top-17">
                  <Text>
                    <strong>{field.title}</strong>
                  </Text>
                  <div id="scrollableDiv">
                    <List className="fields-list">
                      {field.fields.map(fld => (
                        <List.Item key={fld.key}>
                          <Switch size="small" />
                          {fld.title}
                          <QuestionCircleOutlined className="question-icon" />
                          <Button
                            style={{ float: "right" }}
                            className="drag-and-drop-icon"
                            icon={<DragOutlined />}
                          />
                        </List.Item>
                      ))}
                      {field.title === "Product Fields" ? (
                        <List.Item key="6" className="footer-item">
                          <Dropdown overlay={menu}>
                            <Button>
                              Select Searchable Attribute{" "}
                              <DownOutlined className="font-size-8" />
                            </Button>
                          </Dropdown>
                          <Button
                            icon={<PlusOutlined />}
                            className="footer-plus-icon"
                          />

                          <Button
                            icon={<DragOutlined />}
                            disabled
                            className="drag-and-drop-icon"
                          />
                        </List.Item>
                      ) : null}
                    </List>
                  </div>
                </div>
              ))}
            </TabPane>
          ))}
        </Tabs>

        <div className="flex justify-end">
          <Button className="font-size-8">Save</Button>
          <Button icon={<LineChartOutlined />}>Run A/B Test</Button>
        </div>
      </div>
    );
  }
}

export default TabsContent;
