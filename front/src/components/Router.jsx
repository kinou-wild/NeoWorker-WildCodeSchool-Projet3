import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar'
import LandingFreelancer from './freelancer/LandingFreelancer'
import LandingAdmin from './admin/LandingAdmin'
import AdminFreelancerChoose from './AdminFreelancerChoose'
import SidebarController from './SidebarContext'
import HomePageAdmin from './admin/HomePageAdmin'
import HomePageFreelancer from './freelancer/HomePageFreelancer';
import EditHomePageFreelancer from './freelancer/EditHomePageFreelancer';
import CompetencesFreelancer from './freelancer/CompetencesFreelancer';


import MissionCreateAdmin from './admin/MissionCreateAdmin';
import GetAllMissions from './admin/GetAllMissions';
import OneMission from './admin/OneMission'
import UpdateDeleteMission from './admin/UpdateDeleteMission'

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
<<<<<<< HEAD
                        <Route exact path="/neoworker/homepage" component={HomePageFreelancer} />
=======

                        {/* route pour see all missions, create, delete, update */}
                        <Route exact path="/missions" component={GetAllMissions} />
                        <Route exact path="/admin/mission/creer" component={MissionCreateAdmin} />
                        <Route exact path="/mission/see/:id" component={OneMission} />
                        <Route exact path="/updateMission/:id" component={UpdateDeleteMission} />


                        
                        <Route exact path="/freelancer" component={LandingFreelancer} />

                        <Route exact path="/freelancer/homepage" component={HomePageFreelancer} />
                        <Route exact path="/freelancer/editer/:id" component={EditHomePageFreelancer} />
                        <Route exact path="/freelancer/competences/" component={CompetencesFreelancer} />


                        



>>>>>>> antho_tj
                    </Switch>
            </SidebarController>
            </>
        )
    }

export default Router;