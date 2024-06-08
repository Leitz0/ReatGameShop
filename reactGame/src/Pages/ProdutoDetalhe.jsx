import { useEffect, useState } from "react"
import { useParams } from "react-router-dom/cjs/react-router-dom.min"
import CardProduto from "../components/CardProduto"
import api from '../api/api'


const ProdutoDetalhe = () => {
  const { id } = useParams()
  const [cardProduto, SetCardProduto] = useState({})

  const refresh = () =>{
    window.location.reload()
  }

  useEffect(() => {
    getProduto()
  }, [])

  const getProduto = async () => {
    const response = await api.get(`/produto/${id}`)
    SetCardProduto(response.data)
    console.log(response.data)
  }
 
  const hadleGosteiClick = async() =>{
  const response = await api.patch (`/produto/${id}`,
    {gostei: gostei + 1}
  )
   if (response.status == '200')
    refresh()
  }

  const hadleNaoGosteiClick = async () =>{
    const response = await api.patch (`/produto/${id}`,
      {naoGostei: naoGostei + 1}
    )
     if (response.status == '200')
      refresh()
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
        
      />
      <p>Gostou do produto?</p>
      <button onClick={hadleGosteiClick}>Sim</button>
      <button onClick={hadleNaoGosteiClick}>Não</button>


    </>


  )


} 
export default ProdutoDetalhe