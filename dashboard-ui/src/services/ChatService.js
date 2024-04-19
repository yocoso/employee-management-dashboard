const API_BASE_URL = process.env.API_BASE_URL || "http://localhost:8089";

const ChatService = {
    sendMessage: async (messageData) => {
        try {
            const response = await fetch(`${API_BASE_URL}/chat`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(messageData),
            });
            if (!response.ok) {
                throw new Error("Failed to get chat response.");
            }
            const chatResponse = await response.json();
            return chatResponse;
        } catch (error) {
            console.error("There was a problem creating the employee:", error);
            throw error;
        }
    },
};

export default ChatService;
