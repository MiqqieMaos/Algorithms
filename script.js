//TASK 1.
function convertFahrToCelcius(f) {
    let c = (f - 32) * 5/9;
    return c.toFixed(4)
}
console.log(convertFahrToCelcius(0)); 





//TASK 2.
function checkYuGiOh(n) {
    for(let x = 1; x <= 10; x++) { 
        if (x % 2 === 0 && x % 3 === 0) {
            console.log('Yu-Gi')
        } else if (x % 2 === 0 && x % 5 === 0) {
            console.log('Yu-Oh')
        } else if (x % 2 === 0) {
            console.log('Yu')
        } else if (x % 3 === 0) {
            console.log('Gi')
        } else if (x % 5 === 0) {
            console.log('Oh')
        } else {
            console.log(x)
        };
    };
    return n
};
console.log(checkYuGiOh()); 
