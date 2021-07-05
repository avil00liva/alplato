import styled from "styled-components"


export const BodyClone=styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #1d212b;
`
export const ImgSliderContainer=styled.div`
    position: relative;
    width: 800px;
    height: 500px;
    margin: 10px;
    background-color: #1d212b;
    overflow: hidden;
`
export const Navegacion=styled.div`
    z-index: 2;
    position: absolute;
    display: flex;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%)
`
export const BtnSlider=styled.button`
    background: rgba(255,255,255,0.5);
    width: 12px;
    height: 12px;
    margin: 10px;
    border-radius: 50%;
    cursor: pointer;
`
export const Slide=styled.div`
    z-index: 1;
    position: absolute;
    width: 100%;
`
export const ImgSlider=styled.img`
    z-index: 1;
    width: 100%;
    border-radius: 5px;
`
export const Info=styled.div`
    position: absolute;
    top: 0;
    padding: 15px 30px;
`
export const H2Info=styled.h2`
    color: #fff;
    font-size: 45px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
`
export const PInfo=styled.p`
    color: #fff;
    background-color: rgba(0,0,0,0.1);
    font-size: 16px;
    width: 80%;
    padding: 10px;
    border-radius: 4px;
`