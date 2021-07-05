import React from 'react'

const iMap=document.querySelector("#iMap");
const tooltip=document.querySelector("#tooltip");

    
export const ShowTooltip=()=>{
    const iMap=document.querySelector("#iMap");
    const tooltip=document.querySelector("#tooltip");
    console.log(tooltip)
    tooltip.classList.toggle('active')
    /*calcPositionTooltip()*/
}
let timer
export const HideTooltip=()=>{
    timer=setTimeout(()=>{tooltip.classList.remove('active')},1000)
}
export const MantenerTooltip=()=>{
    clearTimeout(timer)
}
export const OcultarTooltip=()=>{
    tooltip.classList.remove('active')
}



