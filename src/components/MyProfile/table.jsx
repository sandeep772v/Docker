import React, { useState } from "react";
import { Table, Input } from "antd";

// ✅ Reusable Table Component
const RequestTable = ({ columns, data }) => {
  const [searchText, setSearchText] = useState("");

  // 👉 Filter rows by search text
  const filteredData = data.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <div style={{ padding: "20px" }}>
      {/* 🔍 Search Filter */}
      <Input.Search
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{ marginBottom: 16, maxWidth: 300 }}
        allowClear
      />

      {/* Ant Table with Pagination */}
      <Table
        columns={columns}
        dataSource={filteredData}
        rowKey="id"
        pagination={{ pageSize: 5 }}
        bordered
      />
    </div>
  );
};
export default RequestTable
