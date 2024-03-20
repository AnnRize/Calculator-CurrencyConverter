import { ValuteList } from "./ValuteList";
import { ValuteItem } from "./ValuteItem";
import { IResponse } from ".";
import style from "./ValuteTable.module.scss";
import { memo } from "react";

interface ValuteTableProps {
  data: IResponse;
}

export const ValuteTable = memo(({ data }: ValuteTableProps) => {
  return (
    <div className={style.tables_container}>
      <table className={style.table}>
        <caption>Популярные валюты</caption>
        <thead>
          <tr>
            <th>Код</th>
            <th>Наименование</th>
            <th>Наминал</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          <ValuteItem value={data.Valute["USD"]} />
          <ValuteItem value={data.Valute["EUR"]} />
        </tbody>
      </table>

      <table className={style.table}>
        <caption>Таблица валют</caption>
        <thead>
          <tr>
            <th>Код</th>
            <th>Наименование</th>
            <th>Наминал</th>
            <th>Значение</th>
          </tr>
        </thead>
        <tbody>
          <ValuteList data={data} />
        </tbody>
      </table>
    </div>
  );
});
