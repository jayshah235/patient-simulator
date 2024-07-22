import { Link, useLocation } from "react-router-dom";
import logo from "../../assests/images/logo.png";
import blurLogo from "../../assests/placeholder-images/logoPlaceholder.png";
import { menuData } from "./data";
import cn from "classnames";
import Image from "../image";
import styles from "./styles.module.scss";

const Header = () => {
  const location = useLocation()?.pathname;

  return (
    <header className={styles.headerContainer}>
      <Link to="/home">
        <Image loadingSrc={blurLogo} src={logo} alt="logo" />
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
  );
};

export default Header;
