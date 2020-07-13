/**
 * ES2017 -async
 * Generator函数的语法糖
 * 相较于function *  和yield async表示函数中带有异步操作，await则表示紧跟在其后的表达式需要等待结果
 * 
 * 内置执行器 async函数自带执行器
 * 语义化更好 async函数直接表示函数里有异步操作，await则表示紧跟在其后的表达式需要等待结果
 * 适用性更广  await函数可以是promise对象以及原始类型的值
 * 返回Promise对象
 * 
 * 
 * async await异步编程终极解决方案  对比promise .then
 *
 * async ====“异步”
 * await(async wait )[可以翻译成异步等待？ ]
 *
 * async 用于声明一个function 表达该function是异步的，而await用于async函数中，目的是等待一个异步方法执行完成 （ajax setTimeOut setInterval等)
 *
 *async函数返回一个Promise对象
 *如果在async函数中返回一个直接的值，那么async会将这个值通过Promise.resolve()包装成一个Promise对象

  async函数返回一个promise对象，其内部函数return的值会作为then方法回调函数的参数。

  实现原理:
  async function fn(args){
    //...
  }
  相当于
  function fn(args){
    return spawn(function* (){
      //...
    })
  }
  //spawn函数==自动执行器。
  //spawn函数
  function spawn(genF){
    return new Promise((reslove,reject)=>{
      let gen = genF();
      function step(nextF){
        try{
          var next = nextF()
        }
        catch(e){
          return reject(e)
        }
        if(next.done) {
          return reslove(next.value)
        }
        Promise.resolve(next.value).then(function(v){
          step(function(){
            return gen.next(v);
          })
        },function(e){
          step(function(){
            return gen.throw(e)
          })
        })
      }
      step(function(){
        return gen.next(undefined);
      })
    })
  }


  /-------------------------------------------------------------------
  async函数返回的Promise对象必须等到内部所有的await命令后面的Promise对象执行完成才会发生状态改变

  除非遇到 return 语句或者 抛出 错误

  这相当于，
  只有在async内部的所有异步函数执行完成后，才会执行then后的回调函数。

  await

  在一般情况下，await命令后面跟了一个Promise对象，如果不是Promise对象，那么会转成一个立即resolve的Promise对象

  async function f(){
    return await '123'
  }
  f().then(v=>console.log(v))//'123'

  同样,await命令后面的Promise对象如果转变为reject，那么reject的参数会被catch方法的回调函数接受
  eg：
  async function f(){
    await Promise.reject('wrong!')
  }
  f()
  .then(v=>console.log(v))
  .catch(v=>console.log(v))//wrong！
  
  只要一个await语句后面的Promise变为reject，那么整个resolve函数都会中断执行

  但很多时候在进行异步操作时，并不希望一个异步操作失败，导致后续异步操作无法执行的情况，即不要阻断后续异步操作，
  那么此时可以：
  1.将await放置在 try...catch语句中 
  
  2.在await后面的Promise对象后添加一个catch方法，处理可能出现的错误



 */
import React from "react";

class AsyncText extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: "hello async!",
    };
  }

  render() {
    const result = this.asyncLearn();
    // async 函数返回的是一个 Promise 对象，所以在最外层不能用 await 获取其返回值的情况下，我们当然应该用原来的方式：then() 链来处理这个 Promise 对象，就像这样、
    result.then((e) => {
      console.log(e);
    });
    this.returnHelloWorld().then((v) => console.log(v)); //helloworld

    //async 内部抛出的错误会导致返回的Promise对象变为reject状态，
    return <div></div>;
  }
  async asyncLearn() {
    return this.state.val;
  }
  async getStockPriceByName() {}

  async returnHelloWorld() {
    return "hello world";
  }
}
export default AsyncText;
/**
 *
 *
 *
 *
 */
