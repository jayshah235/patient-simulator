import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routesData } from "../routes/routes";
import { Suspense } from "react";
import { ErrorBoundaryHoc } from "../ui-components/error-boundary-hoc";
import { InitialLoadUi } from "../components/initial-load-ui";

const Shell = () => {
  return (
    <ErrorBoundaryHoc>
      <Suspense fallback={<InitialLoadUi />}>
        <RouterProvider router={createBrowserRouter(routesData)} />
      </Suspense>
    </ErrorBoundaryHoc>
  );
};

export default Shell;
