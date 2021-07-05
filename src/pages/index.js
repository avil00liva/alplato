import React,{useState} from 'react'
import BtnModal from '../components/btnform/BtnForm'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Cards from '../components/infoCards'
import News from '../components/infoPromo'
import Mapres from '../components/maps/mapres'
import NavBar from "../components/navbar"
import Sidebar from '../components/Sidebar'


const Home = () => {
    const [isOpen, setIsOpen]=useState(false)
    const toggle=()=>{
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <NavBar toggle={toggle}/>
            <Hero />
            <News />
            <Mapres />
            <Cards />
            <Footer />
        </>
    )
}

export default Home
