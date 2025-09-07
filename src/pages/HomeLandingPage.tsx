import HomeLandingTemplate from "../components/templates/HomeLandingTemplate";
import type { Category } from "../components/molecules/CategoryGrid";
//import { useRouter } from "@tanstack/react-router";  // 필요하면 라우팅에서 사용

export default function HomeLandingPage() {
  const categories: Category[] = [
    {
      iconSrc: "/Assets/icons/categories/Suitcase.svg",
      label: "관광지",
      onClick: () => {},
    },
    {
      iconSrc: "/Assets/icons/categories/Building.svg",
      label: "숙박",
      onClick: () => {},
    },
    {
      iconSrc: "/Assets/icons/categories/Sailboat.svg",
      label: "체험/레저",
      onClick: () => {},
    },
    {
      iconSrc: "/Assets/icons/categories/Cutlery.svg",
      label: "음식점",
      onClick: () => {},
    },
    {
      iconSrc: "/Assets/icons/categories/Coffee.svg",
      label: "카페",
      onClick: () => {},
    },
    {
      iconSrc: "/Assets/icons/categories/ShoppingCart.svg",
      label: "쇼핑",
      onClick: () => {},
    },
    {
      iconSrc: "/Assets/icons/categories/Dog.svg",
      label: "문화시설",
      onClick: () => {},
    },
    {
      iconSrc: "/Assets/icons/categories/Confetti.svg",
      label: "공연/축제",
      onClick: () => {},
    },
  ];

  return <HomeLandingTemplate categories={categories} />;
}
