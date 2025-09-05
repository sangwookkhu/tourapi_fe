// 탭바
import TabBarItem from "./TabBarItem";

type TabKey = "home" | "mypet" | "chat" | "wish" | "profile";

type TabBarProps = {
  current: TabKey;
  onChange?: (key: TabKey) => void;
  className?: string;
};

export default function TabBar({ current, onChange, className = "" }: TabBarProps) {
  return (
    <nav
      className={`w-full bg-white border-t border-black/5
                  pt-3 pb-[calc(12px+env(safe-area-inset-bottom))]
                  shadow-[0_-4px_12px_rgba(0,0,0,0.04)]
                  ${className}`}
      aria-label="하단 탭"
    >
      <div className="mx-auto max-w-[560px] px-4">
        <div className="grid grid-cols-5 place-items-center gap-2">
          <TabBarItem
            activeIconSrc="/Assets/icons/HomeActive.svg"
            inactiveIconSrc="/Assets/icons/Home.svg"
            label="홈"
            active={current==="home"}
            onClick={() => onChange?.("home")}
          />
          <TabBarItem
            activeIconSrc="/Assets/icons/PawPrint.svg"
            inactiveIconSrc="/Assets/icons/PawPrint.svg"
            label="마이펫"
            active={current==="mypet"}
            onClick={() => onChange?.("mypet")}
          />
          <TabBarItem
            activeIconSrc="/Assets/icons/ChatActive.svg"
            inactiveIconSrc="/Assets/icons/Chat.svg"
            label="챗봇"
            active={current==="chat"}
            onClick={() => onChange?.("chat")}
          />
          <TabBarItem
            activeIconSrc="/Assets/icons/StarActive.svg"
            inactiveIconSrc="/Assets/icons/Star.svg"
            label="찜하기"
            active={current==="wish"}
            onClick={() => onChange?.("wish")}
          />
          <TabBarItem
            activeIconSrc="/Assets/icons/UserActive.svg"
            inactiveIconSrc="/Assets/icons/User.svg"
            label="프로필"
            active={current==="profile"}
            onClick={() => onChange?.("profile")}
          />
        </div>
      </div>
    </nav>
  );
}

