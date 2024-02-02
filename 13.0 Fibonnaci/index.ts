// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// export default function fib(n: number): number {
//   let result: number = 0

//   let num1 = 0;
//   let num2 = 1;
//   if (n === 1) {
//     return 1
//   }

//   for (let i = 1; i < n; i++) {
//     result = num1 + num2
//     num1 = num2
//     num2 = result
//     console.log(result, num1, num2)
//   }
//   return result

// }


// export default function fib(n: number): number {

//   let arr: number[] = [0, 1]

//   for (let i = 2; i <= n; i++) {
//     const a = arr[i - 2]
//     const b = arr[i - 1]
//     arr.push(a + b)
//   }
//   return arr[n]

// }

type memoCache = { [key: string]: number }

function memoize(fn: Function) {
  const cache: memoCache = {}

  return function (this: any, ...args: any[]): number {
    const key: string = JSON.stringify(args)
    if (cache[key]) {
      return cache[key]
    }
    const result = fn.apply(this, args)
    cache[key] = result
    return result
  }

}

const fib = memoize(slowFib)
export default fib



function slowFib(n: number): number {
  if (n <= 1) return n

  else {
    return fib(n - 1) + fib(n - 2)
  }
}