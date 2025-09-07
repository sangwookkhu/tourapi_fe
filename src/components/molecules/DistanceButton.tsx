import Button from "../atoms/Button";

type Props = {
  onClick: (distance: string) => void;
};

export default function DistanceButtons({ onClick }: Props) {
  return (
    <div className="flex gap-3">
      <Button
        className="px-4 py-2 rounded-full bg-gray-100 text-gray-700"
        onClick={() => onClick("500m")}
      >
        500m
      </Button>
      <Button
        className="px-4 py-2 rounded-full bg-gray-100 text-gray-700"
        onClick={() => onClick("1km")}
      >
        1km
      </Button>
      <Button
        className="px-4 py-2 rounded-full bg-gray-100 text-gray-700"
        onClick={() => onClick("2km")}
      >
        2km
      </Button>
      <Button
        className="px-4 py-2 rounded-full bg-gray-100 text-gray-700"
        onClick={() => onClick("4km")}
      >
        4km
      </Button>
    </div>
  );
}