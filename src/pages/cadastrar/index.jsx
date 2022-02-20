import * as S from './style.js';
import {FakerApi} from '../../services/fakerApi';
import {Link} from 'react-router-dom';
import Logo from '../../logo.png';

export default function SignIn(){

function handleSubmit(e){
    e.preventDefault();
    const nick = e.target.nick.value;
    const first = e.target.name.value;
    const passW = e.target.pass.value
    if(!nick || !first || !passW){
        alert('Preencha todos os campos para se cadastrar.');
        return;
    }
    window.FakerApi.post('/register', {
        name:nick,
        username:first,
        password: passW
    })
    .then(res=> res.success=== true ? redirect() : res);
}

function redirect(){
    alert('Cadastrado com sucesso!');
    window.location.href="/";
}

    return (
        <S.Container>
             <S.Content>
                <img src={Logo} />
            <h1>Cadastro de usuário</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label >Nome</label>
                    <input 
                    type="text" 
                    name="nick" 
                    />
                </div>
                <div>
                    <label>Usuário</label>
                    <input 
                    type="text" 
                    name="name" 
                    />
                </div>
                <div>
                    <label>Senha</label>
                    <input 
                    type="password" 
                    name="pass" 
                     />
                </div>
                <button>Criar conta</button>
            </form>
            <Link to="/">
                Já tem conta? Faça login
            </Link>
            </S.Content>
        </S.Container>
    )
}