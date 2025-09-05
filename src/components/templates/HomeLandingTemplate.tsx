import SearchBar from "../molecules/SearchBar";
import CategoryGrid from "../molecules/CategoryGrid";
import type { Category } from "../molecules/CategoryGrid";
import TabBar from "../molecules/TabBar";

type TabKey = "home" | "mypet" | "chat" | "wish" | "profile";

type HomeLandingTemplateProps = {
  // Search
  search: string;
  onSearchChange: (v: string) => void;
  onSearchSubmit: (v: string) => void;

  // Categories
  categories: Category[];

  // Tab
  currentTab: TabKey;
  onTabChange: (t: TabKey) => void;
};

export default function HomeLandingTemplate({
  search,
  onSearchChange,
  onSearchSubmit,
  categories,
  currentTab,
  onTabChange,
}: HomeLandingTemplateProps) {
  return (
    <div className="min-h-dvh flex flex-col
                    pt-[env(safe-area-inset-top)]
                    pb-[env(safe-area-inset-bottom)]">
      {/* 상단 검색 */}
      <div className="px-4 pt-4">
        <SearchBar
          value={search}
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
        />
      </div>

      {/* 카테고리 그리드 */}
      <div className="flex-1 px-4 py-6">
        <CategoryGrid items={categories} />
      </div>

      {/* 하단 탭바 */}
      <div className="sticky bottom-0 left-0 right-0">
        <TabBar current={currentTab} onChange={onTabChange} />
      </div>
    </div>
  );
}