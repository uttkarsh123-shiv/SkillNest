import { createBrowserRouter } from "react-router";
import { LandingPage } from "./pages/LandingPage";
import { AuthPage } from "./pages/AuthPage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { AdminDashboard } from "./pages/AdminDashboard";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/auth",
    Component: AuthPage,
  },
  {
    path: "/courses",
    Component: CoursesPage,
  },
  {
    path: "/course/:id",
    Component: CourseDetailPage,
  },
  {
    path: "/admin",
    Component: AdminDashboard,
  },
]);
