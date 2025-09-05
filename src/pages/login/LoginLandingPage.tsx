import AuthLandingTemplate from "../../components/templates/AuthLandingLayout";
import { useNavigate, useRouter } from "@tanstack/react-router";

export default function LoginLandingPage() {
  const navigate = useNavigate();
  const router = useRouter();
  const onBack = () => router.history.go(-1);
  const onNaver = () => {
    navigate({ to: "/landing" }); //임시로직, 추후 변경 필요
  };
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
