import router from '../routes/'
import assert from 'assert'

describe('router', () => {
  describe('get(/)', () => {
    it('', () => {
      const msg = 'mocha'
      assert.equal('Hello ' + msg, router.hello(msg))
    })
  })
})
