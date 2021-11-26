export default function Donts({ activeIndex, onclick, sliderImage }:any){
    return (
        <div className="all-dots">
          {sliderImage.map((index:any) => (
            <span
              key={index}
              className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
              onClick={() => onclick(index)}
            ></span>
          ))}
        </div>
      );
};