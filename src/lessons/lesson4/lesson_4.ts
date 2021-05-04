
//import axios from 'axios';

//////////////////////////////////////////////////////////////////////
// console.log('Dimich');

//@ts-ignore



// console.log('lesson 4');
// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/

// let pr = new Promise((res, rej) => {
//   res();
//   rej();
// });
// pr.then(res=>console.log(res),err=>console.log(err))//res-ok,rej=error
//   .catch(err=>err)//отлавливаем ошибку
//   .finally()//стапэ

// let pr = new Promise((res, rej) => {
//   res('hi!');
//   });
// pr.then(res=>console.log(res),err=>console.log(err))//res-ok,rej=error
//   .catch(err=>err)//отлавливаем ошибку
//   .finally()//стапэ

// setTimeout(()=>console.log(1),0);
// console.log(2);
// (()=>console.log(3))();
// Promise.resolve(console.log(4));
//2 3 4 1

//===========================================================================
// setTimeout(()=>console.log(1),0);
// console.log(2);
// (()=>console.log(3))();
// const p= Promise.resolve(console.log(4));//console.log-это функция, вот она и запустилась
// p.then(res=>{
//   console.log(res);
// })
  //всякая фуекция возвращает что-либо или undefined. Т.к. console.log(4) ничего
  //не возвращает, то выдал undefined
//2 3 4 undefined 1

//===========================================================================

// new Promise((res,rej)=>{
//   console.log(1);
// })
// new Promise((res,rej)=>{
//   setTimeout(()=>console.log(2),0) ;
// })
// Promise.resolve(setTimeout(()=>console.log(3),0));
// console.log(4);
// Promise.reject(console.log(5))

//1 4 5 2 3

//===========================================================================

// (function() {
//   setTimeout(()=>console.log(1),100);
// })();
// console.log(2);
// new Promise((res,rej)=>{
//   setTimeout(()=>console.log(3),50)
// })
// function f() {
//   console.log(4);
// }
// Promise.resolve(console.log(5))

// 2 5 3 1

//===========================================================================

// function f(num:number) {
//   console.log(num);
// }
// Promise.resolve(1)
//   .then(f);
// (function() {
//   console.log(2);
// })();
// console.log(3);
// new Promise((res,rej)=>{
//   console.log(4);
// })
// setTimeout(f,0,5)

// 2 3 4 1 5

//===========================================================================

// console.log(1);
// function f() {
//   console.log(2);
// }
// setTimeout(()=>{
//   console.log(3);
//   let p=new Promise((res,rej)=>{
//     console.log(4);
//     res()
//   })
//   p.then(()=>f())
// },0);
// let l=new Promise((res,rej)=>{
//   console.log(5);
//   rej();
// });
// l.then(res=>console.log(res))
//   .catch(()=>console.log(6))
// console.log(7);

//1 5 7 6 3 4 2

//===========================================================================

//выдает 1 2 3 нужно 3 2 1
// async function sleep(ms:number) {
//   setTimeout(()=>{
//     console.log(ms);
//       },ms*100); //  },ms*(-100));
// }
//
// async function show() {
//   await sleep(3)
//   await sleep(2)
//   await sleep(1)
// }
//
// show();


// async function sleep(ms:number) {
//  return new Promise(async (res)=>{// говорим что у нас внутри еще одна асинхронная функция
//    await   setTimeout(()=>{ //
//      console.log(ms);
//      res();// меняется состояние промиса
//    },ms*100);
//  })
// }
//
// async function show() {
//   await sleep(3);
//   await sleep(2);
//   await sleep(1);
// }
//
// show();


// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль


// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль


// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.

type testObjType={
  promise: null | Promise<any>;
  resolve:null | Function;
  reject: null | Function;
  onSucess: (paramName:string)=>void;
  onError: (paramName:string)=>void;
}

const handlePromise:testObjType={
  promise:null,
  reject: null,
  resolve:null,
  onSucess(paramName:string){
    console.log(`Promise is resolved with data: ${paramName}`)
  },
  onError(paramName:string){
    console.log(`Promise is rejected with error: ${paramName}`)
  }
}

export const createPromise=()=>{
  const somePromise:Promise<any>=new Promise((res,rej)=>{
    handlePromise.resolve=res;
    handlePromise.reject=rej;
  });
  handlePromise.promise=somePromise;
  handlePromise.promise
    .then(res=>handlePromise.onSucess(res))
    .catch(err=>handlePromise.onError(err))
  console.log(handlePromise);
}

export const resolvePromise=()=>{
  handlePromise.resolve && handlePromise.resolve('10');//если все выражения true-возвращается второе
}

export const rejectPromise=()=>{
  handlePromise.reject && handlePromise.reject('0');
}

//@ts-ignore
window.handlePromise=handlePromise








// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.

// const myName:Promise<string>=new Promise((res,rej)=>
//   setTimeout(res,2000,'my name is'))
//
// myName
//   .then(onSuccess)
//   .catch(print)
//
// function print(value:string):void{
//   console.log(value);
// }
//
// function onSuccess(value:string):string{
//   return `${value}Eugene`
// }

// Task 7
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}


// just a plug
export default () => {
};