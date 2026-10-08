import './Index.scss'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';

export default function Login() {
    const[email,setEmail] = useState("");
    const[senha, setSenha] = useState("");
    const [erro, setErro] = useState('');
    const navigate = useNavigate();
  return (
    <>
    <div className="container-login">
        <div className="login">
            <form>
                <h1><span>M</span>Tarefas</h1>
                <p>Faça seu login para acessar suas lições</p>

                <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder='E-mail' />
                <input type="password" onChange={(e) => setSenha(e.target.value)} placeholder='Senha' />
                <button>Enviar</button>

                <p className='cadastro'>Não tem conta? <span><Link to='/cadastro'>Cadastre-se</Link></span></p>
            </form>
        </div>
    </div>
    </>
  )
}

