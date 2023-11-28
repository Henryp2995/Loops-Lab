let x = 1
while (x < 101){
    
    if (x % 3 === 0){
    console.log("Buzz")}
    if (x % 5 === 0){
        console.log("Fizz")}
    if (x % 3 === 0 && x % 5 === 0){
            console.log("Fizz Buzz")}
    else if (x % 3 !== 0 && x % 5 !== 0){
        console.log(x)
    }
    x++
}