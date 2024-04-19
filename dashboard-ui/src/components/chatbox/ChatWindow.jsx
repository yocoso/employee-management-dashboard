import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ChatService from "../../services/ChatService";

function ChatWindow({ isOpen, closeChat }) {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSendMessage = async () => {
        if (input.trim()) {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: input, sender: "user" },
            ]);
            const messageData = { message: input };
            setInput("");
            try {
                const chatResponse = await ChatService.sendMessage(messageData);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    { text: chatResponse.response, sender: "ai" },
                ]);
            } catch (error) {
                console.error("Error sending message:", error);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        text: "Error: Could not get a response from the server.",
                        sender: "ai",
                    },
                ]);
            }
        }
    };

    return isOpen ? (
        <div className="fixed bottom-20 right-10 w-96 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="border-b border-gray-300 p-4 bg-gray-100">
                HR Assistant
                <button
                    onClick={closeChat}
                    className="float-right text-gray-600 hover:text-gray-800"
                >
                    Close
                </button>
            </div>
            <ul className="list-none p-4 h-72 overflow-y-auto">
                {messages.map((message, index) => (
                    <li
                        key={index}
                        className={`${
                            message.sender === "user"
                                ? "bg-blue-100"
                                : "bg-gray-100"
                        } rounded p-2 my-2`}
                    >
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {message.text}
                        </ReactMarkdown>
                    </li>
                ))}
            </ul>
            <div className="p-4 flex justify-between items-center">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border border-gray-300 rounded p-2 flex-1 mr-2"
                    placeholder="Type your message here..."
                    onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                    onClick={handleSendMessage}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Send
                </button>
            </div>
        </div>
    ) : null;
}

export default ChatWindow;
