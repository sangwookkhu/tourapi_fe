// organisms/home/MapArea.tsx
import SearchBar from "../../molecules/SearchBar";
import { Map } from "react-kakao-maps-sdk";

type MapAreaProps = {
  expanded: boolean;
  onTap: () => void;
  onBackdropTap: () => void;
};

export default function MapArea({
  expanded,
  onTap,
  onBackdropTap,
}: MapAreaProps) {
  return (
    <div
      className="relative h-full w-full"
      onClick={expanded ? undefined : onTap}
    >
      {/* 실제 지도 SDK 붙이는 자리 */}
      <Map
        center={{ lat: 33.450701, lng: 126.570667 }}
        className="w-full h-full min-h-56"
        level={3}
      />

      {/* 검색바 */}
      <div className="relative z-10 w-[90vw] mx-auto -translate-y-1/2">
        <SearchBar onFocus={onTap} />
      </div>
      {expanded && (
        <>
          <div className="flex flex-col gap-3">÷{/* FAB */}</div>
          <button
            aria-label="닫기"
            onClick={onBackdropTap}
            className="absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1"
          >
            닫기
          </button>
        </>
      )}
    </div>
  );
}
