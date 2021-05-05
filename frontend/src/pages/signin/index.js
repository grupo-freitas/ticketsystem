import { Link } from 'react-router-dom'
import { Component } from 'react';

import './signin.css';

export class Signin extends Component {
  constructor(props){
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeLogin = this.changeLogin.bind(this)
    this.changeName = this.changeName.bind(this)
    this.changePassword = this.changePassword.bind(this)
    this.changePasswordConfirm = this.changePasswordConfirm.bind(this)
    this.changeSector = this.changeSector.bind(this)

    this.state = {
      name: '',
      login: '',
      password: '',
      passwordConfirm: '',
      sector: 'Ativos'
    }

  }

  async handleSubmit(event){
    event.preventDefault()

    const url = 'http://172.15.0.8:3001/'

    const api = await fetch(url, {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(this.state),
    })

    const response = await api.json()

    console.log(response)

    setTimeout(() => {
      return window.location.href = "/"
    }, 2500)

  }

  changeName(event){
    this.setState  ({ 
      name: event.target.value
     })
  }

  changeLogin(event){
    this.setState  ({ 
      login: event.target.value
     })
  }

  changePassword(event){
    this.setState  ({ 
      password: event.target.value
     })
  }

  changePasswordConfirm(event){
    this.setState  ({ 
      passwordConfirm: event.target.value
     })
  }

  changeSector(event){
    this.setState  ({ 
      sector: event.target.value
     })
  }

  render(){
    return (
      <main>
        <section className="container">
          <div className="content">
            <form onSubmit={ this.handleSubmit }>
              <label for="Name">Nome</label>
              <div className="icon-input">
                <i className="fas fa-user"></i>
                <input type="text" name="name" onChange={ this.changeName }/>
              </div>
  
              <label for="login">Login</label>
              <div className="icon-input">
                <i className="fas fa-user"></i>
                <input type="text" name="login" onChange={ this.changeLogin } />
              </div>
  
              <label for="login">Setor</label>
              <div className="icon-input">
                <select name="sector" onChange={ this.changeSector }>
                  <option value="ativos">Ativos</option>
                  <option value="carrefour">Atacadão / Carrefour</option>
                  <option value="riachuelo">Riachuelo</option>
                </select>
              </div>
  
              <label for="password">Senha</label>
              <div className="icon-input">
                <i className="fas far fa-unlock-alt"></i>
                <input type="password" className="password" name="password" onChange={ this.changePassword }/>
              </div>
  
              <label for="password">Confirmar Senha</label>
              <div className="icon-input">
                <i className="fas far fa-unlock-alt"></i>
                <input type="password" className="password" name="passwordConfirm" onChange={ this.changePasswordConfirm }/>
              </div>
  
              <button type="submit">Criar Conta</button>
              <p>Já possui uma conta?<span>  <Link to={'/login'}>Acesse agora.</Link></span></p>
            </form>
          </div>
  
          <div className="info">
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
}