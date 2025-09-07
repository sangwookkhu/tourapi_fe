import Button from "../atoms/Button";

export type Distance = "500m" | "1km" | "2km" | "4km";

type Props = {
  current?: Distance; // 기본값: "500m"
  onClick?: (distance: Distance) => void; // 클릭 시 호출되는 콜백
};

export default function DistanceButton({ current = "500m", onClick }: Props) {
  const items: Distance[] = ["500m", "1km", "2km", "4km"];

  return (
    <div className="flex gap-2 px-2">
      {items.map((d) => {
        const active = d === current;
        return (
          <Button
            key={d}
            aria-pressed={active}
            className={
              "px-3 rounded-full border text-[13px] font-medium " + 
              (active
                ? "text-[#00A3A5] border-[#00A3A5]"
                : "text-[#797979] border-[#D9D9D9]")
            }
            onClick={() => onClick?.(d)}
          >
            {d}
          </Button>
        );
      })}
    </div>
  );
}