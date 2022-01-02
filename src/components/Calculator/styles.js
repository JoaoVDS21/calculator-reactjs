import styled from 'styled-components'

export const Container = styled.div`
    background: #fff;
    border-radius: 5px;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
`

export const Input = styled.input`
    width: 100%;
    height: 40px;
    font-size: 1.1rem;
    // background: #444;
    color: #222;
    border-radius: 5px;
    border: none;
    outline: none;
    text-align: end;
    padding: 10px;
    margin: 0;
`

export const ContainerNumbers = styled.div`
    width: 100%;
    height: calc(100% - 40px - 10px);
    margin-top: 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 10px;
`

export const Number = styled.button`
    background: ${(props)=>{
        if(props.buttonAnswer){
            return '#09f'
        } else if(props.buttonAction){
            return '#999'
        } else {
            return '#cacaca'
        }
    }};
    border: none;
    outline: none;
    border-radius: 5px;
    transition: .25s ease-in-out;

    ${(props)=>props.buttonSpanTwo && 'grid-row: span 2;'}
    ${(props)=>props.buttonSpanThree && 'grid-column: span 3;'}

    &:hover{
        cursor: pointer;
        transform: scale(1.05);
        opacity: .8
    }
`