import {
  observable,
  action,
  autorun,
  computed
} from "mobx";

class AppState {
  // 装饰器@
  @observable timer = 0;
  @observable price = 0;
  @action
  resetTimer() {
    this.timer = 0;
    this.price = 0;
  }

  @action
  increase() {
    this.timer++;
  }

  @action
  decrease() {
    this.timer--;
  }

  @action
  changePrice(value) {
    this.price = value;
  }

  @computed get totalPrice() {
    return this.timer * this.price;
  }
}
// 将类实例化，后再暴露, 也可以先导出再在组件使用时再实例化
const appState = new AppState();

export default appState;