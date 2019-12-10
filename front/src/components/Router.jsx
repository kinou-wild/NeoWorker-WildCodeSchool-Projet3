import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar'
import LandingUser from './user/LandingUser'
import LandingAdmin from './admin/LandingAdmin'
import AdminUserChoose from './AdminUserChoose'



class Router extends React.Component {

    render(){
        return(
            <>
            <Sidebar />
            <Switch>
                <Route exact path="/" component={AdminUserChoose} />
                <Route exact path="/user" component={LandingUser} />
                <Route exact path="/admin" component={LandingAdmin} />
            </Switch>
            </>
        )
    }
}

export default Router;