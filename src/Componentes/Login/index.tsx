import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import "./style.scss";
export default function Login(){
    const main = document.getElementById('main');

    const preventSingUp = () =>{
        main?.classList.add("right-painel-active");
    };

    const preventSingIn = () =>{
        main?.classList.remove("right-painel-active")
    };
    return(
        <>

        <div className="container" id="main">
            <div className="sing-up">
            <form action="#" className="form-container">
            <h1>Criar conta</h1>
            <div className="social-container">
                <a href="#" className="social"><BsFacebook /></a>
                <a href="#" className="social"><BsLinkedin /></a>
                <a href="#" className="social"><BsInstagram /></a>
            </div>
            <p>Criar conta gratis</p>
                <input type="text" placeholder="Nome"/>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <button onClick={preventSingUp} id="signUp">Sing Up</button>
            </form>
            </div>


            <div className="sing-in">
            <form action="#" className="form-container">
            <h1>Entra na conta</h1>
            <div className="social-container">
                <a href="#" className="social"><BsFacebook /></a>
                <a href="#" className="social"><BsLinkedin /></a>
                <a href="#" className="social"><BsInstagram /></a>
            </div>
            <p>Entra na conta</p>
                <input type="email" placeholder="Email"/>
                <input type="password" placeholder="Senha"/>
                <a href="#">esqueçeu sua senha?</a>
                <button onClick={preventSingIn} id="signUp">Sing In</button>
            </form>
            </div>

            <div className="overlay-container">
                <div className="overlay">
                    <div className="overlay-left">
                        <h1>Bem vindo!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur .</p>
                        <button onClick={preventSingIn} id="SingIn"> Sing In</button>
                    </div>
                    <div className="overlay-right">
                        <h1>Olá!</h1>
                        <p>Lorem ipsum dolor sit amet consectetur ?</p>
                        <button onClick={preventSingUp} id="SingUp"> Sing Up</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};