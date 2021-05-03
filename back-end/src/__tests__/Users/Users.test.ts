/* eslint-disable no-undef */
import App from '../../app'
import request from 'supertest'
import createConnection from '../../database'
import { getConnection } from 'typeorm'

const userData = {
  name: 'Jest',
  login: `jest${Date.now()}`,
  password: '123',
  passwordConfirm: '123',
  sector: 'Test',
  token: ''
}

describe('Users tests ', () => {
  beforeAll(async () => {
    await createConnection()
  })

  afterAll(async () => {
    await getConnection().close()
  })

  it('should be able to create a new User', async () => {
    const response = await request(App).post('/').send(userData)

    expect(response.status).toEqual(201)
  })

  it('shouldnt be able to create a new User', async () => {
    const response = await request(App).post('/').send(userData)

    expect(response.status).toEqual(400)
  })

  it('Should be able to change password', async () => {
    const response = await request(App).post('/changepassword').send(userData)

    expect(response.status).toEqual(201)
  })

  it('should be able to list all users', async () => {
    const response = await request(App).get('/')

    expect(response.status).toEqual(200)
  })

  it('should be able to login', async () => {
    const response = await request(App).post('/login').send(userData)

    userData.token = response.body.token

    console.log(userData)

    expect(response.status).toEqual(200)
  })
})
