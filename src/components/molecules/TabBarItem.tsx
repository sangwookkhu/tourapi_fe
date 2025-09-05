// 탭바 아이템
import Button from "../atoms/Button";
import Label from "../atoms/Label";

type TabBarItemProps = {
  activeIconSrc: string;   // 활성화 아이콘 (주황색)
  inactiveIconSrc: string; // 비활성화 아이콘 (회색)
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
};

export default function TabBarItem({
  activeIconSrc,
  inactiveIconSrc,
  label,
  active = false,
  onClick,
  className = "",
}: TabBarItemProps) {
  return (
    <Button
      onClick={onClick}
      aria-label={label}
      aria-current={active ? "page" : undefined}
      className={`
        w-[72px] h-[72px] bg-white
        rounded-xl inline-flex flex-col items-center justify-center
        gap-1 p-0 select-none
        ${className}
      `}
    >
      {/* 상태별 아이콘 */}
      <img
        src={active ? activeIconSrc : inactiveIconSrc}
        alt={label}
        width={28}
        height={28}
      />

      {/* 라벨 */}
      <Label
        content={label}
        className={`text-[14px] leading-[18px] ${
          active ? "text-[#FF8A2B]" : "text-[#ABABAB]"
        }`}
      />
    </Button>
  );
}