//组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思

import React from "react";

//组件在概念上类似于JS函数,其接受任意props作为参数,同时返回用于渲染页面得jsx element

//ps : 组件无论是使用函数声明还是class声明,都不能修改自身的props

//react规定,所有React组件都必须保护其props不被更改 eg:

function sum(a, b) {
  return a + b; //纯函数,不会更改a,b的值,且多次调用返回相同结果
}

function sum2(title, name) {
  title.name += name; //该函数更改了其入参title
}

//更新UI界面方法:
/*
    1.ReactDom.render()
    调用ReactDom.render来修改我们想要的渲染的元素,
    ReactDom.render(element,document.getElementById('root'))

*/

/*
    函数组件=>class组件
    1.class XXX extends React.component{
        //添加空render()方法
        render()

    }
    

    class XXX extends React.component{
        constructor(props){
            super(props)
            //属性
        
        }
        this.func = ()=>{
            //方法
        }

        render(){
        return (
                <div>
                    //利用div包裹
                
                </div>
            )
        
        }
            
    }
    添加属性 this.state

class XXX extends React.component{
        constructor(props){
            super(props) // 通过super(props)方法,将props传递到父类构造函数中
            //class组件应该始终使用 props 参数来调用父类的构造函数
            //属性
            this.state = {
                date = new Date(),
                name = '',
            }
        }
        this.func = ()=>{
            //方法
        }

        render(
            return (
                <div>
                    //利用div包裹
                
                </div>

            )
        )
    }
*/
//setState()

/*
    不要直接修改State
    eg:this.state.comment = "你好!"

    而应该使用setState()

    eg:this.setState({comment:'你好'})

    构造函数是唯一可以给this.state赋值的地方


    同时 React可能会把多个setState()合并为一个调用

    考虑到this.props 与this.state可能会异步更新 所以不要依赖其值来更新下一个状态
    否则可能不会出现想要的结果
    eg: this.state({
        counter:this.state.counter + this.props.increment
    })
    j解决

*/

//React 三目运算符
/*
    render(){
        return (
            <div>
            The user is<b>{isLoggedIn?'currently':'not'}</b>logged in
            </div>

        )
    }


    同样也可以用于多个包含多个组件的复杂表达式中
        render(){
            const isLoggedIn = this.state.isLoggedIn
            return (
                <div>
                    {
                      isLoggedIn?<LogoutButton><LogoutButton>
                    }

                </div>
            )
        }
    */

//React 生命周期方法
class XXX extends React.Component<any,any> {
  constructor(props) {
    super(props);
    //属性
  }
  func = () => {
    //方法
  };
  /*
  
                组件生命周期
  class组件中,一般一个组件由extends Component创建,同时提供一个render方法以及多个生命周期方法




  */
  getDefaultPorps() {}
  /**
   * getDefaultPorps只在组件创建时调用一次同时将返回的对象缓存
   * 该方法在实例初始化以前调用,故该方法无法通过this获取该组件实例
   *
   */
  getInitialState() {}
  /**
   * getInitialState()
   * 初始化this.state的值,只在组件装载以前调用唯一一次
   *
   * React在ES6中的实现实际上去掉了getInitialState()这个生命周期函数,改为class组件中state在构造函数constructor里实现
   * eg:
   * Class Test extends React.Component{
   *    constructor(props){
   *        super(props);
   *           this.state={InitialState};
   * }
   * }
   *
   */
  componentWillMount() {}
  componentDidMount() {}
  //销毁
  componentWillUnmount() {}
  //更新
  
  shouldComponentUpdate():any {}
  componentWillUpdate() {} // 更新前
  componentDidUpdate() {} //更新后
  componentWillReceiveProps() {} //接受props前
  render() {
    /**
     * render 必须的生命周期
     * 用于构建组件的html结构的生命周期
     * 或返回null或者false
     *
     */
    return <div></div>;
  }
}
export default XXX;
/*
class 继承

利用extends实现继承 ES5通过修改原型链实现继承，extends相较ES5实现更加清晰方便

class Point{

}
class ColorPoint extends Point{

}







*/
