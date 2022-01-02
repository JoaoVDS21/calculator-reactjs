import { useState } from 'react'

import { Container, Input, ContainerNumbers, Number } from './styles.js'

import { useStateValue } from '../../contexts/StateContext'


export default () => {
    const [screen, setScreen] = useState('')
    const [state, dispatch] = useStateValue()
    

    const addOnScreen = (str) => {
        setScreen(screen+str)
        
    }

    const equals = () => {
        let answer = eval(screen)

        dispatch({
            type: 'ADD_CALC',
            calc: `${screen} = ${answer}`
        })

        setScreen(answer)
    }
    

    return (
        <Container>
            <Input value={screen} readOnly/>
            <ContainerNumbers>
                <Number onClick={()=>setScreen('')} buttonAction>C</Number>
                <Number onClick={()=>addOnScreen('/')} buttonAction>/</Number>
                <Number onClick={()=>addOnScreen('*')} buttonAction>*</Number>
                <Number onClick={()=>addOnScreen('-')} buttonAction>-</Number>
                <Number onClick={()=>addOnScreen('7')}>7</Number>
                <Number onClick={()=>addOnScreen('8')}>8</Number>
                <Number onClick={()=>addOnScreen('9')}>9</Number>
                <Number onClick={()=>addOnScreen('+')} buttonSpanTwo buttonAction>+</Number>
                <Number onClick={()=>addOnScreen('4')}>4</Number>
                <Number onClick={()=>addOnScreen('5')}>5</Number>
                <Number onClick={()=>addOnScreen('6')}>6</Number>
                <Number onClick={()=>addOnScreen('1')}>1</Number>
                <Number onClick={()=>addOnScreen('2')}>2</Number>
                <Number onClick={()=>addOnScreen('3')}>3</Number>
                <Number onClick={()=>equals()} buttonSpanTwo buttonAnswer>=</Number>
                <Number onClick={()=>addOnScreen('0')} buttonSpanThree>0</Number>
            </ContainerNumbers>
            
        </Container>
        
        
    )
}
