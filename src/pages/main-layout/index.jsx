import { Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Skeleton from "../../components/skeleton-loader";
import styles from "./styles.module.scss";

const LazyLoadHeader = lazy(() => import("../../components/header"));

const MainLayout = () => {
  return (
    <main className={styles.container}>
      <Suspense fallback={<Skeleton height="99px" />}>
        <LazyLoadHeader />
      </Suspense>
      <Outlet />
    </main>
  );
};

export default MainLayout;
