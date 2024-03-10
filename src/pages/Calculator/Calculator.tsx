import { useEffect, useState } from "react";
import "./Calculator.scss";

export const Calculator = () => {
  const [value, setValue] = useState("");
  const [symbol, setSymbol] = useState("");
  const [prev, setPrev] = useState<number>();

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const calculate = (sym: string) => {
    if (prev === undefined && value === "") {
      return;
    } else if (prev === undefined) {
      setPrev(Number(value));
      setSymbol(sym);
      setValue("");

      return;
    } else {
      setSymbol(sym);
      setValue("");

      switch (symbol) {
        case "+":
          setPrev(prev + Number(value));
          setValue("");
          break;
        case "-":
          setPrev(prev - Number(value));
          setValue("");
          break;
        case "*":
          console.log("mul");
          setPrev(prev * Number(value));
          setValue("");
          break;
        case "/":
          setPrev(prev / Number(value));
          setValue("");
          break;

        default:
          break;
      }
    }
  };

  const result = () => {
    if (prev === undefined) {
      reset();

      return;
    }
    if (symbol && value === "") {
      setValue(`${prev}`);
      setSymbol("");

      return;
    }

    switch (symbol) {
      case "+":
        setPrev(prev + Number(value));
        setValue((e) => `${prev + Number(e)}`);
        break;
      case "-":
        setPrev(prev - Number(value));
        setValue((e) => `${prev - Number(e)}`);
        break;
      case "*":
        setPrev(prev * Number(value));
        setValue((e) => `${prev * Number(e)}`);
        break;
      case "/":
        setPrev(prev / Number(value));
        setValue((e) => `${prev / Number(e)}`);
        break;

      default:
        break;
    }

    setSymbol("");
    setPrev(undefined);
  };

  const reset = () => {
    setValue("");
    setSymbol("");
    setPrev(undefined);
  };

  useEffect(() => {
    console.log("prev = " + prev);
    console.log("value = " + value);
  }, [prev, value]);

  return (
    <div className="container">
      <div
        className="calculator"
        data-prev={prev ? prev : ""}
        data-symbol={symbol ? symbol : ""}
      >
        <input type="text" className="input" value={value} readOnly />
        {numbers.map((_value, index) => (
          <div
            key={index}
            className={`button item-${index}`}
            onClick={() => setValue((e) => e + `${index}`)}
          >
            {index}
          </div>
        ))}

        <div className="button item-reset" onClick={reset}>
          C
        </div>
        <div className="button item-mul" onClick={() => calculate("*")}>
          *
        </div>
        <div className="button item-div" onClick={() => calculate("/")}>
          /
        </div>
        <div className="button item-plus" onClick={() => calculate("+")}>
          +
        </div>
        <div className="button item-min" onClick={() => calculate("-")}>
          -
        </div>
        <div
          className="button item-dot"
          onClick={() => setValue((e) => e + ".")}
        >
          .
        </div>
        <div
          className="button item-Enter"
          onClick={() => {
            result();
          }}
        >
          =
        </div>
      </div>
    </div>
  );
};
