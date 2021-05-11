import s from './counter.module.css'
import {useState} from "react";
import {TypeOfProps} from "./App";


export function Counter(props: TypeOfProps) {


    return (
        <div className={s.flexTwoBlocks}>
            <div className={s.mainBlock}>
                <div className={s.blocksInputs}>

                    <div className={s.flexBlocksInp}>
                        <div className={s.startValue}>start value</div>
                        <input className={props.startValue >= props.maxValue ? s.inputStyle : s.inputs2} type="number"
                               value={props.startValue} onChange={(e) => {
                            props.changeStart((e.currentTarget.value))
                        }}/>
                    </div>
                    <div className={s.flexBlocksInp}>
                        <div className={s.maxValue}>max value</div>
                        <input className={s.inputs2} type="number" value={props.maxValue} onChange={(e) => {
                            props.changeMax(e.currentTarget.value)
                        }}/>
                    </div>
                </div>
                <div className={s.positionSet}>
                    <button
                        disabled={props.value === props.maxValue || props.maxValue <= props.value}
                        onClick={() => {
                            props.setNumbers()
                        }}
                        className={props.value === props.maxValue || props.maxValue <= 0 || props.maxValue <= props.value ? s.disableCursor : s.buttons}>set
                    </button>
                </div>
            </div>

            <div className={s.mainBlock}>
                <div className={s.numberBlock}>
                    <span
                        className={props.maxValue <= 0 ? s.value : '' || props.maxValue === props.value || props.maxValue < props.startValue || props.maxValue == props.startValue ? s.value : ''}>
                        {props.maxValue < props.startValue || props.maxValue == props.startValue ?
                            <div>Error</div> : (props.button ? props.value :
                                <div className={s.enterValue}>enter values and press "set"</div>)}

                </span>
                </div>
                <div className={s.blockBottoms}>
                    <button disabled={props.value === props.maxValue || props.button === false}
                            className={props.value === props.maxValue || props.button === false ? s.disableCursor : s.buttons}
                            onClick={props.CounterInc}>incr
                    </button>
                    <button className={props.button === false ? s.disableCursor : s.buttons}
                            onClick={props.ResetCounter}
                            disabled={props.button === false}
                    >reset
                    </button>
                </div>
            </div>
        </div>

    )
}