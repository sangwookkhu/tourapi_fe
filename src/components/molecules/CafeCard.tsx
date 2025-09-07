import Button from "../atoms/Button";
import Label from "../atoms/Label";


export type CafeCardData = {
  id: string | number;
  title: string;
  image: string;
  rating: number;
  reviewCount: number;
  address: string;
};

type Props = {
  item: CafeCardData;
  onClick?: (id: string | number) => void;
};

export default function CafeCard({ item, onClick }: Props) {
  return (
    <Button
      className="w-full p-0 bg-transparent text-left"
      onClick={() => onClick?.(item.id)}
      aria-label={item.title}
    >
      {/* 썸네일 */}
      <img
        src={item.image}
        alt={item.title}
        className="w-full aspect-[4/3] rounded-2xl object-cover"
      />

      {/* 텍스트 */}
      <div className="mt-3">
        <Label
          content={item.title}
          className="text-[20px] font-semibold text-black leading-[1.2] line-clamp-1"
        />


        <Label
          content={item.title}
          className="text-[20px] font-semibold text-black leading-[1.2] line-clamp-1"
        />

        <div className="mt-1 text-[16px] text-gray-500 line-clamp-1">
          {item.address}
        </div>
      </div>
    </Button>
  );
}