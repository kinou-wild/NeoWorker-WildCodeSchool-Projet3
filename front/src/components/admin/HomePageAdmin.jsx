import React, {useEffect} from 'react'
import './HomePageAdmin.css'
import profilPic from '../../img/anais.jpg'


/* -------- Page d'accueil de la page Administrateur, après connexion ------------------ */
const HomePageAdmin = () => {


    return(
        <div className="main-div">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil picture' />
            </div>
            <p className="admin-homepage-title">Bienvenue dans l'espace <span className="admin-homepage-orange"> Admin</span> NeoWorker<span className="admin-homepage-orange">.</span></p>
        </div>
    )
}

export default HomePageAdmin