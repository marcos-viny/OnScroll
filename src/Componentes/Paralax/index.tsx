import { useEffect, useState } from "react";

import Imagem from "./imagem-2.jpeg";

import "./styles.scss";

export default function Paralax() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section className="block md:flex justify-center ">
        <div
          className="relative md:absolute"
          style={{ transform: `translateY(-${offsetY * 0.1}px)` }}
        >
          <img className="IMG__teste" src={Imagem} alt="" />
        </div>
        <div className="flex flex-col z-10 mx-4 mb-4 text-center m-0 md:mt-72 md:mb-32">
          <div className="text-center flex flex-col bg-white p-4 mx-10">
            <h1 className="m-4">Closure</h1>
            <h2 className="m-0">
              Your one-stop source of Web Development tricks
            </h2>
          </div>
          <div className="bg-red-400 p-10 text-white m-0 md:mt-10">
            <p>
              <b>1. Like the video.</b> Because it helps me and my channel
            </p>
            <p>
              <b>2. Like the video.</b> To see more content like that!
            </p>
            <p>
              <b>3. Follow the Github link.</b> And play with this code
              yourself!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
