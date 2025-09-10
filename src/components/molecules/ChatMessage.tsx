import Label from "../atoms/Label";

export type MessageType = "user" | "bot";

export type ChatMessageData = {
  id: string | number;
  type: MessageType;
  content: string;
  timestamp?: Date;
};

type Props = {
  message: ChatMessageData;
};

export default function ChatMessage({ message }: Props) {
  const isUser = message.type === "user";

  if (isUser) {
    // 사용자 메시지
    return (
      <div className="flex justify-end mb-4">
        <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-white border border-gray-200 text-black">
          <Label
            content={message.content}
            className="text-[15px] leading-[1.4] text-black whitespace-pre-line"
          />
        </div>
      </div>
    );
  } else {
    // 봇 메시지 - 아바타 위에, 응답 아래에
    return (
      <div className="flex justify-start mb-4">
        <div className="flex flex-col items-start gap-2">
          {/* 아바타 */}
          <div className="w-10 h-10 rounded-full bg-teal-500 flex-shrink-0"></div>
          
          {/* 봇 응답 */}
          <div className="max-w-[80%] rounded-2xl px-4 py-3 bg-gray-100 text-black ml-0">
            <Label
              content={message.content}
              className="text-[15px] leading-[1.4] text-black whitespace-pre-line"
            />
          </div>
        </div>
      </div>
    );
  }
}