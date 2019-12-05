import React from 'react';
import { Switch, Route } from 'react-router-dom';
import SideBar from './sideBar/SideBar'




class Router extends React.Component {

    render(){
        return(
            <>
            <SideBar />
            <Switch>
                <Route exact path="/" component={} />
            </Switch>
            </>
        )
    }
}
export default Router;