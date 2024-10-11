import React, { useState } from "react"

export function Nombre2() {

  const [nombre, setNombre] = useState(" ");

  const agregarNombre = (e) => {
    setNombre(e.target.value);
  }

  return (
    <div>
      <input type="text" value={nombre} onChange={agregarNombre} placeholder="Ingrese su nombre" />
      <p> {nombre}</p>
    </div>
  )
}
