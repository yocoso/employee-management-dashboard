import React, { useState } from "react";
import Modal from "../modal/Modal";
import EmployeeForm from "../employee_form/EmployeeForm";
import { useEmployees } from "../../context/EmployeeContext";

const AddEmployeeButton = () => {
    const initialEmployeeData = {
        name: "",
        department: "",
        position: "",
        salary: "",
        bio: "",
        status: "",
    };
    const { addEmployee } = useEmployees();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [employee, setEmployee] = useState(initialEmployeeData);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    const handleSubmit = () => {
        addEmployee(employee);
        setEmployee(initialEmployeeData);
        closeModal();
    };

    return (
        <div>
            <button
                onClick={openModal}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
                Add Employee
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2 className="text-lg font-bold mb-4">Add New Employee</h2>
                <EmployeeForm
                    onClose={closeModal}
                    employee={employee}
                    setEmployee={setEmployee}
                    handleSubmit={handleSubmit}
                    btnText="Add Employee"
                />
            </Modal>
        </div>
    );
};

export default AddEmployeeButton;
