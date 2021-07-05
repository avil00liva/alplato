import React,{useState} from 'react'
import {db} from "../../config/config"
import {FaSearch, FaMapMarkerAlt} from "react-icons/fa"
import HeroImg from "../../images/Foods/bgHero.jpg"
import BtnModal from '../btnform/BtnForm'
import Maps from '../maps'
import Popup from '../popup/Popup'
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
    }
    return (
        <>
            <HeroContainer>
                <HeroBg>
                <ImgBg src={HeroImg} type="bgHero/jpg" />
                </HeroBg>
                <HeroContent>
                        <HeroTitle>Pide lo que quieras y nosotros te lo daremos!!</HeroTitle>
                        <BtnConsulta onClick={()=>setShowModal(true)}>Consulta aquí</BtnConsulta>
                        <BtnLocation onClick={()=>setShowMaps(true)}><Ico2><FaMapMarkerAlt className="mapIco"/></Ico2></BtnLocation>
                        <DivInputBtn>
                            <BusquedaComida type="text" placeholder="Busca en nuestro catálogo..." autoComplete="off" name="comida"></BusquedaComida>
                            <BtnSearch onsubmit="value"><Ico><FaSearch/></Ico></BtnSearch>
                        </DivInputBtn>
                        <form className="formModalHero" onSubmit={Consultas}>
                            <BtnModal showModal={showModal} setShowModal={setShowModal}/>
                            <Maps showMaps={showMaps} setShowMaps={setShowMaps}/>
                        </form>
                        <Popup/>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
