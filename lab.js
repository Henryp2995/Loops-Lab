let x = 1
while (x < 101){
    
    if (x % 3 === 0){
    console.log("Buzz")}
    if (x % 5 === 0){
        console.log("Fizz")}
    if (x % 3 === 0 && x % 5 === 0){
            console.log("Fizz Buzz")}
    if (x % 3 !== 0 && x % 5 !== 0){
        console.log(x)
    }
    x++}
    // step 1 above
let n = 3
while (n < 51)
 {
    let Prime = true;
    let divisor = 2;
     while (divisor <= Math.sqrt(n)) {
        if (n % divisor === 0) {
            Prime = false;
            break;}
        divisor++;}
        if (Prime) {
        console.log(n + " Prime");}
     n++;
}
// step 2 above

let cell1 = [42, "Bruce", "Knight", 41]
let cell2 = [57, "Bob", "Fry cook", 19]
let cell3 = [63, "Blaine", "Quiz master", 58]
let cell4 = [98, "Bill", "Doc asst", 26]
let cells = [cell1, cell2, cell3, cell4]
for (let i = 0; i < 4; i++){
    console.log(cells[i])
    
}
// step 3 above, you can type console.log(cells[any index number within for loop])
