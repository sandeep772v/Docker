import { useSelector } from 'react-redux';
import Table from "../components/Table";

const Employees = () => {
  const employees = useSelector((state) => state.employees.list);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Employee List</h1>
      <Table data={employees} />
    </div>
  );
};

export default Employees;
