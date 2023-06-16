import Calculator from "./components/Calculator/Calculator";
import Button from "./components/Button/Button";
import Result from "./components/Result/Result";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  
  const [prevNumber, setPrevNumber] = useState(null);
  const [operant, setOperant] = useState(null);
  const [currentNumber, setCurrentNumber] = useState("0")

  return (
    <div>
      <Calculator>
        <Header>Este es un header</Header>
        <Result>Este es un resultado</Result>
        <Button type="submit" value={1} onClick={()=>{console.log("1")}}/>
        <Button type="submit" value={2} onClick={()=>{console.log("2")}}/>
        <Button type="submit" value={3} onClick={()=>{console.log("3")}}/>
        <Button type="submit" value={4} onClick={()=>{console.log("4")}}/>
        <Button type="submit" value={5} onClick={()=>{console.log("5")}}/>
        <Button type="submit" value={6} onClick={()=>{console.log("6")}}/>
        <Button type="submit" value={7} onClick={()=>{console.log("7")}}/>
        <Button type="submit" value={8} onClick={()=>{console.log("8")}}/>
        <Button type="submit" value={9} onClick={()=>{console.log("9")}}/>
        <Button type="submit" value={0} onClick={()=>{console.log("0")}}/>
      </Calculator>
    </div>
  );
}

export default App;
