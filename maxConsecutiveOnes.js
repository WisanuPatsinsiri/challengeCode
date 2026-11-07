// LEETCODE EXAM // : HIGHEST STREAK IDIOT

function maxConsecutiveOnes (nums){

    let highestStreak = 0
    let currentStreak = 0
    for (const n of nums) {

        currentStreak += n
        
        if (currentStreak > highestStreak) {
            highestStreak = Math.max(currentStreak , highestStreak)
            // highestStreak = currentStreak 
            
        } else if (n === 0 ){
            currentStreak = 0
        }

        
    }

    return highestStreak 

}


console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1]))  // → 3
console.log(maxConsecutiveOnes([1, 0, 1, 1, 0, 1]))  // → 2
console.log(maxConsecutiveOnes([0, 0, 0]))          // → 0
console.log(maxConsecutiveOnes([]))                  // → 0
console.log(maxConsecutiveOnes([1, 1, 1]))           // → 3