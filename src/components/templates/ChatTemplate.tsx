import BackHeader from "../molecules/BackHeader";
import ChatRoom from "../organisms/chat/ChatRoom";
import type { ChatMessageData } from "../molecules/ChatMessage";

type Props = {
  onBack?: () => void;
  messages: ChatMessageData[];
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
};

export default function ChatTemplate({
  onBack,
  messages,
  onSendMessage,
  isLoading,
}: Props) {
  return (
    <div className="h-screen flex flex-col bg-white">
      {/* 헤더 - label 제거 */}
      <div className="px-4 pt-[60px] pb-4 flex-shrink-0 bg-white">
        <BackHeader onBack={onBack} />
      </div>

      {/* 채팅 영역 */}
      <div className="flex-1 flex flex-col min-h-0 pb-[calc(80px+env(safe-area-inset-bottom))]">
        <ChatRoom
          messages={messages}
          onSendMessage={onSendMessage}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}