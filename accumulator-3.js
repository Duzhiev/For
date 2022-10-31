const arr = ['HTML', 'Css', 'JavaScript', 'Python', 'Java', 'Node.js', 'PHP', 'Racket', 'C++', 'Bash'];
let accumulator = [];
for (let i = 0; i < arr.length;  i++){
    if (arr[i].length > 3) {
        accumulator.push(arr[i])
    }
}  
console.log(accumulator)