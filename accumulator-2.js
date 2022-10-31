const arr = [-3, -2, -1, 1, 2, 3, 4, 5, 6];
let accumulator = 0;
let i = 0;
while(i < arr.length){
    if (arr[i] > 0){
   accumulator = accumulator + arr[i]
    }
    i++
}
console.log(accumulator)