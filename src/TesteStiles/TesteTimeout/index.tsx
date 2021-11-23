import { useState } from "react";

import "./styles.scss";

export default function TesteTimeout(){
    const [numero, setNumero] = useState(0);

    function handleMais(){
        setTimeout(() =>{
            setNumero(numero + 1);
        }, 2000);
    };

    function handleMenos(){
        setNumero(numero - 1);
    };
    return(
        <>

        <div className="flex justify-center">
            <h1>{numero}</h1>
            <button className="ml-4" onClick={handleMais}>+</button>
            <button className="ml-4" onClick={handleMenos}>-</button>
        </div>

        </>
    );
};