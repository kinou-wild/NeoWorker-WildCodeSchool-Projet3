import React, {useContext, useEffect,useState} from 'react'
import {SidebarContext} from '../SidebarContext'
import './HomePageFreelancer.css'
import { Button } from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';


/* -------- Page d'accueil de la page Freelancer, après connexion ------------------ */
const HomePageFreelancer = () => {

    /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    
    const { hook, hook2 } = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2
    
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
        setRoleSidebar("neoworker")
    })
    return(
        <div className="freelancer-homepage">
            <div>
                <div className='profil-card'>
                    <p className='name-card'>Profil NeoWorker</p>
                    <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
                </div> 
                <h1 className='freelancer-h1'>Bienvenue sur ton espace personnel</h1>
                <div className="champs-profil"><p>{idFree.title}</p></div>
                <div className='homepage-profil'>
                    <div>
                    <img className='pic-profil' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='photo de profil' />
                    </div>
                    <div className='infos-profil'>
                        <div className="champs-profil"><p>{idFree.firstname}</p></div>                        
                        <div className="champs-profil"><p>{idFree.lastname}</p></div>
                        <div className="champs-profil"><p>{idFree.email}</p></div>
                        <div className="champs-profil"><p>{idFree.tel}</p></div>
                    </div>
                </div>
            </div>
            <div className='reste-profil'>
                <div className="container-reste-profile">
                <div><p>{idFree.tjm_min}</p></div>
                <div><p>{idFree.tjm_max}</p></div>
                </div>
                <div className="champs-reste-profil"><p>{idFree.disponibilite}</p></div>
                <div className="champs-reste-profil"><p>{String(idFree.mobilite)}</p></div>
                <div className="champs-reste-profil"><p>{idFree.pref_lieu_de_travail}</p></div>
                <div className="champs-reste-profil"><p>{idFree.cp}</p></div>
                <div className="champs-reste-profil"><p>{idFree.km_max}</p></div>
            </div>
                <Link to={`/neoworker/editer/${idFree.id}`}>
                    <Button className='btn'>Editer</Button>
                </Link>
        </div>
    )
}

export default HomePageFreelancer