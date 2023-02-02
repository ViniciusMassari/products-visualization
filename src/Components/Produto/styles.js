import styled from "styled-components"


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
    margin-top: 1rem;
}

`

export const ProductInfo = styled.div`
grid-column: 2;
grid-row: 1;
display: flex;
flex-direction: column;

p{
    font: bold 2rem sans-serif;
}

.descricao{
    font-size: 1rem;
}

span{
    font-size: 20px;
    background: #4bf542;
    color: #297a25;
    width: 100px;
    padding: 10px;
    border-radius: 10px;

    &:hover{
        background: #3ac932;
    }

}
`