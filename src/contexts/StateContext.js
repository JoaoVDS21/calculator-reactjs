import { createContext, useContext, useEffect, useReducer } from 'react'
import OperationReducer from '../reducers/OperationReducer'

const initialState = {
    calc: OperationReducer()
}

const MainReducer = (state, action) => ({
    calc: OperationReducer(state.calc, action)
})

export const OperationContext = createContext()

const localState = JSON.parse(localStorage.getItem('context'))

export const StateProvider = ({children}) => {
    const [state, dispatch] = useReducer(MainReducer, localState || initialState)

    useEffect(()=>{
        localStorage.setItem('context', JSON.stringify(state))
    }, [state])

    return (
        <OperationContext.Provider value={[state, dispatch]}>
            {children}
        </OperationContext.Provider>
    )
}

export const useStateValue = () => useContext(OperationContext)