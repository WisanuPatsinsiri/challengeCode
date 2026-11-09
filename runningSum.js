
const runningSum = (data) => {
    
    let result = []
    let indexSum = 0
    for (const loop of data) {
        
            indexSum += loop
            result.push(indexSum)
        }
        return result
    }
    
console.log(runningSum([1, 2, 3, 4]))
console.log(runningSum([1, 1, 1, 1, 1]))
console.log(runningSum([3, 1, 2, 10, 1]))
console.log(runningSum(([])))
