const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:8089";

const EmployeeService = {
    fetchEmployees: async (filters = {}) => {
        try {
            const params = new URLSearchParams();
            if (filters.department) {
                params.append("department", filters.department);
            }
            if (filters.status) {
                params.append("status", filters.status);
            }
            const url = `${API_BASE_URL}/employees?${params.toString()}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok.");
            }
            const employees = await response.json();
            return employees;
        } catch (error) {
            console.error(
                "There was a problem with the fetch operation:",
                error
            );
            throw error; // Rethrow to handle this error in the calling component
        }
    },

    addEmployee: async (employeeData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/employees`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employeeData),
            });
            if (!response.ok) {
                throw new Error("Failed to create employee.");
            }
            const newEmployee = await response.json();
            return newEmployee;
        } catch (error) {
            console.error("There was a problem creating the employee:", error);
            throw error;
        }
    },

    updateEmployee: async (employeeData) => {
        const id = employeeData.employeeId;
        try {
            const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(employeeData),
            });
            if (!response.ok) {
                throw new Error("Failed to update employee");
            }
            const updatedEmployee = await response.json();
            return updatedEmployee;
        } catch (error) {
            console.error("There was a problem updating the employee:", error);
            throw error;
        }
    },

    deleteEmployee: async (id) => {
        try {
            const response = await fetch(`${API_BASE_URL}/employees/${id}`, {
                method: "DELETE",
            });
            if (!response.ok) {
                throw new Error("Failed to delete employee");
            }
            return id; // return the ID of the deleted employee as confirmation
        } catch (error) {
            console.error("There was a problem deleting the employee:", error);
            throw error;
        }
    },
};

export default EmployeeService;
