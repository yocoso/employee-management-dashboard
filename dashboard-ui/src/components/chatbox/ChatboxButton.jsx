import React from "react";

const ChatbotButton = ({ toggleChat }) => {
    return (
        <button
            onClick={toggleChat}
            className="fixed bottom-10 right-10 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
            Chat
        </button>
    );
};

export default ChatbotButton;
