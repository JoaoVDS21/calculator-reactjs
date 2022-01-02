import { Container, ButtonClear } from './styles.js'

import { useStateValue } from '../../contexts/StateContext.js'

// const list = ['6 * 5 = 30', '7 + 5 + 12 = 24']

export default () => {
    const [state, dispatch] = useStateValue()

    const handleButtonClear = () => {
        dispatch({
            type: 'REMOVE_ALL',
        })
    }
    
    return (
        <Container>
            <h3>Histórico de Compras</h3>
            <hr/>
            {state.calc.history.map((item, index)=>(
                <p key={index}>{item}</p>
            ))}
            <ButtonClear onClick={handleButtonClear}>Clear</ButtonClear>
        </Container>
    )
}
