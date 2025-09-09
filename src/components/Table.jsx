import { useDispatch } from 'react-redux';  
import { deleteEmployee } from '../features/employees/employeesSlice';

const Table = ({ data }) => {
  const dispatch = useDispatch();

  if (!Array.isArray(data) || data.length === 0) {
    return <p className="text-gray-500">No employees found.</p>;
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-blue-100">
          <tr>
            <th className="px-4 py-2 text-left">ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Department</th>
            <th className="px-4 py-2 text-left">Role</th>
            <th className="px-4 py-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((emp) => (
            <tr key={emp.id} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{emp.id}</td>
              <td className="px-4 py-2">{emp.name}</td>
              <td className="px-4 py-2">{emp.department}</td>
              <td className="px-4 py-2">{emp.role}</td>
              <td className="px-4 py-2">
                <button
                  onClick={() => dispatch(deleteEmployee(emp.id))}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
