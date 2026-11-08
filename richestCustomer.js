
const richestCustomer = (account) => {

    let highestMoney = 0

    for (const customer of account) {

        let highestMoneyCheck = 0
        for (const money of customer) {
            
            highestMoneyCheck += money
            
        }
        highestMoney = Math.max(highestMoneyCheck , highestMoney)
        
    }
    return highestMoney
    

    
}







console.table(richestCustomer([[1, 2, 3], [3, 2, 1]]))             // → 6
console.table(richestCustomer([[1, 5], [7, 3], [3, 5]]))          // → 10
console.table(richestCustomer([[2, 8, 7], [7, 1, 3], [1, 9, 5]]))  // → 17
console.table(richestCustomer([[4]]))                              // → 4
console.table(richestCustomer([[5, -3], [1, 1]]))
console.table(richestCustomer([]))      // ควรได้ 2)                                  // → 0