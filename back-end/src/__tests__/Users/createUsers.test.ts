/* eslint-disable no-undef */
import App from '../../app'
import request from 'supertest'
import createConnection from '../../database'

describe('Users', () => {
  beforeAll(async () => {
    await createConnection()
  })

  it('should be able to create a new User', async () => {
    const response = await request(App).post('/').send({
      name: 'Jest',
      login: 'jest',
      password: '123123',
      passwordConfirm: '123123',
      sector: 'Test'
    })

    expect(response.status).toEqual(201)
  })

  it('shouldnt be able to create a new User', async () => {
    const response = await request(App).post('/').send({
      name: 'Jest',
      login: 'jest',
      password: '123123',
      passwordConfirm: '123123',
      sector: 'Test'
    })

    expect(response.status).toEqual(400)
  })
})
