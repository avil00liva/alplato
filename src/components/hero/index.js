import React,{useState} from 'react'
import {db} from "../../config/config"
import {FaSearch, FaMapMarkerAlt} from "react-icons/fa"
import { MdClose } from 'react-icons/md'
import {motion, AnimatePresence} from "framer-motion"
import HeroImg from "../../images/Foods/bgHero.jpg"
import BtnModal from '../btnform/BtnForm'
import Maps from '../maps'
import Popup from '../popup/Popup'
import {
    FormModal,
    FormIClose,
    DivForm,
    LabelForm,
    InputForm,
    TextAreaForm,
    LinkBtnForm,
    BtnFormSubmit
} from "../btnform/BtnFormElements"
import {
HeroContainer,
HeroContent,
HeroBg,
ImgBg,
HeroTitle,
BtnConsulta,
BtnLocation,
DivInputBtn,
BusquedaComida,
BtnSearch,
Ico,
Ico2,
} from "./heroElements"

const containerVariants={
    hidden:{
        x: "100vw",
        opacity: 0,
    },
    show:{
        x: "0vw",
        opacity: 1,
        transition: {delay:0.2, ease: "easeInOut"},
    }
}

const Hero = () => {
    const [showModal, setShowModal]=useState(false)
    const [showMaps, setShowMaps]=useState(false)
    
    const [nombre, setNombre]=useState("")
    const [email, setEmail]=useState("")
    const [pregunta, setPregunta]=useState("")
    const [error, setError]=useState("")
    const [consulta, setConsulta]=useState([])

    const Consultas=async (e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            setError("El campo nombre está vacío")
        }
        if(!email.trim()){
            setError("El campo email está vacío")
        }
        if(!pregunta.trim()){
            setError("El campo nombre está vacío")
        }
        const mensaje={
            nombre: nombre,
            email: email,
            pregunta: pregunta,
        }
        try{
            const data=await db.collection("consultas").add(mensaje)
            const {docs}=await db.collection("consultas").get()
            const nuevoArray=docs.map(item=>({id: item.id,...item.data() }))
            setConsulta(nuevoArray)
            console.log("Consulta enviada")
        } catch(e) {
            console.log(e)
        }
        setNombre("")
        setEmail("")
        setPregunta("")
        setShowModal(false)
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                <ImgBg src={HeroImg} type="bgHero/jpg" />
                </HeroBg>
                <HeroContent>
                        <HeroTitle>Pide lo que quieras y nosotros te lo daremos!!</HeroTitle>
                        <BtnConsulta onClick={()=>setShowModal(true)}>?</BtnConsulta>
                        <BtnLocation onClick={()=>setShowMaps(true)}><Ico2><FaMapMarkerAlt className="mapIco"/></Ico2></BtnLocation>
                        <DivInputBtn>
                            <BusquedaComida type="text" placeholder="Busca en nuestro catálogo..." autoComplete="off" name="comida"></BusquedaComida>
                            <BtnSearch onsubmit="value"><Ico><FaSearch/></Ico></BtnSearch>
                        </DivInputBtn>
                        <form onSubmit={Consultas} className="formConsultasContainer">
                            {showModal && (
                                <AnimatePresence exitBeforeEnter>
                                    <motion.FormModal  className="formModal" target="_parent" autoComplete="off" variants={containerVariants} initial="hidden" animate="show">
                                        <FormIClose onClick={()=>setShowModal(false)}><MdClose/></FormIClose>
                                        <DivForm>
                                            <LabelForm htmlFor="">Nombre</LabelForm>
                                            <InputForm type="text" value={nombre} onChange={(e)=>{setNombre(e.target.value)}} autoComplete="off"/>
                                        </DivForm>            
                                        <DivForm>
                                            <LabelForm htmlFor="">Email</LabelForm>
                                            <InputForm type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} autoComplete="off"/>
                                        </DivForm>  
                                        <DivForm>
                                            <LabelForm htmlFor="">Consulta</LabelForm>
                                            <TextAreaForm value={pregunta} onChange={(e)=>{setPregunta(e.target.value)}}></TextAreaForm>
                                        </DivForm>
                                            <BtnFormSubmit to="/">Enviar consulta</BtnFormSubmit> 
                                    </motion.FormModal>
                                </AnimatePresence>
                            )} 
                        </form>
                        <Maps showMaps={showMaps} setShowMaps={setShowMaps}/>
                        <Popup/>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
