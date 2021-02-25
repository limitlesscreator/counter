import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Counter} from './Counter';

export type TypeOfProps = {
    CounterInc: () => void
    ResetCounter: () => void
    value: number
}

function App() {
    let [value, setValue] = useState(0)

    function CounterInc() {
        setValue(value + 1)
    }
    function ResetCounter() {
        setValue(0)
    }


    return (
        <div className="App">
            <Counter CounterInc={CounterInc} ResetCounter={ResetCounter} value={value}/>
        </div>
    );
}

export default App;
