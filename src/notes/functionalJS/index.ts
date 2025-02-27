// functions are a more specific concept in FP, as opposed to proceures 
// function => semantic relationship between an input and a computed output

// side effects => indirect inputs and/or indirect outputs
// (any sort of I/O like congolse log or writing to a DB or to the DOM, etc)
// practically spekaing they are unavoidable, seek to minimize them
// when u have to do them, make them very obvious



// Containing side-effects by wrapper (containing lexical scope)
const students = [1,2,3]

function getStudents(students: number[]) {
    // create copy of students in order to protect the original reference outside of this function
    students = students.slice()
    return sortStudents()

    function sortStudents() {
        students.sort( /* ... */ )
        return students
    }
}

getStudents(students)


// unary function (1-in, 1-out)
function increment(x: number) { 
    return x + 1
}
increment(2) // 3

// binary function (2-in, 2-out)
function sum(x:number, y:number) {
    return x+y
}
sum(1,2) // 3


// Higher Order Functions => funtions that take in and/or return functions 
// very useful as adapters

// function unary(fn) {
//    return function one(arg: number) {
//         return fn(arg)
//    } 
// }

// function binary(fn) {
//     return function two(arg1: number, arg2: number) {
//         return fn(arg1, arg2)
//     }
// }

// function f(...args: number[]) {
//     return args
// }

// const g = unary(f)
// const h = binary(f)

// g(1,2,3,4)  // [ 1 ]  (4 values passed in, only 1 used => Adapter)
// h(1,2,3,4)  // [ 1, 2 ] (4 values passed in, only 2 used => Adapter)


const array: number[] = [5, 6];
const elements = [0, 1, 2];

// older JS, does the same thing (apply keyword is the important part in terms of FP concepts)
// array.push.apply(array, elements);  
array.push(...elements)

console.info(array); // [5, 6, 0, 1, 2]



// Composition 
// right to left / inside out execution, just like normal nested function execution
// little general functions building up into a larger, more tailored function
function compose(...funcs: CallableFunction[]): CallableFunction {
    // reverse the list of fns because we have to execute them right to left
    const reversedFuncs: CallableFunction[] = funcs.reverse()
    // final return value is a function, which takes the initial input value
    return function composed(value: number) {
            for (const fn of reversedFuncs) {
            value = fn(value)
        }
        return value;
    }
}

// set of functions that do some individual operations
// notice that the shape of all the functions is the same (1 arg in, 1 arg out)
const add1 = (x:number) => x+1 
const squared = (x:number) => x**2
const minus1 = (x:number) => x-1

// application of the fns, right to left, returning a final function that can be used
const returnedFn = compose(add1, squared, minus1)
const appliedResult = returnedFn(0)
console.log(appliedResult)

// Pipe, same as composed, but left to right
function pipe(...funcs: CallableFunction[]): CallableFunction {
    // final return value is a function, which takes the initial input value
    return function piped(value: number) {
            for (const fn of funcs) {
            value = fn(value)
        }
        return value;
    }
}

// params are in the same order as compose, but the result will be different because they are executed left to right
const returnedPipeFn = pipe(add1, squared, minus1)
const pipeResult = returnedPipeFn(0)
console.log(pipeResult)

