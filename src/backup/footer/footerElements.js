import styled from "styled-components"
import {Link as LinkF} from "react-router-dom"

export const FooterContainer=styled.footer`
    background-color: #292828;
    margin-top: 20px;
`
export const FooterDiv=styled.div`
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(1,1,1,1) 100%);
    color: #43b581;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 95px;
`
export const ListaFooter=styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
export const ListaFooter2=styled.ul`
    list-style: none;
    display: flex;
    justify-content: space-between;
`
export const ItemsFooter=styled.li`
    margin-right: 20px;
`
export const LinkFooter=styled(LinkF)`
    text-decoration: none;
    color: #43b581;
    font-weight: 500;

    &:hover {
        color: #fff;
        transition: 0.2s;
    }
`
export const PCopyRightFooter=styled.p`
    font-weight: 500;
    font-style: italic;
    margin-bottom: 0;
    margin-top: 5px;
    position: relative;
`
export const IFooter=styled.i`
    color: #43b581;
    font-size: 2rem;

    &:hover {
        color: #fff;
        transition: 0.2s;
    }
`