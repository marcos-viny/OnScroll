import { useState } from "react";

import "./styles.scss";

export default function Header(){
    let [abrir, setAbrir] = useState(0);

  function toogle(e:any){
    if(abrir === e ){
setAbrir(0)
    }else{
      setAbrir(e)
    }
  }
    return(
        <>
         <div>
          <div className="bg-yellow-500 p-4 w-full h-20 box-border block">
              {/* <h1 className="text-xl font-bold ">Logo</h1> */}
              <button type="button" className={abrir ? 'iconActive testeActive' : ''} onClick={() => toogle(1)}>
                <div className="Teste-hover">
                <span className="hamburguer">
                    <span className="hamburguer-1">
                    <span className="hamburguer-2">
                    <span className="hamburguer-3"></span>
                    </span>
                    </span>
                </span>
                <span className="teste-1"></span>
                </div>
              </button>
          </div>
          <header className= {`${abrir === 1 ? 'Teste__nav' : "Teste__fechar"}`}>
                  <nav className="nav">
                    <ul className=" bg-gray-600">
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Produtos</a></li>
                      <li><a href="#">Estilos</a></li>
                      <li><a href="#">Comprar</a></li>
                    </ul>
                  </nav>
          </header>
        </div>
        </>
    );
}