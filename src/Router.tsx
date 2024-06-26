import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Calculator, Converter } from "pages";
import { Layout } from "layout";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} path={import.meta.env.PROD ? "/Calculator-CurrencyConverter/" : "/"}>
          <Route index element={<Calculator />} />
          <Route path="converter" element={<Converter />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
