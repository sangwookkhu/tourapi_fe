import { CircleCheck } from "lucide-react";

interface CheckBoxProps {
  id: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  className?: string;
}

export default function CheckBox({
  id,
  checked,
  defaultChecked,
  onChange,
  disabled,
  className = "",
}: CheckBoxProps) {
  return (
    <>
      {/* 진짜 체크박스(접근성용). 화면에서는 숨김 */}
      <input
        id={id}
        type="checkbox"
        className="peer sr-only"
        checked={checked}
        defaultChecked={defaultChecked}
        onChange={(e) => onChange?.(e.target.checked)}
        disabled={disabled}
      />

      <CircleCheck
        className={` text-orange-500 opacity-0
                     peer-checked:opacity-100 
                     ${checked || defaultChecked ? "opacity-100" : ""}
                     transition ${className}`}
        strokeWidth={2}
        size={24}
      />
    </>
  );
}
