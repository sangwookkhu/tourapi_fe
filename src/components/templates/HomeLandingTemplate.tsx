import React from "react";
import MapArea from "../organisms/home/MapArea";
import CategoryGrid from "../molecules/CategoryGrid";
import type { CategoryItemProps } from "../molecules/CategoryItem";

type Props = {
  categories: CategoryItemProps[];
};

export default function HomeTemplate({ categories }: Props) {
  const [mode, setMode] = React.useState<"browse" | "mapFocus">("browse");
  const mapExpanded = mode === "mapFocus";

  const handleMapTap = () => {
    setMode("mapFocus");
  };

  const handleMapBackdropTap = () => {
    setMode("browse");
  };
  return (
    <div className="min-h-screen flex flex-col">
      {/* 상단 Map */}
      <div className={mapExpanded ? "flex-1" : "h-56"}>
        <MapArea
          expanded={mapExpanded}
          onTap={handleMapTap}
          onBackdropTap={handleMapBackdropTap}
        />
      </div>

      {/* 하단 컨텐츠 */}
      <div className={mapExpanded ? "hidden" : "block"}>
        <div className="px-4 pt-4">
          <CategoryGrid items={categories} />
        </div>
      </div>
    </div>
  );
}
