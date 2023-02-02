import styled from "styled-components";

export const Container = styled.div`
width: 100%;
display: grid;
grid-template-columns: 1fr 1fr ;
max-width: 650px;
margin: 0 auto;
flex-wrap: wrap;
justify-content: space-between;


img{
    grid-column: 1;
    max-width: 100%;
    width: 300px;
    border-radius: 10px;
}


`
export const ContactInfo = styled.div`
grid-column: 2;




p{
    grid-column: 2;
    font-size: 1.5rem;
    font-weight: bold;
    font-family: sans-serif;
}


ul{
    grid-column: 2;
   margin: 1rem;
}

li{
    font: bold 1.2rem sans-serif;
    margin-top: 5px;
    list-style: none;
    position: relative;


    &::before{
        content: "";
      position: absolute;
      background: #aaa;
     bottom: 0;
      left: -20px;
        width: 20px;
        height: 2px;
    }
}
`
