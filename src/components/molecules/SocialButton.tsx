import Icon from "../atoms/Icon";

type Provider = "kakao" | "naver" | "google";

type SocialButtonProps = {
  provider: Provider;
  label: React.ReactNode; // 버튼 라벨
} & React.ComponentPropsWithoutRef<"button">;

export function SocialButton({
  provider,
  label,
  className,
  ...rest
}: SocialButtonProps) {
  return (
    <button
      className={`justify-center items-center w-full bg-[#00A3A5] h-12 rounded-lg inline-flex gap-3 px-4 ${className ?? ""}`}
      {...rest}
    >
      {provider === "kakao" && <Icon />}
      {provider === "naver" && <Icon />}
      {provider === "google" && <Icon />}
      <span className="font-bold text-[0.9rem] text-white">{label}</span>
    </button>
  );
}
