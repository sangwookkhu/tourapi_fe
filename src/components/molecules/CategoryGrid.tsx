// 2행×4열 그리드
import CategoryItem from "./CategoryItem";

export type Category = {
  iconSrc: string;
  label: string;
  onClick?: () => void;
};

export default function CategoryGrid({ items }: { items: Category[] }) {
  // 2행×4열: 8개 기준, 개수 달라도 그리드로 배치됨
  return (
    <div className="grid grid-cols-4 gap-[32px] justify-center items-center mx-auto w-fit">
      {items.map((it, idx) => (
        <CategoryItem
          key={idx}
          iconSrc={it.iconSrc}
          label={it.label}
          onClick={it.onClick}
        />
      ))}
    </div>
  );
}
