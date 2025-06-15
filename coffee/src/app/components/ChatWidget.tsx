"use client";

import { useState } from "react";
import { IoMdChatboxes, IoMdClose } from "react-icons/io";

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "bot", content: "Hi! I'm here to help you with anything at The Velvet Bean ☕️🌿" },
  ]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const res = await fetch("/api/gemini-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: input }),
      });

      const data = await res.json();
      const botReply = data.reply || "Sorry, I didn’t understand that.";

      setMessages((prev) => [...prev, { role: "bot", content: botReply }]);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setMessages((prev) => [...prev, { role: "bot", content: "Something went wrong." }]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#4b2e2e] text-white p-3 rounded-full shadow-lg hover:bg-[#3c1e1e] transition"
        >
          <IoMdChatboxes size={24} />
        </button>
      )}

      {/* Chat Box */}
      {isOpen && (
        <div className="w-80 h-[400px] bg-white dark:bg-[#1f1f1f] shadow-lg rounded-xl p-4 flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-bold text-[#4b2e2e] dark:text-white">Ask VelvetBot</h3>
            <button onClick={() => setIsOpen(false)}>
              <IoMdClose className="text-[#4b2e2e] dark:text-white" size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto space-y-2 p-1">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg text-sm ${
                  msg.role === "user"
                    ? "bg-[#eee] self-end text-right dark:bg-[#333] dark:text-white"
                    : "bg-[#f4eade] self-start text-left dark:bg-[#444] dark:text-white"
                }`}
              >
                {msg.content}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="mt-2 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask something..."
              className="flex-1 border px-2 py-1 rounded-md text-sm dark:bg-[#2a2a2a] dark:text-white"
            />
            <button
              onClick={sendMessage}
              className="bg-[#4b2e2e] text-white px-3 rounded-md hover:bg-[#3c1e1e]"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
