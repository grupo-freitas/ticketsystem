import './login.css';

export function Login() {
    return (
        <main>
            <div className="load">
                <div className="spiner"></div>
            </div>

            <section className="container">

                <div className="background">
                    <img src="http://172.15.0.8:3000/uploads/login_bg.svg" alt="login_bg" />
                </div>

                <div className="content">
                    <div className="logo">
                        <h1>Grupo <span>Freitas</span></h1>
                    </div>

                    <form action="/" method="POST">
                        <label for="login">Login</label>
                        <div className="icon-input">
                            <i className="fas fa-user"></i>
                            <input type="login" name="login" />
                        </div>

                        <label for="password">Senha</label>
                        <div className="icon-input">
                            <i className="fas far fa-unlock-alt"></i>
                            <input type="password" name="password" />
                        </div>

                        <button type="submit">Acessar</button>
                    </form>
                </div>
            </section>
        </main>
    )
}