import React from 'react'

function Maiusculo({texto}){
    const textoDigitadoo = texto
    const textoMaiusculo = textoDigitadoo.toUpperCase()

  return (
    <>
        {textoMaiusculo}
    </>
  )
}
export default Maiusculo