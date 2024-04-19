# Employee Management Dashboard

This is a demo project focused on demonstrating how to track and manage employee details. It includes a basic dashboard UI and a set of fundamental CRUD operations on employee data, as well as an AI-powered HR assistant to help answer employee related questions.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have Docker Engine, Docker CLI, and Docker Compose installed on your machine. If Docker is not already installed, please follow the installation instructions on the [Docker website](https://www.docker.com/products/docker-desktop).

### Installation

1. **Download the Code**

To get started with the Employee Management Dashboard, clone the repository or download the code zip to your local machine from this page.

2. **Navigate to the Project Directory**

After cloning the repository, change into the project directory:

```bash
cd employee-management-dashboard
```

3. **Set OPENAI API key**

Open docker-compose.yml file, find the 'enviroment' under service **backend**.

```
environment:
    - OPENAI_API_KEY=REPLACE_WITH_REAL_OPENAI_API_KEY
    - MONGODB_URI=mongodb://mongodb:27017
    - CHOKIDAR_USEPOLLING=true

```

Replace the OPENAI_API_KEY with a real key.

4. **Running the Application**

-   First-time Setup:

If this is your first time running the application, you need to build the Docker containers. You can do this by running:

```bash
docker-compose up --build
```

-   Subsequent Runs:

For subsequent runs, or if you have already built the images, you can start the application using:

```bash
docker-compose up
```

This will start all components of the Employee Management Dashboard, including the frontend, backend, and database.

After starting the application, you can access the dashboard UI by navigating to http://localhost:3033 in your web browser.

```
http://localhost:3033
```

## Features

The Employee Management Dashboard offers a range of features designed to facilitate efficient management of employee details. Below are the key features along with screenshots to illustrate each functionality:

### View Employees

Displays a list of employees in a tabular format with options to filter employees by department and status, making it easier to manage and view employee data according to specific criteria.

![View Employees](https://github.com/yocoso/employee-management-dashboard/blob/master/screenshots/viewEmployees.png?raw=true)

### Add Employee

Provides a user-friendly modal for adding new employee records to the database. This feature simplifies the process of entering new employee data into the system.

![Add Employee](https://github.com/yocoso/employee-management-dashboard/blob/master/screenshots/addEmployee.png?raw=true)

### Edit Employee

Allows for the modification of existing employee records through a modal. This feature ensures that employee information can be kept up-to-date with ease.

![Edit Employee](https://github.com/yocoso/employee-management-dashboard/blob/master/screenshots/editEmployee.png?raw=true)

### Delete Employee

Enables the removal of employee records from the database, including a confirmation prompt to prevent accidental deletions.

![Delete Employee](https://github.com/yocoso/employee-management-dashboard/blob/master/screenshots/deleteEmployee.png?raw=true)

### HR Assistant Chatbot

An AI-powered HR assistant chatbot that answers questions based on the employee data. This innovative feature provides immediate answers to queries, enhancing the user experience.

![HR Assistant Chatbot](https://github.com/yocoso/employee-management-dashboard/blob/master/screenshots/chat.png?raw=true)

## Technology Stack

The Employee Management Dashboard utilizes a modern technology stack to ensure efficient performance and a user-friendly experience. Below is a breakdown of the main technologies used across different components of the application:

### Dashboard UI

-   **ReactJS 18**: Utilized for building the user interface, React's latest version offers enhanced features for efficient updating and rendering of interactive UIs.
-   **TailwindCSS**: A utility-first CSS framework used for styling the application. It allows for rapid UI development with responsive design.

### REST API

-   **ExpressJS**: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications. It is used to build the backend REST API that interacts with the MongoDB database.

### Database

-   **MongoDB**: A NoSQL database used for storing all application data. It offers high performance, high availability, and easy scalability, making it an excellent choice for applications that require dynamic schema.

### AI Service

-   **OpenAI API**: This AI service powers the HR Assistant chatbot, providing intelligent and context-aware responses based on the employees' data.

## REST API Documentation

The REST API for the Employee Management Dashboard allows for managing employee records and interacting with an AI-powered HR assistant. Below are the available endpoints and their functionalities:

### Base URL

All URLs referenced in the documentation have the base path as follows:

```
http://localhost:8089
```

### Employee Endpoints

#### GET /employees

Retrieve a list of employees with optional filtering by department and status.

-   **Query Parameters**:

    -   `department` (optional): Filter employees by their department.
    -   `status` (optional): Filter employees by their current employment status.

-   **Response**: An array of employee objects.

#### POST /employees

Create a new employee record.

-   **Body Parameters**:

    -   `name`: Employee's name.
    -   `department`: Employee's department.
    -   `position`: Employee's position.
    -   `salary`: Employee's salary.
    -   `bio`: Employee's biography.
    -   `status`: Employee's current status (e.g., Active, Inactive).

-   **Response**: The created employee object.

#### PUT /employees/:id

Update an existing employee record.

-   **URL Parameters**:

    -   `id`: The unique identifier of the employee to update.

-   **Body Parameters**: Any of the employee fields that need to be updated.

-   **Response**: The updated employee object.

#### DELETE /employees/:id

Delete an employee record.

-   **URL Parameters**:

    -   `id`: The unique identifier of the employee to delete.

-   **Response**: HTTP Status 204 on successful deletion.

### AI Assistant Endpoint

#### POST /chat

Interact with the AI-powered HR assistant to get answers based on employee data.

-   **Body Parameters**:

    -   `message`: The query or question posed to the AI HR assistant.

-   **Response**: The AI assistant's response based on the provided employee data and the query.

## Future Enhancements

To improve the functionality and maintainability of the Employee Management Dashboard, the following enhancements are planned:

### API Improvements

-   **Data Validation**: Implement comprehensive data validation on the API side to ensure data integrity and security.
-   **Department Management**: Store department data in the database and provide an API endpoint for managing this data, facilitating easier updates and maintenance.

### UI/UX Enhancements

-   **Pagination**: Introduce pagination for the employee list to handle large datasets efficiently and improve user experience.

### Chat Functionality

-   **Persistent Chat History**: Modify the chat functionality to save history, preventing loss of data when the page is refreshed.

### Testing and Code Quality

-   **Path Aliases**: Replace relative paths with path aliases in the project structure to enhance code readability and maintainability.
-   **Unit Testing**: Develop and integrate unit tests to ensure code reliability and facilitate future upgrades without regressions.
-   **Code Cleanup**: Continue efforts to clean up and refactor the codebase, removing unnecessary code and improving existing implementations for better performance and readability.

These steps will help in building a more robust application, ensuring that the Employee Management Dashboard remains scalable, maintainable, and user-friendly.
