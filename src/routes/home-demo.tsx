import { createFileRoute } from "@tanstack/react-router";
import CategoryGridDemo from "../pages/HomeLandingPage";

export const Route = createFileRoute("/home-demo")({
  component: CategoryGridDemo,
});