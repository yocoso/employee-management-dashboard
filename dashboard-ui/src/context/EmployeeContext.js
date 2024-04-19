import React, { createContext, useState, useContext, useEffect } from "react";
import EmployeeService from "../services/EmployeeService";

const EmployeeContext = createContext();

export const useEmployees = () => useContext(EmployeeContext);

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState([]);

    useEffect(() => {
        fetchEmployees();
    }, []);

    const fetchEmployees = async (filters) => {
        try {
            const data = await EmployeeService.fetchEmployees(filters);
            setEmployees(data);
        } catch (error) {
            console.error("Failed to fetch employees:", error);
        }
    };

    const addEmployee = async (newEmployee) => {
        try {
            await EmployeeService.addEmployee(newEmployee);
            fetchEmployees(); // Refetch to update the list
        } catch (error) {
            console.error("Failed to add employee:", error);
        }
    };

    const updateEmployee = async (employeeId, updatedInfo) => {
        try {
            await EmployeeService.updateEmployee(employeeId, updatedInfo);
            fetchEmployees(); // Refetch to update the list
        } catch (error) {
            console.error("Failed to update employee:", error);
        }
    };

    const deleteEmployee = async (employeeId) => {
        try {
            await EmployeeService.deleteEmployee(employeeId);
            setEmployees((prev) =>
                prev.filter((emp) => emp.employeeId !== employeeId)
            );
        } catch (error) {
            console.error("Failed to delete employee:", error);
        }
    };

    return (
        <EmployeeContext.Provider
            value={{
                employees,
                fetchEmployees,
                addEmployee,
                updateEmployee,
                deleteEmployee,
            }}
        >
            {children}
        </EmployeeContext.Provider>
    );
};
