/*
    路由：
    1安装建议使用yarn（快）；
    npm instaall  yarn -g
    yarn add create-react-app
    yarn create-react-app
    cd my app
    yarn add react-router-dom
    yarn start

然后引入：
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
语法：
  <Router>
    <App />
  </Router>

  <Router>
    <Route path="/" component={组件}/>
  </Router>

  注意：
    Router中只能有一个顶层标签
列子：
ReactDOM.render(
  (
    <Router>
      <div>
        <Route path="/" component={App}/>
        <Route path="/ppa" component={PPA}/>
        <Route path="/ppx" component={PPX}/>
      </div>
    </Router>
  ),
  document.getElementById('app')
)
*/

/*
点击跳转：
例子
class App extends Component {
  render(){
    return (
      <div>
        <button>
          <Link to="/">回到首页</Link>
        </button>
        <p>
          你好,世界!
        </p>
      </div>
    )
  }
}

class PPA extends Component {
  render(){
    return (
      <div>我是PPA!</div>
    )
  }
}
class PPX extends Component {
  render(){
    return (
      <div>
        <div>我是皮皮虾</div>
      </div>
    )
  }
}
    /app
    /ppx


 let arr = [
    {
      name:'app',
      component:<App />
    },
    {
      name:'ppa',
      component:<PPA />
    },
    {
      name:'ppx',
      component:<PPX />
    }
  ]

 let routers = (obj) => {

   /*
    obj里面有：
    history
    match:{
      url:'/app',
      path:'/:id',
      params:{
        id:xx
      }
    }
    location:{
      pathname:当前的地址是什么
    }
  */
 /*
   let {match} = obj;
   let f = null;

   f = arr.find(e=>{
     if(e.name === match.params.id){
       return e;
     }
   });

   console.log(match)

   if(!f){
     return <App />;
   }else{
     return f.component;
   }
 }

ReactDOM.render(
  (
    <Router>
      <div>
      <button>
        <Link to="app">跳转到App</Link>
      </button>
      <button>
        <Link to="ppa">跳转到PPa</Link>
      </button>
      <button>
        <Link to="ppx">跳转到PPx</Link>
      </button>
      <Route path="/:id" component={routers}/>
      </div>
    </Router>
  ),
  document.getElementById('app')
)

 */
