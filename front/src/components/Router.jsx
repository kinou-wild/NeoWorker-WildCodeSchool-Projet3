import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar'
import LandingFreelancer from './freelancer/LandingFreelancer'
import LandingAdmin from './admin/LandingAdmin'
import AdminFreelancerChoose from './AdminFreelancerChoose'
import SidebarController from './sidebar/SidebarContext'



const Router = () => {

        return (
            <>
            <SidebarController> 
                <Sidebar />
                    <Switch>
                        <Route exact path="/" component={AdminFreelancerChoose} />
                        <Route exact path="/freelancer" component={LandingFreelancer} />
                        <Route exact path="/admin" component={LandingAdmin} />
                    </Switch>
            </SidebarController>
                   

            </>
        )
    }

export default Router;