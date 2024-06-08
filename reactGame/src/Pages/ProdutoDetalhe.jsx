import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import CardProduto from "../components/CardProduto"
import api from '../api/api'


const ProdutoDetalhe = () => {
  const { id } = useParams()
  const [cardProduto, SetCardProduto] = useState({})

 

  useEffect(() => {
    getProduto()
  }, [])

  const getProduto = async () => {
    const response = await api.get(`/produto/${id}`)
    SetCardProduto(response.data)
    console.log(response.data)
  }
 
  

  return (
    <>
      <CardProduto
        id={cardProduto.id}
        imgUrl = {cardProduto.imgUrl}
        nome={cardProduto.nome} 
        descricao={cardProduto.descricao} 
        preco={cardProduto.preco}
        categoria={cardProduto.categoria} 
        quantidade= {cardProduto.quantidade}
        gostei={cardProduto.gostei}
        naoGostei={cardProduto.naoGostei}
        avaliacao
        
      />
   


    </>


  )


} 
export default ProdutoDetalhe