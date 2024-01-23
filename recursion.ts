const sum = (array: number[]): number => {
  let total: number = 0

  if (!array.length)
    return total

  total = array[0] + sum(array.slice(1,))
  console.log(total)

  return total
}

console.log(sum([1, 2, 3, 4, 5]))
