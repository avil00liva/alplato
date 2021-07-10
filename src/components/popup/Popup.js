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
    PopupContent,
    PopupText,
    PopupPic,
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
                            <IClosePopup onClick={()=>setPopup(false)}><MdClose/></IClosePopup>
                            <SideDiv />
                            <H1Popup>Oferta <br /> Imperdible!</H1Popup>
                            <PopupContent>
                                <PopupText>
                                    <PPopup>Lleva 2 combos<br/> "Sushi xpress"<br/> a mitad de precio.</PPopup>
                                    <H2Popup className="h2popup">50<sup>%</sup><br/>Off</H2Popup>
                                </PopupText>
                                <PopupPic>
                                    <ImgPromo src={SushiPromo} type="sushiPromo/jpg"/>
                                    <BtnPopup className="btnpopup">Order now!!</BtnPopup>
                                </PopupPic>
                            </PopupContent>
                        </PopupContainer>
                    </Background>
                </motion.div>
            </AnimatePresence>
        )}
            
        </>
    )
}

export default Popup
