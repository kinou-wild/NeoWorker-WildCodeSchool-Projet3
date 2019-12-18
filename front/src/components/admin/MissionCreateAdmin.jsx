import React, { useContext, useEffect, useState } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import { SidebarContext } from '../SidebarContext'
import './MissionCreateAdmin.css'
import axios from 'axios'
import { Link, withRouter } from 'react-router-dom';


/* -------- Page creation mission ------------------ */
const MissionCreateAdmin = (props) => {

    // hooks to create a mission
    const [createm, setCreatem] = useState({
        userId: 1,
        nom_mission: "",
        nom_entreprise: "",
        email: '',
        note: "",
        nb_j_par_mois: 'Nombre de jour par mois',
        type_profil: "",
        siret: 'Siret',
        budget: 'Budget',
        date_debut: '',
        date_fin:'',
        frequence: '',
        status: 0,
        address: "",
        mobilite: 0,
        km_max: 0,
        tel: '',
        cp: 'code postal',
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
        sens_effort: 0,
        sport: "",
        passion: "",
        engagement_asso: "",
        autres_softskill: "",
        gestion_admin_compta: 0,
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
        espagnol: 0,
        autres_langue: ""
    })

    /* hooks pour le rating par étoiles */
    const [rating, setRating] = useState([
        { Excel: 0 },
        { Powerpoint: 0 },
        { microsoft_365: 0 },
        { Word: 0 },
        { crm_hubspot: 0 },
        { crm_salesforce: 0 },
        { crm_pipedrive: 0 },
        { crm: 0 },
        { suite_adobe: 0 },
        { illustrator: 0 },
        { in_design: 0 },
        { photoshop: 0 },
        { marketing_fb: 0 },
        { google_adwards: 0 },
        { insta: 0 },
        { reseaux_sociaux: 0 },
        { keynote: 0 },
        { pages: 0 },
        { gsuite_google: 0 },
        { numbers: 0 },
        { erp_sap: 0 },
        { ciel_gestion: 0 },
        { cegid: 0 },
        { sage_gestion_commercial: 0 },
        { sage_comptabilite: 0 },
        { quadra: 0 },
        { reso_pb: 0 },
        { confiance: 0 },
        { empathie: 0 },
        { intelligence_emo: 0 },
        { communication: 0 },
        { gestion_temps: 0 },
        { gestion_stress: 0 },
        { creativite: 0 },
        { esprit_entre: 0 },
        { audace: 0 },
        { vision_visu: 0 },
        { motivation: 0 },
        { presence: 0 },
        { sens_collectif: 0 },
        { curiosite: 0 },
        { sens_effort: 0 },
        { sport: 0 },
        { passion: 0 },
        { engagement_asso: 0 },
        { autres_softskill: 0 },
        { gestion_admin_compta: 0 },
        { gestion_ope: 0 },
        { gestion_commerciale: 0 },
        { marketing_com_digit: 0 },
        { gestion_fi_controle_gestion: 0 },
        { dsi: 0 },
        { gestion_rh_juridique: 0 },
        { gestion_rel_client: 0 },
        //ajout dans la bdd
        { francais: 0 },
        { anglais: 0 },
        { espagnol: 0 },
        { allemand: 0 },
        { russe: 0 },
        { italien: 0 },
        { chinois: 0 },
        { arabe: 0 }

    ])

    /* quand on clic sur une étoile, elle prend la valeur du clic, si on reclic, elle revient à 0 */
    const onStarClick = (nextValue, index, name) => {
        if (rating[index][name] === nextValue) {
            setRating([...rating, rating[index][name] = 0])
        } else {
            setRating([...rating, rating[index][name] = nextValue]);
        }

    }
  
   /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const { hook, hook2 } = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2

    useEffect(() => {
        setShowSidebar(true)
        setRoleSidebar("admin")
    })


    // create a mission
    const createMissions = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/missions', createm)
            .catch((err) => console.log(err))
        props.history.push('/missions')
    }

    return (
        <div className="admin-mission">
            <div className='profil-card'>
                <p className='name-card'>Profil Admin</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture' />
            </div>
            <h1 className='admin-h1'>Creation d'une mission NeoWorker</h1>
            <div className='notes'>
                <Form onSubmit={createMissions}>
                    <FormGroup>
                        <Input style={{ height: '150px' }} placeholder='Notes :' type="textarea" name="note" id="note"
                            value={createm.note}
                            onChange={(e) => { setCreatem({ ...createm, note: e.target.value }) }} />
                    </FormGroup>



                    <div className='select-mission'>
                    <FormGroup>
                        <Input style={{ textAlign: 'center' }} placeholder="Nom de la mission"
                            id="nom_mission"
                            name="nom_mission"
                            value={createm.nom_mission}
                            type="text"
                            onChange={(e) => { setCreatem({ ...createm, nom_mission: e.target.value }) }} />
                    </FormGroup>



                        <div className='selector-mission'>
                            <FormGroup>
                                <Input type="select"
                                    id="pref_lieu_de_travail"
                                    name="pref_lieu_de_travail"
                                    value={createm.pref_lieu_de_travail}
                                    onChange={(e) => {
                                        setCreatem({
                                            ...createm,
                                            pref_lieu_de_travail: e.target.value == 'Présence en entreprise' ? 'Présence en entreprise' : e.target.value == 'Travail à distance' ? 'Travail à distance' : 'Peu importe'
                                        })}}>
                                    <option>Préférence lieu de travail</option>
                                    <option>Présence en entreprise</option>
                                    <option>Travail à distance</option>
                                    <option>Peu importe</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="type_profil" id='type_profil'
                                    value={createm.type_profil}
                                    onChange={(e) => { setCreatem({ ...createm, type_profil: e.target.value == 'Regular' ? 'Regular' : 'Expert' }) }}>
                                    <option>Profil</option>
                                    <option>Regular</option>
                                    <option>Expert</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="frequence" id='frequence'
                                    value={createm.frequence}
                                    onChange={(e) => { setCreatem({ ...createm, frequence: e.target.value == 'Ponctuelle' ? 'Ponctuelle' : 'Récurrente' }) }}>
                                    <option>Fréquence</option>
                                    <option>Ponctuelle</option>
                                    <option>Récurrente</option>
                                </Input>
                            </FormGroup>
                            <option> 
                                <Input type="select" name="mobilite" id='mobilite'
                                    value={createm.mobilite}
                                    onChange={(e) => { setCreatem({ ...createm, mobilite: e.target.value === 'Non' ? 'Non' : 'Oui' }) }}>
                                    <option>Mobilite</option>
                                    <option>Oui</option>
                                    <option>Non</option>
                                </Input>
                            </option>
                        </div>
                        <div className='champs-mission'>
                        
                            <FormGroup>
                                <Input placeholder="Nom de l'entreprise manque dans la bdd"
                                    id="nom_entreprise"
                                    name="nom_entreprise"
                                    value={createm.nom_entreprise}
                                    type="text"
                                    onChange={(e) => { setCreatem({ ...createm, nom_entreprise: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Email" id="email"
                                    name="email"
                                    value={createm.email}
                                    type="email"
                                    onChange={(e) => { setCreatem({ ...createm, email: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Téléphone"
                                    id="tel"
                                    name="tel"
                                    value={createm.tel}
                                    type="tel"
                                    onChange={(e) => { setCreatem({ ...createm, tel: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Adresse"
                                    id="address"
                                    name="address"
                                    value={createm.address}
                                    type="text"
                                    onChange={(e) => { setCreatem({ ...createm, address: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder={createm.cp}
                                    id="cp"
                                    name="cp"
                                    value={createm.cp}
                                    type="number"
                                    onChange={(e) => { setCreatem({ ...createm, cp: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder={createm.siret}
                                    id="siret"
                                    name="siret"
                                    value={createm.siret}
                                    type="number"
                                    onChange={(e) => { setCreatem({ ...createm, siret: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder={createm.budget}
                                    id="budget"
                                    name="budget"
                                    value={createm.budget}
                                    type="number"
                                    onChange={(e) => { setCreatem({ ...createm, budget: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input className='date-mission' placeholder='Date de début'
                                    id="date_debut"
                                    name="date_debut"
                                    value={createm.date_debut}
                                    type="date"
                                    onChange={(e) => { setCreatem({ ...createm, date_debut: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input className='date-mission' placeholder="Date de fin"
                                    id="date_fin"
                                    name="date_fin"
                                    value={createm.date_fin}
                                    type="date"
                                    onChange={(e) => { setCreatem({ ...createm, date_fin: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder={createm.nb_j_par_mois}
                                    id="nb_j_par_mois"
                                    name="nb_j_par_mois"
                                    value={createm.nb_j_par_mois}
                                    type="number"
                                    onChange={(e) => { setCreatem({ ...createm, nb_j_par_mois: e.target.value }) }} />
                            </FormGroup>
                        </div>
                        <h2 className='mission-title'>Outils</h2>
                        <div className='cards'>
                            <div className='mission-card'>
                                <p>Excel</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[0].Excel}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 0, 'Excel')} />
                            </div>
                            <div className='mission-card'>
                                <p>Powerpoint</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[1].Powerpoint}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 1, 'Powerpoint')} />
                            </div>
                            <div className='mission-card'>
                                <p>Microsoft 365</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[2].microsoft_365}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 2, 'microsoft_365')} />
                            </div>
                            <div className='mission-card'>
                                <p>Word</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[3].Word}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 3, 'Word')} />
                            </div>
                            <div className='mission-card'>
                                <p>CRM Hubspot</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[4].crm_hubspot}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 4, 'crm_hubspot')} />
                            </div>
                            <div className='mission-card'>
                                <p>CRM Salesforce</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[5].crm_salesforce}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 5, 'crm_salesforce')} />
                            </div>
                            <div className='mission-card'>
                                <p>CRM Pipedrive</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[6].crm_pipedrive}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 6, 'crm_pipedrive')} />
                            </div>
                            <div className='mission-card'>
                                <p>CRM </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[7].crm}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 7, 'crm')} />
                            </div>
                            <div className='mission-card'>
                                <p>Suite Adobe </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[8].suite_adobe}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 8, 'suite_adobe')} />
                            </div>
                            <div className='mission-card'>
                                <p>Illustrator </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[9].illustrator}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 9, 'illustrator')} />
                            </div>
                            <div className='mission-card'>
                                <p>In Design </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[10].in_design}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 10, 'in_design')} />
                            </div>
                            <div className='mission-card'>
                                <p>Photoshop </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[11].photoshop}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 11, 'photoshop')} />
                            </div>
                            <div className='mission-card'>
                                <p>Marketing FB </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[12].marketing_fb}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 12, 'marketing_fb')} />
                            </div>
                            <div className='mission-card'>
                                <p>Google adwards </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[13].google_adwards}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 13, 'google_adwards')} />
                            </div>
                            <div className='mission-card'>
                                <p>Instagram </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[14].insta}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 14, 'insta')} />
                            </div>
                            <div className='mission-card'>
                                <p>Reseaux sociaux </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[15].reseaux_sociaux}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 15, 'reseaux_sociaux')} />
                            </div>
                            <div className='mission-card'>
                                <p>Keynote </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[16].keynote}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 16, 'keynote')} />
                            </div>
                            <div className='mission-card'>
                                <p>Pages </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[17].pages}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 17, 'pages')} />
                            </div>
                            <div className='mission-card'>
                                <p>G Suite Google </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[18].gsuite_google}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 18, 'gsuite_google')} />
                            </div>
                            <div className='mission-card'>
                                <p>Numbers </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[19].numbers}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 19, 'numbers')} />
                            </div>
                            <div className='mission-card'>
                                <p>Erp sap </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[20].erp_sap}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 20, 'erp_sap')} />
                            </div>
                            <div className='mission-card'>
                                <p>Ciel Gestion </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[21].ciel_gestion}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 21, 'ciel_gestion')} />
                            </div>
                            <div className='mission-card'>
                                <p>Cegid </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[22].cegid}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 22, 'cegid')} />
                            </div>
                            <div className='mission-card'>
                                <p>Sage gestion commercial </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[23].sage_gestion_commercial}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 23, 'sage_gestion_commercial')} />
                            </div>
                            <div className='mission-card'>
                                <p>Sage comptabilité </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[24].sage_comptabilite}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 24, 'sage_comptabilite')} />
                            </div>
                            <div className='mission-card'>
                                <p>Quadra </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[25].quadra}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 25, 'quadra')} />
                            </div>
                        </div>

                        <h2 className='mission-title'>Soft Skills</h2>
                        <div className='cards'>
                        <div className='mission-card'>
                                <p>Résolution de problèmes</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[26].reso_pb}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 26, 'reso_pb')} />
                            </div>
                            <div className='mission-card'>
                                <p>Confiance</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[27].confiance}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 27, 'confiance')} />
                            </div>
                            <div className='mission-card'>
                                <p>Empathie</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[28].empathie}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 28, 'empathie')} />
                            </div>
                            <div className='mission-card'>
                                <p>Intelligence émotionnelle</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[29].intelligence_emo}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 29, 'intelligence_emo')} />
                            </div>
                            <div className='mission-card'>
                                <p>Communication </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[30].communication}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 30, 'communication')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion du temps </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[31].gestion_temps}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 31, 'gestion_temps')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion du stress </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[32].gestion_stress}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 32, 'gestion_stress')} />
                            </div>
                            <div className='mission-card'>
                                <p>Créativité</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[33].creativite}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 33, 'creativite')} />
                            </div>
                            <div className='mission-card'>
                                <p>Esprit d'entreprise</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[34].esprit_entre}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 34, 'esprit_entre')} />
                            </div>
                            <div className='mission-card'>
                                <p>Audace</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[35].audace}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 35, 'audace')} />
                            </div>
                            <div className='mission-card'>
                                <p>Vision, visualisation </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[36].vision_visu}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 36, 'vision_visu')} />
                            </div>
                            <div className='mission-card'>
                                <p>Motivation</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[37].motivation}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 37, 'motivation')} />
                            </div>
                            <div className='mission-card'>
                                <p>Présence</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[38].presence}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 38, 'presence')} />
                            </div>
                            <div className='mission-card'>
                                <p>Sens collectif</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[39].sens_collectif}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 39, 'sens_collectif')} />
                            </div>
                            <div className='mission-card'>
                                <p>Curiosité</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[40].curiosite}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 40, 'curiosite')} />
                            </div>
                            <div className='mission-card'>
                                <p>Sens de l'effort </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[41].sens_effort}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 41, 'sens_effort')} />
                            </div>
                            <div className='mission-card'>
                                <p>Passion </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[42].passion}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 42, 'passion')} />
                            </div>
                            <div className='mission-card'>
                                <p>Engagement associatif </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[43].engagement_asso}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 43, 'engagement_asso')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion admin compta </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[44].gestion_admin_compta}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 44, 'gestion_admin_compta')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion opérationnelle </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[45].gestion_ope}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 45, 'gestion_ope')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion commerciale </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[46].gestion_commerciale}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 46, 'gestion_commerciale')} />
                            </div>
                            <div className='mission-card'>
                                <p>Marketing commercial digital </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[47].marketing_com_digit}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 47, 'marketing_com_digit')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion Financière</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[48].gestion_fi_controle_gestion}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 48, 'gestion_fi_controle_gestion')} />
                            </div>
                            <div className='mission-card'>
                                <p>Dsi</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[49].dsi}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 49, 'dsi')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion RH - Juridique </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[50].gestion_rh_juridique}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 50, 'gestion_rh_juridique')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion relation client </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={rating[51].gestion_rel_client}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 51, 'gestion_rel_client')} />
                            </div>
                        <div className='champ-libre'>
                            <p>Autres skills </p>
                            <Input type="textaera" name="text" id="autres_skills" value={createm.autres_softskill} onChange={(e)=>setCreatem({...createm, autres_softskill: e.target.value})} />
                        </div>
                        </div>

                    
                    <h2 className='mission-title'>Langues</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Français</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[52].francais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 52, 'francais')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Anglais</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[53].anglais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 53, 'anglais')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Espagnol</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[54].espagnol}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 54, 'espagnol')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Allemand</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[55].allemand}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 55, 'allemand')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Russe</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[56].russe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 56, 'russe')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Italien</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[57].italien}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 57, 'italien')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Chinois</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[58].chinois}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 58, 'chinois')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Arabe</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[59].arabe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 59, 'arabe')}/>
                        </div>
                       <div className='mission-card'>
                            <p>Autres langues</p>
                            <Input type="textaera" name="text" id="langues" value={createm.autres_langue} onChange={(e)=>setCreatem({...createm, autres_langue: e.target.value})} />
                        </div> 
                    </div>
                    <Button className='btn' type='submit' 
                    onClick={() => setCreatem({ ...createm, 
                        excel: rating[0].Excel,
                        powerpoint: rating[1].Powerpoint,
                        microsoft_365: rating[2].microsoft_365,
                        word: rating[3].Word,
                        crm_hubspot: rating[4].crm_hubspot,
                        crm_salesforce: rating[5].crm_salesforce,
                        crm_pipedrive: rating[6].crm_pipedrive,
                        crm:rating[7].crm,
                        suite_adobe:rating[8].suite_adobe,
                        illustrator:rating[9].illustrator,
                        in_design:rating[10].in_design,
                        photoshop:rating[11].photoshop,
                        marketing_fb:rating[12].marketing_fb,
                        google_adwards:rating[13].google_adwards,
                        insta:rating[14].insta,
                        reseaux_sociaux:rating[15].reseaux_sociaux,
                        keynote:rating[16].keynote,
                        pages:rating[17].pages,
                        gsuite_google:rating[18].gsuite_google,
                        numbers:rating[19].numbers,
                        erp_sap:rating[20].erp_sap,
                        ciel_gestion:rating[21].ciel_gestion,
                        cegid:rating[22].cegid,
                        sage_gestion_commercial:rating[23].sage_gestion_commercial,
                        sage_comptabilite:rating[24].sage_comptabilite,
                        quadra:rating[25].quadra,
                        reso_pb:rating[26].reso_pb,
                        confiance:rating[27].confiance,
                        empathie:rating[28].empathie,
                        intelligence_emo:rating[29].intelligence_emo,
                        communication:rating[30].communication,
                        gestion_temps:rating[31].gestion_temps,
                        gestion_stress:rating[32].gestion_stress,
                        creativite:rating[33].creativite,
                        esprit_entre:rating[34].esprit_entre,
                        audace:rating[35].audace,
                        vision_visu:rating[36].vision_visu,
                        motivation:rating[37].motivation,
                        presence:rating[38].presence,
                        sens_collectif:rating[39].sens_collectif,
                        curiosite:rating[40].curiosite,
                        sens_effort:rating[41].sens_effort,
                        passion:rating[42].passion,
                        engagement_asso:rating[43].engagement_asso,
                        gestion_admin_compta:rating[44].gestion_admin_compta,
                        gestion_ope:rating[45].gestion_ope,
                        gestion_commerciale:rating[46].gestion_commerciale,
                        marketing_com_digit:rating[47].marketing_com_digit,
                        gestion_fi_controle_gestion:rating[48].gestion_fi_controle_gestion,
                        dsi:rating[49].dsi,
                        gestion_rh_juridique:rating[50].gestion_rh_juridique,
                        gestion_rel_client:rating[51].gestion_rel_client,
                        francais:rating[52].francais,
                        anglais:rating[53].anglais,
                        espagnol:rating[54].espagnol,
                        allemand:rating[55].allemand,
                        russe:rating[56].russe,
                        italien:rating[57].italien,
                        chinois:rating[58].chinois,
                        arabe:rating[59].arabe,

                            })}>Valider</Button>     
               </div>
            </Form> </div>
           </div>
        
            )
        }
        
export default withRouter(MissionCreateAdmin)