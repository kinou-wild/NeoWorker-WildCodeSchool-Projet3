import React, {useContext, useEffect,useState} from 'react'
import {SidebarContext} from '../SidebarContext'
import { Button } from 'reactstrap'
import axios from 'axios'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import './CompetencesFreelancer.css'


/* -------- Page d'accueil de la page Freelancer, après connexion ------------------ */
const CompetencesFreelancer = () => {

    /* Le boolean initiapsé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
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

    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
    };



    return(
        
        <div className="freelancer-competences">
            <div className='profil-card'>
                <p className='name-card'>Profil NeoWorker</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
            </div> 

            <h2 className='competences-title'>Outils</h2>
                <div className='competences'>
                    <div className='competences-card'>
                        <p>excel</p>
                        <p>{String(idFree.excel)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>powerpoint</p>
                        <p>{String(idFree.powerpoint)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>word</p>
                        <p>{String(idFree.word)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>microsoft_365</p>
                        <p>{String(idFree.microsoft_365)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>crm_hubspot</p>
                        <p>{String(idFree.crm_hubspot)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>crm_salesforce</p>
                        <p>{String(idFree.salesforce)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>crm_pipedrive</p>
                        <p>{String(idFree.crm_pipedrive)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>crm</p>
                        <p>{String(idFree.crm)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>suite_adobe</p>
                        <p>{String(idFree.suite_adobe)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>illustrator</p>
                        <p>{String(idFree.illustrator)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>in_design</p>
                        <p>{String(idFree.in_design)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>photoshop</p>
                        <p>{String(idFree.photoshop)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>marketing_fb</p>
                        <p>{String(idFree.marketing_fb)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>google_adwards</p>
                        <p>{String(idFree.google_adwards)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>insta</p>
                        <p>{String(idFree.insta)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>reseaux_sociaux</p>
                        <p>{String(idFree.reseaux_sociaux)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>keynote</p>
                        <p>{String(idFree.keynote)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>pages</p>
                        <p>{String(idFree.pages)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>gsuite_google</p>
                        <p>{String(idFree.gsuite_google)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>numbers</p>
                        <p>{String(idFree.numbers)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>erp_sap</p>
                        <p>{String(idFree.erp_sap)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>ciel_gestion</p>
                        <p>{String(idFree.ciel_gestion)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>cegid</p>
                        <p>{String(idFree.cegid)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>sage_gestion_commercial</p>
                        <p>{String(idFree.sage_gestion_commercial)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>sage_comptabipte</p>
                        <p>{String(idFree.sage_comptabipte)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>quadra</p>
                        <p>{String(idFree.quadra)}</p>
                    </div>
                </div>

            <h2 className='competences-title'>Soft Skills</h2>
                <div className='competences'>
                    <div className='competences-card'>
                        <p>reso_pb</p>
                        <p>{String(idFree.reso_pb)}</p>
                    </div>
                    <div className='competences-card'>                            
                        <p>confiance</p>
                        <p>{String(idFree.confiance)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>empathie</p>
                        <p>{String(idFree.empathie)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>intelpgence_emo</p>
                        <p>{String(idFree.intelpgence_emo)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>communication</p>
                        <p>{String(idFree.communication)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>gestion_temps</p>
                        <p>{String(idFree.gestion_temps)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>gestion_stress</p>
                        <p>{String(idFree.gestion_stress)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>creativite</p>
                        <p>{String(idFree.creativite)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>esprit_entre</p>
                        <p>{String(idFree.esprit_entre)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>audace</p>
                        <p>{String(idFree.audace)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>vision_visu</p>
                        <p>{String(idFree.vision_visu)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>motivation</p>
                        <p>{String(idFree.motivation)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>presence</p>
                        <p>{String(idFree.presence)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>sens_collectif</p>
                        <p>{String(idFree.sens_collectif)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>curiosite</p>
                        <p>{String(idFree.curiosite)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>sens_effort</p>
                        <p>{String(idFree.sens_effort)}</p>
                    </div>
                </div>

            <h2 className='competences-title'>Centre d'interet</h2>
                <div className='competences'>
                    <div className='competences-card'>
                        <p>sport</p>
                        <p>{String(idFree.sport)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>passion</p>
                        <p>{String(idFree.passion)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>engagement_asso</p>
                        <p>{String(idFree.engagement_asso)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>autres_softskill</p>
                        <p>{String(idFree.autres_softskill)}</p>
                    </div>
                </div>

            <h2 className='competences-title'>Famile de prestations</h2>
                <div className='competences'>
                    <div className='competences-card'>
                        <p>gestion_admin_compta</p>
                        <p>{String(idFree.gestion_admin_compta)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>gestion_op</p>
                        <p>{String(idFree.gestion_op)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>gestion_commerciale</p>
                        <p>{String(idFree.gestion_commerciale)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>marketing_com_digit</p>
                        <p>{String(idFree.marketing_com_digit)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>gestion_fi_controle_gestion</p>
                        <p>{String(idFree.gestion_fi_controle_gestion)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>dsi</p>
                        <p>{String(idFree.dsi)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>gestion_rh_juridique</p>
                        <p>{String(idFree.gestion_rh_juridique)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>gestion_rel_cpent</p>
                        <p>{String(idFree.gestion_rel_cpent)}</p>
                    </div>
                </div>

            <h2 className='competences-title'>Langues</h2>
                <div className='competences'>                    
                    <div className='competences-card'>
                        <p>francais</p>
                        <p>{String(idFree.francais)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>anglais</p>
                        <p>{String(idFree.anglais)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>itapen</p>
                        <p>{String(idFree.itapen)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>chinois</p>
                        <p>{String(idFree.chinois)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>russe</p>
                        <p>{String(idFree.russe)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>arabe</p>
                        <p>{String(idFree.arabe)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>allemand</p>
                        <p>{String(idFree.allemand)}</p>
                    </div>
                    <div className='competences-card'>
                        <p>autres_langue</p>
                        <p>{String(idFree.autres_langue)}</p>
                    </div>
                </div>

                <Link to={`/freelancer/competences/`}>
                    <Button className='btn'>Editer</Button>
                </Link>

            </div>

    )
}

export default CompetencesFreelancer