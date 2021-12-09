import { useState } from "react";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";

import "./style.scss";

export default function LOgin(){
    let [abrir, setAbrir] = useState(0)

  function toogle(e: any) {
    if (abrir === e) {
        setAbrir((prevState) => prevState + 0)
    } else {
      setAbrir(e);
    }
  }
    return(
        <div className={`
        flex
        justify-center
        bg-blue-500
        duration-700
        ${abrir === 1  ? "active-1" : ""}`}>
        <div className="container">
            <div className="blueBg">
                <div className="box signin">
                    <h2>Já tem uma conta ?</h2>
                    <button className="signinBtn" onClick={() => toogle(0)}>Sing In</button>
                </div>
                <div className="box signup">
                    <h2>Não tem uma conta?</h2>
                    <button className="signupBtn" onClick={() => toogle(1)}>Sing Up</button>
                </div>
            </div>
            <div className={`formBx ${abrir === 1  ? "active active-2 active-3" : ""}`}>
                <div className="form signinForm">
                    <form action="">
                         <div className="social-container flex justify-center">
                          <a href="#"><BsFacebook className="w-6 h-6 text-blue-400"/></a>
                          <a href="#"><BsLinkedin className="w-6 h-6"/></a>
                          <a href="#"><BsInstagram className="w-6 h-6 text-pink-900"/></a>
                        </div>
                        <h3>Sing In</h3>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                        <input type="submit" value="Login"/>
                        <a href="#" className="forgot">esqueçeu sua senha?</a>
                    </form>
                </div>

                    {/* create conta */}
                <div className="form signupForm">
                    <form action="">
                         <div className="social-container flex justify-center">
                          <a href="#"><BsFacebook className="w-6 h-6 text-blue-400"/></a>
                          <a href="#"><BsLinkedin className="w-6 h-6"/></a>
                          <a href="#"><BsInstagram className="w-6 h-6 text-pink-900"/></a>
                        </div>
                        <h3>Sing Up</h3>
                        <input type="text" placeholder="Nome"/>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Senha"/>
                        <input type="password" placeholder="Confirmar Senha"/>
                        <input type="submit" value="Registrar"/>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};
