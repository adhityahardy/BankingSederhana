// let nama = "udin"

// const uang = 1
// // uang = 2
// console.log(uang)

// namaudin = nama
// console.log(namaudin);

//Nomor 1
// console.log(a[a.length-7])

// console.log(a.push(11,12,13))
// console.log(a.pop())
// console.log(a.shift())
// console.log(a.unshift(20,40))

// Sorting
// console.log(a.sort(function(a,b) {return b-a}))
// let a = [4,2,9,12,2,4,59,31,12]
// function sorting(value){
//     n = a.length;
//     for (let i = 0; i < n-1; i++){
//         for (let j = 0; j < n-1-i; j++){
//             if (value[j] > value[j+1]){
//                 let tmp = value[j];
//                 value[j] = value[j+1];
//                 value[j+1] = tmp;
//             }
//         }
//     }
//     return value
// }
// console.log(sorting(a))

// Reverse
// function rentai(anu){
//     n = a.length
//     for (let i=0; i < n-1; i++){
//         for (let j=0; j < n-1-i; j++){
//             if (anu[j] < anu[j+1]){
//                 let tmp = anu[j];
//                 anu[j] = anu[j+1];
//                 anu[j+1] = tmp
//             }
//         }
//     }
//     return anu
// }
// console.log(rentai(a))


// console.log(a.sort().reverse())

let bulan = "Mei";
let Makanan;

switch (bulan){
    case "Mei":
    Makanan = "mie";
    default:
        Makanan = "soto"

}
console.log(bulan, Makanan)