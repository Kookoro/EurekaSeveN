/**
 *
 *  通用方法
 *
 */

export const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  const speed = 3; //动画速度 越小越快

  if (c > 0) {
    /*
        window.requestAnimationFrame() 
        你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个 *回调函数* 作为参数，该回调函数会在浏览器下一次重绘之前执行
      */
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(500, c - c / speed);
  }
};

export const throttle = () => {
  //节流
};

export const debounce = () => {
  //防抖
};

export const timeToSort = (value, type) => {
  const date = new Date(value);
  const year = date.getFullYear();
  let month = date.getMonth() + 1;
  let strDate = 0;
  const hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
  const minutes =
    date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
  const seconds =
    date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
  const seperator1 = "-"; // 连接年月日
  const seperator2 = ":"; // 连接时分秒
  let finMonth = "";
  let finStrDate = "";
  let currentdate = "";
  strDate = date.getDate();
  if (month >= 1 && month <= 9) {
    finMonth = "0" + month;
  } else {
    finMonth = month + "";
  }
  if (strDate >= 0 && strDate <= 9) {
    finStrDate = "0" + strDate;
  } else {
    finStrDate = "" + strDate;
  }
  switch (type) {
    case "yyyy-MM-dd":
      currentdate = year + seperator1 + finMonth + seperator1 + finStrDate;
      break;
    case "hh:mm:ss":
      currentdate = hours + seperator2 + minutes + seperator2 + seconds;
      break;
    case "hh:mm":
      currentdate = hours + seperator2 + minutes;
      break;
    case "yyyy":
      currentdate = year + "";
      break;
    case "MM":
      currentdate = finMonth;
      break;
    default:
      return false;
  }
  return currentdate;
};

export const deepClone = (target) => {
  // 定义一个变量
  let result;
  // 如果当前需要深拷贝的是一个对象的话
  if (typeof target === "object") {
    // 如果是一个数组的话
    if (Array.isArray(target)) {
      result = []; // 将result赋值为一个数组，并且执行遍历
      for (let i in target) {
        // 递归克隆数组中的每一项
        result.push(deepClone(target[i]));
      }
      // 判断如果当前的值是null的话；直接赋值为null
    } else if (target === null) {
      result = null;
      // 判断如果当前的值是一个RegExp对象的话，直接赋值
    } else if (target.constructor === RegExp) {
      result = target;
    } else {
      // 否则是普通对象，直接for in循环，递归赋值对象的所有值
      result = {};
      for (let i in target) {
        result[i] = deepClone(target[i]);
      }
    }
    // 如果不是对象的话，就是基本数据类型，那么直接赋值
  } else {
    result = target;
  }
  // 返回最终结果
  return result;
};
