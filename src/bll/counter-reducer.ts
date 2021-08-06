export const initialState: InitialStateType = {
    value: 1000
}

type InitialStateType = {
    value: number
}

export const counterReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "INC-VALUE": {
            return {
                ...state, value: state.value + 1
            }
        }
        case "SET-VALUE-FROM-LOCAL-STORAGE": {
            return {
                ...state, value: action.value
            }
        }
        default:
            return state
    }
}

export const incValueAC = () => ({type: "INC-VALUE"} as const)
export const setValueLSAC = (value: number) => ({type: "SET-VALUE-FROM-LOCAL-STORAGE", value} as const) //LS - Local Storage

export type IncValuesActionType = ReturnType<typeof incValueAC>
export type SetValueLSActionType = ReturnType<typeof setValueLSAC>

type ActionType = IncValuesActionType  | SetValueLSActionType
