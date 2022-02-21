import React from "react";
import "antd/dist/antd.css";
import { Typography, Input, List, Image } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";
import { productsList } from "../../../products-visely";

const { Text } = Typography;
const products = productsList.products;

const SearchRelevancies = () => {
  return (
    <div>
      <Text>
        <strong>Preview Relevancy Changes</strong>
      </Text>
      <div className="search-item-div">
        <Text>
          Search term &nbsp;
          <QuestionCircleOutlined /> :
        </Text>
        <Input placeholder="Dress" />
        <List
          size="large"
          bordered
          dataSource={products}
          pagination={{
            defaultPageSize: 20,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20, 50, 100]
          }}
          renderItem={item => (
            <List.Item>
              <div className="flex align-center">
                <Image
                  className="image-item"
                  src={item.media[0].url}
                />
                {item.name.en}
              </div>
            </List.Item>
          )}
        />
      </div>
    </div>
  );
};

export default SearchRelevancies;
