import React from 'react'
import {FaInstagram,FaTwitter,FaMapMarkerAlt,FaLinkedin} from "react-icons/fa"
import {
FooterContainer,
FooterDiv,
ListaFooter,
ItemsFooter,
LinkFooter,
IFooter,
ListaFooter2,
PCopyRightFooter,
} from "./footerElements"

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterDiv>
                    <ListaFooter>
                        <ItemsFooter><LinkFooter><IFooter><FaInstagram /></IFooter></LinkFooter></ItemsFooter>
                        <ItemsFooter><LinkFooter><IFooter><FaTwitter /></IFooter></LinkFooter></ItemsFooter>
                        <ItemsFooter><LinkFooter><IFooter><FaMapMarkerAlt /></IFooter></LinkFooter></ItemsFooter>
                        <ItemsFooter><LinkFooter><IFooter><FaLinkedin /></IFooter></LinkFooter></ItemsFooter>
                    </ListaFooter>
                    <ListaFooter2>
                        <ItemsFooter><LinkFooter>About us</LinkFooter></ItemsFooter>
                        <ItemsFooter><LinkFooter>Where we are</LinkFooter></ItemsFooter>
                        <ItemsFooter><LinkFooter>Term of Service</LinkFooter></ItemsFooter>
                        <ItemsFooter><LinkFooter>Contact</LinkFooter></ItemsFooter>
                    </ListaFooter2>
                    <PCopyRightFooter>avilo -All rights reserved ©</PCopyRightFooter>
                </FooterDiv>
            </FooterContainer>
        </>
    )
}

export default Footer
