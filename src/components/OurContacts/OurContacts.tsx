import React from 'react'
import { ContactImage, ContactImageLogo, ImageContainer, OurContactsContainer } from './OurContacts.styled'
import Maks from "../../assets/image/Maksim.png"
import Logo from "../../assets/image/logo_Systems.png"

const OurContacts: React.FC = () => {
  return (
    <OurContactsContainer>
        <ImageContainer>
            <ContactImage src={Maks} alt='foto-schef'/>
            <ContactImageLogo src={Logo} alt='logo' />
        </ImageContainer>
    </OurContactsContainer>
  )
}

export default OurContacts