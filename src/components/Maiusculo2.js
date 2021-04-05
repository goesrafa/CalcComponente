import React from 'react'

function Maiusculo2(props){ /*props = propriedades*/ 
    const textoDigitadoo = props.texto
    const corFonte = props.cor
    const textoMaiusculo = textoDigitadoo.toUpperCase()

  return (
    <div style={{color: corFonte}}>{/*Formatação em linha = Inline Styling*/}
        {textoMaiusculo}
    </div>
  )
}
export default Maiusculo2