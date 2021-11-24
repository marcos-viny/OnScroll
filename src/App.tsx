import Header from "./Componentes/Header/index";
import TesteScroll from "./Componentes/TesteScroll/index";
import Paralax from "./Componentes/Paralax/index";
import Footer from "./Componentes/Footer/index";
import Carrossel from "./Componentes/Carrossel/index";

//Testes Hooks;
import TesteUseState from "./TesteHooks/testeUseState/index";
import TesteUseEffect from "./TesteHooks/TesteUseEffect/index";


 import "./App.scss";

export default function App() {

  return (
    <>
      <div className="Container">
       <Carrossel />
      </div>
    </>
  );
}
