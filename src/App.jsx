import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/navbar";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Project from "./components/Project/project";
import ProjectDetail from "./components/ProjectDetail";
import Services from "./components/Services";

// Timeline Page Layout
const TimelinePage = () => (
  <>
    <Navbar activeSection="projects" setActiveSection={() => {}} />
    <Project />
    <Footer />
  </>
);

// Project Detail Page Layout
const ProjectDetailPage = () => (
  <>
    <Navbar activeSection="projects" setActiveSection={() => {}} />
    <ProjectDetail />
    <Footer />
  </>
);

// Router Setup
const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/projects/timeline",
    element: <TimelinePage />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetailPage />,
  },
  {
    path: "/terms",
    element: (
      <>
        <Navbar activeSection="" setActiveSection={() => {}} />
        <Services />
        <Footer />
      </>
    ),
  },
  {
    path: "/privacy",
    element: (
      <>
        <Navbar activeSection="" setActiveSection={() => {}} />
        <PrivacyPolicy />
        <Footer />
      </>
    ),
  },
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
