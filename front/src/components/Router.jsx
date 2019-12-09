import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SideBar from './sidebar/Sidebar'

class Router extends React.Component {

    render(){
        return(
            <>
            <SideBar />
            <Switch>
                <Route exact path="/"/>
            </Switch>
            </>
        )
    }
}
export default Router;