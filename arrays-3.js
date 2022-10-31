const m = [-3, -2, -1, 1, 2, 3, 4, 5, 6, 7];
let massive = [];
for (let i = 0; i < m.length; i++) {
if (m[i] >= 0) {
    massive.push(m[i])
}
}
console.log(massive)