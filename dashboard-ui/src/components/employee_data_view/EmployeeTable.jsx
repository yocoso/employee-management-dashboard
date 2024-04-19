import React, { useState } from "react";
import DataTable from "../data_table/DataTable";
import Modal from "../modal/Modal";
import ConfirmationModal from "../modal/ConfirmationModal";
import EmployeeForm from "../employee_form/EmployeeForm";
import { useEmployees } from "../../context/EmployeeContext";
import {
    departmentOptions,
    statusOptions,
} from "../../constant/EmployeeFilters";

const columns = [
    { field: "employeeId", headerName: "Employee ID" },
    { field: "name", headerName: "Name" },
    { field: "department", headerName: "Department" },
    { field: "position", headerName: "Position" },
    { field: "salary", headerName: "Salary" },
    { field: "bio", headerName: "Bio" },
    { field: "status", headerName: "Status" },
];

const App = () => {
    const departmentLabels = departmentOptions.reduce((acc, option) => {
        acc[option.value] = option.label;
        return acc;
    }, {});
    const statusLabels = statusOptions.reduce((acc, option) => {
        acc[option.value] = option.label;
        return acc;
    }, {});

    const { employees, updateEmployee, deleteEmployee } = useEmployees();

    const [isConfirmationModalOpen, setIsConfirmationModalOpen] =
        useState(false);

    const [isEmployeeUpdateModalOpen, setIsEmployeeUpdateModalOpen] =
        useState(false);
    const [editingEmployee, setEditingEmployee] = useState({});
    const openEditingModal = () => {
        setIsEmployeeUpdateModalOpen(true);
    };

    const closeEditingModal = () => {
        setIsEmployeeUpdateModalOpen(false);
    };

    const openConfirmationModal = () => {
        setIsConfirmationModalOpen(true);
    };

    const closeConfirmationModal = () => {
        setIsConfirmationModalOpen(false);
    };

    const handleUpdateEmployee = () => {
        console.log("Submitting Employee Data", editingEmployee);
        updateEmployee(editingEmployee);
        closeEditingModal();
    };

    const handleDeleteEmployee = () => {
        console.log("deleting employee", editingEmployee);
        deleteEmployee(editingEmployee.employeeId);
        closeConfirmationModal();
    };

    const handleDataDisplay = (field, item) => {
        if (field === "salary") {
            return "$" + item[field].toLocaleString();
        }
        if (field === "department") {
            return departmentLabels[item[field]];
        }
        if (field === "status") {
            return statusLabels[item[field]];
        }
        return item[field];
    };

    const actions = [
        {
            name: "Edit",
            callback: (employee) => {
                setEditingEmployee(employee);
                openEditingModal();
            },
        },
        {
            name: "Delete",
            callback: (employee) => {
                setEditingEmployee(employee);
                openConfirmationModal();
            },
        },
    ];

    return (
        <>
            <DataTable
                data={employees}
                columns={columns}
                actions={actions}
                dataDisplay={handleDataDisplay}
            />
            {isEmployeeUpdateModalOpen && (
                <Modal
                    isOpen={isEmployeeUpdateModalOpen}
                    onClose={closeEditingModal}
                >
                    <h2 className="text-lg font-bold mb-4">Update Employee</h2>
                    <EmployeeForm
                        onClose={closeEditingModal}
                        employee={editingEmployee}
                        setEmployee={setEditingEmployee}
                        handleSubmit={handleUpdateEmployee}
                        btnText="Update Employee"
                    />
                </Modal>
            )}
            {isConfirmationModalOpen && (
                <ConfirmationModal
                    isOpen={isConfirmationModalOpen}
                    onConfirm={handleDeleteEmployee}
                    onClose={closeConfirmationModal}
                />
            )}
        </>
    );
};

export default App;
