import { NavLink } from "react-router-dom";
import style from "./Header.module.scss";

const activePage = ({ isActive }: { isActive: boolean }) => {
  return `${style.link} ${isActive && style.active}`;
};

export const Header = () => {
  return (
    <div className={style.header}>
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink
              to={import.meta.env.PROD ? "/Calculator-CurrencyConverter/" : "/"}
              className={activePage}
            >
              Калькулятор
            </NavLink>
          </li>
          <li>
            <NavLink to={"converter"} className={activePage}>
              Конвертер
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
