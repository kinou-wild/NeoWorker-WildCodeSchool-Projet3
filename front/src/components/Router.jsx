import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingUser from './user/LandingUser'




class Router extends React.Component {

    render(){
        return(
            <>
            <Switch>
                <Route exact path="/" component={LandingUser} />
            </Switch>
            </>
        )
    }
}
export default Router;