// organisms/home/MapArea.tsx
import SearchBar from "../../molecules/SearchBar";

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
      <div className="absolute inset-0 bg-[url('/Assets/map-placeholder.png')] bg-cover" />

      {/* 검색바 */}
      <div className="absolute left-4 right-4 top-16">
        <SearchBar onFocus={onTap} />
      </div>

      {/* FAB/칩/핀: expanded에서만 보여주기 */}
      {expanded && (
        <>
          <div className="absolute right-4 top-1/3 flex flex-col gap-3">
            ÷{/* FAB */}
          </div>
          {/* 바깥 영역 탭으로 browse 복귀 */}
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
