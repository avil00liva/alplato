import styled from "styled-components"

export const HeroContainer=styled.div`
    height: 550px;
    width: 100%;
    margin-top: -90px;
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
    margin-bottom: 60px;
    color: #0D816A;
    text-shadow: 1px 1px 2px black;
`
export const BtnConsulta=styled.button`
    text-align: center;
    align-items: center;
    margin-left: 124.4%;
    position: absolute;
    transform: rotate(270deg);
    padding: 15px 15px 10px 15px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    background-color: #05A081;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 2px -2px grey;
    text-shadow: 1px 1px 2px black;
    z-index: 20;
    
    &:hover{
        background-color: #0D816A;
        transition: 0.2s ease-in-out;
    }
`
export const BtnLocation=styled.button`
    text-align: center;
    align-items: center;
    margin-left: 124.4%;
    margin-top: 290px;
    position: absolute;
    transform: rotate(270deg);
    padding: 15px 15px 10px 15px;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    font-weight: bold;
    background-color: #f29900;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 4px 2px -2px grey;
    text-shadow: 1px 1px 2px black;
    z-index: 20;
    
    &:hover{
        background-color: #d62e2e;
        transition: 0.2s ease-in-out;
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
    margin-left: 680px;
    position: absolute;
    cursor: pointer;

    &:focus{
        outline: none;
    }
`
export const Ico=styled.i`
    color: #0D816A;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    width: 48px;
    height: 24px;
`
export const Ico2=styled.i`
    color: #020202;
    font-weight: bold;
    cursor: pointer;
    text-align: center;
    width: 48px;
    height: 24px;
    font-size: 20px;
`