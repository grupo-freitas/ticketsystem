import './signin.css';
import { Component } from 'react'

export class Signin extends Component {
  render() {
    return (
      <main>
        <section class="container">
          <div class="content">
            <form action="/" method="POST">
              <label for="login">Nome</label>
              <div class="icon-input">
                <i class="fas fa-user"></i>
                <input type="text" name="name" />
              </div>
              <label for="login">Login</label>
              <div class="icon-input">
                <i class="fas fa-user"></i>
                <input type="text" name="login" />
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
              <p>Já possui uma conta?<span> <a href="/login">clique aqui para acessar.</a></span></p>
            </form>
          </div>

          <div class="info">
            <header>
              <a href="/login">
                <button id="login">Fazer Login</button>
              </a>
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

}