import React from 'react'
import { useState } from "react";





const Calculator = () => {

    const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/','*','+','-','.']; //operator function

  const updateCalc = value => 
  {
    if(ops.includes(value) && calc === '' ||
    ops.includes(value) && ops.includes(calc.slice(-1))
    )
    {
      return;
    }
    setCalc(calc + value);
    if(!ops.includes(value))
    {
        setResult(eval(calc + value).toString());
    }

  } //end of updatecal


  //Using function to populate numeric values in the calc
    const createDigits = () => 
    {
      const digits = [];
      for (let i = 1;i<10;i++){
        digits.push(
          <button class="btn btn-primary btn-lg px-4 my-3 mx-3"
          onClick={() => updateCalc(i.toString())}
          key={i}>
            {i}
            </button>
        )
      }
        return digits;
    }

    //function for equal to
    const calculate = () => {
      setCalc(eval(calc).toString());
    }

       //function for delete 
    const deleteLast = () => {
      if(calc === '' ){
        return;
      }
      const value = calc.slice(0, -1);
      setCalc(value);
    }





  return (
    <div className="App container p-5">
        <div className="calculator container p-4">
          <div className="display col-md-7 shadow mx-auto p-4 h1 bg-dark text-light">
               {result ? <span class="h6">({result})</span> : ''}
               {calc || "0"}
          </div>

          <div className="operators col-md-7 shadow mx-auto p-3 mx-3">
              
            <button class="btn btn-primary btn-md btn-danger px-4 mx-3" onClick={() => updateCalc('/')}>/</button>
            <button class="btn btn-primary btn-md btn-danger px-4 mx-3" onClick={() => updateCalc('*')}>*</button>
            <button class="btn btn-primary btn-md btn-danger px-4 mx-3" onClick={() => updateCalc('+')}>+</button>
            <button class="btn btn-primary btn-md btn-danger px-4 mx-3" onClick={() => updateCalc('-')}>-</button>

            <button class="btn btn-primary btn-md btn-danger px-4 mx-3" onClick={deleteLast}>DEL</button>
          </div>

          <div className="digits col-md-7 shadow mx-auto p-5 mx-auto">
            { createDigits() }
            <button class="btn btn-primary btn-lg px-4 mx-3" onClick={() => updateCalc('0')}>0</button>
            <button class="btn btn-primary btn-lg px-4 mx-3" onClick={() => updateCalc('.')}>.</button>

            <button class="btn btn-primary btn-lg px-4 mx-3" onClick={calculate}>=</button>
          
          </div>
      
        </div>
    </div>
  );
}

export default Calculator