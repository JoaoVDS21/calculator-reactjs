import styled from 'styled-components'

export const Container = styled.div`
    background: #222;
    border-radius: 5px;
    padding: 5px 10px;
    color: #fff;
    position: relative;

    h3{
        font-size: .85rem;
        text-align: center;
    }

    hr{
        border: none;
        outline: none;
        height: 1px;
        background: #555;
        width: 70%;
        margin-bottom: 10px;
    }

    p{
        margin: 0;
        padding: 0;
        font-size: .9rem;
        padding-left: 10px;
    }
`

export const ButtonClear = styled.button`
    width: calc(100% - 20px);
    border: none;
    outline: none;
    background: #09f;
    color: #fff;
    padding: 5px 0;
    border-radius: 5px;
    position: absolute;
    bottom: 10px;
    transition: .5s ease-in-out;

    &:hover{
        opacity: .8;
        cursor: pointer;
        transform: scale(1.02)
    }
`