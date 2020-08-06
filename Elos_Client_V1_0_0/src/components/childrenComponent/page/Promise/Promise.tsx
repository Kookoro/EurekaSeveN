import React from "react";
// function MPromise(this: any, executor) {
//   /**
//    *(1) 构造函数接收一个executor立即执行函数
//     (2) executor立即执行函数接收一个resolve函数
//     (3) promise对象的then方法绑定状态变为fulfilled时的回调
//     (4) resolve函数被调用时会触发then方法中的回调

//      *
//      *
//      *
//      */
//   const self = this;
//   self.status = "pending"; //Promise状态
//   self.data = undefined; //Promise的值
//   self.onResolvedCallback = []; //resolve的回调
//   self.onRejectedCallback = [];
//   //promise状态变为reject时的回调函数集，可能有多个
//   const resolve = (value) => {
//     setTimeout(() => {
//       if (self.status === "pending") {
//         self.status = "fulfilled";
//         self.data = value;
//         for (let i = 0; i < self.onResolvedCallback.length; i++) {
//           self.onResolvedCallback[i](value);
//         }
//       }
//     });
//   };
//   const reject = (reason) => {
//     setTimeout(() => {
//       if (self.status === "pending") {
//         self.status = "rejected";
//         self.data = reason;
//         for (let i = 0; i < self.onRejectedCallback.length; i++) {
//           self.onRejectedCallback[i](reason);
//         }
//       }
//     });
//   };
//   try {
//     executor(resolve, reject);
//   } catch (error) {
//     reject(error);
//   }
// } //构造函数

// //原型方法

// MPromise.prototype.then = (resolve, reject) => {
//   //Promise.then()
//   //then方法返回一个新的promise对象
//   //executor自执行函数中的resolve调用时执行then方法的第一个回调函数onResolved
//   //executor自执行函数中的reject调用时执行then方法的第而个回调函数onRejected

//   const self = this;
//   let promiseNew; //返回一个新的promise对象
//   onResolved =
//     typeof onResolved === "function"
//       ? onResolved
//       : function (value) {
//           return value;
//         };
//   onRejected =
//     typeof onRejected === "function"
//       ? onRejected
//       : function (reason) {
//           throw reason;
//         };
//   if (self.status === "fulfilled") {
//     return (promiseNew = new Promise((resolve, reject) => {
//       try {
//         //
//         const x = onResolved(self.data);
//         if (x instanceof Promise) {
//           x.then(resolve, reject);
//         } else {
//           resolve(x);
//         }
//       } catch (error) {
//         reject(error);
//       }
//     }));
//   }
//   if (self.status === "rejected") {
//     return (promiseNew = new Promise((resolve, reject) => {
//       try {
//         const x = onRejected(self.data);
//         if (x instanceof Promise) {
//           x.then(resolve, reject);
//         } else {
//           resolve(x);
//         }
//       } catch (error) {
//         reject(error);
//       }
//     }));
//   }
//   //promise对象当前状态为pending
//   //此时并不能确定调用onResolved还是onRejected，需要等当前Promise状态确定。
//   //所以需要将callBack放入promiseNew的回调数组中
//   if (self.status === "pending") {
//     return (promiseNew = new Promise((resolve, reject) => {
//       self.onResolvedCallback.push((value) => {
//         try {
//           //
//           const x = onResolved(self.data);
//           if (x instanceof Promise) {
//             x.then(resolve, reject);
//           } else {
//             resolve(x);
//           }
//         } catch (error) {
//           reject(error);
//         }
//       });
//       self.onRejectedCallback.push((value) => {
//         try {
//           //
//           const x = onRejected(self.data);
//           if (x instanceof Promise) {
//             x.then(resolve, reject);
//           } else {
//             resolve(x);
//           }
//         } catch (error) {
//           reject(error);
//         }
//       });
//     }));
//   }
// };
// MPromise.prototype.catch = (onRejected) => {
//   //Promise.catch()
//   return this.then(null, onRejected);
// };

// //静态方法

// MPromise.resolve = () => {};
// MPromise.reject = () => {};

// MPromise.all = () => {};
// MPromise.race = () => {};
