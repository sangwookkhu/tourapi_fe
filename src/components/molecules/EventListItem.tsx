import Button from "../atoms/Button";
import Label from "../atoms/Label";

export type EventListItemData = {
  id: string | number;
  title: string;
  tag?: string;
  subtitle?: string;
  thumbnailSrc?: string;
};

type Props = {
  item: EventListItemData;
  onClick?: (id: string | number) => void;
};

export default function EventListItem({ item, onClick }: Props) {
  return (
    <Button
      className="w-full p-0 "
      aria-label={item.title}
      onClick={() => onClick?.(item.id)}
    >
      <div className="w-full py-4 ">
        <div className="flex items-center gap-4">
          {/* 텍스트 영역 */}
          <div className="flex-1 min-w-0 ">
            <div className="flex items-baseline gap-2">
              <Label
                content={item.title}
                className="text-[15px] font-semibold text-black truncate"
              />
                <span className="text-[13px] text-gray-400">{item.tag}</span>
            </div>
            <div className="mt-2 text-[13px] text-gray-500 truncate text-left">
              {item.subtitle}
            </div>
          </div>

          {/* 썸네일 (&& 조건부는 옵션용) */}
          {item.thumbnailSrc && (
            <img
              src={item.thumbnailSrc}
              alt={item.title}
              width={88}
              height={88}
              className="w-[59px] h-[59px] rounded-xl object-cover flex-shrink-0 bg-purple-100"
            />
          )}
        </div>

        {/* 구분선 */}
        <div className="mt-4 h-px bg-black/10" />
      </div>
    </Button>
  );
}