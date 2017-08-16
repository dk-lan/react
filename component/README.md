
# 组件(Component)
场景：在一个页面上需要显示一个数据列表(datagrid)，可以通过 `ReactDOM.Render(<table></table>)` 渲染出来，如果有 N 个页面需要数据列表呢，这个时候，我们就要把这个数据表列(datgrid)进行封装起来，这种封装起来的对象就叫组件。

## 组件的定义
- 语法 es5： `var ComponentName = React.createClass(options)` 。
- 语法 es6： `class ComponentName extends React.Component{options}`。
- 下面示例中，Component1 为组件名，组件名首字母必须为大写。
- options 为一个对象，其中 render 是必须存在的，函数返回一个虚拟 DOM 节点。
```javascript
//es5
var React = require('react');
var Component1 = React.createClass({
    render: function(){
        return (
            <div>
                <h1>Tom</h1>
                <h1>Sam</h1>
            </div>
        )
    }
})

//es6
import React from 'react';
class Component1 extends React.Component{
    render(){
        return (
            <div>
                <h1>Tom</h1>
                <h1>Sam</h1>
            </div>
        ) 
    }
}
```

## 组件的使用
定义好的组件可以把组件名称当一个 html 标签进行调用。
```javascript
//es5
var React = require('react');
var ReactDOM = require('react-dom');
ReactDOM.render(<Component1 />, document.getElementById('div1'));

//es6
import React from 'react';
import ReactDOM from 'react-dom';
ReactDOM.render(<Component1 />, document.getElementById('div1'));
```
[效果预览](https://dk-lan.github.io/react/component/src/define/define.html)

## 属性(props)
因为组件的调用是 html 标签的形式，而 html 标签是可以添加属性，所以在 React 的组件当中也是可以添加自定义的属性，而属性的获取则用 `this.props`
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
//定义
class Component1 extends React.createClass{
    render(){
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>年龄：{this.props.age}</p>
            </div>
        )
    }
}
//使用
ReactDOM.render(<Component1 name="Tom" age="18"/>, document.getElementById('div1'));
```
### 默认属性(DefaultProps)
组件的属性除了可以通过调用的时候以 DOM 节点属性的方式传值，也可以设置默认的属性值，如果调用的时候没有传对应的属性值，则会用默认的属性值。
`getDefalutProps` 这个方法只会被调用一次。
```javascript
//es5
var React = require('react');
var ReactDOM = require('react-dom');
var Component1 = React.createClass({
    getDefalutProps: function(){
        return {
            name: 'Tom',
            age: 20
        }
    },
    render: function(){
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>年龄：{this.props.age}</p>
            </div>
        )            
    }    
})

//es6
import React from 'react';
import ReactDOM from 'react-dom';
class Component1 extends React.createClass{
    static defalutProps = {
        name: 'Tom',
        age: 20
    }
    render(){
        return (
            <div>
                <h1>姓名：{this.props.name}</h1>
                <h1>年龄：{this.props.age}</h1>
            </div>
        )
    }
}

//使用
ReactDOM.render(<Component1/>, document.getElementById('div1'));
```
### 属性的类型规则(propTypes)
通常情况下，在定义一个组件的时候把属性定义好，会加上一些使用的条件限制，比如某些属性值的数据类型必须是数组，或者某些属性不能为空，在这个时候，可以通过 `propTypes` 来设置。
有定义迷你型规则的组件不需要设置默认属性 `getDefalutProps`。
```javascript
//es5
var React = require('react');
var ReactDOM = require('react-dom');
var Component1 = React.createClass({
    propTypes: {
        name: React.PropTypes.string.isRequired, //属性 name 的值必须为字符串且不能为空
        age: React.PropTypes.number.isRequired, //属性 age 的值必须为数字且不能为空
        subjects: React.PropTypes.array.isRequired //属性 name 的值必须为数组且不能为空
    },
    render: function(){
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>年龄：{this.props.age}</p>
                <p>学科：</p>
                <ul>
                {
                    this.props.subjects.map(function(_item){
                        return <li>{_item}</li>
                    })
                }
                </ul>
            </div>
        )            
    }    
})

//es6
import React from 'react';
import ReactDOM from 'react-dom';
class Component1 extends React.createClass{
    static propTypes = {
        name: React.PropTypes.string.isRequired, //属性 name 的值必须为字符串且不能为空
        age: React.PropTypes.number.isRequired, //属性 age 的值必须为数字且不能为空
        subjects: React.PropTypes.array.isRequired //属性 name 的值必须为数组且不能为空
    }

    render(){
        return (
            <div>
                <p>姓名：{this.props.name}</p>
                <p>年龄：{this.props.age}</p>
                <p>学科：</p>
                <ul>
                {
                    this.props.subjects.map(function(_item){
                        return <li>{_item}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}

//使用
var _subjects = ['语文', '数学', '物理', '化学'];
ReactDOM.render(<Component1 subjects={_subjects}/>, document.getElementById('div1'));
```

### 组件子节点
因为组件的调用是将组件当成一个 DOM 节点使用，所以组件里面可以包含子节点。React 对组件的子节点通过 `this.props.children` 来获取，通常`this.props.children`会有以下几种情况
1. 如果当前组件没有子节点，它就是 undefined
2. 如果有一个子节点，数据类型是 object
3. 如果有多个子节点，数据类型就是 array

为了解决这种数据类型不一致导致在使用的过程中要不断判断的情况，React 提供了一个方法`Reacth.Children`来处理该属性。
```javascript
var Component1 = React.createClass({
    render: function(){
        return (
            <div>                        
                {
                    React.Children.map(this.props.children, function(childNode){
                        return <li>{childNode}</li>
                    })
                }
            </div>
        );
    }
})

ReactDOM.render(
    <Component1>
        <span>Tom</span>
        <span>Sam</span>
    </Component1>, document.getElementById('div1'));
```
[效果预览](https://dk-lan.github.io/react/component/src/props/props.html)

## 事件和 ref
事件可以直接写到 DOM 节点，然后通过 ref 来获取 DOM 节点
```javascript
var Component1 = React.createClass({
    focusHandler: function(){
        this.refs.name.focus();
    },
    render: function(){
        return (
            <div>
                <input type="text" name="name" placeholder="" ref="name"/>
                <input type="button" name="" value="focus" onClick={this.focusHandler} />
            </div>
        );
    }
});
ReactDOM.render(<Component1/>, document.getElementById('div1'));
```
[效果预览](https://dk-lan.github.io/react/component/src/event/event.html)

## state
state 可以理解成 props，不一样的在于 props 是只读的，而 state 是可读写。当 state 发生改变的时候会重新执行 render 方法去渲染整颗 DOM 树，在渲染的过程中会有 diff 算法去计算哪些 DOM 有更新，从而提升性能。
在使用 state　前要先初始化 `getInitialState`
更改 state 一定要用 `setState`
`getInitialState` 该方法在每次 render 时都会被调用一次。
```javascript
//es5
var StateComponent = React.createClass({
    getInitialState: function(){
        return {
            text: ''
        }
    },
    change: function(event){
        this.setState({text: event.target.value});
    },
    render: function(){
        return (
            <div>
                <p><input type="text" onChange={this.change}/></p>
                <p>{this.state.text}</p>
            </div>
        )
    }
}) 

//es6
import React from 'react';
import ReactDOM from 'react-dom';
class Component1 extends React.createClass{
    state = {
        text: ''
    }
    change(event){
        this.setState({text: event.target.value});
    },
    render(){
        return (
            <div>
                <p><input type="text" onChange={this.change}/></p>
                <p>{this.state.text}</p>
            </div>
        )
    }
}
```
[效果预览](https://dk-lan.github.io/react/component/src/state/state.html)