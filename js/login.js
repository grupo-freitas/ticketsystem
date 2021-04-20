const login = document.querySelector('form')

login.addEventListener('submit', async () => {

  const login = document.querySelector('form input[name="login"]').value
  const password = document.querySelector('form input[name="password"]').value

  const loginError = document.querySelector('#loginError')
  const passwordError = document.querySelector('#passwordError')

  let data = {
    login,
    password
  }

  const url = "http://localhost:3000/login"

  const api = await fetch(url, {
    method: "POST",
    headers: {
      'Accept': "application/json",
      'Content-Type': "application/json",
    },
    body: JSON.stringify(data),
  })

  const response = await api.json()

  setTimeout(() =>{
    if(response.msg === 'Login not exists'){
      loginError.style.display = 'flex'
      document.querySelector(".load").style.display = ' none '
    }

    if(response.msg === 'Invalid password'){
      loginError.style.display = 'none'
      passwordError.style.display = 'flex'
      document.querySelector(".load").style.display = ' none '
    }

    if(response.msg === 'ok'){
      const token = `bear ${response.token}`
      window.location.href = "http://localhost:5500/home.html"
      console.log(token)
    }
    
  },1500)

})