import { NavLink, useLocation } from "react-router-dom";
import style from "./Header.module.scss";

const activePage = ({ isActive }: { isActive: boolean }) => {
  return `${style.link} ${isActive && style.active}`;
};

export const Header = () => {
  const location = useLocation();
  return (
    <div className={style.header}>
      <nav className={style.navbar}>
        <ul>
          <li>
            <NavLink
              to={import.meta.env.PROD ? "/Calculator-CurrencyConverter/" : "/"}
              className={activePage({
                isActive:
                  location.pathname === "/Calculator-CurrencyConverter/"
                    ? true
                    : false,
              })}
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
