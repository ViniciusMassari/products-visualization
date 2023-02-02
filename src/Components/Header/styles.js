import styled from "styled-components";


export const Container = styled.main`
margin: 0 auto;
box-sizing: border-box;
height: 20vh;
max-width: 650px;
display: flex;
flex-direction: column;
`

 export const Nav = styled.nav`
 margin: 1rem;
 display:  flex;
 justify-content: start;
 align-items: center;
height: 20vh;

`

export const LinkContainer = styled.div`
color: black;
display: flex;
align-items: center ;
font-size: 1.5rem;
margin-right: 1rem;
height:  50px;
background-color: #eee;
border-radius: 10px;

&:hover{
    background-color: #c4c2c2;
}

a{
    text-decoration: none;
    color: black;
    font-family: sans-serif;
    padding: 1.5rem;
    text-align: center;
}
`