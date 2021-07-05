import styled from "styled-components"
import {Link as LinkL} from "react-router-dom"
import {Link as LinkA} from "react-router-dom"

export const NavContainer=styled.div`
    padding: 4px;
    background-color: #31313123;
    width: 99%;
    height: 80px;
    position: sticky;
    margin-top: 5px;
    z-index: 5;
`
export const Navbar=styled.nav`
    margin-right: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const LinkLogo=styled(LinkL)`
    text-decoration: none;
    color: #fff;
    cursor: pointer;
    font-size: 2rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;
`
export const Lista=styled.ul`
    display: flex;
    list-style: none;
    margin-left: 48%;
`
export const Item=styled.li`
    padding: 20px 12px;
`
export const ItemConsultas=styled(LinkA)`
    color: #f29900;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;

    &:hover {
        border-bottom: 4px solid #ff5252;
        padding: 20px 0;
        transition: 0.1s;
    }
`
export const LinkAddress=styled(LinkA)`
    text-decoration: none;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px black;

    &:hover {
        border-bottom: 4px solid #05a081;
        padding: 20px 0;
        transition: 0.1s;
    }
`
export const BtnCerrarSesion=styled.button`
    margin: 0 0 0 15px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    padding: 10px;
    background-color: #cc3300;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 2px -2px gray;
    text-shadow: 1px 1px 2px black;
    position: absolute;
    margin-left: 150px;

    &:hover{
        background-color: #ff5252;
        transition: 0.5s ease-in-out;
    }
`