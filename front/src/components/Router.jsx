import React,{useEffect,useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from './sidebar/Sidebar'
import LandingFreelancer from './freelancer/LandingFreelancer'
import LandingAdmin from './admin/LandingAdmin'
import AdminFreelancerChoose from './AdminFreelancerChoose'
import HomePageAdmin from './admin/HomePageAdmin'
import HomePageFreelancer from './freelancer/HomePageFreelancer';
import EditHomePageFreelancer from './freelancer/EditHomePageFreelancer';
import CompetencesFreelancer from './freelancer/CompetencesFreelancer';
import MissionCreateAdmin from './admin/MissionCreateAdmin';
import OneMission from './admin/OneMission'
import UpdateDeleteMission from './admin/UpdateDeleteMission'
import Creation_NeoWorker_Page from './admin/Creation_NeoWorker_Page'
import MissionsListe from './admin/MissionsListe';
import jwt_decode from 'jwt-decode'

/* ------------------------ Router ---------------------------------- */
const Router = () => {
    const [profileHooks, setProfileHooks] = useState({
        email: '',
        password: '',
        role: '',
        errors: {}
    })

    //décoder le token
    useEffect(() => {
        const token = localStorage.usertoken
        if (token) {
            const decoded = jwt_decode(token)
            setProfileHooks({
                email: decoded.email,
                password: decoded.password,
                role: decoded.role
            })
        }
    }, [])

 


        return (
            <>
            
                <Sidebar/>
                    <Switch>
                        <Route exact path="/" 
                        component={
                            profileHooks.role==''
                            ?AdminFreelancerChoose:localStorage.usertoken 
                            && profileHooks.role=='admin'
                            ?HomePageAdmin:localStorage.usertoken 
                            && profileHooks.role=='neoworker'
                            ?HomePageFreelancer:''}/>

                        <Route exact path="/neoworker" 
                            component={profileHooks.role==''
                            ?LandingFreelancer:localStorage.usertoken 
                            && profileHooks.role=='neoworker'
                            ?HomePageFreelancer
                            :localStorage.usertoken 
                            && profileHooks.role=='admin'
                            ?HomePageAdmin:''} />

                        <Route exact path="/admin" //marche pas en admin
                        component={profileHooks.role==''
                        ?LandingAdmin
                        :localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?HomePageAdmin:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?HomePageFreelancer:''} />

                        <Route exact path="/admin/homepage" 
                        component={profileHooks.role==''
                        ?LandingAdmin:localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?HomePageAdmin:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?HomePageFreelancer:''} /> 
                        
                        <Route exact path="/admin/neoworker/creer" 
                        component={profileHooks.role==''
                        ?LandingAdmin:localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?Creation_NeoWorker_Page:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?HomePageFreelancer:''} />

                        <Route exact path="/neoworker/homepage" 
                        component={profileHooks.role==''
                        ?LandingFreelancer:localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?HomePageAdmin:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?HomePageFreelancer:''} />

                        {/* route pour see all missions, create, delete, update */}
                        <Route exact path="/admin/missions" 
                        component={profileHooks.role==''
                        ?LandingAdmin:localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?MissionsListe:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?HomePageFreelancer:''} />

                        <Route exact path="/admin/mission/creer" 
                        component={profileHooks.role==''
                        ?LandingAdmin:localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?MissionCreateAdmin:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?HomePageFreelancer:''} />

                        <Route exact path="/mission/see/:id" 
                        component={profileHooks.role==''
                        ?LandingAdmin:localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?OneMission:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?HomePageFreelancer:''} />

                        <Route exact path="/updateMission/:id" 
                        component={profileHooks.role==''
                        ?LandingAdmin:localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?UpdateDeleteMission:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?HomePageFreelancer:''} />

                        <Route exact path="/neoworker/editer/:id" 
                        component={profileHooks.role==''
                        ?LandingFreelancer:localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?HomePageAdmin:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?EditHomePageFreelancer:''} />


                        <Route exact path="/neoworker/competences/" 
                        component={profileHooks.role==''
                        ?LandingFreelancer:localStorage.usertoken 
                        && profileHooks.role=='admin'
                        ?HomePageAdmin:localStorage.usertoken 
                        && profileHooks.role=='neoworker'
                        ?CompetencesFreelancer:''} />
                    </Switch>
            </>
        )
    }

export default Router;