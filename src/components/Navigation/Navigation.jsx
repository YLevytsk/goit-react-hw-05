import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={css.nav}>
      <div className={css.container}>
        <ul className={css.navList}>
          <li className={css.navItem}>
            <NavLink to="/" className={css.navLink}>
              Home
            </NavLink>
          </li>
          <li className={css.navItem}>
            <NavLink to="/movies" className={css.navLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;

