import React from 'react'
import {FaMapMarkerAlt} from "react-icons/fa"
import imgTooltip from "../../images/Misc/imgTooltipcut.jpg"
import {
         UbicacionContainer,
         DivThumb,
         ImgTooltip,
         DivInfo,
         H3Tooltip,
         PTooltip,
         PResumen,
         BtnTooltipContainer,
         BtnTooltip,
} 
from './mapresElements'

const Mapres = () => {
    return (
        <UbicacionContainer>
            <DivThumb>
                <ImgTooltip src={imgTooltip}/>
            </DivThumb>
            <DivInfo>
                <H3Tooltip>alPlato</H3Tooltip>
                <PTooltip>Blvd. San Juan 200 Córdoba, Argentina</PTooltip>
                <PResumen>Restaurante de comidas varias con servicio de entrega a domicilio.<br/></PResumen>
                <BtnTooltipContainer>
                    <BtnTooltip>Contacto</BtnTooltip>
                </BtnTooltipContainer>
            </DivInfo>
        </UbicacionContainer>
    )
}

export default Mapres
