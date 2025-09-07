import { useRef, useState } from "react";
import { SpringValue, useSpring } from "@react-spring/web";
import { useDrag } from "@use-gesture/react";

interface UseBottomSheetProps {
  minHeight: number; // 접힌 높이
  maxHeight: number; // 펼친 높이
  open: boolean;
  onClose: () => void;
}

interface UseBottomSheetReturn {
  height: SpringValue<number>;
  y: SpringValue<number>;
  isExpanded: boolean;
  bind: ReturnType<typeof useDrag>;
}

const clamp = (n: number, min: number, max: number) =>
  Math.max(min, Math.min(max, n));

export function useBottomSheet({
  minHeight,
  maxHeight,
  open,
  onClose,
}: UseBottomSheetProps): UseBottomSheetReturn {
  const [isExpanded, setIsExpanded] = useState(false);
  const [{ height, y }, api] = useSpring(() => ({
    height: minHeight,
    y: 0,
    config: { tension: 180, friction: 24, clamp: true },
  }));

  // stale state 방지
  const expandedRef = useRef(isExpanded);
  expandedRef.current = isExpanded;

  const bind = useDrag(
    ({ last, movement: [, my], direction: [, dy] }) => {
      // 방향 판정
      const goingUp = dy < 0;
      const goingDown = dy > 0;

      if (!last) {
        // 드래그 중
        let nextHeight: number;
        let nextY: number;

        if (expandedRef.current) {
          // 펼친 상태: 위로는 유지(최대), 아래로는 축소
          nextHeight = clamp(maxHeight - my, minHeight, maxHeight);
          nextY = clamp(my > 0 ? my / 2 : 0, 0, minHeight); // y 값 제한
        } else {
          // 접힌 상태: 위로 확장
          const deltaUp = Math.max(0, -my);
          nextHeight = clamp(minHeight + deltaUp, minHeight, maxHeight);
          nextY = clamp(my > 0 ? my : 0, 0, minHeight); // y 값 제한
        }

        api.start({
          to: {
            height: nextHeight,
            y: nextY,
          },
          immediate: true,
        });
        return;
      }

      // 드래그 끝(스냅 결정)
      // 아래로 빠르게/많이 → 접히거나 닫기
      if (goingDown) {
        if (expandedRef.current) {
          setIsExpanded(false);
          api.start({
            to: {
              height: minHeight,
              y: 0,
            },
            immediate: true,
            config: { tension: 200, friction: 20 },
          });
        } else {
          // 이미 접힌 상태에서 더 아래로 스와이프 → 닫기
          api.start({
            to: { y: minHeight },
            immediate: true,
            config: { tension: 200, friction: 20 },
            onRest: onClose,
          });
        }
        return;
      }

      // 위로 드래그하면 확장
      if (goingUp) {
        setIsExpanded(true);
        api.start({
          to: {
            height: maxHeight,
            y: 0,
          },
          immediate: true,
          config: { tension: 200, friction: 20 },
        });
        return;
      }

      // 마지막 드래그 방향에 따라 결정
      if (goingUp) {
        setIsExpanded(true);
        api.start({
          to: {
            height: maxHeight,
            y: 0,
          },
          immediate: false,
          config: { tension: 200, friction: 20 },
        });
      } else {
        setIsExpanded(false);
        api.start({
          to: {
            height: minHeight,
            y: 0,
          },
          immediate: false,
          config: { tension: 200, friction: 20 },
        });
      }
    },
    {
      axis: "y",
      filterTaps: true,
      threshold: 3, // 미세 터치 무시
      enabled: open,
      eventOptions: { passive: false },
    }
  );

  return { height, y, isExpanded, bind };
}
