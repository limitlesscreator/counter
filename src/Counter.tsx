import s from './counter.module.css'
export function Counter(){
    return(
        <div className={s.mainBlock}>
            <div className={s.numberBlock}>5</div>
            <div className={s.blockBottoms}>
                <div className={s.inc}>incr</div>
                <div className={s.reset}>reset</div>
            </div>
        </div>
    )
}