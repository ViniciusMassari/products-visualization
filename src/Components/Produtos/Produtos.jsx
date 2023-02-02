import React from 'react'
import "../../assets/animation/animation.css"
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'


import {ProductContainer, Product} from "./styles"


const Produtos = () => {
  const [data, setData] = useState([])

 async function fetchdata() {
  const result = await fetch("https://ranekapi.origamid.dev/json/api/produto")
 const resultJson = await result.json()
 setData(resultJson)
  }


  useEffect(() => {
   


  fetchdata()
   
  }, [])

  

  return (
   <>
   <ProductContainer>
    <Helmet>
      <meta  charSet='utf-8'/>
      <title>Ranek | Produtos</title>
    </Helmet>
    {data.map(product =>{
      return <Product key={product.id}>
        <Link to={`produto/${product.id}`}>
          <img src={`${product.fotos[0].src}`} alt="" />
          </Link>
     <p>{product.nome}</p>
      </Product>
    })}
 
   </ProductContainer>
   </>
  )
}

export default Produtos