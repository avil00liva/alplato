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
`
export const NewsDiv=styled.div`
    background-color: #fff;
    width: 80%;
    height: 100%;
    margin: 0rem 6rem;
`
export const H3News=styled.h3`
    display: inline-block;
    margin-bottom: -35px;
    color: #05a081;
    font-weight: bold;
    margin-left: 7px;
    border-bottom: 2px solid #0D816A;
`
export const H1News=styled.h1`
    font-size: 5rem;
    margin-top: 5px;
`
export const PNews=styled.p`
    margin: 8px 9px;
`
export const LinkAddressNews=styled(LinkAN)`
    margin-bottom: 60px;
    background: transparent;
    padding: 10px 50px;
    text-decoration: none;
    color: #0D816A;
    font-weight: bold;
    display: inline-block;
    margin: 30px;
    border: 3px solid #05A081;
    border-radius: 15px;

    &:hover{
        color: #fff;
        background-color: #0D816A;
        border: 3px solid #fff;
        border-radius: 15px;
        transition: .3s;
    }
`
export const SideImg=styled.div`
    background-color: #0D816A;
    background: rgb(67,181,129);
    background: linear-gradient(180deg, rgba(67,181,129,1) 0%, rgba(13,129,106,1) 100%);
    padding: 0;
    height: 500px;
    width: 20%;
    align-items: center;
    justify-content: center;
    position: relative;
`
export const ImgFoodNews=styled.img`
    z-index: 50;
    clip-path: circle();
    position: absolute;
    max-width: 420px;
    margin-left: 521px;
    margin-top: -60px;
`
export const ImgSliderFoodNews=styled.img`
    z-index: 50;
    clip-path: circle();
    position: absolute;
    max-width: 420px;
    margin-left: 721px;
    margin-top: -60px;
`