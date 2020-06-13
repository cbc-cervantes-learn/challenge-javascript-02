const fibonacci = (n) => {
  const numbers = []
  for(let i = 0; i <= n ; i++){
    if(i > 1){
      let num = numbers[i - 2] + numbers[i - 1]
      numbers.push(num)
    }else{
      numbers.push(i)
    }
  }
  numbers.shift()
  return numbers
}
module.exports = fibonacci;
