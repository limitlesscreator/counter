import s from './counter.module.css'
import {useState} from "react";
import {TypeOfProps} from "./App";


export function Counter(props: TypeOfProps) {


    return (
        <div className={s.mainBlock}>
            <div className={s.numberBlock}><span className={props.value === 5 ? s.value : ''}>{props.value}</span></div>
            <div className={s.blockBottoms}>
                <button disabled={props.value === 5} className={props.value === 5 ? s.disableCursor : s.buttons}
                        onClick={props.CounterInc}>incr
                </button>
                <button className={s.buttons}
                        onClick={props.ResetCounter}>reset
                </button>
            </div>
        </div>
    )
}