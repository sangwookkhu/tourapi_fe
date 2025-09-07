import { Search, X } from "lucide-react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import * as React from "react";

type SearchBarProps = {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  onChange?: (v: string) => void;
  onSubmit?: (v: string) => void;
  onFocus?: () => void;
  onClear?: () => void;
  className?: string;
};

export default function SearchBar({
  value,
  defaultValue,
  placeholder = "",
  onChange,
  onSubmit,
  onFocus,
  onClear,
  className = "",
}: SearchBarProps) {
  const formRef = React.useRef<HTMLFormElement>(null);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const input = e.currentTarget.elements.namedItem(
      "q"
    ) as HTMLInputElement | null;
    const text = value ?? input?.value ?? "";
    onSubmit?.(text.trim());
  };

  const handleClear = () => {
    // controlled/uncontrolled 모두 지원
    if (onClear) onClear();
    const input = formRef.current?.elements.namedItem(
      "q"
    ) as HTMLInputElement | null;
    if (input && value === undefined) {
      input.value = "";
    }
    onChange?.("");
  };

  const hasText = (value ?? defaultValue ?? "").length > 0;

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className={`w-full h-[57px] rounded-lg bg-[#F3F3F3]
                  flex items-center gap-3 px-5
                  shadow-[0_2px_6px_rgba(0,0,0,0.04)] ${className}`}
      aria-label="검색"
      role="search"
      onClick={() => onFocus?.()}
    >
      <Input
        name="q"
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        onFocus={onFocus}
        inputMode="search"
        enterKeyHint="search"
        className="bg-transparent outline-none border-none
                   text-[16px] leading-[22px] w-full"
        aria-label="검색어 입력"
      />

      {/* 텍스트가 있을 때만 X 버튼 노출 */}
      {hasText && (
        <Button
          type="button"
          aria-label="지우기"
          onClick={handleClear}
          className="p-0 inline-flex items-center justify-center w-6 h-6"
        >
          <X size={18} className="text-gray-400" />
        </Button>
      )}

      <Button
        type="submit"
        aria-label="검색하기"
        className="p-0 inline-flex items-center justify-center w-6 h-6"
      >
        <Search size={22} strokeWidth={2} className="text-gray-500" />
      </Button>
    </form>
  );
}
