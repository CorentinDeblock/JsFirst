let tab1 = [7, 5, -12, 6, 32, 18, 14, -2]
let tab2 = [-3, 9, 21, 36, 27, 54, 17, 35]
let respond = Math.min(...tab1) + Math.max(...tab2);

console.log(`Plus petite valeur : ${Math.min(...tab1)}`)
console.log(`plus grande valeur : ${Math.max(...tab2)}`)
console.log(`Soustraction : ${respond}`)

let floatBateau = 10.4;
let couleBateau = Math.ceil(floatBateau * -1);
let voieBateau = Math.floor(floatBateau);

console.log(couleBateau);
console.log(voieBateau);

let random = Math.ceil(Math.random() * (100-50) + 50);
console.log(random);

let random2 = Math.random();
console.log(random2)

let random3 = Math.ceil(Math.random() * 10);
console.log(random3);

let arr = ["Goro", "Johnny Cago", "Kano", "Liu Kano", "Raiden", "Reptil", "Scorpion", "Shang Tsun", "Sonya", "Sub-Zero"]
let index = Math.ceil(Math.random() * arr.length);
console.log(arr[index - 1]);