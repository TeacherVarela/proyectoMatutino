import React, { useState } from "react";

export function Dinero() {

    const [saldo, setSaldo] = useState(1000);

    const agregar = () => {
        setSaldo(saldo + 100)
    }

    const retiro = () => {
        setSaldo(saldo - 100)
    }

    return (
        <>
            <h1>Saldo Actual ${saldo}</h1>
            <button onClick={agregar}>Agregar</button>
            <button onClick={retiro}>Retirar</button>
        </>
    )
}
