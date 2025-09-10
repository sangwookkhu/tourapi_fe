import { useState } from "react";
import { useRouter } from "@tanstack/react-router";
import ChatTemplate from "../components/templates/ChatTemplate";
import type { ChatMessageData } from "../components/molecules/ChatMessage";

export default function ChatPage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // 더미 응답 데이터
  // getDummyResponse 함수 수정
const getDummyResponse = (userMessage: string): string => {
  const lowerMessage = userMessage.toLowerCase();
  
  if (lowerMessage.includes("카페") || lowerMessage.includes("커피")) {
    return `걸어서 5분 안에 있는 근처 카페를 찾아드릴게요! 🐶

5분 안에 갈 수 있는 카페를 찾았어요.

1. 카페 라떼하우스
- 걸어서 3분, 시그니처 라떼가 유명해요

2. 브라운빈 카페  
- 걸어서 5분, 조용한 분위기

3. 플랜트앤빈 - 걸어서 4분, 식물 가득한 인테리어

👆 가고 싶은 곳 번호를 알려주시면 지도 보여드릴게요!`;
  }
  
  if (lowerMessage.includes("음식") || lowerMessage.includes("맛집") || lowerMessage.includes("식당")) {
    return "근처 맛집을 찾아드릴게요! 어떤 종류의 음식을 찾고 계신가요? (한식, 양식, 중식, 일식 등)";
  }
  
  if (lowerMessage.includes("애견") || lowerMessage.includes("반려동물") || lowerMessage.includes("강아지")) {
    return "반려동물과 함께 갈 수 있는 장소를 찾고 계시는군요! 애견동반 카페, 펜션, 공원 중 어떤 곳을 찾아드릴까요?";
  }

  // 기본 응답
  return "죄송해요, 잘 이해하지 못했어요. 다시 한번 말씀해 주시거나 다른 질문을 해주세요. 카페, 맛집, 관광지 등에 대해 물어보세요!";
};

  const handleSendMessage = async (message: string) => {
    // 사용자 메시지 추가
    const userMessage: ChatMessageData = {
      id: Date.now(),
      type: "user",
      content: message,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);

    // 2초 후 봇 응답 (실제로는 API 호출)
    setTimeout(() => {
      const botMessage: ChatMessageData = {
        id: Date.now() + 1,
        type: "bot",
        content: getDummyResponse(message),
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <ChatTemplate
      onBack={() => router.history.back()}
      messages={messages}
      onSendMessage={handleSendMessage}
      isLoading={isLoading}
    />
  );
}