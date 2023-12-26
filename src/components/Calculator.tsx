import styles from "./Calculator.module.scss";
import Button from "@components/button/Button";
import Screen from "@components/screen/Screen";
import { useState } from "react";

const Calculator = () => {
  const [calculate, setCalculate] = useState("");
  const [result, setResult] = useState("");

  const operations = ["*", "+", "-", ".", "/"];

  const handleCalculate = (fn: string) => {
    if (
      operations.includes(fn) &&
      (calculate === "" || operations.includes(calculate.slice(-1)))
    ) {
      return;
    }

    setCalculate(calculate + fn);

    if (!operations.includes(fn)) {
      setResult(eval(calculate + fn).toString());
    }
  };

  const handleClear = () => setCalculate("");

  const handleDelete = () => setCalculate(calculate.slice(0, -1));

  const handleEquals = () => setCalculate(eval(calculate).toString());

  return (
    <div className={`flex ${styles.calculator}`}>
      <div className={styles.screen}>
        <Screen calculate={calculate} result={result} />
      </div>
      <div className={`flex ${styles.buttons}`}>
        {/*First Row*/}
        <div className="row">
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="0"
              onClick={() => handleCalculate("0")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="."
              onClick={() => handleCalculate(".")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#627183"
              fontColor="#fff"
              fn="="
              onClick={handleEquals}
            />
          </div>
        </div>

        {/*Second Row*/}
        <div className="row">
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="1"
              onClick={() => handleCalculate("1")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="2"
              onClick={() => handleCalculate("2")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="3"
              onClick={() => handleCalculate("3")}
            />
          </div>
        </div>

        {/*Third Row*/}
        <div className="row">
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="4"
              onClick={() => handleCalculate("4")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="5"
              onClick={() => handleCalculate("5")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="6"
              onClick={() => handleCalculate("6")}
            />
          </div>
        </div>

        {/*Fourth Row*/}
        <div className="row">
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="7"
              onClick={() => handleCalculate("7")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="8"
              onClick={() => handleCalculate("8")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#5b6f88"
              fontColor="#fff"
              fn="9"
              onClick={() => handleCalculate("9")}
            />
          </div>
        </div>

        {/* Fifth Row */}
        <div className="row">
          <div className="column">
            <Button
              bgColor="#627183"
              fontColor="#fff"
              fn="C"
              onClick={handleClear}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#627183"
              fontColor="#fff"
              fn="DEL"
              onClick={handleDelete}
            />
          </div>
        </div>

        {/*Sixth Row*/}
        <div className="row">
          <div className="column">
            <Button
              bgColor="#627183"
              fontColor="#fff"
              fn="+"
              onClick={() => handleCalculate("+")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#627183"
              fontColor="#fff"
              fn="-"
              onClick={() => handleCalculate("-")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#627183"
              fontColor="#fff"
              fn="*"
              onClick={() => handleCalculate("*")}
            />
          </div>
          <div className="column">
            <Button
              bgColor="#627183"
              fontColor="#fff"
              fn="/"
              onClick={() => handleCalculate("/")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
