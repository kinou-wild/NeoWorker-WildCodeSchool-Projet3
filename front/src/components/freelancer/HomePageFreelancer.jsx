import React, {useContext, useEffect} from 'react'
import {SidebarContext} from '../SidebarContext'
import './HomePageFreelancer.css'

/* -------- Page d'accueil de la page Freelancer, après connexion ------------------ */
const HomePageFreelancer = () => {

    /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const { hook, hook2 } = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2
    
    useEffect(() => {
        setShowSidebar(true)
        setRoleSidebar("neoworker")
    })


    return(
        <div className="freelancer-homepage">
            <div className='profil-card'>
            <p className='name-card'>Profil NeoWorker</p>
            <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
            </div> 
            <h1 className='freelancer-h1'>Bienvenue sur ton espace personnel</h1>
        </div>
    )
}

export default HomePageFreelancer