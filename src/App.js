import React, { useState, useEffect } from 'react'
import Maiusculo from '../src/components/Maiusculo'
import Maiusculo2 from '../src/components/Maiusculo2'
import MaiusculoChildren from './components/MaiusculoChildren'
import Soma from './components/Soma'

function App(){
  const [ contador, setContador ] = useState(4)
  const [num1,setNum1 ] = useState('')
  const [num2, setNum2] = useState('')
  const [resultado, setResultado] = useEffect('')
  const [botaoDesabilitado, setBotaoDesabilitado] = useState(true)
   
   useEffect(() => {
     document.title="Calculadora react"
   }, [])


   useEffect(() =>{
     if(parseFloat(num1.trim()) && parseFloat(num2.trim())){
      setResultado(soma(num1, num2))
     }else{
       setResultado('')
     }
   
   }, [])

 {/* function adicionarContador(){
    setContador(contador+1) 
    console.log(`O valor ${contador} foi adicionado`)
  }

  function removerContador(){
    setContador(contador-1) 
    console.log(`O valor ${contador} foi removido`)
  }
*/}
  return (
    <>{/*
      <Maiusculo texto="boa tarde, oi"/>
      <Maiusculo2 texto="fatec itu" cor="#4169E1"/>
      <Maiusculo2 texto="ads" cor="#FF0000"/>
      <MaiusculoChildren>conteúdo do teste</MaiusculoChildren>
    */}
     {/* <div>
        Contador: { contador } <br></br>
        <button onClick= {adicionarContador}> Adicionar </button> <br></br>
        <button onClick= {removerContador}> Remover </button> 
      </div> */}
      <br></br>
      <div>
        <label> Número 1 </label>
        <input type="number" required/><br></br>
        <label> Número 2 </label>
        <input type="number" required/><br></br>
        <button disabled={false}> Somar </button> <br></br>
        <label>Resultado</label>
        <imput type="text" readOly value={resultado} /> <br></br>
        <button disabled={botaoDesabilitado}>Somar</button>
      </div>
    </>
  )
}

export default App