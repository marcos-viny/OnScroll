import "./styles.scss";
import { useEffect } from "react";

export default function Footer() {
  function handleScroll() {
    const animatinClass = "animate";
    const allSubMenus: NodeListOf<Element> =
      document.querySelectorAll("[data-animam]");
    const windowTop = window.pageYOffset + window.innerHeight;
    for (const sub of allSubMenus as any) {
      if (windowTop > sub.offsetTop) {
        sub.classList.add(animatinClass);
      }
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="bg-black mx-4">
        <div
          data-animam="top"
          className="mx-4 text-white mb-5 mt-4 relative text-center md:mx-64"
        >
          <div className="flex justify-center text-4xl">
            <h1 className="Text__title mt-20 font-bold">
              MvM
              <span className="Text__span"></span>
            </h1>
          </div>
          <div className="">
            <p>
              Founded in 2013, Rezo Zero is a digital creative agency that
              designs and develops unique brand identities and tailor-made
              digital solutions. Our teams are based in Lyon with an extension
              in Paris, France.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
