import React from "react";
import "antd/dist/antd.css";
import "./GlobalExclTab.css";
import {
  QuestionCircleOutlined,
  CloseOutlined,
  CheckOutlined
} from "@ant-design/icons";
import { Input, Checkbox, Radio, List, Image } from "antd";
import { productsList } from "../../../products-visely";
import { Typography } from "antd";

const { Text } = Typography;
const products = productsList.products;

const GlobalExclTab = () => {
  const [checkedProducts, setCheckedProducts] = React.useState([]);
  const [checkedProducts2, setCheckedProducts2] = React.useState([]);
  const [isAllSelected, setIsAllSelected] = React.useState(false);
  const [isAllSelected2, setIsAllSelected2] = React.useState(false);
  const [indeterminate, setIndeterminate] = React.useState(true);
  const [indeterminate2, setIndeterminate2] = React.useState(true);

  const setAllSelected = () => {
    if (isAllSelected) {
      setCheckedProducts([]);
      setCheckedProducts2([]);
    } else {
      setCheckedProducts(products);
      setCheckedProducts2(products);
    }
    setIsAllSelected(!isAllSelected);
    setIndeterminate(false);
  };

  const setAllSelected2 = () => {
    if (isAllSelected2) {
      setCheckedProducts2([]);
    } else {
      setCheckedProducts2(checkedProducts);
    }
    setIsAllSelected2(!isAllSelected2);
    setIndeterminate2(false);
  };

  const onProductCheckChange = item => {
    let checkedProductsCopy = [...checkedProducts];
    let idx = checkedProductsCopy.findIndex(it => item.id === it.id);
    if (idx > -1) {
      checkedProductsCopy.splice(idx, 1);
    } else {
      checkedProductsCopy.push(item);
    }
    setCheckedProducts(checkedProductsCopy);
    setCheckedProducts2(checkedProductsCopy);

    setIndeterminate(
      !!checkedProductsCopy.length &&
        checkedProductsCopy.length < products.length
    );
    setIsAllSelected(checkedProductsCopy.length === products.length);
  };

  const onProductCheckChange2 = item => {
    let checkedProductsCopy2 = [...checkedProducts2];
    let idx = checkedProductsCopy2.findIndex(it => item.id === it.id);
    if (idx > -1) {
      checkedProductsCopy2.splice(idx, 1);
    } else {
      checkedProductsCopy2.push(item);
    }
    setCheckedProducts2(checkedProductsCopy2);

    setIndeterminate2(
      !!checkedProductsCopy2.length &&
        checkedProductsCopy2.length < products.length
    );
    setIsAllSelected2(checkedProductsCopy2.length === products.length);
  };

  return (
    <div className="global-exclusion-tab">
      <Text>
        <strong>HIDE PRODUCTS</strong> — Choose products that should be excluded
        from search and filter results. Put them back easily.
      </Text>
      <div className="search-item-div">
        <Text>
          Search term &nbsp;
          <QuestionCircleOutlined /> :
        </Text>
        <Input placeholder="Dress" />
      </div>
      <div className="flex space-between">
        <div className="flex-part">
          <Text>
            <strong>ALL PRODUCTS</strong>
          </Text>
          <div className="padding-21 margin-24 display-flex">
            <div>
              <Checkbox
                indeterminate={indeterminate}
                onChange={setAllSelected}
                checked={isAllSelected}
              >
                {checkedProducts.length} selected
              </Checkbox>
              <span className="radio-group-container">
                <Radio.Group buttonStyle="solid">
                  <Radio.Button value="a">
                    <CloseOutlined />
                  </Radio.Button>
                  <Radio.Button value="b">
                    <CheckOutlined />
                  </Radio.Button>
                </Radio.Group>
              </span>
            </div>
            <p className="status">Status</p>
          </div>
          <List
            size="large"
            bordered
            pagination={{
              defaultPageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: [5, 10, 20, 50, 100]
            }}
            dataSource={products}
            renderItem={item => (
              <List.Item>
                <div className="flex list-item-style">
                  <div className="list-item-checkbox-div">
                    <Checkbox
                      checked={checkedProducts.includes(item)}
                      onChange={() => onProductCheckChange(item)}
                    />
                    <Image
                      width={44}
                      className="image-item"
                      src={item.media[0].url}
                    />
                    {item.name.en}
                  </div>
                  {checkedProducts.includes(item) && (
                    <CloseOutlined className="close-icon" />
                  )}
                </div>
              </List.Item>
            )}
          />
        </div>
        <div className="flex-part">
          <Text>
            <strong>ALL PRODUCTS</strong>
          </Text>
          <div className="padding-21 margin-24 display-flex">
            <div>
              <Checkbox
                indeterminate={indeterminate2}
                onChange={setAllSelected2}
                checked={isAllSelected2}
              >
                {checkedProducts2.length} selected
              </Checkbox>
              <span className="radio-group-container">
                <Radio.Group buttonStyle="solid" defaultValue={"d"}>
                  <Radio.Button value="d">
                    <CheckOutlined />
                  </Radio.Button>
                </Radio.Group>
              </span>
            </div>
            <p className="status">Status</p>
          </div>
          <List
            size="large"
            bordered
            dataSource={checkedProducts}
            pagination={{
              defaultPageSize: 5,
              showSizeChanger: true,
              pageSizeOptions: [5, 10, 20, 50, 100]
            }}
            renderItem={item => (
              <List.Item>
                <div className="flex list-item-style">
                  <div className="list-item-checkbox-div">
                    <Checkbox
                      checked={checkedProducts2.includes(item)}
                      onChange={() => onProductCheckChange2(item)}
                    />
                    <Image
                      width={44}
                      className="image-item"
                      src={item.media[0].url}
                    />
                    {item.name.en}
                  </div>
                  {checkedProducts2.includes(item) && (
                    <CloseOutlined className="close-icon" />
                  )}
                </div>
              </List.Item>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalExclTab;
