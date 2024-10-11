import React, {useState} from "react";

export function Dinero() {

    const [nombre, setNombre] = useState(" ");

    const cambiarNombre = (e) => {
        setNombre(e.target.value)
    };

  return (
    <div>
        <input type="text" value={nombre} onChange={cambiarNombre} placeholder="Ingresa tu nombre"/>
        <p>Hola, {nombre}</p>
    </div>
  )
}
