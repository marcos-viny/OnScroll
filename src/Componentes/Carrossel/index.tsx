import { useState } from "react";
import { FaStepBackward, FaStepForward } from "react-icons/fa";
import { SliderData } from "./SliderData";


import "./styles.scss";

export default function Carrossel(slides:any){

  const [current, setCurrent] = useState(0);
  const length:any = slides;

  const nextSlider = () => {
    setCurrent(current === -1 ? 0 : + 1);
  };

  const prevSlides = () =>{
    setCurrent(current === 0 ? length -1 : current -1)
  }

  console.log(setCurrent);
  

  if(Array.isArray(slides) || slides <= 0){
    return null
  }

  
    return(
        <section className="slider">
          <FaStepBackward className="left-arrow" onClick={prevSlides}/>
          <FaStepForward className="right-arrow" onClick={nextSlider} />
          {SliderData.map((slide,index) =>{
            return(
              <div className={index === current ? 'slide active' : 'slide'}key={index}>
                {index === current && (<img src={slide.image} alt="" className="image"/>)}
              </div>
            )
          })}
        </section>
    );
};