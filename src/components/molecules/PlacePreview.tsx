import { useEffect, useState } from "react";

interface KakaoPlace {
  id: string;
  place_name: string;
  category_name: string;
  address_name: string;
  road_address_name: string;
  place_url: string;
  phone: string;
}

type PlacePreviewProps = {
  position: {
    lat: number;
    lng: number;
  };
  onReviewClick: () => void;
};

export default function PlacePreview({
  position,
  onReviewClick,
}: PlacePreviewProps) {
  const [placeInfo, setPlaceInfo] = useState<KakaoPlace | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const searchPlace = async () => {
      if (!window.kakao || !position) return;

      setIsLoading(true);
      const places = new window.kakao.maps.services.Places();

      try {
        // 좌표로 가장 가까운 장소 검색
        const result = await new Promise<KakaoPlace[]>((resolve) => {
          places.categorySearch(
            "FD6", // 음식점 카테고리
            (data, status) => {
              if (status === window.kakao.maps.services.Status.OK) {
                resolve(data);
              } else {
                resolve([]);
              }
            },
            {
              location: new window.kakao.maps.LatLng(
                position.lat,
                position.lng
              ),
              radius: 50, // 50미터 반경
              sort: window.kakao.maps.services.SortBy.DISTANCE,
            }
          );
        });

        if (result.length > 0) {
          setPlaceInfo(result[0]);
        } else {
          setPlaceInfo(null);
        }
      } catch (error) {
        console.error("장소 검색 중 오류 발생:", error);
        setPlaceInfo(null);
      } finally {
        setIsLoading(false);
      }
    };

    searchPlace();
  }, [position]);

  if (isLoading) {
    return (
      <div className="p-4">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-4">
      {placeInfo ? (
        <>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">{placeInfo.place_name}</h3>
            <p className="text-gray-600">{placeInfo.category_name}</p>
            {placeInfo.phone && (
              <p className="text-gray-600">📞 {placeInfo.phone}</p>
            )}
            <p className="text-gray-600 text-sm">
              {placeInfo.road_address_name || placeInfo.address_name}
            </p>
          </div>

          <div className="flex space-x-2">
            <a
              href={placeInfo.place_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-yellow-400 text-black py-2 px-4 rounded-lg text-center font-medium hover:bg-yellow-500 transition-colors"
            >
              카카오맵에서 보기
            </a>
            <button
              onClick={onReviewClick}
              className="flex-1 bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              리뷰 작성하기
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-gray-600">
          <p>이 위치에서 가까운 장소를 찾을 수 없습니다</p>
          <button
            onClick={onReviewClick}
            className="mt-4 w-full bg-primary text-white py-3 rounded-lg"
          >
            새로운 장소 등록하기
          </button>
        </div>
      )}
    </div>
  );
}
