import React, { Fragment } from 'react'
import "../../assets/animation/animation.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Container, ProductInfo } from './styles'
import { Bars } from 'react-loading-icons'


const Produto = () => {
const params = useParams()


const [data, setData] = useState({})
const [loading, setLoading] = useState(true)




async function fetchProduct(param) {
  setLoading(true)
 const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${param}`) 
const responseJson = await response.json()
setData(responseJson)
setLoading(false)
}

useEffect(() =>{
 fetchProduct(params.id)
}, [])


if (loading) { 
  return <Container><Bars speed={1} stroke="#333" /></Container> 
} else if(data && !loading){
  return (
    <Container className='animeLeft'>
   {data.fotos.map(foto =>{
    return <img key={foto.titulo} src={foto.src} alt="" />
   })}
   <ProductInfo>
  <p>{data.nome}</p>
  <span>R$ {data.preco}</span>
  <p className="descricao">{data.descricao}</p>
</ProductInfo>
    </Container>
  )

}


}


export default Produto