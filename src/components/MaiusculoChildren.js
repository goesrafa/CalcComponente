import React from 'react'

function MaiusculoChildren(propos){
    const textoDigitadoo = propos.children
    const textoMaiusculo = textoDigitadoo.toUpperCase()

  return (
    <>
        {textoMaiusculo}
    </>
  )
}
export default MaiusculoChildren