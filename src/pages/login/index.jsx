import * as S from './style.js';
import {Link} from 'react-router-dom';
import {FakerApi} from '../../services/fakerApi';
import Logo from '../../logo.png'
export default function LogIn(){

function handleSubmit(e){ 
    e.preventDefault();
    const first = e.target.name.value;
    const passW = e.target.pass.value

    if(!first || !passW) {
        alert('Preencha os campos')
    }

    window.FakerApi.post('/login', {
        username:first,
        password: passW
    })
    .then(res=> res.success === true ? window.location.href="/feed" : '')
}



    return (
        <S.Container>
            <S.Content>
            <img src={Logo} />
            <h1>Faça o login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Usuário</label>
                    <input 
                    type="text" 
                    name="name" 
                    />
                </div>
                <div>
                    <label >Senha</label>
                    <input 
                    type="password" 
                    name="pass" 
                     />
                </div>
                <button>Logar</button>
            </form>
        
            <Link to="/signup">
                Não tem conta? Cadastre-se
            </Link>
            </S.Content>
        </S.Container>
    )
}