import { useState } from "react";
import CafeListTemplate from "../components/templates/CafeListTemplate";
import type { CafeCardData } from "../components/molecules/CafeCard";

export default function CafeListPage() {
  const [distance, setDistance] = useState("500m");

  const cafes: CafeCardData[] = [
    {
      id: 1,
      title: "달빛 애견카페",
      image: "/Assets/images/cafe1.jpg",
      rating: 4.0,
      reviewCount: 25,
      address: "서울 마포구 월드펫로 25",
    },
    {
      id: 2,
      title: "멍멍멍멍",
      image: "/Assets/images/cafe2.jpg",
      rating: 4.4,
      reviewCount: 25,
      address: "서울 마포구 월드펫로 25",
    },
  ];

  return (
    <CafeListTemplate
      distanceLabel={distance}
      onDistanceClick={(d) => setDistance(d)}
      cafes={cafes}
      onCafeClick={(id) => console.log("카페 클릭:", id)}
    />
  );
}