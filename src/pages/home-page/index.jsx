import { lazy, Suspense } from "react";
import styles from "./styles.module.scss";
import Skeleton from "../../components/skeleton-loader";

export const LazyLoadNewsInfo = lazy(() => import("./newInfo"));
export const LazyLoadPatientInfo = lazy(() => import("./patientsInfo"));

const HomePage = () => {
  return (
    <article className={styles.homePageContainer}>
      <Suspense fallback={<Skeleton width="30%" height="400px" />}>
        <LazyLoadNewsInfo />
      </Suspense>
      <Suspense fallback={<Skeleton width="70%" height="500px" />}>
        <LazyLoadPatientInfo />
      </Suspense>
    </article>
  );
};

export default HomePage;
