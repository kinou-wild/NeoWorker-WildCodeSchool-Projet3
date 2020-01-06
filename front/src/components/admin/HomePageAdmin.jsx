import React, {useEffect} from 'react'
import './HomePageAdmin.css'

/* -------- Page d'accueil de la page Administrateur, après connexion ------------------ */
const HomePageAdmin = () => {


    return(
        <div className="main-div">
            <div className='profil-card'>
                <p className='name-card'>Profil Admin</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture' />
            </div> 
            <p className="admin-homepage-title">Bienvenue dans l'espace <span className="admin-homepage-orange"> Admin</span> NeoWorker<span className="admin-homepage-orange">.</span></p>
        </div>
    )
}

export default HomePageAdmin