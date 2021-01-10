import React from "react";
import { Table } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
// import { SearchOutlined } from '@ant-design/icons';
import "./style.css";

export default function Library({ visability, data, nickname }) {
  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (text, item) => <Link to={`/book/${item.id}`}>{text}</Link>,
    },
    {
      title: "Author",
      dataIndex: "author",
      key: "author",
    },
    {
      title: "Genre",
      dataIndex: "genre",
      key: "genre",
    },
    {
      title: "Read?",
      dataIndex: "read",
      key: "read",
      render: (text, item) => (item.read ? "Read" : "Not read"),
    },
    {
      title: "Series",
      dataIndex: "series",
      key: "series",
      render: (text, item) => (item.series ? item.series : ""),
    },
    {
      title: "Leant?",
      dataIndex: "leant",
      key: "leant",
    },
  ];

  if (!visability) {
    return <p>...</p>;
  }
  return (
    <div id="library-box">
      <h1>Patrick's library</h1>
      <Table
        columns={columns}
        pagination={{ position: ["topRight", "bottomRight"] }}
        dataSource={data}
        id="full-library-table"
      />
    </div>
  );
}
