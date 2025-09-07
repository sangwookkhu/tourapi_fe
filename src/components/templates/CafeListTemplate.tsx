import DistanceButton from "../molecules/DistanceButton";
import CafeGrid from "../molecules/CafeGrid";
import type { CafeCardData } from "../molecules/CafeCard";

type CafeListTemplateProps = {
  distanceLabel?: string;
  onDistanceClick?: (d: string) => void;
  cafes: CafeCardData[];
  onCafeClick?: (id: string | number) => void;
};

export default function CafeListTemplate({
  distanceLabel = "500m",
  onDistanceClick,
  cafes,
  onCafeClick,
}: CafeListTemplateProps) {
  return (
    <div className="min-h-dvh flex flex-col pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
      {/* 상단 */}
      <div className="px-4 pt-4">
        <div className="flex items-center justify-between">
          <span className="text-[22px] font-semibold text-gray-800">{distanceLabel}</span>
          <DistanceButton onClick={(d) => onDistanceClick?.(d)} />
        </div>
      </div>

      {/* 그리드 */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-[560px] mx-auto">
          <CafeGrid items={cafes} onItemClick={onCafeClick} />
        </div>
      </div>
    </div>
  );
}