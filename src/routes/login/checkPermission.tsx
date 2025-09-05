import { createFileRoute } from "@tanstack/react-router";
import CheckPermissionPage from "../../pages/login/CheckPermissionPage";

export const Route = createFileRoute("/login/checkPermission")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CheckPermissionPage />;
}
