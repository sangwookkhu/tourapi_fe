import { useNavigate } from "@tanstack/react-router";
import PermissionCheckLayout from "../../components/templates/PermissionCheckLayout";

export default function CheckPermissionPage() {
  const navigate = useNavigate();
  const permissionList = [
    { title: "카메라", description: "바코드/QR, 포토리뷰 등의 서비스 이용" },
    { title: "사진", description: "사진 관련 서비스 이용" },
    { title: "알림", description: "알림 관련 서비스 이용" },
    { title: "위치", description: "위치 기반 서비스 이용" },
  ];
  return (
    <PermissionCheckLayout
      onBack={() => navigate({ to: "/login" })}
      pageTitle="접근 권한을 허용해주세요"
      permissionList={permissionList}
      onChangeList={[() => {}, () => {}]}
    />
  );
}
