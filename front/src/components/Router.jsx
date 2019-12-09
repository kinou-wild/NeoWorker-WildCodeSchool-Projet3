import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingUser from './user/LandingUser'
import LandingAdmin from './admin/LandingAdmin'
import AdminUserChoose from './AdminUserChoose'



class Router extends React.Component {

    render(){
        return(
            <>
            <Switch>
                <Route exact path="/" component={AdminUserChoose} />
                <Route exact path="/User" component={LandingUser} />
                <Route exact path="/Admin" component={LandingAdmin} />
            </Switch>
            </>
        )
    }
}

export default Router;