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


        <div className="freelancer-homepage" style={{textAlign:'center'}}>
            <div className="profil-card">
            <h1 className="freelancer-h1">Bienvenue sur ton espace personnel</h1>
            <p>{idUser.role}</p>
            <p>{idUser.password}</p>
            </div>
            {/* Les champs de la bdd  */}
            <div>
            <h1 className="freelancer-h1">Profil NeoWorker</h1>
            </div>
            <div className="reste-profil li">
            <ul>
                <p className='champs-profil'>Code Postal</p>
                <li>{idFree.cp}</li>
                <p className='champs-profil'>tel</p>
                <li>{idFree.tel}</li>
                <p className='champs-profil'>km_max</p>
                <li>{idFree.km_max}</li>
                <p className='champs-profil'>tjm_max</p>
                <li>{idFree.tjm_max}</li>
                <p className='champs-profil'>tjm_min</p>
                <li>{idFree.tjm_min}</li>
                <p className='champs-profil'>title</p>
                <li>{idFree.title}</li>
                <p className='champs-profil'>firstname</p>
                <li>{idFree.firstname}</li>
                <p className='champs-profil'>lastname</p>
                <li>{idFree.lastname}</li>
                <p className='champs-profil'>address</p>
                <li>{idFree.address}</li>
                <p className='champs-profil'>mobilite</p>
                <li>{String(idFree.mobilite)}</li>
                <p className='champs-profil'>pref_lieu_de_travail</p>
                <li>{idFree.pref_lieu_de_travail}</li>
                <p className='champs-profil'>disponibilite</p>
                <li>{idFree.disponibilite}</li>
                <p className='champs-profil'>fourchette_tarifaire</p>
                <li>{idFree.fourchette_tarifaire}</li>
                <p className='champs-profil'>password</p>
                <li>{idFree.password}</li>
                <p className='champs-profil'>email</p>
                <li>{idFree.email}</li>
                <p className='champs-profil'>excel</p>
                <li>{String(idFree.excel)}</li>
                <p className='champs-profil'>powerpoint</p>
                <li>{String(idFree.powerpoint)}</li>
                <p className='champs-profil'>word</p>
                <li>{String(idFree.word)}</li>
                <p className='champs-profil'>microsoft_365</p>
                <li>{String(idFree.microsoft_365)}</li>
                <p className='champs-profil'>crm_hubspot</p>
                <li>{String(idFree.crm_hubspot)}</li>
                <p className='champs-profil'>crm_salesforce</p>
                <li>{String(idFree.salesforce)}</li>
                <p className='champs-profil'>crm_pipedrive</p>
                <li>{String(idFree.crm_pipedrive)}</li>
                <p className='champs-profil'>crm</p>
                <li>{String(idFree.crm)}</li>
                <p className='champs-profil'>suite_adobe</p>
                <li>{String(idFree.suite_adobe)}</li>
                <p className='champs-profil'>illustrator</p>
                <li>{String(idFree.illustrator)}</li>
                <p className='champs-profil'>in_design</p>
                <li>{String(idFree.in_design)}</li>
                <p className='champs-profil'>photoshop</p>
                <li>{String(idFree.photoshop)}</li>
                <p className='champs-profil'>marketing_fb</p>
                <li>{String(idFree.marketing_fb)}</li>
                <p className='champs-profil'>google_adwards</p>
                <li>{String(idFree.google_adwards)}</li>
                <p className='champs-profil'>insta</p>
                <li>{String(idFree.insta)}</li>
                <p className='champs-profil'>reseaux_sociaux</p>
                <li>{String(idFree.reseaux_sociaux)}</li>
                <p className='champs-profil'>keynote</p>
                <li>{String(idFree.keynote)}</li>
                <p  className='champs-profil'>pages</p>
                <li>{String(idFree.pages)}</li>
                <p  className='champs-profil'>gsuite_google</p>
                <li>{String(idFree.gsuite_google)}</li>
                <p  className='champs-profil'>numbers</p>
                <li>{String(idFree.numbers)}</li>
                <p  className='champs-profil'>erp_sap</p>
                <li>{String(idFree.erp_sap)}</li>
                <p  className='champs-profil'>ciel_gestion</p>
                <li>{String(idFree.ciel_gestion)}</li>
                <p  className='champs-profil'>cegid</p>
                <li>{String(idFree.cegid)}</li>
                <p  className='champs-profil'>sage_gestion_commercial</p>
                <li>{String(idFree.sage_gestion_commercial)}</li>
                <p  className='champs-profil'>sage_comptabilite</p>
                <li>{String(idFree.sage_comptabilite)}</li>
                <p  className='champs-profil'>quadra</p>
                <li>{String(idFree.quadra)}</li>
                <p  className='champs-profil'>reso_pb</p>
                <li>{String(idFree.reso_pb)}</li>
                <p  className='champs-profil'>confiance</p>
                <li>{String(idFree.confiance)}</li>
                <p  className='champs-profil'>empathie</p>
                <li>{String(idFree.empathie)}</li>
                <p  className='champs-profil'>intelligence_emo</p>
                <li>{String(idFree.intelligence_emo)}</li>
                <p  className='champs-profil'>communication</p>
                <li>{String(idFree.communication)}</li>
                <p  className='champs-profil'>gestion_temps</p>
                <li>{String(idFree.gestion_temps)}</li>
                <p  className='champs-profil'>gestion_stress</p>
                <li>{String(idFree.gestion_stress)}</li>
                <p  className='champs-profil'>creativite</p>
                <li>{String(idFree.creativite)}</li>
                <p  className='champs-profil'>esprit_entre</p>
                <li>{String(idFree.esprit_entre)}</li>
                <p  className='champs-profil'>audace</p>
                <li>{String(idFree.audace)}</li>
                <p  className='champs-profil'>vision_visu</p>
                <li>{String(idFree.vision_visu)}</li>
                <p  className='champs-profil'>motivation</p>
                <li>{String(idFree.motivation)}</li>
                <p  className='champs-profil'>presence</p>
                <li>{String(idFree.presence)}</li>
                <p  className='champs-profil'>sens_collectif</p>
                <li>{String(idFree.sens_collectif)}</li>
                <p  className='champs-profil'>curiosite</p>
                <li>{String(idFree.curiosite)}</li>
                <p  className='champs-profil'>sens_effort</p>
                <li>{String(idFree.sens_effort)}</li>
                <p  className='champs-profil'>sport</p>
                <li>{String(idFree.sport)}</li>
                <p  className='champs-profil'>passion</p>
                <li>{String(idFree.passion)}</li>
                <p  className='champs-profil'>engagement_asso</p>
                <li>{String(idFree.engagement_asso)}</li>
                <p  className='champs-profil'>autres_softskill</p>
                <li>{String(idFree.autres_softskill)}</li>
                <p  className='champs-profil'>gestion_admin_compta</p>
                <li>{String(idFree.gestion_admin_compta)}</li>
                <p  className='champs-profil'>gestion_op</p>
                <li>{String(idFree.gestion_op)}</li>
                <p  className='champs-profil'>gestion_commerciale</p>
                <li>{String(idFree.gestion_commerciale)}</li>
                <p  className='champs-profil'>marketing_com_digit</p>
                <li>{String(idFree.marketing_com_digit)}</li>
                <p  className='champs-profil'>gestion_fi_controle_gestion</p>
                <li>{String(idFree.gestion_fi_controle_gestion)}</li>
                <p  className='champs-profil'>dsi</p>
                <li>{String(idFree.dsi)}</li>
                <p  className='champs-profil'>gestion_rh_juridique</p>
                <li>{String(idFree.gestion_rh_juridique)}</li>
                <p  className='champs-profil'>gestion_rel_client</p>
                <li>{String(idFree.gestion_rel_client)}</li>
                <p  className='champs-profil'>francais</p>
                <li>{String(idFree.francais)}</li>
                <p  className='champs-profil'>anglais</p>
                <li>{String(idFree.anglais)}</li>
                <p  className='champs-profil'>italien</p>
                <li>{String(idFree.italien)}</li>
                <p  className='champs-profil'>chinois</p>
                <li>{String(idFree.chinois)}</li>
                <p  className='champs-profil'>russe</p>
                <li>{String(idFree.russe)}</li>
                <p  className='champs-profil'>arabe</p>
                <li>{String(idFree.arabe)}</li>
                <p  className='champs-profil'>allemand</p>
                <li>{String(idFree.allemand)}</li>
                <p  className='champs-profil'>autres_langue</p>
                <li>{String(idFree.autres_langue)}</li>
            </ul>
            </div>
            <Link to={`/freelancer/editer/${idFree.id}`}>
                <button className='btn'>Modifier</button>
            </Link>
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