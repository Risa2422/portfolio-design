import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { RootLayout } from "./layouts/root-layout.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import EventManagement from "./pages/works/EventManagement.jsx";
import Mahjong from "./pages/works/Mahjong.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "works/event-management", element: <EventManagement /> },
      { path: "works/mahjong", element: <Mahjong /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
