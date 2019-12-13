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
    }

    useEffect(() => {
        setShowSidebar(true)
    })
    return(


        <div style={{textAlign:'center'}}>

            <h1>User SIDE </h1>
            <p>{idUser.role}</p>
            <p>{idUser.email}</p>
            <p>{idUser.password}</p>


            {/* Les champs de la bdd  */}
            <h1>freelancer SIDE</h1>
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
                <p>excel</p>
                <li>{String(idFree.excel)}</li>
                <p>powerpoint</p>
                <li>{String(idFree.powerpoint)}</li>
                <p>word</p>
                <li>{String(idFree.word)}</li>
                <p>microsoft_365</p>
                <li>{String(idFree.microsoft_365)}</li>
                <p>crm_hubspot</p>
                <li>{String(idFree.crm_hubspot)}</li>
                <p>crm_salesforce</p>
                <li>{String(idFree.salesforce)}</li>
                <p>crm_pipedrive</p>
                <li>{String(idFree.crm_pipedrive)}</li>
                <p>crm</p>
                <li>{String(idFree.crm)}</li>
                <p>suite_adobe</p>
                <li>{String(idFree.suite_adobe)}</li>
                <p>illustrator</p>
                <li>{String(idFree.illustrator)}</li>
                <p>in_design</p>
                <li>{String(idFree.in_design)}</li>
                <p>photoshop</p>
                <li>{String(idFree.photoshop)}</li>
                <p>marketing_fb</p>
                <li>{String(idFree.marketing_fb)}</li>
                <p>google_adwards</p>
                <li>{String(idFree.google_adwards)}</li>
                <p>insta</p>
                <li>{String(idFree.insta)}</li>
                <p>reseaux_sociaux</p>
                <li>{String(idFree.reseaux_sociaux)}</li>
                <p>keynote</p>
                <li>{String(idFree.keynote)}</li>
                <p>pages</p>
                <li>{String(idFree.pages)}</li>
                <p>gsuite_google</p>
                <li>{String(idFree.gsuite_google)}</li>
                <p>numbers</p>
                <li>{String(idFree.numbers)}</li>
                <p>erp_sap</p>
                <li>{String(idFree.erp_sap)}</li>
                <p>ciel_gestion</p>
                <li>{String(idFree.ciel_gestion)}</li>
                <p>cegid</p>
                <li>{String(idFree.cegid)}</li>
                <p>sage_gestion_commercial</p>
                <li>{String(idFree.sage_gestion_commercial)}</li>
                <p>sage_comptabilite</p>
                <li>{String(idFree.sage_comptabilite)}</li>
                <p>quadra</p>
                <li>{String(idFree.quadra)}</li>
                <p>reso_pb</p>
                <li>{String(idFree.reso_pb)}</li>
                <p>confiance</p>
                <li>{String(idFree.confiance)}</li>
                <p>empathie</p>
                <li>{String(idFree.empathie)}</li>
                <p>intelligence_emo</p>
                <li>{String(idFree.intelligence_emo)}</li>
                <p>communication</p>
                <li>{String(idFree.communication)}</li>
                <p>gestion_temps</p>
                <li>{String(idFree.gestion_temps)}</li>
                <p>gestion_stress</p>
                <li>{String(idFree.gestion_stress)}</li>
                <p>creativite</p>
                <li>{String(idFree.creativite)}</li>
                <p>esprit_entre</p>
                <li>{String(idFree.esprit_entre)}</li>
                <p>audace</p>
                <li>{String(idFree.audace)}</li>
                <p>vision_visu</p>
                <li>{String(idFree.vision_visu)}</li>
                <p>motivation</p>
                <li>{String(idFree.motivation)}</li>
                <p>presence</p>
                <li>{String(idFree.presence)}</li>
                <p>sens_collectif</p>
                <li>{String(idFree.sens_collectif)}</li>
                <p>curiosite</p>
                <li>{String(idFree.curiosite)}</li>
                <p>sens_effort</p>
                <li>{String(idFree.sens_effort)}</li>
                <p>sport</p>
                <li>{String(idFree.sport)}</li>
                <p>passion</p>
                <li>{String(idFree.passion)}</li>
                <p>engagement_asso</p>
                <li>{String(idFree.engagement_asso)}</li>
                <p>autres_softskill</p>
                <li>{String(idFree.autres_softskill)}</li>
                <p>gestion_admin_compta</p>
                <li>{String(idFree.gestion_admin_compta)}</li>
                <p>gestion_op</p>
                <li>{String(idFree.gestion_op)}</li>
                <p>gestion_commerciale</p>
                <li>{String(idFree.gestion_commerciale)}</li>
                <p>marketing_com_digit</p>
                <li>{String(idFree.marketing_com_digit)}</li>
                <p>gestion_fi_controle_gestion</p>
                <li>{String(idFree.gestion_fi_controle_gestion)}</li>
                <p>dsi</p>
                <li>{String(idFree.dsi)}</li>
                <p>gestion_rh_juridique</p>
                <li>{String(idFree.gestion_rh_juridique)}</li>
                <p>gestion_rel_client</p>
                <li>{String(idFree.gestion_rel_client)}</li>
                <p>francais</p>
                <li>{String(idFree.francais)}</li>
                <p>anglais</p>
                <li>{String(idFree.anglais)}</li>
                <p>italien</p>
                <li>{String(idFree.italien)}</li>
                <p>chinois</p>
                <li>{String(idFree.chinois)}</li>
                <p>russe</p>
                <li>{String(idFree.russe)}</li>
                <p>arabe</p>
                <li>{String(idFree.arabe)}</li>
                <p>allemand</p>
                <li>{String(idFree.allemand)}</li>
                <p>autres_langue</p>
                <li>{String(idFree.autres_langue)}</li>

            </ul>
            <Link to={`/freelancer/editer/${idFree.id}`}><button>Modifier</button></Link>
        </div>
        // <div className="freelancer-homepage">
        //     <div className='profil-card'>
        //         <p className='name-card'>Profil NeoWorker</p>
        //         <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
        //     </div> 
        //         <h1 className='freelancer-h1'>Bienvenue sur ton espace personnel</h1>
        //     <div className='homepage-content'>
        //         <img className='pic-profil' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='photo de profil' />
        //             <div className='infos-profil'>
        //                 <p className='champs-profil'>Métier {idUser.title}</p>
        //                 <p className='champs-profil'>Nom / Prenom {idFree.firstname} </p>
        //                 <p className='champs-profil'>Email / Téléphone {idFree.email}</p>
        //             </div>
        //     </div>
        //     <div className='reste-profil'>
        //         <p className='champs-profil'>Taux journalier moyen : Min / Max {idFree.fourchette_tarifaire}</p>
        //         <p className='champs-profil'>Disponibilité : Nb jours dispo / mois {idFree.disponibilite}</p>
        //         <p className='champs-profil'>Mobilité : Oui / Non (km max) {String(idFree.mobilite)}</p>
        //         <p className='champs-profil'>Remote : Oui / Non {idFree.pref_lieu_de_travail}</p>
        //         <p className='champs-profil'>Adresse Postale {idFree.address}</p>
        //         <p className='champs-profil'>Code Postale</p>
        //         <p className='champs-profil'>Préférence du lieu de travail</p>                    
        //     </div>
        //         <Link to={`/freelancer/editer/${idFree.id}`}>
        //             <Button className='btn'>Editer</Button>
        //         </Link>
        // </div>
    )
}

export default HomePageFreelancer