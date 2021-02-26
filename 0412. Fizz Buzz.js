/**
 * @param {number} n
 * @return {string[]}
 */

const rules = []

var addRule = function(callback, str) {
  rules.push({ callback, str })
}

var getString = function(i) {
  for (const rule of rules) {
    if (rule['callback'](i)) {
      return rule['str']
    }
  }
  return String(i)
}

var fizzBuzz = function(n) {
  addRule(i => !(i % 15), 'FizzBuzz')
  addRule(i => !(i % 3), 'Fizz')
  addRule(i => !(i % 5), 'Buzz')

  const res = []
  for (let i = 1; i <= n; i += 1) {
    res.push(getString(i))
  }
  return res
};