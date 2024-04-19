import {
    departmentOptions,
    statusOptions,
} from "../../constant/EmployeeFilters";

const labelClass = "block text-gray-700 text-sm font-bold mb-2";
const inputClass =
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
const buttonClass =
    "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
const ButtonContainerClass = "flex justify-end";

const EmployeeForm = ({ employee, setEmployee, handleSubmit, btnText }) => {
    const handleChange = (e) => {
        let { name, value } = e.target;
        setEmployee((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        handleSubmit();
    };

    return (
        <form onSubmit={onSubmit} className="bg-white p-6 space-y-4">
            <div className="flex space-x-5">
                {employee.employeeId && (
                    <div>
                        <label htmlFor="employeeId" className={labelClass}>
                            Employee ID:
                        </label>
                        <input
                            id="employeeId"
                            name="employeeId"
                            type="text"
                            required
                            className={inputClass}
                            value={employee.employeeId}
                            onChange={handleChange}
                            disabled
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="name" className={labelClass}>
                        Name:
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        className={inputClass}
                        value={employee.name}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="department" className={labelClass}>
                    Department:
                </label>
                <select
                    id="department"
                    name="department"
                    required
                    className={inputClass}
                    value={employee.department}
                    onChange={handleChange}
                >
                    <option value="">Select a Department</option>
                    {departmentOptions
                        .filter((option) => option.value !== "")
                        .map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>
            </div>
            <div>
                <label htmlFor="position" className={labelClass}>
                    Position:
                </label>
                <input
                    id="position"
                    name="position"
                    type="text"
                    required
                    className={inputClass}
                    value={employee.position}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="salary">Salary:</label>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <span style={{ margin: "0 8px" }}>$</span>
                    <input
                        id="salary"
                        name="salary"
                        type="number"
                        required
                        className={inputClass}
                        value={parseInt(employee.salary)}
                        onChange={handleChange}
                        style={{ padding: "8px", width: "100%" }}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="bio" className={labelClass}>
                    Bio:
                </label>
                <textarea
                    id="bio"
                    name="bio"
                    required
                    className={inputClass}
                    value={employee.bio}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="status" className={labelClass}>
                    Status:
                </label>
                <select
                    id="status"
                    name="status"
                    required
                    className={inputClass}
                    value={employee.status}
                    onChange={handleChange}
                >
                    <option value="">Select a Status</option>
                    {statusOptions
                        .filter((option) => option.value !== "")
                        .map((option, index) => (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                </select>
            </div>
            <div className={ButtonContainerClass}>
                <button type="submit" className={buttonClass}>
                    {btnText}
                </button>
            </div>
        </form>
    );
};

export default EmployeeForm;
