console.log('lesson 3');

// Event loop
// https://learn.javascript.ru/event-loop
// https://habr.com/ru/company/ruvds/blog/340508/
// https://www.youtube.com/watch?v=8aGhZQkoFbQ
// https://www.youtube.com/watch?v=j4_9BZezSUA

// Promise
// https://learn.javascript.ru/promise-basics
// https://www.youtube.com/watch?v=1idOY3C1gYU


// https://jsonplaceholder.typicode.com/posts/1
// https://habr.com/ru/company/oleg-bunin/blog/417461/?_ga=2.54695343.543933152.1602500664-1040035071.1596811661


// let pr=new Promise((res,rej)=>{
//   let a=10;
//   let b=5;
//   let c=a+b;
//   res(10);//может передовать только один аргумент, если нужно несколько
//   rej(0);//то передаем через массив или обект
// });
// // pr.then(res=>{
// //   console.log(res);
// // })
//
//   //@ts-ignore
// function f(a) {
//   console.log( a);
// }
// pr.then(f);
// [0,1,2,3].forEach(f);

//====================================================================================

// let pr=new Promise((res,rej)=>{
//   let a=10;
//   let b=5;
//   let c=a+b;
//   res(10);//может передовать только один аргумент, если нужно несколько
//   rej(0);//то передаем через массив или обект
// });
// pr.then(res=>{
//   console.log(res);
// },err=>{      //rej=err
//   console.log(err);
// })

//=========================================================================================
//@ts-ignore
// let pr = new Promise((res, rej) => {
//   let a = 10;
//   let b = 5;
//   let c = a + b;
//   // res(c);//может передовать только один аргумент, если нужно несколько
//   // rej(0);//то передаем через массив или обект
//
//   rej(0);//то передаем через массив или обект
//   res(c);//может передовать только один аргумент, если нужно несколько
// });
// pr
//   .then(res => {
//     console.log(res);
//     return 500;
//   }, err => {
//     console.log(err);
//     return 666;
//   })
//   .then(res => {
//     console.log(res);
//   }, err => {
//     console.log(err);
//   })
//    .finally()//Даем понять что это все, но если напишем return-то продолжит
// ;

//==================================================================================
//упрощенный синтаксис
//@ts-ignore
// let pr = new Promise((res, rej) => {
//   let a = 10;
//   let b = 5;
//   let c = a + b;
//   // res(c);//может передовать только один аргумент, если нужно несколько
//   // rej(0);//то передаем через массив или обект
//
//   rej(0);//то передаем через массив или обект
//   res(c);//может передовать только один аргумент, если нужно несколько
// });
//
// pr
//   .then()
//   .catch()
//   .then()
//   .catch()
//   .then()
//   .catch()
//   .finally()






// just a plug
export default () => {
};