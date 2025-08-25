import { useState } from "react";
import axios from "axios";
import {
  X,
  Send,
  Maximize2,
  Minimize2,
  Paperclip,
  RefreshCcw,
} from "lucide-react";

const Chatbot = ({ isOpen, onClose }) => {
  const initialMessage = [
    { sender: "bot", text: "Hello 👋, how can I help you today?" },
  ];

  const [messages, setMessages] = useState(initialMessage);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [file, setFile] = useState(null);

  const sendMessage = async () => {
    if (!input.trim() && !file) return;

    // Add user message
    const newMessage = {
      sender: "user",
      text: input || "",
      file: file ? URL.createObjectURL(file) : null,
      fileName: file ? file.name : null,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setFile(null);
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("message", input);
      if (file) formData.append("file", file);

      const res = await axios.post(
        "https://your-domain.com/api/chat",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const botMessage = { sender: "bot", text: res.data.reply };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Sorry, something went wrong." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const refreshChat = () => {
    setMessages(initialMessage);
  };

  return (
    isOpen && (
      <div
        className={`fixed bottom-20 right-6 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col z-50 transition-all duration-300 ${
          expanded ? "w-[32rem] h-[36rem]" : "w-80 md:w-96 h-[28rem]"
        }`}
      >
        {/* Header */}
        <div className="bg-blue-600 text-white flex justify-between items-center px-4 py-3">
          <h2 className="font-semibold">NGO Assistant</h2>
          <div className="flex gap-3 items-center">
            <button onClick={refreshChat} title="Refresh Chat">
              <RefreshCcw size={20} />
            </button>
            <button
              onClick={() => setExpanded(!expanded)}
              title="Expand/Minimize"
            >
              {expanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
            <button onClick={onClose} title="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-[75%] break-words ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
              {msg.file && (
                <div className="mt-2">
                  {msg.file.endsWith(".jpg") ||
                  msg.file.endsWith(".png") ||
                  msg.file.endsWith(".jpeg") ? (
                    <img
                      src={msg.file}
                      alt="attachment"
                      className="max-h-40 rounded-lg"
                    />
                  ) : (
                    <a
                      href={msg.file}
                      download={msg.fileName}
                      className="underline text-sm text-yellow-600"
                    >
                      📎 {msg.fileName}
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}
          {loading && (
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg w-fit">
              Typing...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center border-t px-3 py-2 bg-white gap-2">
          {/* File Input */}
          <label className="cursor-pointer text-gray-600 hover:text-blue-600">
            <Paperclip size={20} />
            <input
              type="file"
              className="hidden"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </label>
          {file && (
            <span className="text-sm text-gray-700 truncate max-w-[100px]">
              {file.name}
            </span>
          )}

          {/* Text Input */}
          <input
            type="text"
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-400 text-gray-900 placeholder-gray-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            className="ml-2 bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    )
  );
};

export default Chatbot;
