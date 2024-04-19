import React, { useState } from "react";
import EmployeeDataView from "./components/employee_data_view/EmployeeDataView";
import { EmployeeProvider } from "./context/EmployeeContext";
import ChatWindow from "./components/chatbox/ChatWindow";
import ChatbotButton from "./components/chatbox/ChatboxButton";

const App = () => {
    const [showChat, setShowChat] = useState(false);
    const toggleChat = () => setShowChat(!showChat);

    return (
        <EmployeeProvider>
            <div className="p-12 bg-gray-200 w-screen h-screen">
                <EmployeeDataView />
                <ChatbotButton toggleChat={toggleChat} />
                <ChatWindow
                    isOpen={showChat}
                    closeChat={() => setShowChat(false)}
                />
            </div>
        </EmployeeProvider>
    );
};

export default App;
