import React,{useState} from 'react'
import SushiPromo from "../../images/Foods/sushiPromo.jpg"
import {MdClose} from "react-icons/md"
import {motion, AnimatePresence} from "framer-motion"
import {
    Background,
    PopupContainer,
    H1Popup,
    PPopup,
    H2Popup,
    ImgPromo,
    SideDiv,
    IClosePopup,
    BtnPopup,
} from "./PopupElements"

const popupVariants={
    hidden:{
        x: "100vw",
        opacity: 0,
    },
    show:{
        x: "0vw",
        opacity: 1,
        transition: {delay: 3, ease: "easeInOut"}
    }
}

const Popup = () => {
    const [spopup, setPopup]=useState(true)
    return (
        <>
        {spopup && (
            <AnimatePresence exitBeforeEnter>
                <motion.div className="divPopupMotion" variants={popupVariants} initial="hidden" animate="show">
                    <Background>
                        <PopupContainer>
                            <H1Popup>Oferta <br /> Imperdible!</H1Popup>
                            <PPopup>Lleva 2 combos<br/> "Sushi xpress"<br/> a mitad de precio.</PPopup>
                            <H2Popup>50<sup>%</sup><br/>Off</H2Popup>
                            <ImgPromo src={SushiPromo} type="sushiPromo/jpg"/>
                            <IClosePopup onClick={()=>setPopup(false)}><MdClose/></IClosePopup>
                            <BtnPopup>Order now!!</BtnPopup>
                            <SideDiv />
                        </PopupContainer>
                    </Background>
                </motion.div>
            </AnimatePresence>
        )}
            
        </>
    )
}

export default Popup
