import React,{Component} from "react";
import ReactDOM from "react-dom";
import {Provider, connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Route} from 'react-router';
import {ConnectedRouter, push} from 'react-router-redux';

import './common/style/index.css';

import HeadModel from './components/header/Header';

import Body from './components/main/Body';

import FootModel from './components/footer/Footer';
import Kl from './components/kl';

import configureStore, {history} from './reduxes/configureStore';

import {changeAll} from './components/main/BodyRedux';

// import home.js detail.js login.js

// Route home
// Route detail

const store = configureStore(getItem('data'));
console.log(getItem('data') , 'getData');

store.subscribe(()=>{
    localStorage.setItem('data',JSON.stringify(store.getState()));
});

class App extends Component{
  //全选
  allChange = (ev) => {
    let {checked} = ev.target;
    // 发起action
    this.props.actions.changeAll(checked);
  }
  render(){
    let {data, actions:{push} } = this.props;
    // 是否全选
    let all = false;
    //就是全选的结构
    let changeAllComp = null;
    let footer = null;
    // let len = data.length;
    // 决定 全部选择按钮 和 footer 会不会显示
    if(data.length){
      all = data.every(e => e.checked);
      changeAllComp = (
        <input
            className="toggle-all"
            type="checkbox"
            checked = {all}
            onChange = {this.allChange}
          ref = {(elem) => {this.all = elem}}
        />
      )
      footer = (<FootModel/>);
    }
    return (
      <div>
          <HeadModel />
          <section className="main" ref = {(elem)=>{this.main = elem}}>
              {changeAllComp}
              <Body/>
          </section>
          {footer}
          <div
              style={{width: 50, height: 50}}
              onClick={ev=>{
                  // push('/')
                  push('/kl')
              }}
          >todos</div>
      </div>
    )
  }
}

//获取本地的数据，如果本地有数据那么返回本地数据，否则返回[{checked:false,txt:'呵呵',id:1}]
function getItem(data){
  return JSON.parse(localStorage.getItem(data)) || [{checked:false,txt:'呵呵',id:1}];
}
App = connect(
    state => ({data: state.data}),
    dispatch => ({
        actions: bindActionCreators( {changeAll, push } , dispatch)
    })
)(App)
//只会进一次
ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <Route exact path="/" component={App}/>
                <Route path="/kl" component={Kl}/>
                <div
                    style={{width: 50, height: 50}}
                    onClick={ev=>{
                        // push('/')
                        console.log(89);
                        store.dispatch(push({
                            pathname: '/',
                            state: {userName: 'flowke'}
                        }))
                    }}
                >到/</div>
            </div>
        </ConnectedRouter>
    </Provider>
    ,
    document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}
