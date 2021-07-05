import styled from "styled-components"

export const UbicacionContainer=styled.div`
    margin-top: 20px;
    width: 100%;
    height: 350px;
    border-radius: 10px 0 0 10px;
    background-color: #f0f0f0;
    display: none;

    @media screen and (max-width: 770px){
        display: flex;
    }
    @media screen and (max-width: 440px){
        height: 450px;
        flex-flow: column;
        border: none;
    }
`
export const Figcaption=styled.figcaption`
    /*EMPTY*/
`
export const DivThumb=styled.div`
    width: 40%;

    @media screen and (max-width: 440px){
        width: 100%;
        height: 250px;
    }
`
export const ImgTooltip=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px 0 0 10px;
    vertical-align: top;

    @media screen and (max-width: 440px){
        height: 80%;
        border-radius: 0;
    }
`
export const DivInfo=styled.div`
    width: 60%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (max-width: 440px){
        width: 89%;
        margin-top: -50px;
        height: 250px;
    }
`
export const H3Tooltip=styled.h3`
    color: #0D816A;
    font-weight: bold;
    font-size: 3rem;
    text-align: center;
    margin-bottom: -10px;

    @media screen and (max-width: 440px){
        margin-bottom: 20px;
    }
`
export const PTooltip=styled.p`
    color: #707070;

    @media screen and (max-width: 440px){
        margin-bottom: 20px;
    }

`
export const PResumen=styled.p`
    color: #020202;

    @media screen and (max-width: 440px){
        margin-bottom: 20px;
    }

`
export const BtnTooltipContainer=styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 440px){
        margin-bottom: 20px;
    }
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