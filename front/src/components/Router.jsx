import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar'
import LandingFreelancer from './freelancer/LandingFreelancer'
import LandingAdmin from './admin/LandingAdmin'
import AdminFreelancerChoose from './AdminFreelancerChoose'
import SidebarController from './SidebarContext'
import HomePageAdmin from './admin/HomePageAdmin'
import HomePageFreelancer from './freelancer/HomePageFreelancer';
import Creation_NeoWorker_Page from './admin/Creation_NeoWorker_Page'

/* ------------------------ Router ---------------------------------- */
const Router = () => {

        return (
            <>
            <SidebarController> {/* Le SidebarController permet de donner l'opportunité à tout les éléments wrapper à l'intérieur de pouvoir utiliser les données, hooks et states associés */}
                <Sidebar />
                    <Switch>
                        <Route exact path="/" component={AdminFreelancerChoose} />
                        <Route exact path="/neoworker" component={LandingFreelancer} />
                        <Route exact path="/admin" component={LandingAdmin} />
                        <Route exact path="/admin/homepage" component={HomePageAdmin} /> 
                        <Route exact path="/admin/createNewNeoworker" component={Creation_NeoWorker_Page} />
                        <Route exact path="/neoworker/homepage" component={HomePageFreelancer} />
                       
                    </Switch>
            </SidebarController>
            </>
        )
    }

export default Router;