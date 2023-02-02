import styled from "styled-components";

export const ProductContainer = styled.div`
width: 100%;
display: flex;
max-width: 650px;
margin: 0 auto;
flex-wrap: wrap;
justify-content: space-between;

`

export const Product = styled.div`
display: flex;
flex-direction: column;
width: 200px;
flex-shrink: 0;


img{
    max-width: 100%;
    border-radius: 10px;
}

p{
    font: bold 1.5rem sans-serif;
    margin: 10px;
    text-align: center;
}
`

