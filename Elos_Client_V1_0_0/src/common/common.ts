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
