import styled from "styled-components"

export const HeroContainer=styled.div`
    height: 550px;
    width: 100%;
    margin-top: -5.625rem;
    background-color: cadetblue;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
    //overflow: hidden;
`
export const HeroBg=styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`
export const ImgBg=styled.img`
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`
export const HeroContent=styled.div`
    z-index: 3;
    position: absolute;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
export const HeroTitle=styled.h1`
        font-size: 2.5rem;
        font-weight: bold;
        width: 100%;
        text-align: center;
        margin-bottom: 2em;
        color: #0D816A;
        text-shadow: 1px 1px 2px black;

    @media screen and (max-width: 770px){
            width: 100vw;
            text-align: center;
        }

    @media screen and (max-width: 420px){
        font-size: 2rem;
        width: 100vw;
        text-align: center;
        font-weight: bold;
        margin-bottom: 60px;
        color: #0D816A;
        text-shadow: 1px 1px 2px black;
    }
`
export const BtnConsulta=styled.button`
        text-align: center;
        align-items: center;
        left: 113%;
        top: 100px;
        position: absolute;
        padding: 6px 14px;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #05A081;
        color: #fff;
        border-radius: 50%;
        box-shadow: 1px 4px 2px -2px black;
        text-shadow: 1px 1px 2px black;
        z-index: 20;
    
    &:hover{
        background-color: #0D816A;
        transition: 0.2s ease-in-out;
    }

    @media screen and (max-width: 770px){
        text-align: center;
        left: 90%;
        top: 58%;
        position: absolute;
        padding: 6px 14px;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #05A081;
        color: #fff;
        border-radius: 50%;
        box-shadow: 1px 4px 2px -2px black;
        text-shadow: 1px 1px 2px black;
    }
    @media screen and (max-width: 620px){
        left: 80%;
    }
    @media screen and (max-width: 480px){
        text-align: center;
        left: 70%;
        top: -28%;
        position: absolute;
        padding: 6px 14px;
        border: none;
        cursor: pointer;
        font-size: 1.2rem;
        font-weight: bold;
        background-color: #05A081;
        color: #fff;
        border-radius: 50%;
        box-shadow: 1px 4px 2px -2px black;
        text-shadow: 1px 1px 2px black;
    }
`
export const BtnLocation=styled.button`
    text-align: center;
    position: absolute;
    bottom: -67%;
    left: 30%;
    transform: rotate(270deg);
    padding: 10px 12px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    background-color: #f29900;
    color: #fff;
    border-radius: 50%;
    box-shadow: -1px 0.5px 10px 1px black;
    z-index: 20;
    
    &:hover{
        background-color: #d62e2e;
        transition: 0.2s ease-in-out;
    }
    @media screen and (max-width: 1400px){
        bottom: -100%;
        left: 112%;
    }
    @media screen and (max-width: 720px){
        display: none;
    }
`
export const DivInputBtn=styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 648px;
`
export const BusquedaComida=styled.input`
    width: 40rem;
    height: 3rem;
    font-size: 1rem;
    font-weight: 400;
    border: 1px;
    border-radius: 5px;
    text-indent: 5px;

    &:focus{
        outline: none;
    }
    @media screen and (max-width: 770px){
        width: 35rem;
    }
    @media screen and (max-width: 720px){
        width: 28rem;
        height: 3rem;
        font-size: 1rem;
        font-weight: 400;
        border: 1px;
        border-radius: 5px;
        text-indent: 5px;
    }

    @media screen and (max-width: 420px){
        width: 20rem;
        height: 3rem;
        font-size: 1rem;
        font-weight: 400;
        border: 1px;
        border-radius: 5px;
        text-indent: 5px;
    }
`
export const BtnSearch=styled.button`
        height: 3rem;
        width: 3rem;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        font-size: 19px;
        border: 1px;
        border-radius: 0 5px 5px 0;
        margin-left: 42.5rem;
        position: absolute;
        cursor: pointer;

    &:focus{
        outline: none;
    }
    @media screen and (max-width: 770px){
        margin-left: 32rem;
    }
    @media screen and (max-width: 720px){ 
        height: 3rem;
        width: fit-content;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        font-size: 1.1875rem;
        border: 1px;
        border-radius: 0 5px 5px 0;
        margin-left: 25rem;
        position: absolute;
        cursor: pointer;
    }
    @media screen and (max-width: 420px){
        height: 3rem;
        width: fit-content;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        font-size: 1.1875rem;
        border: 1px;
        border-radius: 0 5px 5px 0;
        margin-left: 17rem;
        position: absolute;
        cursor: pointer;
    }
`
export const Ico=styled.i`
    color: #0D816A;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    width: 3rem;
    height: 1.5rem;
`
export const Ico2=styled.i`
    color: #020202;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    width: 3rem;
    height: 1.5rem;
    font-size: 1.25rem;
`