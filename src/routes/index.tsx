import { createFileRoute } from "@tanstack/react-router";
import LoginLandingPage from "../pages/LoginLandingPage";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <LoginLandingPage />;
}
