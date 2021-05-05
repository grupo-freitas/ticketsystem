import './signin.css';
import { Link } from 'react-router-dom'

export function Signin() {

  const formState = {
    name: '',
    login: '',
    password: '',
    passwordConfirm: ''
  }

  return (
    <main>
      <section class="container">
        <div class="content">
          <form action="/" method="POST">
            <label for="Name">Nome</label>
            <div class="icon-input">
              <i class="fas fa-user"></i>
              <input type="text" name="name" />
            </div>

            <label for="login">Login</label>
            <div class="icon-input">
              <i class="fas fa-user"></i>
              <input type="text" name="login" />
            </div>

            <label for="login">Setor</label>
            <div class="icon-input">
              <select name="sector">
                <option value="ativos">Ativos</option>
                <option value="carrefour">Atacadão / Carrefour</option>
                <option value="riachuelo">Riachuelo</option>
              </select>
            </div>

            <label for="password">Senha</label>
            <div class="icon-input">
              <i class="fas far fa-unlock-alt"></i>
              <input type="password" class="password" name="password" />
            </div>

            <label for="password">Confirmar Senha</label>
            <div class="icon-input">
              <i class="fas far fa-unlock-alt"></i>
              <input type="password" class="password" name="passwordConfirm" />
            </div>

            <button type="submit">Criar Conta</button>
            <p>Já possui uma conta?<span>  <Link to={'/login'}>Acesse agora.</Link></span></p>
          </form>
        </div>

        <div class="info">
          <header>
            <Link to={'/login'}><button id="login">Fazer Login</button></Link>
          </header>

          <footer>
            <h2>Seja bem vindo ao<br />suporte Grupo Freitas</h2>
            <p>Cadastre sua conta para acesssar nosso sistema de suporte. Estamos prontos para atende-lo da melhor forma possível.</p>
          </footer>
        </div>
      </section>
    </main>
  )
}