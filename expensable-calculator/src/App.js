/** @jsxImportSource @emotion/react */
import { useState } from "react";
import { css } from "@emotion/react";
import Calculator from "./components/Calculator/Calculator";
import Button from "./components/Button/Button";
import Result from "./components/Result/Result";
import Header from "./components/Header/Header";
import shop from "./img/icons/shop.svg";

function App({ name, color, icon }) {
  const [prevNumber, setPrevNumber] = useState(null);
  const [operant, setOperant] = useState(null);
  const [currentNumber, setCurrentNumber] = useState("0");
  const [flag, setFlag] = useState(false);

  function handleClick(event) {
    if (!flag) {
      const x =
        currentNumber === "0"
          ? event.target.value
          : currentNumber + event.target.value;
      setCurrentNumber(x);
    } else {
      setCurrentNumber(event.target.value);
      setFlag(false);
    }
  }

  function handleOperator(event) {
    setOperant(event.target.value);
    setPrevNumber(currentNumber);
    setCurrentNumber("");
  }
  function handleDelete() {
    if (typeof currentNumber === "string") {
      setCurrentNumber(currentNumber.slice(0, -1));
    }
  }

  function handleClear() {
    setCurrentNumber("");
    setOperant(null);
    setPrevNumber(null);
    setFlag(false);
  }

  function handleEqual(event) {
    let result = 0;

    switch (operant) {
      case "+":
        result = +prevNumber + +(currentNumber || prevNumber);
        setCurrentNumber(result);
        break;
      case "-":
        result = +prevNumber - +(currentNumber || prevNumber);
        setCurrentNumber(result);
        break;

      case "*":
        result = +prevNumber * +(currentNumber || prevNumber);
        setCurrentNumber(result);
        break;

      case "/":
        result = +prevNumber / +(currentNumber || prevNumber);
        setCurrentNumber(result);
        break;
    }
    setOperant(null);
    setPrevNumber(null);
    setFlag(true);
  }
  function renderEnter(operant) {
    return operant ? "=" : "#";
  }
  return (
    <div>
      <Calculator>
        <Header color={color}>
          {name}
          <div>
            <img src={shop} />
          </div>
        </Header>
        <Result>
          $ {prevNumber} {operant} {currentNumber}
        </Result>
        <div
          css={css`
            display: grid;
            grid-template:
              "aa ab ac ad ae"
              "ba bb bc bd be"
              "ca cb cc cd ce"
              "da db dc dd ce";
            background-color: gainsboro;
            row-gap: 1px;
            padding: 1px 0px;
          `}
        >
          <Button
            type="submit"
            value={1}
            area={"ab"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={2}
            area={"ac"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={3}
            area={"ad"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={4}
            area={"bb"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={5}
            area={"bc"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={6}
            area={"bd"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={7}
            area={"cb"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={8}
            area={"cc"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={9}
            area={"cd"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={0}
            area={"dc"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={"+"}
            color={"#F3F4F6"}
            area={"da"}
            onClick={(e) => {
              handleOperator(e);
            }}
          />
          <Button
            type="submit"
            value={"-"}
            color={"#F3F4F6"}
            area={"ca"}
            onClick={(e) => {
              handleOperator(e);
            }}
          />
          <Button
            type="submit"
            value={"*"}
            color={"#F3F4F6"}
            area={"ba"}
            onClick={(e) => {
              handleOperator(e);
            }}
          />
          <Button
            type="submit"
            value={"/"}
            color={"#F3F4F6"}
            area={"aa"}
            onClick={(e) => {
              handleOperator(e);
            }}
          />
          <Button
            type="submit"
            value={renderEnter(operant)}
            color={color}
            area={"ce"}
            onClick={(e) => {
              handleEqual(e);
            }}
          />
          <Button
            type="submit"
            value={"<:"}
            area={"ae"}
            onClick={(e) => {
              handleDelete(e);
            }}
          />
          <Button
            type="submit"
            value={"C"}
            area={"be"}
            onClick={(e) => {
              handleClear(e);
            }}
          />
          <Button
            type="submit"
            value={"."}
            area={"dd"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
          <Button
            type="submit"
            value={""}
            area={"db"}
            onClick={(e) => {
              handleClick(e);
            }}
          />
        </div>
      </Calculator>
    </div>
  );
}

export default App;
