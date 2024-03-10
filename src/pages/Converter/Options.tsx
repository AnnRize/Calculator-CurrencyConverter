import { memo } from "react";
import { IResponse } from ".";

interface OptionsProps {
  data: IResponse;
}

export const Options = memo(({ data }: OptionsProps) => {
  return Object.values(data?.Valute).map((value, index) => (
    <option key={index} value={value.Value / value.Nominal}>
      {value.CharCode}
    </option>
  ));
});
