import React, {useContext, useEffect} from 'react'
import {SidebarContext} from '../SidebarContext'
import './HomePageAdmin.css'

/* -------- Page d'accueil de la page Administrateur, après connexion ------------------ */
const HomePageAdmin = () => {

    /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const [showSidebar, setShowSidebar] = useContext(SidebarContext)

    useEffect(() => {
        setShowSidebar(true)
    })

    return(
        <div className="admin-homepage">
            <h1 className='admin-h1'>Bienvenue sur ton espace Administrateur !</h1>
        </div>
    )
}

export default HomePageAdmin