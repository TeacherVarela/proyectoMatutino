import React, { useState } from "react"

export function Nombre() {

    const [nombre, setNombre] = useState(" ");

    const name = (e) => {
        setNombre(e.target.value)
    }

    return (
        <>
            <input type="text" value={nombre} onChange={name} placeholder="Ingrese su nombre" />
            <p>Hola, {nombre}</p>
        </>
    )
}
