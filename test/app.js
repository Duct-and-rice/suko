import app from '../app'
// import expect from 'expect'
import request from 'supertest'

describe('router', () => {
    describe('get(/)', () => {
        it('200 OK', (done) => {
            request(app).get('/').expect(200, done)
        })
    })
})
