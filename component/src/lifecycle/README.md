//https://segmentfault.com/a/1190000004168886
# 生命周期
React 是一个由虚拟 DOM 渲染成真实 DOM 的过程，这个过程称为组件的生命周期。React 把这个周期划分为三个阶段，每个阶段都提供了 will 和 did 两种处理方式，will 是指发生前，did 是指发生后。
- Mounting：已插入真实 DOM
    - componentWillMount() 在组件挂载之前调用一次
    - componentDidMount() 在组件挂载之后调用一次。这个时候，子主键也都挂载好了，可以在这里使用refs。
- Updating：正在被重新渲染
    - componentWillUpdate(object nextProps, object nextState) 在组件接收到新的props或者state但还没有render时被调用。在初始化时不会被调用。
    - componentDidUpdate(object prevProps, object prevState) 在组件完成更新后立即调用。在初始化时不会被调用。
- Unmounting：已移出真实 DOM
    - componentWillUnmount() 在组件从 DOM 中移除的时候立刻被调用。
    - 这个阶段没有对应的 did 方法
- componentWillReceiveProps(nextProps) 在组件接收到一个新的prop时被调用。这个方法在初始化render时不会被调用。
- shouldComponentUpdate(nextProps, nextState) 组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。默认返回true，需要重新render。在比较复杂的应用里，有一些数据的改变并不影响界面展示，可以在这里做判断，优化渲染效率。

## React 实例化的顺序
1. getDefaultProps
2. getInitialState
3. componentWillMount
4. render
5. componentDidMount

## componentWillMount
该方法在首次渲染之前调用，也是再 render 方法调用之前。修改 state 的最后一次机会。