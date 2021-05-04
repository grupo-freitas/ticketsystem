const signUp = document.querySelector("form")

signUp.addEventListener("submit", async (event) => {
  event.preventDefault()

  const nameError = document.querySelector("#nameError")
  const loginError = document.querySelector("#loginError")
  const passwordError = document.querySelector("#passwordError")
  const passwordConfirmError = document.querySelector("#passwordConfirmError")

  const name = document.querySelector('form input[name="name"]').value
  const login = document.querySelector('form input[name="login"]').value
  const sector = document.querySelector('form input[name="sector"]').value
  const password = document.querySelector('form input[name="password"]').value
  const passwordConfirm = document.querySelector(
    'form input[name="passwordConfirm"]'
  ).value

  let error = true

  if (name.length < 6) {
    document.querySelector(".load").style.display = " none "
    nameError.style.display = "flex"
  } else {
    nameError.style.display = "none"
    error = false
  }

  if (login.length < 6) {
    document.querySelector(".load").style.display = " none "
    loginError.style.display = "flex"
  } else {
    loginError.style.display = "none"
    error = false
  }

  if (password.length < 6) {
    document.querySelector(".load").style.display = " none "
    passwordError.style.display = "flex"
  } else {
    passwordError.style.display = "none"
    error = false
  }

  if (password != passwordConfirm) {
    document.querySelector(".load").style.display = " none "
    passwordConfirmError.style.display = "flex"
  } else {
    passwordConfirmError.style.display = "none"
    error = false
  }

  if (error === false) {
    let data = {
      name,
      login,
      sector,
      password,
      passwordConfirm,
    }

    const url = "http://localhost:3000/signup"

    const api = await fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

    const response = await api.json()

    setTimeout(() => {
      if(response.msg === 'User already exists'){
        loginError.style.display = "flex"
        document.querySelector(".load").style.display = " none "
      } 
      
      if(response.msg === 'ok') {
        window.location.href = "http://localhost:5500/login.html"
      }

    }, 2000)
  }
})
