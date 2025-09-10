import { useState } from "react";
import Input from "../atoms/Input";

type Props = {
  onSend: (message: string) => void;
  disabled?: boolean;
  placeholder?: string;
};

export default function ChatInput({
  onSend,
  disabled = false,
  placeholder = "무엇이든 물어보세요",
}: Props) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !disabled) {
      onSend(message.trim());
      setMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSend(message.trim());
        setMessage("");
      }
    }
  };

  return (
    <div className="p-4 bg-white">
      <form onSubmit={handleSubmit}>
        {/* 파란색 테두리 입력창 */}
        <div className="bg-gray-100 rounded-2xl px-4 py-3 border-2 border-blue-400">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={placeholder}
            disabled={disabled}
            className="w-full bg-transparent border-none outline-none text-[15px] placeholder-gray-500"
          />
        </div>
      </form>
    </div>
  );
}