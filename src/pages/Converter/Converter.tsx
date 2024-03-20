import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import { ValuteTable } from "./ValuteTable";
import { Options } from "./Options";
import style from "./Converter.module.scss";

export interface IValue {
  ID: string;
  NumCode: string;
  CharCode: string;
  Nominal: number;
  Name: string;
  Value: number;
  Previous: number;
}

export interface IResponse {
  Date: string;
  PreviousDate: string;
  PreviousURL: string;
  Timestamp: string;
  Valute: { [name: string]: IValue };
}

export const Converter = () => {
  const [from, setFrom] = useState<number>(0);
  const [to, setTo] = useState<number>(0);
  const [value, setValue] = useState<number>(1);
  const [result, setResult] = useState<number>();

  const { data } = useQuery<IResponse>({
    queryKey: ["value"],
    queryFn: async () => {
      const res = await axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
      setFrom(res.data.Valute["USD"].Value);
      setTo(res.data.Valute["EUR"].Value);
      return res.data;
    },
  });

  const convert = () => {
    if (from === to) {
      setResult(value * from);
    } else if (value === from) {
      setResult(value / to);
    } else {
      setResult((value * from) / to);
    }
  };

  return (
    <div className={style.container}>
      <div className={style.converter}>
        <div className={style.valutes}>
          <label htmlFor="from">From: </label>
          <select
            id="from"
            onChange={(e) => setFrom(Number(e.target.value))}
            value={from}
          >
            <option value={value}>RUB</option>
            {data && <Options data={data} />}
          </select>
          <label htmlFor="to">To: </label>
          <select
            id="to"
            onChange={(e) => setTo(Number(e.target.value))}
            value={to}
          >
            <option value={from}>RUB</option>
            {data && <Options data={data} />}
          </select>
        </div>

        <div className={style.result}>Результат: {result?.toFixed(2)}</div>
        <div className={style.convert}>
          <input
            placeholder="Значение"
            type="number"
            onChange={(e) => {
              setValue(Number(e.target.value));
            }}
            value={value}
          />

          <button className={style.convert_button} onClick={convert}>
            Конвертировать
          </button>
        </div>
      </div>

      {data && <ValuteTable data={data} />}
    </div>
  );
};
