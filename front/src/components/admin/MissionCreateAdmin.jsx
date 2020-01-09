import React, { useState } from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import './MissionCreateAdmin.css'
import axios from 'axios'
import { withRouter } from 'react-router-dom';
import profilPic from '../../img/anais.jpg'



/* -------- Page creation mission ---------- */
const MissionCreateAdmin = (props) => {

    // hooks to create a mission
    const [createm, setCreatem] = useState({
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
        mobilite: "",
        km_max: 0,
        tel: '',
        cp: '',
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
        autres_softskill: "",
        assistance_suivi_comptable: false,
        relation_accountant: false,
        customer_recovery: false,
        payroll_preparation: false,
        assembly_approval_file: false,
        referencing_training_organization:false,
        use_business_software:false,
        internal_procedure: false,
        database: false,
        gestion_achat: false,
        administrative_file_management: false,
        management_assistantship: false,
        secretariat_and_maintenance_agenda: false,
        filing_documents: false,
        commercial_strategy_and_sales_pitch: false,
        management_of_commercial_activity: false,
        prospecting_outbound_sales: false,
        response_to_pulic_and_private_tenders: false,
        sales_administration: false,
        stock_management: false,
        business_data_crm: false,
        order_data_entry: false,
        quote_management: false,
        billing: false,
        claims_management: false,
        marketing_strategy_and_operational_monitoring: false,
        marketing_study: false,
        implementation_of_inbound_marketing_strategy: false,
        outbound_marketing: false,
        communication_strategy: false,
        outsourced_project_manager: false,
        creation_and_graphics: false,
        ux_design: false,
        ui_design_computer_graphics: false,
        redaction_design: false,
        seo_optimization: false,
        website_creation: false,
        community_management: false,
        press_relation: false,
        event: false,
        partnership_distribution_network_and_business_contribution: false,
        translation_work: false,
        administrative_and_financial_management: false,
        financing_grant_application: false,
        management_control: false,
        dashboard_and_financial_management: false,
        business_pland_and_provisional_budget: false,
        transfer_aid_and_buyout_of_business: false,
        outsourced_information_system_management: false,
        schema_directeur_si: false,
        functional_architecture: false,
        infra_reseau: false,
        outsourced_hr_department: false,
        plannings_management: false,
        payroll_tracking: false,
        establishment_of_contracts_end_of_contracts: false,
        suivi_mutuelle_medecine_du_travail: false,
        conflict_management: false,
        assembly_and_monitoring_litigation_files: false,
        harmonization_of_contracts: false,
        RGPD_compliation: false,
        harmonization_salary_scales: false,
        provisional_management_of_jobs_and_skill: false,
        recruitment_and_integration: false,
        suivi_des_grands_comptes: false,
        additional_sales: false,
        measure_of_customers_satisfaction: false,
        after_sales_service: false,

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
        { excel: 0 },
        { powerpoint: 0 },
        { microsoft_365: 0 },
        { word: 0 },
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
        { autres_softskill: 0 },
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


    // create a mission
    const createMissions = async (e) => {
        e.preventDefault()
        await axios.post('http://localhost:5000/missions', createm)
            .catch((err) => console.log(err))
        props.history.push('/admin/missions')
    }

    return (
        <div className="admin-mission">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil picture' />
            </div>
            <h1 className='admin-h1'>Creation d'une mission NeoWorker <span className='textModif'>:</span></h1>
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
                                <Label>Préférence lieu de travail <span className='textModif'>:</span></Label>
                                <Input type="select"
                                    id="pref_lieu_de_travail"
                                    name="pref_lieu_de_travail"
                                    value={createm.pref_lieu_de_travail}
                                    onChange={(e) => {
                                        setCreatem({
                                            ...createm,
                                            pref_lieu_de_travail: e.target.value == 'Présence en entreprise' ? 'Présence en entreprise' : e.target.value == 'Travail à distance' ? 'Travail à distance' : 'Peu importe'})}}>
                                    <option hidden="true">-</option>
                                    <option>Présence en entreprise</option>
                                    <option>Travail à distance</option>
                                    <option>Peu importe</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                            <Label>Profil <span className='textModif'>:</span></Label>
                                <Input type="select" name="type_profil" id='type_profil'
                                    value={createm.type_profil}
                                    onChange={(e) => { setCreatem({ ...createm, type_profil: e.target.value == 'Regular' ? 'Regular' : 'Expert' }) }}>
                                    <option hidden="true">-</option>
                                    <option>Regular</option>
                                    <option>Expert</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                            <Label>Fréquence <span className='textModif'>:</span></Label>
                                <Input type="select" name="frequence" id='frequence'
                                    value={createm.frequence}
                                    onChange={(e) => { setCreatem({ ...createm, frequence: e.target.value == 'Ponctuelle' ? 'Ponctuelle' : 'Récurrente' }) }}>
                                    <option hidden="true">-</option>
                                    <option>Ponctuelle</option>
                                    <option>Récurrente</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                            <Label> Mobilité <span className='textModif'>:</span></Label>
                                <Input type="select" name="mobilite" id='mobilite'
                                    value={createm.mobilite}
                                    onChange={(e) => { setCreatem({ ...createm, mobilite: e.target.value === 'Non' ? 'Non' : 'Oui' }) }}>
                                    <option hidden="true">-</option>
                                    <option>Oui</option>
                                    <option>Non</option>
                                </Input>
                                </FormGroup>
                        </div>
                        <div className='champs-mission'>
                        
                            <FormGroup>
                                <Input placeholder="Nom de l'entreprise"
                                    id="nom_entreprise"
                                    name="nom_entreprise"
                                    value={createm.nom_entreprise}
                                    type="text"
                                    onChange={(e) => { setCreatem({ ...createm, nom_entreprise: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Email"
                                    id="email"
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
                                <Input placeholder="Code Postal"
                                    id="cp"
                                    name="cp"
                                    value={createm.cp}
                                    type="number"
                                    max={9999}
                                    onChange={(e) => { setCreatem({ ...createm, cp: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder='Siret'
                                    id="siret"
                                    name="siret"
                                    value={createm.siret}
                                    type="number"
                                    onChange={(e) => { setCreatem({ ...createm, siret: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder='Budget'
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
                                <Input placeholder='Nombre de jour(s) par mois'
                                    id="nb_j_par_mois"
                                    name="nb_j_par_mois"
                                    value={createm.nb_j_par_mois}
                                    type="number" 
                                    min="1" 
                                    max="31"
                                    onChange={(e) => { setCreatem({ ...createm, nb_j_par_mois: e.target.value }) }} />
                            </FormGroup>
                        </div>
                        <h2 className='mission-title'>Outils</h2>
                        <div className='cards'>
                            <div className='mission-card'>
                                <p>Excel</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[0].excel}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 0, 'excel')} />
                            </div>
                            <div className='mission-card'>
                                <p>Powerpoint</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[1].powerpoint}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 1, 'powerpoint')} />
                            </div>
                            <div className='mission-card'>
                                <p>Microsoft 365</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[2].microsoft_365}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 2, 'microsoft_365')} />
                            </div>
                            <div className='mission-card'>
                                <p>Word</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[3].word}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 3, 'word')} />
                            </div>
                            <div className='mission-card'>
                                <p>CRM Hubspot</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[4].crm_hubspot}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 4, 'crm_hubspot')} />
                            </div>
                            <div className='mission-card'>
                                <p>CRM Salesforce</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[5].crm_salesforce}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 5, 'crm_salesforce')} />
                            </div>
                            <div className='mission-card'>
                                <p>CRM Pipedrive</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[6].crm_pipedrive}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 6, 'crm_pipedrive')} />
                            </div>
                            <div className='mission-card'>
                                <p>CRM </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[7].crm}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 7, 'crm')} />
                            </div>
                            <div className='mission-card'>
                                <p>Suite Adobe </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[8].suite_adobe}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 8, 'suite_adobe')} />
                            </div>
                            <div className='mission-card'>
                                <p>Illustrator </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[9].illustrator}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 9, 'illustrator')} />
                            </div>
                            <div className='mission-card'>
                                <p>In Design </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[10].in_design}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 10, 'in_design')} />
                            </div>
                            <div className='mission-card'>
                                <p>Photoshop </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[11].photoshop}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 11, 'photoshop')} />
                            </div>
                            <div className='mission-card'>
                                <p>Marketing FB </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[12].marketing_fb}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 12, 'marketing_fb')} />
                            </div>
                            <div className='mission-card'>
                                <p>Google adwards </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[13].google_adwards}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 13, 'google_adwards')} />
                            </div>
                            <div className='mission-card'>
                                <p>Instagram </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[14].insta}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 14, 'insta')} />
                            </div>
                            <div className='mission-card'>
                                <p>Reseaux sociaux </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[15].reseaux_sociaux}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 15, 'reseaux_sociaux')} />
                            </div>
                            <div className='mission-card'>
                                <p>Keynote </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[16].keynote}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 16, 'keynote')} />
                            </div>
                            <div className='mission-card'>
                                <p>Pages </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[17].pages}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 17, 'pages')} />
                            </div>
                            <div className='mission-card'>
                                <p>G Suite Google </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[18].gsuite_google}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 18, 'gsuite_google')} />
                            </div>
                            <div className='mission-card'>
                                <p>Numbers </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[19].numbers}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 19, 'numbers')} />
                            </div>
                            <div className='mission-card'>
                                <p>Erp sap </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[20].erp_sap}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 20, 'erp_sap')} />
                            </div>
                            <div className='mission-card'>
                                <p>Ciel Gestion </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[21].ciel_gestion}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 21, 'ciel_gestion')} />
                            </div>
                            <div className='mission-card'>
                                <p>Cegid </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[22].cegid}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 22, 'cegid')} />
                            </div>
                            <div className='mission-card'>
                                <p>Sage gestion commercial </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[23].sage_gestion_commercial}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 23, 'sage_gestion_commercial')} />
                            </div>
                            <div className='mission-card'>
                                <p>Sage comptabilité </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[24].sage_comptabilite}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 24, 'sage_comptabilite')} />
                            </div>
                            <div className='mission-card'>
                                <p>Quadra </p>
                                <StarRatingComponent
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
                                    starCount={3}
                                    value={rating[26].reso_pb}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 26, 'reso_pb')} />
                            </div>
                            <div className='mission-card'>
                                <p>Confiance</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[27].confiance}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 27, 'confiance')} />
                            </div>
                            <div className='mission-card'>
                                <p>Empathie</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[28].empathie}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 28, 'empathie')} />
                            </div>
                            <div className='mission-card'>
                                <p>Intelligence émotionnelle</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[29].intelligence_emo}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 29, 'intelligence_emo')} />
                            </div>
                            <div className='mission-card'>
                                <p>Communication </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[30].communication}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 30, 'communication')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion du temps </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[31].gestion_temps}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 31, 'gestion_temps')} />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion du stress </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[32].gestion_stress}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 32, 'gestion_stress')} />
                            </div>
                            <div className='mission-card'>
                                <p>Créativité</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[33].creativite}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 33, 'creativite')} />
                            </div>
                            <div className='mission-card'>
                                <p>Esprit d'entreprise</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[34].esprit_entre}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 34, 'esprit_entre')} />
                            </div>
                            <div className='mission-card'>
                                <p>Audace</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[35].audace}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 35, 'audace')} />
                            </div>
                            <div className='mission-card'>
                                <p>Vision, visualisation </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[36].vision_visu}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 36, 'vision_visu')} />
                            </div>
                            <div className='mission-card'>
                                <p>Motivation</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[37].motivation}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 37, 'motivation')} />
                            </div>
                            <div className='mission-card'>
                                <p>Présence</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[38].presence}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 38, 'presence')} />
                            </div>
                            <div className='mission-card'>
                                <p>Sens collectif</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[39].sens_collectif}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 39, 'sens_collectif')} />
                            </div>
                            <div className='mission-card'>
                                <p>Curiosité</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[40].curiosite}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 40, 'curiosite')} />
                            </div>
                            <div className='mission-card'>
                                <p>Sens de l'effort </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={rating[41].sens_effort}
                                    emptyStarColor={`#C4C4C4`}
                                    onStarClick={(e) => onStarClick(e, 41, 'sens_effort')} />
                            </div>                          
                        <div className='champ-libre'>
                            <p style={{minWidth:'110px', padding:'5px 10px'}}>Autres skills </p>
                            <Input style={{marginRight:'5px'}} type="textaera" name="text" id="autres_skills" value={createm.autres_softskill} onChange={(e)=>setCreatem({...createm, autres_softskill: e.target.value})} />
                        </div>
                        </div>

                    
                    <h2 className='mission-title'>Langues</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Français</p>
                            <StarRatingComponent 
                                starCount={3}
                                value={rating[43].francais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 43, 'francais')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Anglais</p>
                            <StarRatingComponent 
                                starCount={3}
                                value={rating[44].anglais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 44, 'anglais')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Espagnol</p>
                            <StarRatingComponent 
                                starCount={3}
                                value={rating[45].espagnol}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 45, 'espagnol')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Allemand</p>
                            <StarRatingComponent 
                                starCount={3}
                                value={rating[46].allemand}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 46, 'allemand')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Russe</p>
                            <StarRatingComponent 
                                starCount={3}
                                value={rating[47].russe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 47, 'russe')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Italien</p>
                            <StarRatingComponent 
                                starCount={3}
                                value={rating[48].italien}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 48, 'italien')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Chinois</p>
                            <StarRatingComponent 
                                starCount={3}
                                value={rating[49].chinois}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 49, 'chinois')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Arabe</p>
                            <StarRatingComponent 
                                starCount={3}
                                value={rating[50].arabe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 50, 'arabe')}/>
                        </div>
                    <div className='mission-card'>
                            <p>Autres langues</p>
                            <Input style={{marginRight:'5px'}} 
                            type="textaera" 
                            name="text" 
                            id="langues" 
                            value={createm.autres_langue} 
                            onChange={(e)=>setCreatem({...createm, autres_langue: e.target.value})} />
                        </div> 
                    </div>
                    <Button className='btn' type='submit' 
                    onClick={() => setCreatem({ ...createm, 
                        excel: rating[0].excel,
                        powerpoint: rating[1].powerpoint,
                        microsoft_365: rating[2].microsoft_365,
                        word: rating[3].word,
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

                        francais: rating[43].francais,
                        anglais: rating[44].anglais,
                        espagnol: rating[45].espagnol,
                        allemand: rating[46].allemand,
                        russe: rating[47].russe,
                        italien: rating[48].italien,
                        chinois: rating[49].chinois,
                        arabe: rating[50].arabe,

                            })}>Valider</Button>     
               </div>
            </Form> </div>
           </div>
        
            )
        }
        
export default withRouter(MissionCreateAdmin)