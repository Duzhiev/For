const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let m = [];
for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0) {
        m.push(arr[i])
    }
}
console.log(m)

let a = []
let i = 0;
while(i < arr.length){
    if(arr[i] % 2 !== 0){
        a.push(arr[i])
    }
    i++
}
console.log(a)
