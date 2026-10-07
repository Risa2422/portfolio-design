import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext.jsx";
import "./index.css";
import { RootLayout } from "./layouts/root-layout.jsx";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import EventManagement from "./pages/works/EventManagement.jsx";
import WebDesign from "./pages/works/Fill.jsx";
import GoogleMapsAlbum from "./pages/works/Googlemaps.jsx";
import Mahjong from "./pages/works/Mahjong.jsx";
import MiningProject from "./pages/works/MiningProject.jsx";
import Quiz from "./pages/works/Quiz.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "profile", element: <Profile /> },
      { path: "works/event-management", element: <EventManagement /> },
      { path: "works/googlemaps-album", element: <GoogleMapsAlbum /> },
      { path: "works/mahjong", element: <Mahjong /> },
      { path: "works/quiz", element: <Quiz /> },
      { path: "works/mining-project", element: <MiningProject /> },
      { path: "works/fill", element: <WebDesign /> },
    ],
  },
]);

const rootElement = document.getElementById("root");
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <LanguageProvider>
        <RouterProvider router={router} />
      </LanguageProvider>
    </StrictMode>,
  );
}
