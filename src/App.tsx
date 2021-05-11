import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './Counter';

export type TypeOfProps = {
    CounterInc: () => void
    ResetCounter: () => void
    value: number
    changeStart: Function
    button: any
    setNumbers: Function
    startValue: any
    maxValue: any
    changeMax: Function
}

function App() {
    let [value, setValue] = useState(0)
    let [startValue,setStartValue] = useState(0)
    let [maxValue,setMaxValue] = useState(5)
    let [button,setButton] = useState(true)


    function CounterInc() {
        setValue(+value + 1)
    }
    function ResetCounter() {
        setValue(startValue)
    }
    function changeStart(StartValue:number){
        setStartValue(StartValue)
        setButton(false)
        setValue(StartValue)
    }
    function changeMax(MaxValue:number){
        setMaxValue(+MaxValue)
        setButton(false)
    }
    function setNumbers(){
        setButton(true)
    }


    return (
        <div className="App">
            <Counter CounterInc={CounterInc} ResetCounter={ResetCounter}
                     value={value} changeStart={changeStart}
                     button={button} setNumbers={setNumbers}
                     startValue={startValue} maxValue={maxValue}
                     changeMax={changeMax}

            />
        </div>
    );
}

export default App;
