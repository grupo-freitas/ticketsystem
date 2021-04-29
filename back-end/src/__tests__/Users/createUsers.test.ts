/* eslint-disable no-undef */
import App from '../../app'
import request from 'supertest'
import '../database'

describe('Create Users Test', () => {
  it('should be able to create a new User', async () => {
    const name = 'Gustavo Evaristo'
    const login = 'guevaristo'
    const password = '123@senac'
    const passwordConfirm = '123@senac'
    const sector = 'ti'

    const response = await request(App).post('/').send({
      name,
      login,
      password,
      passwordConfirm,
      sector
    })

    expect(response.status).toBe(200)
  })
})
