import { useState } from "react";


export default function TesteUseState(){
    const [numero, setNumero] = useState(0);

    // function handleMais(){
    //     setTimeout(() =>{
    //         setNumero(numero + 1);
    //     }, 2000);
    // };

    function handleMais(){
        setNumero((prevState) => prevState + 1);
    };

    function handleMenos(){
        setNumero((prevState) => prevState - 1);
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