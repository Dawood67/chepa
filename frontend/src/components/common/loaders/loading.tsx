import { Space, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const antIcon = (
  <LoadingOutlined style={{ fontSize: 40, color: "#302AED" }} spin />
);
const Loading = ({ content }: { content?: any }) => {
  return (
    <div className="cover-spin">
      <Space size="middle">
        <Spin size="large" indicator={antIcon} />
        {content}
      </Space>
    </div>
  );
};

export default Loading;
