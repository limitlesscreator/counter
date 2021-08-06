import React, {useState} from 'react';
import s from "./App.module.sass"
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./bll/store";
import {incValueAC} from "./bll/counter-reducer";


function App() {

    const value = useSelector<AppStateType,number>(state => state.counter.value)
    const dispatch = useDispatch()

    const incHandler = () => {
        dispatch(incValueAC())
    }

    return (
        <div className={s.app}>
            {value}
            <br/>
            <button className={s.inc} onClick={incHandler}>inc</button>
        </div>
    );
}

export default App;
