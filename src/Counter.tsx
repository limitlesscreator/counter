import s from './counter.module.css'
import {useState} from "react";
import {TypeOfProps} from "./App";


export function Counter(props: TypeOfProps) {

    let [StartValue,setStartValue] = useState(0)

    const changeStartValue = (event:any) => {
        setStartValue(event.currentTarget.value)
        console.log(+StartValue)
    }

    return (
        <div className={s.flexTwoBlocks}>
            <div className={s.mainBlock}>
                <div className={s.blocksInputs}>

                    <div className={s.flexBlocksInp}>
                        <div className={s.startValue}>start value</div>
                        <input className={s.inputs2}  type="number" value={StartValue} onChange={(event) => {changeStartValue(event)}}/>
                    </div>
                    <div className={s.flexBlocksInp}>
                        <div className={s.maxValue}>max value</div>
                        <input className={s.inputs2} type="text"/>
                    </div>
                </div>
                <div className={s.positionSet}>
                    <button onClick={() => {props.setCounter(StartValue)}} className={s.buttons}>set
                    </button>
                </div>
            </div>

            <div className={s.mainBlock}>
                <div className={s.numberBlock}><span className={props.value === 5 ? s.value : ''}>{props.value}</span>
                </div>
                <div className={s.blockBottoms}>
                    <button disabled={props.value === 5} className={props.value === 5 ? s.disableCursor : s.buttons}
                            onClick={props.CounterInc}>incr
                    </button>
                    <button className={s.buttons}
                            onClick={props.ResetCounter}>reset
                    </button>
                </div>
            </div>
        </div>

    )
}