const hello = require('./hello')

test('says hello with correct title', () => {
  expect(hello.helloMessage()).toMatch(/DevOps/)
})
