import React, {useState} from 'react'
import {FaMapMarkerAlt} from "react-icons/fa"
import {AiFillCloseCircle} from "react-icons/ai"
import imgMap from "../../images/map.png"
import imgTooltip from "../../images/Misc/imgTooltipcut.jpg"
import {motion, AnimatePresence} from "framer-motion"
import {
UbicacionContainer,
Figure,
ImgMap,
Figcaption,
IMap,
IClose,
Tooltip,
Thumb,
ImgTooltip,
InfoTooltip,
H3Tooltip,
PTooltip,
PResumen,
BtnTooltipContainer,
BtnTooltip,
} from "./mapsElements"

const mapContainerVariants={
    hidden:{
        x: "100vw",
        opacity: 0,
    },
    show:{
        x: "0vw",
        opacity: 1,
        transition: {delay: 0.4, ease: "easeInOut"}
    }
}


const Maps = ({showMaps,setShowMaps}) => {
    
    const [show, setShow]=useState(false)
    const ToggleSwitch=()=>{
        show ? setShow(false) : setShow(true)
    }
    return (
        <>
            {showMaps && (
                <AnimatePresence exitBeforeEnter>
                    <motion.div className="divMapsPosition" variants={mapContainerVariants} initial="hidden" animate="show">
                        <UbicacionContainer>
                            <Figure>
                                <ImgMap src={imgMap}/>
                                <IClose className="iclose" onClick={()=>setShowMaps(false)}><AiFillCloseCircle /></IClose>
                                <Figcaption>
                                    <IMap id="iMap" onMouseEnter={ToggleSwitch} onMouseLeave={ToggleSwitch}><FaMapMarkerAlt /></IMap>
                                    <Tooltip id="tooltip" className={show ? "active" : null}> 
                                        <Thumb>
                                            <ImgTooltip src={imgTooltip}/>
                                        </Thumb>
                                        <InfoTooltip>
                                            <H3Tooltip>alPlato</H3Tooltip>
                                            <PTooltip>Blvd. San Juan 200 Córdoba, Argentina</PTooltip>
                                            <PResumen>Restaurante de comidas varias con servicio de entrega a domicilio.<br/></PResumen>
                                            <BtnTooltipContainer>
                                                <BtnTooltip>Contacto</BtnTooltip>
                                            </BtnTooltipContainer>
                                        </InfoTooltip>
                                    </Tooltip>
                                </Figcaption>
                            </Figure>
                        </UbicacionContainer>
                    </motion.div>
                </AnimatePresence>
            )}
        </>
    )
}

export default Maps
