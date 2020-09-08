var num = Math.random() * 1000
num = num.toString()
var nume = num.split('.')
var numer = nume[0]
console.log(numer)
console.log(eval(`${numer} + 2`))