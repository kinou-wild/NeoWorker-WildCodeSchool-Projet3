import React, {useContext, useEffect,useState} from 'react'
import {SidebarContext} from '../SidebarContext'
import './HomePageFreelancer.css'
import { Button } from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';


/* -------- Page d'accueil de la page Freelancer, après connexion ------------------ */
const HomePageFreelancer = () => {

    /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const [showSidebar, setShowSidebar] = useContext(SidebarContext)

    //hooks de la data freelancer pour get un id
    const [idFree, setIdFree] = useState([])

    //hooks de la data user pour le get de l'id
    const [idUser, setIdUser] = useState([])


    // cycle de vie du fetchData pour getter le profil du freelancer
    useEffect(() => {
        fetchDataFree()
    }, [])

    const fetchDataFree = () => {
        axios.get(`http://localhost:5000/freelancer/1`)
            .then(res => setIdFree(res.data))
            .catch((err) => console.log(err))
    }

    // cycle de vie du fetchData pour getter le profil du User

    useEffect(() => {
        fetchDataUserFree()
    }, []);

    const fetchDataUserFree = () => {
        axios.get('http://localhost:5000/user/1')
            .then(res => setIdUser(res.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        setShowSidebar(true)
    })
    return(
        <div style={{textAlign:'center'}}>
            <div>
                <h1>Bienvenue sur ton espace personnel</h1>
                <p>{idUser.role}</p>
                <p>{idUser.password}</p>
            </div>
            {/* Les champs de la bdd  */}
                <h1>{idFree.title}</h1>
            <div>
                <div className='pic-card'>
                    <img className='pic-profil' src={idFree.img}></img>
                </div>
            </div>
            <div>
            <ul>
                <p>Code Postal</p>
                <li>{idFree.cp}</li>
                <p>tel</p>
                <li>{idFree.tel}</li>
                <p>km_max</p>
                <li>{idFree.km_max}</li>
                <p>tjm_max</p>
                <li>{idFree.tjm_max}</li>
                <p>tjm_min</p>
                <li>{idFree.tjm_min}</li>
                <p>title</p>
                <li>{idFree.title}</li>
                <p>firstname</p>
                <li>{idFree.firstname}</li>
                <p>lastname</p>
                <li>{idFree.lastname}</li>
                <p>address</p>
                <li>{idFree.address}</li>
                <p>mobilite</p>
                <li>{String(idFree.mobilite)}</li>
                <p>pref_lieu_de_travail</p>
                <li>{idFree.pref_lieu_de_travail}</li>
                <p>disponibilite</p>
                <li>{idFree.disponibilite}</li>
                <p>fourchette_tarifaire</p>
                <li>{idFree.fourchette_tarifaire}</li>
                <p>password</p>
                <li>{idFree.password}</li>
                <p>email</p>
                <li>{idFree.email}</li>
            </ul>
            </div>
            <Link to={`/freelancer/editer/${idFree.id}`}>
                <button className='btn'>Modifier</button>
            </Link>
        </div>
        <div className="freelancer-homepage">
            <div className='profil-card'>
                <p className='name-card'>Profil NeoWorker</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
            </div> 
                <h1 className='freelancer-h1'>Bienvenue sur ton espace personnel</h1>
            <div className='homepage-content'>
                <img className='pic-profil' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='photo de profil' />
                    <div className='infos-profil'>
                        <p className='champs-profil'>Métier {idUser.title}</p>
                        <p className='champs-profil'>Nom / Prenom {idFree.firstname} </p>
                        <p className='champs-profil'>Email / Téléphone {idFree.email}</p>
                    </div>
            </div>
            <div className='reste-profil'>
                <p className='champs-profil'>Taux journalier moyen : Min / Max {idFree.fourchette_tarifaire}</p>
                <p className='champs-profil'>Disponibilité : Nb jours dispo / mois {idFree.disponibilite}</p>
                <p className='champs-profil'>Mobilité : Oui / Non (km max) {String(idFree.mobilite)}</p>
                <p className='champs-profil'>Remote : Oui / Non {idFree.pref_lieu_de_travail}</p>
                <p className='champs-profil'>Adresse Postale {idFree.address}</p>
                <p className='champs-profil'>Code Postale</p>
                <p className='champs-profil'>Préférence du lieu de travail</p>                    
            </div>
                <Link to={`/freelancer/editer/${idFree.id}`}>
                    <Button className='btn'>Editer</Button>
                </Link>
        </div>
    )
}

export default HomePageFreelancer