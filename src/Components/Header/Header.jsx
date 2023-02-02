import React from 'react'
import { useEffect } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { Container, Nav, LinkContainer } from './styles'





const Header = () => {


  return (<>
   <Container>
    <Nav>
        <LinkContainer>
        {/* <NavLink to={"/"} end ></NavLink> */}
       <Link to={"/"}>Produtos</Link>
        </LinkContainer>
        <LinkContainer>
        {/* <NavLink to={"contato"} ></NavLink> */}
        <Link to={"contato"}>Contato</Link>
        </LinkContainer>
    </Nav>
    <Outlet />
   </Container>

    </>
  )
}

export default Header