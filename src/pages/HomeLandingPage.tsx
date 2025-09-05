
import { useState } from "react";
import CategoryGrid from "../components/molecules/CategoryGrid";
import HomeLandingTemplate from "../components/templates/HomeLandingTemplate";
import type { Category } from "../components/molecules/CategoryGrid";
//import { useRouter } from "@tanstack/react-router";  // 필요하면 라우팅에서 사용

type TabKey = "home" | "mypet" | "chat" | "wish" | "profile";

export default function HomeLandingPage() {
  // const router = useRouter();

  // 검색 상태
  const [q, setQ] = useState("");

  // 탭 상태
  const [tab, setTab] = useState<TabKey>("home");

  // 카테고리 아이템 (public/Assets/icons/*.svg 기준)
  const categories: Category[] = [
    { iconSrc: "/Assets/icons/Suitcase.svg",  label: "관광지",   onClick: () => {} },
    { iconSrc: "/Assets/icons/Building.svg", label: "숙박",     onClick: () => {} },
    { iconSrc: "/Assets/icons/Sailboat.svg",  label: "체험/레저", onClick: () => {} },
    { iconSrc: "/Assets/icons/Cutlery.svg",  label: "음식점",   onClick: () => {} },
    { iconSrc: "/Assets/icons/Coffee.svg",  label: "카페",     onClick: () => {} },
    { iconSrc: "/Assets/icons/Shoppingcart.svg",  label: "쇼핑",     onClick: () => {} },
    { iconSrc: "/Assets/icons/Dog.svg",label: "문화시설", onClick: () => {} },
    { iconSrc: "/Assets/icons/Confetti.svg", label: "공연/축제", onClick: () => {} },
  ];

  return (
    <HomeLandingTemplate
      // 검색
      search={q}
      onSearchChange={setQ}
      onSearchSubmit={(text) => {
        console.log("검색:", text);
        // 예) router.navigate({ to: "/search", search: { q: text } });
      }}

      // 카테고리
      categories={categories}

      // 탭
      currentTab={tab}
      onTabChange={(t) => {
        setTab(t);
        // 예) router.navigate({ to: `/${t}` });
      }}
    />
  );
}