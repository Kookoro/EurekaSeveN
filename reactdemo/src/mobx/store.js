import { observable, action, computed } from "mobx";

/**
 * React 和 MobX 是一对强力组合。React 通过提供机制把应用状态转换为可渲染组件树并对其进行渲染。而MobX提供机制来存储和更新应用状态供 React 使用。
 *@observable
 *通过使用 @observable 装饰器(ES.Next)来给类属性添加注解。
  @computed
  通过@computed 装饰器或者利用 (extend)Observable 时调用 的getter / setter 函数来进行使用
  可以定义在相关数据发生变化时自动更新的值


  相较于redux对state的强约束 ,mobx借助@observable 来填补了相关不足。


 */
// class TodoList {
//   @observable todos = [];
//   @computed get unfinishedTodoCount() {
//     return this.todos.filter((todo) => !todo.finished).length;
//   }
// }
// class Todo {
//   id = Math.random();
//   @observable title = "";
//   @observable finished = false;
// }

class AppState {
  // 装饰器@
  @observable timer = 0;
  @observable price = 0;
  @action
  resetTimer() {
    //重置计数器
    this.timer = 0;
    this.price = 0;
  }

  @action
  increase() {
    //增加计数器
    this.timer++;
  }

  @action
  decrease() {
    //减少计数器
    this.timer--;
  }

  @action
  changePrice(value) {
    //改变价格
    this.price = value;
  }

  @computed get totalPrice() {
    return this.timer * this.price;
  }
}
// 将类实例化，后再暴露, 也可以先导出再在组件使用时再实例化
const appState = new AppState();

export default appState;
