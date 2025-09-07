import { useState, useEffect } from "react";
import { Map } from "react-kakao-maps-sdk";

type KakaoMapProps = {
  expanded: boolean;
};

export default function KakaoMap({ expanded }: KakaoMapProps) {
  //   지도의 크기가 변경될 때 지도를 다시 렌더링하기 위한 상태
  const [shouldRerender, setShouldRerender] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldRerender((prev) => !prev);
    }, 1000);

    return () => clearTimeout(timer);
  }, [expanded]);

  return (
    <Map
      key={shouldRerender ? "rerender" : "initial"}
      center={{ lat: 33.450701, lng: 126.570667 }}
      className={`w-full h-full min-h-56`}
      level={3}
    />
  );
}
