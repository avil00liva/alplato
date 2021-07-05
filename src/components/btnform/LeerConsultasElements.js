import styled from "styled-components"

export const ConsultasContainer=styled.div`
    margin: 0 auto;
    background-color: #efefefd6;
    width: 80%;
    height: 100%;
    border-radius: 10px;

    @media screen and (max-width: 920px){
        width: 100%;
    }
`
export const Consultas=styled.ul`
    display: flex;
    justify-content: space-between;
    flex-flow: column;
    list-style: none;
    border-bottom: 2px solid #020202;
    margin: 1em;
    padding: 10px;
    text-align: center;
`
export const ConsultaLi=styled.li`
    text-align: center;
    font-weight: bold;
    font-size: 1.5rem;
    color: #2e2e2e;

    @media screen and (max-width: 440px){
        font-size: 18px;

    }
`
export const BtnBorrarConsulta=styled.button`
    padding: 10px;
    margin: 5px;
    border: none;
    border-radius: 5px;
    background-color: #cf0000;
    color: #fff;
    cursor: pointer;
`
export const NombreConsulta=styled.li`

`
export const EmailConsulta=styled.li`

`