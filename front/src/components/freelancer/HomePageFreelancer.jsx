import React, {useContext, useEffect} from 'react'
import {SidebarContext} from '../SidebarContext'
import './HomePageFreelancer.css'
import { Button } from 'reactstrap'
import {Link} from 'react-router-dom'


/* -------- Page d'accueil de la page Freelancer, après connexion ------------------ */
const HomePageFreelancer = () => {

    /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const [showSidebar, setShowSidebar] = useContext(SidebarContext)

    useEffect(() => {
        setShowSidebar(true)
    })

    return(
        <div className="freelancer-homepage">
            <div className='profil-card'>
            <p className='name-card'>Profil NeoWorker</p>
            <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
            </div> 
            <h1 className='freelancer-h1'>Bienvenue sur ton espace personnel</h1>
            <div className='homepage-content'>
                <img className='pic-profil' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='photo de profil' />
                <div className='infos-profil'>
                <p className='champs-profil'>Métier</p>
                <p className='champs-profil'>Nom / Prenom</p>
                <p className='champs-profil'>Email / Téléphone</p>
                </div>
                </div>
                <div className='reste-profil'>
                    <p className='champs-profil'>Taux journalier moyen : Min / Max</p>
                    <p className='champs-profil'>Disponibilité : Nb jours dispo / mois</p>
                    <p className='champs-profil'>Mobilité : Oui / Non (km max)</p>
                    <p className='champs-profil'>Remote : Oui / Non</p>
                    <p className='champs-profil'>Adresse Postale</p>
                    <p className='champs-profil'>Code Postale</p>
                    <p className='champs-profil'>Préférence du lieu de travail</p>                    
                </div>
                <Link to = '/freelancer/editer'>
            <Button className='btn'>Editer</Button>
            </Link>
                </div>
    )
}

export default HomePageFreelancer