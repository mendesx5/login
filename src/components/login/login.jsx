import {FaUser, FaLock} from 'react-icons/fa';

import { UserState } from 'react';

import "./login.css";

const Login = () => {

    const [username, SetUsername] = UserState("");
    const [password, setPassword] = UserState("");

    

    return (
        <div className="container">
            <form>
                <h1>Acesse o sistema</h1>
                <div>
                    <input type="email" placeholder="E-mail"/>
                    <FaUser className='icon'/>
                </div>
                <div>
                    <input type="password" placeholder="Passoword"/>
                    <FaLock className='icon'/>
                </div>

                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de mim
                    </label>
                    <a href="">Esqueceu a senha?</a>
                </div>

                <button>Entrar</button>

                <div className="singup-link">
                    <p>
                        Não tem uma conta? <a href="">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login