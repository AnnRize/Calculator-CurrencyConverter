import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import style from "./Layout.module.scss";

export const Layout = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Header />
      </header>
      <main className={style.main}>
        <Outlet />
      </main>
    </div>
  );
};
