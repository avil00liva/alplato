import styled from "styled-components"
import {FaTimes} from "react-icons/fa"
import {Link as LinkL} from "react-router-dom"
import {Link as LinkA} from "react-router-dom"

export const SidebarContainer=styled.aside`
    position: fixed;
    z-index: 99999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen})=>(isOpen ? "100%" : "0")};
    top: ${({isOpen})=>(isOpen ? "0" : "-100%")};
`
export const CloseIcon=styled(FaTimes)`
    color: #fff;

`
export const Icon=styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`
export const SidebarWrapper=styled.div`
    color: #fff;

`
export const SidebarMenu=styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 60px);
    }
`
export const LinkAddress=styled(LinkA)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #020202;
        background-color: #05a081;
    }
`
export const ItemConsultas=styled(LinkA)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #020202;
        background-color:#ff5252;
    }
`
export const BtnCerrarSesion=styled.button`
    border-radius: 50px;
    background-color: #cc3300;
    white-space: nowrap;
    margin: 10px;
    display: block;
    //padding: 16px 34px;
    color: #fff;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    font-weight: bold;
    //text-shadow: 1px 1px 2px black;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &:hover{
        background-color: #ff5252;
        transition: 0.2s ease-in-out;
    }
`