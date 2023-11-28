// let x = 1
// while (x < 101){
    
//     if (x % 3 === 0){
//     console.log("Buzz")}
//     if (x % 5 === 0){
//         console.log("Fizz")}
//     if (x % 3 === 0 && x % 5 === 0){
//             console.log("Fizz Buzz")}
//     if (x % 3 !== 0 && x % 5 !== 0){
//         console.log(x)
//     }
//     x++
// }
let n = 3
while (n < 51)
 {
    let Prime = true;
    let divisor = 2;
     while (divisor <= Math.sqrt(n)) {
        if (n % divisor === 0) {
            Prime = false;
            break;
        }
        divisor++;
    }
        if (Prime) {
        console.log(n + " Prime");
    }
     n++;
}
