// src/routes/__root.tsx
import { Outlet, createRootRoute } from "@tanstack/react-router";
import TabBar from "../components/molecules/TabBar";
export const Route = createRootRoute({
  component: () => (
    <>
      <Outlet />
      <TabBar className="fixed bottom-0 left-0 z-40" current="home" />
    </>
  ),
});
