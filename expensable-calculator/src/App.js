import Calculator from "./components/Calculator/Calculator";
import Button from "./components/Button/Button";
import Result from "./components/Result/Result";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  
  const [prevNumber, setPrevNumber] = useState(null);
  const [operant, setOperant] = useState(null);
  const [currentNumber, setCurrentNumber] = useState("0")
  const [flag, setFlag] = useState(false);
  

  function handleClick(event) {    
      if (!flag) {
        const x = currentNumber === "0"? event.target.value : (currentNumber + event.target.value)
        setCurrentNumber(x)
      }
      else {
        setCurrentNumber(event.target.value) 
        setFlag(false)
      }                          
  }

  function handleOperator(event){
    setOperant(event.target.value)
    setPrevNumber(currentNumber)
    setCurrentNumber("")
  }
  function handleDelete(){
    if (typeof currentNumber === "string"){
      setCurrentNumber(currentNumber.slice(0, -1))
    }

   
  }

 function handleClear(){
  setCurrentNumber("")
  setOperant(null)
  setPrevNumber(null)
  setFlag(false)
 }



  function handleEqual(event) {
    let result = 0

      switch(operant){
        case "+" :
          result = +prevNumber + +(currentNumber || prevNumber)
          setCurrentNumber(result)
          break;
        case "-" :
            result = +prevNumber - +(currentNumber || prevNumber)
            setCurrentNumber(result)
        break;

        case "*" :
            result = +prevNumber * +(currentNumber || prevNumber)
            setCurrentNumber(result)
        break;

        case "/" :
            result = +prevNumber / +(currentNumber || prevNumber)
            setCurrentNumber(result)
        break;
        
      }
      setOperant(null)
      setPrevNumber(null)
      setFlag(true)
  }
  function renderEnter(operant){
    return operant? "=" : "#"
  }
  return (
    <div>
      <Calculator>
        <Header>Este es un header</Header>
        <Result>$ {prevNumber} {operant} {currentNumber}</Result>

        <Button type="submit" value={1} onClick={(e)=>{handleClick(e)}}/>
        <Button type="submit" value={2} onClick={(e)=>{handleClick(e)}}/>
        <Button type="submit" value={3} onClick={(e)=>{handleClick(e)}}/>
        <Button type="submit" value={4} onClick={(e)=>{handleClick(e)}}/>
        <Button type="submit" value={5} onClick={(e)=>{handleClick(e)}}/>
        <Button type="submit" value={6} onClick={(e)=>{handleClick(e)}}/>
        <Button type="submit" value={7} onClick={(e)=>{handleClick(e)}}/>
        <Button type="submit" value={8} onClick={(e)=>{handleClick(e)}}/>
        <Button type="submit" value={9} onClick={(e)=>{handleClick(e)}}/>
        <Button type="submit" value={0} onClick={(e)=>{handleClick(e)}}/>
        <hr/>
        <Button type="submit" value={"+"} onClick={(e)=>{handleOperator(e)}}/>
        <Button type="submit" value={"-"} onClick={(e)=>{handleOperator(e)}}/>
        <Button type="submit" value={"*"} onClick={(e)=>{handleOperator(e)}}/>
        <Button type="submit" value={"/"} onClick={(e)=>{handleOperator(e)}}/>
        <hr/>
        <Button type="submit" value={renderEnter(operant)} onClick={(e)=>{handleEqual(e)}}/>
        <Button type="submit" value={"<:"} onClick={(e)=>{handleDelete(e)}}/>
        <Button type="submit" value={"C"} onClick={(e)=>{handleClear(e)}}/>
      </Calculator>
    </div>
  );
}

export default App;
