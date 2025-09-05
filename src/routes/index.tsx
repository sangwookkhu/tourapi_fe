import { createFileRoute } from "@tanstack/react-router";
import LoginLandingPage from "../pages/login/LoginLandingPage";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginLandingPage />;
}
