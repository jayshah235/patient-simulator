import { ErrorBoundaryHoc } from "../ui-components/error-boundary-hoc";
import * as lazy from "./lazyLoadComponents";

export const routesData = [
  {
    path: "*",
    element: "page not found",
  },
  {
    path: "/",
    element: <lazy.Login />,
  },
  {
    path: "/*",
    element: (
      <ErrorBoundaryHoc>
        <lazy.MainLayout />
      </ErrorBoundaryHoc>
    ),
    children: [
      {
        path: "home",
        element: (
          <ErrorBoundaryHoc>
            <lazy.HomePage />
          </ErrorBoundaryHoc>
        ),
      },
      {
        path: "training",
        element: "training",
      },
      {
        path: "settings",
        element: "settings",
      },
      {
        path: "more-patients",
        element: (
          <ErrorBoundaryHoc>
            <lazy.MorePatients />
          </ErrorBoundaryHoc>
        ),
      },
      {
        path: "patient/:id",
        element: (
          <ErrorBoundaryHoc>
            <lazy.PatientsInfo />
          </ErrorBoundaryHoc>
        ),
      },
    ],
  },
  {
    path: "/simulation/:gender",
    element: (
      <ErrorBoundaryHoc>
        <lazy.PatientSimulator />
      </ErrorBoundaryHoc>
    ),
  },
];
