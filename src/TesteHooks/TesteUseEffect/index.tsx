import { useEffect, useState } from "react";

export default function TesteUseEffect(){
    const [couter, setCounter] = useState(0);
    const [name, setName] = useState('');

    function handleMais(){
        setCounter((prevState) => prevState + 1);
    };

    function handleMenos(){
        setCounter((prevState) => prevState -1);
    };

    useEffect(() => {
        console.log('first render');
    },[]);

    useEffect(() => {
        console.log('couter');
    },[couter]);

    useEffect(() => {
        console.log('name');
    },[name]);

    return(
        <>
            <div className="flex justify-center">
                <h1 className="ml-2">{couter}</h1>
                <button className="mx-2" onClick={handleMais}>+</button>
                <button onClick={handleMenos}>-</button>
            </div>

            <div className="justify-center flex mt-10">
                <span>{name}</span>
                <br />
                <input className="bg-red-500 ml-2" type="text" onChange={e => setName(e.target.value)}/>
            </div>
        </>
    );
};

// useEffect(() => {
//     console.log('useTeste', name);
// },[name]);



// useEffect(() => {
//     console.log('useTeste');
//     return () => {
//         console.log('vai desmontar')
//     };
// },[]);