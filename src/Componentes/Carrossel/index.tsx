import { FaStepBackward, FaStepForward } from "react-icons/fa";
import { useRef } from "react"

import Imagem__1 from "./imagem-1.jpeg";
import Imagem__2 from "./imagem-2.png";
import Imagem__3 from "./imagem-3.jpeg";

import "./styles.scss";

export default function Carrossel(){
    
    const slideshow = useRef(null);

    const seguinte = () =>{
        console.log(slideshow.current);        
  };
    
    const anterior = () =>{
        console.log('anterior');  
    };

    return(
        <>
        <div className="container">
          <div className="containerSlideShow" ref={slideshow}>
            <div className="slide">
               <img src={Imagem__1} alt=""/> 
            </div>

            <div className="slide">
               <img src={Imagem__2} alt=""/> 
            </div>

            <div className="slide">
               <img src={Imagem__3} alt=""/> 
            </div>
          </div>

          <div className="controles">
              <button onClick={anterior}> <FaStepBackward className="icon"/> </button>
              <button onClick={seguinte}> <FaStepForward className="icon"/> </button>
          </div>
        </div>
        </>
    );
};