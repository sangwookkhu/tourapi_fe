import AuthLandingTemplate from "../components/templates/AuthLandingTemplate";
import { useRouter } from "@tanstack/react-router";

export default function LoginLandingPage() {
  const router = useRouter();
  const onBack = () => router.history.go(-1);
  const onNaver = () => {};
  const onKakao = () => {};
  const onGoogle = () => {};
  return (
    <AuthLandingTemplate
      onBack={onBack}
      onNaver={onNaver}
      onKakao={onKakao}
      onGoogle={onGoogle}
      logo="/Assets/icons/Logo.svg"
    />
  );
}
