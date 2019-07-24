var should = chai.should()

describe('Test FizzBuzz function', function () {
  it('[case 1]input: 21, expect output: Fizz', function () {
    const num = 21
    let result = FizzBuzz(num)
    result.should.be.deep.equal('Fizz')
  })

  it('[case 2]input: 20, expect output: Buzz', function () {
    const num = 20
    let result = FizzBuzz(num)
    result.should.be.deep.equal('Buzz')
  })

  it('[case 3]input: 15, expect output: FizzBuzz', function () {
    const num = 15
    let result = FizzBuzz(num)
    result.should.be.deep.equal('FizzBuzz')
  })

  it(' [case 4]input: 8, expect output: 8', function () {
    const num = 8
    let result = FizzBuzz(num)
    result.should.be.deep.equal(8)
  })

})
