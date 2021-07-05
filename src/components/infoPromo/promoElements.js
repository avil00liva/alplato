import styled from "styled-components"
import {Link as LinkAN} from "react-router-dom"

export const NewsContianer=styled.div`
    height: 500px;
    width: 100%;
    background-color: #fff;
    position: relative;
    margin-top: 20px;

`
export const SectionNews=styled.section`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 420px){
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
export const NewsDiv=styled.div`
    align-items: stretch;
    text-align: left;
    background-color: #fff;
    margin: 0 20px 0 3rem;

    @media screen and (max-width: 770px){
        margin: 10px 20px 0 3rem;
    }
    @media screen and (max-width: 420px){
        background-color: #fff;
        align-items: center;
        text-align: center;
        width: 80%;
        height: 100%;
        margin: 0rem 6rem;
    }
`
export const H3News=styled.h3`
    display: inline-block;
    margin-top: 0;
    margin-bottom: -35px;
    color: #05a081;
    font-weight: bold;
    margin-left: 7px;
    border-bottom: 2px solid #0D816A;

    @media screen and (max-width: 420px){
        display: inline-block;
        margin-top: 2rem;
        font-size: 1.5rem;
        color: #05a081;
        font-weight: bold;
        margin-left: 7px;
        border-bottom: 2px solid #0D816A;
    }
    
`
export const H1News=styled.h1`
    font-size: 5rem;
    margin-top: 5px;
    
    @media screen and (max-width: 770px){
        width: 1rem;
        font-size: 3rem;
    }
    @media screen and (max-width: 720px){
        display: none;
    }
`
export const PNews=styled.p`
    margin: 8px 9px;

    @media screen and (max-width: 770px){
        font-size: 1rem;
        margin-top: 1rem;
    }
    @media screen and (max-width: 420px){
        margin: -15px 5px 5px;
        font-size: 1.5rem;
        width: 100%;
    }
`
export const LinkAddressNews=styled(LinkAN)`
    margin-bottom: 3.75rem;
    background: transparent;
    padding: 10px 50px;
    text-decoration: none;
    color: #0D816A;
    font-weight: bold;
    display: inline-block;
    border: 3px solid #05A081;
    border-radius: 15px;
    margin: 30px;

    &:hover{
        color: #fff;
        background-color: #0D816A;
        border: 3px solid #fff;
        border-radius: 15px;
        transition: .3s;
    }

    @media screen and (max-width: 420px){
        margin: 10px;
    }
`
export const SideImg=styled.div`
    background-color: #0D816A;
    background: rgb(67,181,129);
    background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);
    padding: 0;
    height: 100%;
    height: 500px;
    width: 20%;
    align-items: center;
    justify-content: center;
    position: relative;

    @media screen and (max-width: 420px){
        background-color: #0D816A;
        background: rgb(67,181,129);
        background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);
        padding: 0;
        height: 100%;
        width: 20%;
        align-items: center;
        justify-content: center;
        position: relative;
    }
`
export const ImgFoodNews=styled.img`
        clip-path: circle();
        position: absolute;
        height: 25rem;
        width: 25rem;
        max-width: 420px;
        left: 65%;
        margin-top: -1.5rem;

    @media screen and (max-width: 420px){
        align-items: center;
        z-index: 50;
        clip-path: circle(100px);
        position: relative;
        width: 18rem;
        height: 18rem;
        margin-top: 0;
    }

`
export const ImgSliderFoodNews=styled.img`
        z-index: 50;
        clip-path: circle();
        position: absolute;
        height: 25rem;
        width: 25rem;
        max-width: 420px;
        left: 65%;
        margin-top: -1.5rem;
    @media screen and (max-width: 770px){
        margin-top: -1rem;
        left: 55%;
        height: 18rem;
        width: 18rem;
    }
    @media screen and (max-width: 420px){
        z-index: 50;
        clip-path: circle(100px);
        position: relative;
        left: auto;
        width: 18rem;
        height: 18rem;
        margin-top: 0;
    }
`