// Molecule: SearchBar
import { Search } from "lucide-react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

type SearchBarProps = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (v: string) => void;
  onSubmit?: (v: string) => void;
  className?: string;
};

export default function SearchBar({
  value,
  defaultValue,
  placeholder = "검색어를 입력하세요",
  onChange,
  onSubmit,
  className = "",
}: SearchBarProps) {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const input = (e.currentTarget.elements.namedItem("q") as HTMLInputElement) || null;
    const text = value ?? input?.value ?? "";
    onSubmit?.(text);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`w-full rounded-3xl bg-[#F3F3F3] h-[57px]
                  flex items-center justify-between gap-3
                  px-5 shadow-[0_2px_6px_rgba(0,0,0,0.04)]
                  ${className}`}
      aria-label="검색"
      role="search"
    >
      {/* 입력칸 */}
      <Input
        name="q"
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="bg-transparent outline-none border-none 
                   text-[16px] leading-[22px] w-full"
        aria-label="검색어 입력"
      />

      {/* 돋보기 버튼 */}
      <Button
        type="submit"
        aria-label="검색하기"
        className="p-0 inline-flex items-center justify-center w-[24px] h-[24px]"
      >
        <Search size={28} strokeWidth={2} className="text-gray-500" />
      </Button>
    </form>
  );
}