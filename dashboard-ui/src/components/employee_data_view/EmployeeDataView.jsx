import React, { useState } from "react";
import EmployeeTable from "./EmployeeTable";
import AddEmployeeButton from "../add_employee_button/AddEmployeeButton";
import DataFilter from "../data_table/DataFilter";
import { useEmployees } from "../../context/EmployeeContext";
import {
    departmentOptions,
    statusOptions,
} from "../../constant/EmployeeFilters";

const EmployeeDataView = () => {
    const [statusFilter, setStatusFilter] = useState("");
    const [departmentFilter, setDepartmentFilter] = useState("");
    const { fetchEmployees } = useEmployees();

    const handleStatusChange = (value) => {
        setStatusFilter(value);
        fetchEmployees({ status: value, department: departmentFilter });
    };

    const handleDepartmentChange = (value) => {
        setDepartmentFilter(value);
        fetchEmployees({ status: statusFilter, department: value });
    };

    return (
        <div className="employee-data-view space-y-5">
            <h1 className="text-2xl font-bold text-black dark:text-white">
                Employee Directory
            </h1>
            <AddEmployeeButton />
            <div className="data-view-container space-y-2">
                <div className="data-filters flex space-x-2">
                    <DataFilter
                        filterId="employee_status"
                        options={statusOptions}
                        value={statusFilter}
                        onChange={handleStatusChange}
                        placeholder="Filter by status"
                    />
                    <DataFilter
                        filterId="employee_department"
                        options={departmentOptions}
                        value={departmentFilter}
                        onChange={handleDepartmentChange}
                        placeholder="Filter by department"
                    />
                </div>
                <EmployeeTable />
            </div>
        </div>
    );
};

export default EmployeeDataView;
