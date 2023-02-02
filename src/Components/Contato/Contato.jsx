import React from 'react'
import { Container,ContactInfo } from '../Contato/styles'
import image from "../../assets/imgs/contato.jpg"
import { Helmet } from 'react-helmet'
import "../../assets/animation/animation.css"


const Contato = () => {
  return (<>
    <Helmet>
      <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
      <title>Ranek | Contato</title>
    </Helmet>
   <Container className='animeLeft'>
    <img src={image} alt="" />
    <ContactInfo>
      <p>Entre em contato</p>
    <ul>
      <li>vinicius@contato.com</li>
      <li>99999-9999</li>
      <li>Rua Logo ali - 99</li>
    </ul></ContactInfo>
    
   </Container>
   </>
  )
}

export default Contato