import { ValuteItem } from "./ValuteItem";
import { IResponse } from ".";
import { memo } from "react";

interface ValuteListProps {
  data: IResponse;
}

export const ValuteList = memo(({ data }: ValuteListProps) => {
  return Object.values(data?.Valute).map((value, index) => {
    return <ValuteItem key={index} value={value} />;
  });
});
