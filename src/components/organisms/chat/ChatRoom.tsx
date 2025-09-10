import { useEffect, useRef } from "react";
import ChatMessage, { type ChatMessageData } from "../../molecules/ChatMessage";
import ChatInput from "../../molecules/ChatInput";

type Props = {
  messages: ChatMessageData[];
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
};

export default function ChatRoom({ messages, onSendMessage, isLoading }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 새 메시지가 추가될 때마다 스크롤을 맨 아래로
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-full relative">
      {/* 메시지 영역 */}
      <div className="flex-1 overflow-y-auto pb-20">
        <div className="p-4 space-y-2">
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-[60vh]">
              <p className="text-gray-500 text-center text-lg">
                안녕하세요! 무엇을 도와드릴까요?
              </p>
            </div>
          ) : (
            messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))
          )}
          
          {/* 로딩 표시 - 아바타 위에, 로딩 아래에 */}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="flex flex-col items-start gap-2">
                {/* 아바타 */}
                <div className="w-10 h-10 rounded-full bg-teal-500 flex-shrink-0"></div>
                
                {/* 로딩 애니메이션 */}
                <div className="bg-gray-100 rounded-2xl px-4 py-3 ml-0">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* 입력 영역 - 절대 위치로 하단 고정 */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-100">
        <ChatInput
          onSend={onSendMessage}
          disabled={isLoading}
          placeholder="무엇이든 물어보세요"
        />
      </div>
    </div>
  );
}