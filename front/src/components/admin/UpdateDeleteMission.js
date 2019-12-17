import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { SidebarContext } from '../SidebarContext'

const UpdateDeleteMission =(props)=>{
    const params = props.match.params

    const [updateIdMission,setUpdateIdMission]=useState({
        nom_mission: "",
        nom_entreprise:"",
        note:"",
        numero_siret:0,
        budget:0,
        date_debut:'2019-01-01',
        date_fin:'2019-01-01',
        frequence:'',
        status: 0,
        address: "",
        mobilite: 0,
        km_max: 0,
        tel:'',
        cp:'',
        pref_lieu_de_travail: 0,
        disponibilite: 0,
        excel: 0,
        powerpoint: 0,
        word: 0,
        microsoft_365: 0,
        crm_hubspot: 0,
        crm_salesforce: 0,
        crm_pipedrive: 0,
        crm: 0,
        suite_adobe: 0,
        illustrator: 0,
        in_design: 0,
        photoshop: 0,
        marketing_fb: 0,
        google_adwards: 0,
        insta: 0,
        reseaux_sociaux: 0,
        keynote: 0,
        pages: 0,
        gsuite_google: 0,
        numbers: 0,
        erp_sap: 0,
        ciel_gestion: 0,
        cegid: 0,
        sage_gestion_commercial: 0,
        sage_comptabilite: 0,
        quadra: 0,
        reso_pb: 0,
        confiance: 0,
        empathie: 0,
        intelligence_emo: 0,
        communication: 0,
        gestion_temps: 0,
        gestion_stress: 0,
        creativite: 0,
        esprit_entre: 0,
        audace: 0,
        vision_visu: 0,
        motivation: 0,
        presence: 0,
        sens_collectif: 0,
        curiosite: 0,
        sens_effort:0,
        sport: "",
        passion: "",
        engagement_asso: "",
        autres_softskill: "",
        gestion_admin_compta:0,
        gestion_op: 0,
        gestion_commerciale: 0,
        marketing_com_digit: 0,
        gestion_fi_controle_gestion: 0,
        dsi: 0,
        gestion_rh_juridique: 0,
        gestion_rel_client: 0,
        francais: 0,
        anglais: 0,
        italien: 0,
        chinois: 0,
        russe: 0,
        arabe: 0,
        allemand: 0,
        autres_langue: ""
    })
  

    const fetchDataMission = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:5000/mission/${params.id}`,updateIdMission)
        .catch((err) => console.log(err))
    }

    const fetchDeleteDataMission = () => {
        axios.delete(`http://localhost:5000/mission/${params.id}`)
        .catch((err) => console.log(err))

    }

    const { hook, hook2 } = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2

    useEffect(() => {
        setShowSidebar(true)
        setRoleSidebar("admin")
    })


    return(
    <div style={{marginLeft:'400px'}}>
         <form onSubmit={fetchDataMission}>
         <input id="nom_mission" name="nom_mission" value={updateIdMission.nom_mission} required type="text"
        onChange={(e) => { setUpdateIdMission({ ...updateIdMission, nom_mission: e.target.value }) }} />
        <button type="submit">submit</button>

        </form>
        <button onClick={fetchDeleteDataMission}>delete</button>


       
        {/* <p>status</p>
        <p>{updateIdMission.status}</p>
        <p>address</p>
        <p>{updateIdMission.address}</p>
        <p>cp</p>
        <p>{updateIdMission.cp}</p>
        <p>mobilite</p>
        <p>{updateIdMission.mobilite}</p>
        <p>disponibilite</p>
        <p>{updateIdMission.disponibilite}</p>
        <p>pref_lieu_de_travail</p>
        <p>{updateIdMission.pref_lieu_de_travail}</p>
        <p>tjm_min</p>
        <p>{updateIdMission.tjm_min}</p>
        <p>tjm_max</p>
        <p>{updateIdMission.tjm_max}</p>
        <p>word</p>
        <p>{updateIdMission.word}</p>
        <p>powerpoint</p>
        <p>{updateIdMission.powerpoint}</p>
        <p>microsoft</p>
        <p>{updateIdMission.microsoft}</p>
        <p>crm_hubspot</p>
        <p>{updateIdMission.crm_hubspot}</p>
        <p>crm_salesforce</p>
        <p>{updateIdMission.crm_salesforce}</p>
        <p>crm_pipedrive</p>
        <p>{updateIdMission.crm_pipedrive}</p>
        <p>crm</p>
        <p>{updateIdMission.crm}</p>
        <p>suite_adobe</p>
        <p>{updateIdMission.suite_adobe}</p>
        <p>illustrator</p>
        <p>{updateIdMission.illustrator}</p>
        <p>in_design</p>
        <p>{updateIdMission.in_design}</p>
        <p>photoshop</p>
        <p>{updateIdMission.photoshop}</p>
        <p>marketing_fb</p>
        <p>{updateIdMission.marketing_fb}</p>
        <p>google_adwards</p>
        <p>{updateIdMission.google_adwards}</p>
        <p>insta</p>
        <p>{updateIdMission.insta}</p>
        <p>reseaux_sociaux</p>
        <p>{updateIdMission.reseaux_sociaux}</p>
        <p>keynote</p>
        <p>{updateIdMission.keynote}</p>
        <p>pages</p>
        <p>{updateIdMission.pages}</p>
        <p>gsuite_google</p>
        <p>{updateIdMission.gsuite_google}</p>
        <p>numbers</p>
        <p>{updateIdMission.numbers}</p>
        <p>erp_sap</p>
        <p>{updateIdMission.erp_sap}</p>
        <p>ciel_gestion</p>
        <p>{updateIdMission.ciel_gestion}</p>
        <p>cegid</p>
        <p>{updateIdMission.cegid}</p>
        <p>sage_gestion_commercial</p>
        <p>{updateIdMission.sage_gestion_commercial}</p>
        <p>sage_comptabilite</p>
        <p>{updateIdMission.sage_comptabilite}</p>
        <p>quadra</p>
        <p>{updateIdMission.quadra}</p>
        <p>reso_pb</p>
        <p>{updateIdMission.reso_pb}</p>
        <p>empathie</p>
        <p>{updateIdMission.empathie}</p>
        <p>intelligence_emo</p>
        <p>{updateIdMission.intelligence_emo}</p>
        <p>communication</p>
        <p>{updateIdMission.communication}</p>
        <p>gestion_temps</p>
        <p>{updateIdMission.gestion_temps}</p>
        <p>gestion_stress</p>
        <p>{updateIdMission.gestion_stress}</p>
        <p>creativite</p>
        <p>{updateIdMission.creativite}</p>
        <p>esprit_entre</p>
        <p>{updateIdMission.esprit_entre}</p>
        <p>audace</p>
        <p>{updateIdMission.audace}</p>
        <p>vision_visu</p>
        <p>{updateIdMission.vision_visu}</p>
        <p>motivation</p>
        <p>{updateIdMission.motivation}</p>
        <p>presence</p>
        <p>{updateIdMission.presence}</p>
        <p>sens_collectif</p>
        <p>{updateIdMission.sens_collectif}</p>
        <p>curiosite</p>
        <p>{updateIdMission.curiosite}</p>
        <p>sens_effort</p>
        <p>{updateIdMission.sens_effort}</p>
        <p>sport</p>
        <p>{updateIdMission.sport}</p>
        <p>passion</p>
        <p>{updateIdMission.passion}</p>
        <p>engagement_asso</p>
        <p>{updateIdMission.engagement_asso}</p>
        <p>autres_softskill</p>
        <p>{updateIdMission.autres_softskill}</p>
        <p>gestion_admin_compta</p>
        <p>{updateIdMission.gestion_admin_compta}</p>
        <p>gestion_commerciale</p>
        <p>{updateIdMission.gestion_commerciale}</p>
        <p>gestion_op</p>
        <p>{updateIdMission.gestion_op}</p>
        <p>marketing_com_digit</p>
        <p>{updateIdMission.marketing_com_digit}</p>
        <p>gestion_fi_controle_gestion</p>
        <p>{updateIdMission.gestion_fi_controle_gestion}</p>
        <p>dsi</p>
        <p>{updateIdMission.dsi}</p>
        <p>gestion_rh_juridique</p>
        <p>{updateIdMission.gestion_rh_juridique}</p>
        <p>gestion_rel_client</p>
        <p>{updateIdMission.gestion_rel_client}</p>
        <p>francais</p>
        <p>{updateIdMission.francais}</p>
        <p>anglais</p>
        <p>{updateIdMission.anglais}</p>
        <p>italien</p>
        <p>{updateIdMission.italien}</p>
        <p>chinois</p>
        <p>{updateIdMission.chinois}</p>
        <p>russe</p>
        <p>{updateIdMission.russe}</p>
        <p>arabe</p>
        <p>{updateIdMission.arabe}</p>
        <p>allemand</p>
        <p>{updateIdMission.allemand}</p>
        <p>autres_langue</p>
        <p>{updateIdMission.autres_langue}</p>         */}

    </div>
    )
}

export default UpdateDeleteMission;