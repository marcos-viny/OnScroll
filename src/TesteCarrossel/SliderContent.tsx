export default function SliderContent({ activeIndex, sliderImage }:any){
    return (
        <section>
          {sliderImage.map((slide:any, index:any) => (
            <div
              key={index}
              className={index === activeIndex ? "slides active" : "inactive"}
            >
              <img className="slide-image" src={slide.urls} alt="" />
              <h2 className="slide-title">{slide.title}</h2>
              <h3 className="slide-text">{slide.description}</h3>
            </div>
          ))}
        </section>
      );
};