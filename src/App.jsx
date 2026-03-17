import {useState} from "react";

export default function App(){


  const [mensagem, setMensagem] = useState("")

  async function buscaCachorro(){
    var retorno = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro?autor=ma", {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      }
    })

    retorno =  await retorno.json()



    console.log(retorno)
  }


  return(
      <>
        <h1>Trabalhando com API's</h1>
        <p>{mensagem}</p>
        <button onClick={buscaCachorro}>Buscar Cachorro</button>
      </>
  )
}