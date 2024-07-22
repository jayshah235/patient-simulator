import { lazy } from "react";

export const Login = lazy(() => import("../pages/login"));
export const MainLayout = lazy(() => import("../pages/main-layout"));
export const HomePage = lazy(() => import("../pages/home-page"));
export const MorePatients = lazy(() => import("../pages/more-patients"));
export const PatientsInfo = lazy(() => import("../pages/patient-info"));
export const PatientSimulator = lazy(() =>
  import("../pages/patient-simulator")
);
