import styled from "styled-components"

export const UbicacionContainer=styled.div`
    width: 100%;
    box-shadow: 5px 5px 60px rgba(0,0,0,0.2);
    font-size: 16px;
`
export const Figure=styled.figure`
    position: relative;
    width: 100%;
`
export const Figcaption=styled.figcaption`
    /*EMPTY*/
`
export const ImgMap=styled.img`
    width: 100%;
    vertical-align: top;
    box-shadow: 5px 5px 60px rgba(0,0,0,0.2);
    border-radius: 5px;
`
export const IMap=styled.i`
    color: #D62E2E;
    position: absolute;
    font-size: 2rem;
    top: 32%;
    left: 35%;
    cursor: pointer;
`
export const IClose=styled.i`
    color: #d62e2e;
    position: absolute;
    right: 5px;
    top: 2px;
    font-size: 27px;
    cursor: pointer;
`
export const Tooltip=styled.div`
    display: flex;
    position: absolute;
    top: -58%;
    left: 11.4%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 5px 5px 60px rgba(0,0,0,0.2);
    width: 31.25em;
    opacity: 0;
    transition: .3s ease all;
    transform: translateY(10px);

    &.active{
        opacity: 1;
        transform: translateY(10px);
        z-index: 200000;
    }
    &::after{
        position: absolute;
        content: "";
        display: inline-block;
        border-left: 15px solid transparent;
        border-right: 15px solid transparent;
        border-top: 15px solid #fff;
        bottom: -15px;
        left: calc(50% - 15px);
    }
`
export const Thumb=styled.div`
    width: 40%;
`
export const ImgTooltip=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    vertical-align: top;
`
export const InfoTooltip=styled.div`
    width: 60%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const H3Tooltip=styled.h3`
    color: #0D816A;
    font-weight: 600;
    margin-bottom: 10px;
`
export const PTooltip=styled.p`
    color: #707070;
    font-size: 12px;
    margin-bottom: 20px;
`
export const PResumen=styled.p`
    color: #020202;
    font-size: 15px;
    margin-bottom: 20px;
`
export const BtnTooltipContainer=styled.div`
    display: flex;
    justify-content: center;
`
export const BtnTooltip=styled.button`
    border: none;
    background-color: #0D816A;
    font-weight: bold;
    padding: 10px 20px;
    width: 80%;
    color: #fff;
    border-radius: 100px;
    cursor: pointer;

    &:hover{
        background-color: #05a081;
        transition: .2s;
    }
`