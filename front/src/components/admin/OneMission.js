import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';


const OneMission =(props)=>{
    const params = props.match.params

    const [idMission,setIdMission]=useState([])

    useEffect(() => {
        fetchDataMission()
    }, [])
    const fetchDataMission = ()=>{
        axios.get(`http://localhost:5000/mission/${params.id}`)
        .then(res => setIdMission(res.data))
        .catch((err) => console.log(err))
    }

    return(
    <div>
        <p>titre</p>
        <p>{idMission.title}</p>
        <p>status</p>
        <p>{idMission.status}</p>
        <p>address</p>
        <p>{idMission.address}</p>
        <p>cp</p>
        <p>{idMission.cp}</p>
        <p>mobilite</p>
        <p>{idMission.mobilite}</p>
        <p>disponibilite</p>
        <p>{idMission.disponibilite}</p>
        <p>pref_lieu_de_travail</p>
        <p>{idMission.pref_lieu_de_travail}</p>
        <p>tjm_min</p>
        <p>{idMission.tjm_min}</p>
        <p>tjm_max</p>
        <p>{idMission.tjm_max}</p>
        <p>word</p>
        <p>{idMission.word}</p>
        <p>powerpoint</p>
        <p>{idMission.powerpoint}</p>
        <p>microsoft</p>
        <p>{idMission.microsoft}</p>
        <p>crm_hubspot</p>
        <p>{idMission.crm_hubspot}</p>
        <p>crm_salesforce</p>
        <p>{idMission.crm_salesforce}</p>
        <p>crm_pipedrive</p>
        <p>{idMission.crm_pipedrive}</p>
        <p>crm</p>
        <p>{idMission.crm}</p>
        <p>suite_adobe</p>
        <p>{idMission.suite_adobe}</p>
        <p>illustrator</p>
        <p>{idMission.illustrator}</p>
        <p>in_design</p>
        <p>{idMission.in_design}</p>
        <p>photoshop</p>
        <p>{idMission.photoshop}</p>
        <p>marketing_fb</p>
        <p>{idMission.marketing_fb}</p>
        <p>google_adwards</p>
        <p>{idMission.google_adwards}</p>
        <p>insta</p>
        <p>{idMission.insta}</p>
        <p>reseaux_sociaux</p>
        <p>{idMission.reseaux_sociaux}</p>
        <p>keynote</p>
        <p>{idMission.keynote}</p>
        <p>pages</p>
        <p>{idMission.pages}</p>
        <p>gsuite_google</p>
        <p>{idMission.gsuite_google}</p>
        <p>numbers</p>
        <p>{idMission.numbers}</p>
        <p>erp_sap</p>
        <p>{idMission.erp_sap}</p>
        <p>ciel_gestion</p>
        <p>{idMission.ciel_gestion}</p>
        <p>cegid</p>
        <p>{idMission.cegid}</p>
        <p>sage_gestion_commercial</p>
        <p>{idMission.sage_gestion_commercial}</p>
        <p>sage_comptabilite</p>
        <p>{idMission.sage_comptabilite}</p>
        <p>quadra</p>
        <p>{idMission.quadra}</p>
        <p>reso_pb</p>
        <p>{idMission.reso_pb}</p>
        <p>empathie</p>
        <p>{idMission.empathie}</p>
        <p>intelligence_emo</p>
        <p>{idMission.intelligence_emo}</p>
        <p>communication</p>
        <p>{idMission.communication}</p>
        <p>gestion_temps</p>
        <p>{idMission.gestion_temps}</p>
        <p>gestion_stress</p>
        <p>{idMission.gestion_stress}</p>
        <p>creativite</p>
        <p>{idMission.creativite}</p>
        <p>esprit_entre</p>
        <p>{idMission.esprit_entre}</p>
        <p>audace</p>
        <p>{idMission.audace}</p>
        <p>vision_visu</p>
        <p>{idMission.vision_visu}</p>
        <p>motivation</p>
        <p>{idMission.motivation}</p>
        <p>presence</p>
        <p>{idMission.presence}</p>
        <p>sens_collectif</p>
        <p>{idMission.sens_collectif}</p>
        <p>curiosite</p>
        <p>{idMission.curiosite}</p>
        <p>sens_effort</p>
        <p>{idMission.sens_effort}</p>
        <p>sport</p>
        <p>{idMission.sport}</p>
        <p>passion</p>
        <p>{idMission.passion}</p>
        <p>engagement_asso</p>
        <p>{idMission.engagement_asso}</p>
        <p>autres_softskill</p>
        <p>{idMission.autres_softskill}</p>
        <p>gestion_admin_compta</p>
        <p>{idMission.gestion_admin_compta}</p>
        <p>gestion_commerciale</p>
        <p>{idMission.gestion_commerciale}</p>
        <p>gestion_op</p>
        <p>{idMission.gestion_op}</p>
        <p>marketing_com_digit</p>
        <p>{idMission.marketing_com_digit}</p>
        <p>gestion_fi_controle_gestion</p>
        <p>{idMission.gestion_fi_controle_gestion}</p>
        <p>dsi</p>
        <p>{idMission.dsi}</p>
        <p>gestion_rh_juridique</p>
        <p>{idMission.gestion_rh_juridique}</p>
        <p>gestion_rel_client</p>
        <p>{idMission.gestion_rel_client}</p>
        <p>francais</p>
        <p>{idMission.francais}</p>
        <p>anglais</p>
        <p>{idMission.anglais}</p>
        <p>italien</p>
        <p>{idMission.italien}</p>
        <p>chinois</p>
        <p>{idMission.chinois}</p>
        <p>russe</p>
        <p>{idMission.russe}</p>
        <p>arabe</p>
        <p>{idMission.arabe}</p>
        <p>allemand</p>
        <p>{idMission.allemand}</p>
        <p>autres_langue</p>
        <p>{idMission.autres_langue}</p>        

    </div>
    )
}

export default OneMission;