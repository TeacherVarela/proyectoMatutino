import React, {useState} from "react"

export  function Cajero() {

   const [dinero, setDinero] = useState(1000); 

   const agregar = () => {
     setDinero(dinero + 100);
   }

   const retirar = () => {
    setDinero(dinero - 100);
  }

  return (
    <div>
        <h1>Su saldo es de ${dinero}</h1>
        <button onClick={agregar}>Agregar</button>
        <button onClick={retirar}>Retirar</button>
    </div>
  )
}
