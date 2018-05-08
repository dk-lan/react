## Redux 复习总结
在前面三篇 Redux 的教程中已详细提到 Redux 的实现，大概可可以总结以下几点
- Redux 
    - 有`Actions`、`Reducer`、`Store`这三层
    - 通过`createStore(reducer)`得到`store`，换名话说`store`包含了`reducer`的逻辑实现
    - 通过`store.dispath(action)`去调用`reducer`，从而改变`state`
    - 通过`store.getState()`获取在`reducer`改变的`state`
    - Redux 本身与 React 没有并没有半毛线关系
- React
    - 有 `Component`、`state`、`props`三大关键要素
    - 本身通过`setState()`改变`state`从而触发`render`，更新`component`
- react-redux
    - 这是一个第三方模块，它的作用就是本来没有半毛钱关系的 Redux 和 React 关联在一起
    - 它有组件`Provier`和方法`connect`
    - `connect`将 React 的`state`和 Redux 的`actions`合并成一个对象`props`，再将这个对象和`component`生成一个新的组件
    - `Provider`负责将 Redux 的`store`当属性传`connect`的新组件，从面将 React 和 Redux 关联到了一起
    - 当新组件调用`action`的时候，`Provider.store`就会映射调用`reducer`从而改变`state`，当`state`发生改变，就会触发新组件的`render`，重新更新组件。

## 中间件
上面是 React 依赖 Redux 的实现过程，但问题来了，如果项目中有异步请求，根据 Redux 的规则是：
- Action 必须返回一个带有属性`type`的对象
- Reducer 必须是一个纯函数，负责改变`state`  
这样一来，这个异步请求就变得无处安放了，这个时候的解决方案就是需要一个模块，在这个模块中发起 ajax 请求，然后在请求的回调函数中去手动调用`reducer`，而这个发起 ajax 请求的模块就称之为中间件

## 实现
### 结构
|- app.js  
|- src  
|   - components  
|   - datagrid  
|       - datagridcomponent.js  
