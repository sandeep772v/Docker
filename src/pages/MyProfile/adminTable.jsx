import RequestTable from "../../components/MyProfile/table"
export default function AdminTable() {
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Request",
      dataIndex: "request",
      key: "request",
      filters: [
        { text: "Pending", value: "Pending" },
        { text: "Approved", value: "Approved" },
      ],
     onFilter: (value, record) => record.request.includes(value),
      render: (status) => (
        <button
          style={{
            backgroundColor: status === "Pending" ? "#f87171" : "#4ade80",
            color: "white",
            border: "none",
            borderRadius: "6px",
            padding: "4px 10px",
            cursor: "pointer",
          }}
        >
          {status}
        </button>
      ),
    },
  ];

  const data = [
    { id: 1, name: "John Doe", email: "john@example.com", request: "Approved" },
    { id: 1, name: "John Doe", email: "john@example.com", request: "Approved" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", request: "Pending" },
    { id: 3, name: "Michael Lee", email: "michael@example.com", request: "Pending" },
    { id: 4, name: "Emma Watson", email: "emma@example.com", request: "Approved" },
    { id: 5, name: "David Brown", email: "david@example.com", request: "Pending" },
    { id: 6, name: "Sophia Miller", email: "sophia@example.com", request: "AApproveddmin" },
  ];

  return <RequestTable columns={columns} data={data} />;
}
