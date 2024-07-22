import { Link, Outlet, useLocation } from "react-router-dom";
import logo from "../../assests/images/logo.png";
import { menuData } from "./data";
import cn from "classnames";
import styles from "./styles.module.scss";

const MainLayout = () => {
  const location = useLocation()?.pathname;
  return (
    <main className={styles.container}>
      <header className={styles.headerContainer}>
        <Link to="/home">
          <img src={logo} alt="logo" />
        </Link>
        <ul className={styles.menuList}>
          {menuData?.map((s, index) => (
            <li key={index}>
              <Link
                className={cn(
                  styles.menuItems,
                  s?.routes === location && styles.active
                )}
                to={s.routes}
              >
                {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </header>
      <Outlet />
    </main>
  );
};

export default MainLayout;
