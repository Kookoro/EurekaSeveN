//组件允许你将 UI 拆分为独立可复用的代码片段，并对每个片段进行独立构思

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
//React 生命周期方法
class XXX extends React.Component {
  constructor(props) {
    super(props);
    //属性
  }
  func = () => {
    //方法
  };
  getDefaultPorps() {}
  getInitialState() {}
  componentWillMount() {}
  componentDidMount() {}
  //销毁
  componentWillUnmount() {}
  //更新
  shouldComponentUpdate() {}
  componentWillUpdate() {} // 更新前
  componentDidUpdate() {} //更新后
  componentWillReceiveProps() {} //接受props前
  render() {
    return;
    <div></div>;
  }
}
export default XXX;
