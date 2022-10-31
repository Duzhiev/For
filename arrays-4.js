const arr = ['HTML', 'Css', 'JavaScript', 'Python', 'Java', 'Node.js', 'PHP', 'Racket', 'C++', 'Bash'];
let m = [];
// for (let i = 0; i < arr.length;  i++){
//     if (arr[i].length > 3) {
//         m.push(arr[i])
//     }
// }  
// console.log(m)

let i = 0;
while(i < arr.length){
    if (arr[i].length > 3){
        m.push(arr[i])
    }
    i++
}
console.log(m)
