import { useState } from "react";
import { FaStepBackward, FaStepForward } from "react-icons/fa";
import  SliderData  from "./SliderData";

import "./styles.scss";


export default function Carrossel(){

  const quant = SliderData.length -1;

  const [current, setCurrent] = useState(0);

  const nextSlider = () => {
    setCurrent(current === quant ? 0 : current + 1);
  };

  const prevSlides = () =>{
    setCurrent(current < 1 ? quant -1 : current -1)
  }
  
    return(
        <section className="slider">
          <FaStepBackward className="left-arrow" onClick={prevSlides}/>
          <FaStepForward className="right-arrow" onClick={nextSlider} />
          {SliderData.map((slide:any,index:any) =>{
            return(
              <div className={index === current ? 'slide active' : 'slide'}key={index}>
                {index === current && (<img src={slide.image} alt="" className="image"/>)}
              </div>
            )
          })}
        </section>
    );
};