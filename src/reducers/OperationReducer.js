const initialState = {
    history: []
}

export default (state = initialState, action = {}) => {
    switch(action.type){
        case 'ADD_CALC':
            let history = [...state.history]
            history.push(action.calc)
            return {...state, history}
        break
        case 'REMOVE_ALL':
            let historyClear = []
            return {...state, history: historyClear}
    }

    return state
}
