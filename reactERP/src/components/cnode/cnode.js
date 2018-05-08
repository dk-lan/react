import React from 'react'
import Datagrid from '../../components/datagrid/datagridcomponent'

export default class CNodeComponent extends React.Component{
    static defaultProps = {
        config: {
            url: 'https://cnodejs.org/api/v1/topics',
            data: {page: 1, limit: 10},
            cols: ['title', 'reply_count', 'top', 'create_at', 'last_reply_at']
        }
    }
    componentDidMount(){
        this.props.router.setRouteLeaveHook(
            this.props.route,
            this.routerWillLeave
        )
    }
    routerWillLeave(){
        return '确认要离开？'
    }
    render(){
        return (
            <div>
                <Datagrid config={this.props.config}/>
            </div>
        )
    }
}