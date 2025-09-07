import Button from "../atoms/Button";
import Label from "../atoms/Label";
import EventListItem, { type EventListItemData } from "./EventListItem";

type Props = {
  title: string;
  items: EventListItemData[];
  onMore?: () => void;
  onItemClick?: (id: string | number) => void;
  className?: string;
};

export default function EventListSection({
  title,
  items,
  onMore,
  onItemClick,
  className = "",
}: Props) {
  return (
    <section className={`w-full ${className}`}>
      {/* 헤더 */}
      <div className="flex items-center justify-between py-4 bg-blue-100">
        <Label
          content={title}
          className="text-[20px] font-bold text-black"
        />
        <Button
          onClick={onMore}
          aria-label="전체보기 버튼"
          className="p-0 bg-transparent text-[13px] text-gray-400"
        >
          전체보기
        </Button>
      </div>

      {/* 리스트 */}
      <div>
        {items.map((it) => (
          <EventListItem key={it.id} item={it} onClick={onItemClick} />
        ))}
      </div>
    </section>
  );
}