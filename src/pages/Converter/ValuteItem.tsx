import { memo } from "react";
import { IValue } from ".";
import style from "./ValuteItem.module.scss";

interface ValuteItemProps {
  value: IValue;
}

export const ValuteItem = memo(({ value }: ValuteItemProps) => {
  return (
    <tr className={`${style.data_row}`}>
      <td>{value.CharCode}</td>
      <td>{value.Name}</td>
      <td>{value.Nominal}</td>
      <td>{value.Value}</td>
    </tr>
  );
});
