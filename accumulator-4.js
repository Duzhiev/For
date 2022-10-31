const arr = ['Хьумид', 'Муслим', 'Адам', 'Ислам', 'Шарип', 'Артур', 'Байсангур', 'Мохьмад', 'Ибрагим', 'Анзор'];
let accumulator = [];
for (let i = 0; i < arr.length; i++) {
    if(arr[i][0] === 'А') {
        accumulator.push(arr[i])
    }
}
console.log(accumulator)