// 아이콘 + 라벨 버튼
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import Label from "../atoms/Label";

export type CategoryItemProps = {
  iconSrc: string;
  label: string;
  onClick?: () => void;
};

export default function CategoryItem({
  iconSrc,
  label,
  onClick,
}: CategoryItemProps) {
  return (
    <Button
      onClick={onClick}
      aria-label={label}
      className="
        w-[61px] h-[82px]          /* 바깥 흰색 박스 */                
        inline-flex flex-col items-center justify-start
        gap-2                     /* 아이콘-라벨 간격 */
        p-0                       /* 내부 여백 없음 */
      "
    >
      {/* 회색 아이콘 박스 */}
      <div
        className="
          w-[61px] h-[61px]
          rounded-2xl bg-gray-100
          flex items-center justify-center
        "
      >
        <Icon src={iconSrc} alt={label} width={42} height={42} />
      </div>

      {/* 라벨 */}
      <Label
        content={label}
        className="text-[13px] leading-[18px] text-black"
      />
    </Button>
  );
}
