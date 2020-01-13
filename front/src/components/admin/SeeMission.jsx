import React, { useState, useEffect, } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import profilPic from '../../img/anais.jpg'

const SeeMission = (props) => {

    //recup les props du parent 
    const params = props.match.params

    //hooks pour get mission comme son nom l'indique 
    const [getMission, setGetMission] = useState([])

    //hooks pour update une mission
    const [updateMission, setUpdateMission] = useState({

        nom_mission: "",
        nom_entreprise: "",
        email: "",
        note: "",
        nb_j_par_mois: "",
        budget: 0,
        date_debut: '2019-01-01',
        date_fin: '2019-01-01',
        frequence: '',
        status: 0,
        address: "",
        mobilite: 0,
        km_max: 0,
        siret: 0,
        tel: '',
        cp: '',
        pref_lieu_de_travail: 0,
        disponibilite: 0,

        assistance_suivi_comptable: false,
        relation_accountant: false,
        customer_recovery: false,
        payroll_preparation: false,
        assembly_approval_file: false,
        referencing_training_organization: false,
        use_business_software: false,
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
        gestion_achat2: false,
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

    //hooks pour refresh le getDataMission si
    useEffect(() => { getDataMission() }, [])

    const getDataMission = () => {
        axios.get(`http://localhost:5000/mission/${params.id}`)
            .then(res => setGetMission(res.data))
            .catch((err) => console.log(err))
    }

    return (
        <div className="admin-mission">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil picture' />
            </div>
            <h1 className='admin-h1'>Voir la mission NeoWorker <span className='textModif'>:</span></h1>
            <div className='body'>
                <Form onSubmit={getDataMission}>
                    <FormGroup>
                        <Input disabled style={{ height: '150px' }} type="textarea" name="note"
                            value={getMission.note}
                            onChange={(e) => { setUpdateMission({ ...updateMission, note: e.target.value }) }} />
                    </FormGroup>
                    <div className='champs-mission'>
                        <FormGroup>
                            <Input disabled style={{ textAlign: 'center' }}

                                name="nom_mission"
                                value={getMission.nom_mission}
                                type="text"
                                onChange={(e) => { setUpdateMission({ ...updateMission, nom_mission: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled placeholder="Nom de l'entreprise"

                                name="nom_entreprise"
                                value={getMission.nom_entreprise}
                                type="text"
                                onChange={(e) => { setUpdateMission({ ...updateMission, nom_entreprise: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled placeholder="Email"
                                name="email"
                                value={getMission.email}
                                type="email"
                                onChange={(e) => { setUpdateMission({ ...updateMission, email: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled placeholder="Téléphone"
                                name="tel"
                                value={getMission.tel}
                                type="tel"
                                onChange={(e) => { setUpdateMission({ ...updateMission, tel: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled placeholder="Adresse"
                                name="address"
                                value={getMission.address}
                                type="text"
                                onChange={(e) => { setUpdateMission({ ...updateMission, address: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled placeholder='Code Postal'
                                name="cp"
                                value={getMission.cp}
                                type="text"
                                maxLength={5}
                                onChange={(e) => { setUpdateMission({ ...updateMission, cp: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled className='date-mission' placeholder='Date de début'
                                name="date_debut"
                                value={getMission.date_debut}
                                type="date"
                                onChange={(e) => { setUpdateMission({ ...updateMission, date_debut: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled className='date-mission' placeholder="Date de fin"
                                name="date_fin"
                                value={getMission.date_fin}
                                type="date"
                                onChange={(e) => { setUpdateMission({ ...updateMission, date_fin: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled placeholder='Nombre de jour(s) par mois'
                                name="nb_j_par_mois"
                                value={getMission.nb_j_par_mois}
                                type="number"
                                max="31"
                                onChange={(e) => { setUpdateMission({ ...updateMission, nb_j_par_mois: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled placeholder='Siret'
                                name="siret"
                                value={getMission.siret}
                                type="number"
                                onChange={(e) => { setUpdateMission({ ...updateMission, siret: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input disabled placeholder='Budget'
                                name="budget"
                                value={getMission.budget}
                                type="number"
                                onChange={(e) => { setUpdateMission({ ...updateMission, budget: e.target.value }) }} />
                        </FormGroup>
                    </div>

                    <div className='selector-mission'>
                        <FormGroup>
                            <Label>Préférence lieu de travail <span className='textModif'>:</span></Label>
                            <Input disabled type="select"

                                name="pref_lieu_de_travail"
                                value={getMission.pref_lieu_de_travail}
                                onChange={(e) => {
                                    setUpdateMission({
                                        ...updateMission,
                                        pref_lieu_de_travail: e.target.value == 'Présence en entreprise' ? 'Présence en entreprise' : e.target.value == 'Travail à distance' ? 'Travail à distance' : 'Peu importe'
                                    })
                                }}>
                                <option hidden="true">-</option>
                                <option>Présence en entreprise</option>
                                <option>Travail à distance</option>
                                <option>Peu importe</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Profil <span className='textModif'>:</span></Label>
                            <Input disabled type="select" name="type_profil"
                                value={getMission.type_profil}
                                onChange={(e) => { setUpdateMission({ ...updateMission, type_profil: e.target.value == 'Regular' ? 'Regular' : 'Expert' }) }}>
                                <option hidden="true">-</option>
                                <option>Regular</option>
                                <option>Expert</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Fréquence <span className='textModif'>:</span></Label>
                            <Input disabled type="select" name="frequence"
                                value={getMission.frequence}
                                onChange={(e) => { setUpdateMission({ ...updateMission, frequence: e.target.value == 'Ponctuelle' ? 'Ponctuelle' : 'Récurrente' }) }}>
                                <option hidden="true">-</option>
                                <option>Ponctuelle</option>
                                <option>Récurrente</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Mobilité <span className='textModif'>:</span></Label>
                            <Input disabled type="select" name="mobilite"
                                value={getMission.mobilite}
                                onChange={(e) => { setUpdateMission({ ...updateMission, mobilite: e.target.value === 'Non' ? 'Non' : 'Oui' }) }}>
                                <option hidden="true">-</option>
                                <option>Oui</option>
                                <option>Non</option>
                            </Input>
                        </FormGroup>
                    </div>

                    <h2 className='mission-title'>Outils</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Excel</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.excel}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Powerpoint</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.powerpoint}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Microsoft 365</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.microsoft_365}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Word</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.word}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Hubspot</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.crm_hubspot}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Salesforce</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.crm_salesforce}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Pipedrive</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.crm_pipedrive}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>CRM </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.crm}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Suite Adobe </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.suite_adobe}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Illustrator </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.illustrator}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>In Design </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.in_design}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Photoshop </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.photoshop}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Marketing FB </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.marketing_fb}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Google adwards </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.google_adwards}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Instagram </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.insta}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Reseaux sociaux </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.reseaux_sociaux}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Keynote </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.keynote}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Pages </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.pages}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>G Suite Google </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.gsuite_google}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Numbers </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.numbers}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Erp sap </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.erp_sap}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Ciel Gestion </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.ciel_gestion}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Cegid </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.cegid}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sage gestion commercial </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.sage_gestion_commercial}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sage comptabilité </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.sage_comptabilite}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Quadra </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.quadra}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                    </div>
                    <h2 className='mission-title'>Soft Skills</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Résolution de problèmes</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.reso_pb}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Confiance</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.confiance}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Empathie</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.empathie}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Intelligence émotionnelle</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.intelligence_emo}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Communication </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.communication}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du temps </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.gestion_temps}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du stress </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.gestion_stress}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Créativité</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.creativite}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Esprit d'entreprise</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.esprit_entre}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Audace</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.audace}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Vision, visualisation </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.vision_visu}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Motivation</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.motivation}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Présence</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.presence}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sens collectif</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.sens_collectif}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Curiosité</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.curiosite}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Sens de l'effort </p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.sens_effort}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='champ-libre'>
                            <p style={{ minWidth: '110px', padding: '5px 10px' }}>Autres skills </p>
                            <Input disabled style={{ marginRight: '5px' }} type="textaera" name="text" value={getMission.autres_softskill} onChange={(e) => setUpdateMission({ ...updateMission, autres_softskill: e.target.value })} />
                        </div>
                    </div>
                    <h2 className='mission-title'>Langues</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Français</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.francais}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Anglais</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.anglais}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Espagnol</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.espagnol}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Allemand</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.allemand}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Russe</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.russe}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Italien</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.italien}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Chinois</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.chinois}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Arabe</p>
                            <StarRatingComponent
                                starCount={3}
                                value={getMission.arabe}
                                emptyStarColor={`#C4C4C4`}
                            />
                        </div>
                        <div className='mission-card'>
                            <p>Autres langues</p>
                            <Input disabled style={{ marginRight: '5px' }}
                                type="textaera"
                                name="text"
                                value={getMission.autres_langue}
                                onChange={(e) => setUpdateMission({ ...updateMission, autres_langue: e.target.value })} />
                        </div>
                    </div>


                    <h2 className='mission-title'>Famille de prestations</h2>
                    <div>

                        {/*<select
                        className="famille-prestation-select" type="select" name="famille-prestation" id='famille-prestation'
                        onChange={(e) => setPrestation(e.target.value)}>
                        <option>--Choisir une option--</option>
                        <option value="Gestion administrative et comptable">Gestion administrative et comptable</option>
                        <option value="Gestion opérationnelle">Gestion opérationnelle</option>
                        <option value="Gestion commerciale">Gestion commerciale</option>
                        <option value="Marketing / Communication / Digital">Marketing / Communication / Digital</option>
                        <option value="Gestion Financière / Contrôle de Gestion">Gestion Financière / Contrôle de Gestion</option>
                        <option value="DSI">DSI</option>
                        <option value="Gestion Ressources Humaines / Juridique">Gestion Ressources Humaines / Juridique</option>
                        <option value="Gestion de la relation clients">Gestion de la relation clients</option>
                    </select>
                    */}

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion administrative et comptable</p>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 1" name="Option 1" checked={getMission.assistance_suivi_comptable === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 1">Assistance et suivi comptable (note de frais, suivi des règlements et de la trésorerie, ...)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 2" name="Option 2" checked={getMission.relation_accountant === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 2">Relation avec le cabinet d'expertise comptable</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 3" name="Option 3" checked={getMission.customer_recovery === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 3">Relances clients</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 4" name="Option 4" checked={getMission.payroll_preparation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 4">Préparation des éléments de paie (Pointages, congés payés, arrêts maladie, primes, etc…)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 5" name="Option 5" checked={getMission.assembly_approval_file === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 5">Montage de dossier d'agrément</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 6" name="Option 6" checked={getMission.referencing_training_organization === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 6">Référencement organismes de formations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion opérationnelle</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 7" name="Option 7" checked={getMission.use_business_software === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 7">Mise en place, optimisation et formation à l'utilisation de logiciels métiers</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 8" name="Option 8" checked={getMission.internal_procedure === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 8">Création et mise en place de procédures internes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 9" name="Option 9" checked={getMission.database === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 9">Création et traitement de base de données</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 10" name="Option 10" checked={getMission.gestion_achat === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 10">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 11" name="Option 11" checked={getMission.administrative_file_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 11">Suivi des dossiers administratifs</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 12" name="Option 12" checked={getMission.management_assistantship === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 12">Assistanat de direction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 13" name="Option 13" checked={getMission.filing_documents === true ? "checked" : ""} />
                                <label className="label-prestationGestion administrative et comptable" for="Option 13">Classement de documents</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 14" name="Option 14" checked={getMission.secretariat_and_maintenance_agenda === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 14">Secrétariat et tenue de l'agenda </label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion commerciale</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 15" name="Option 15" checked={getMission.commercial_strategy_and_sales_pitch === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 15">Stratégie et argumentaire commercial</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 16" name="Option 16" checked={getMission.management_of_commercial_activity === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 16">Création de tableaux de bord, de procédure et pilotage de l'activité commerciale</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 17" name="Option 17" checked={getMission.prospecting_outbound_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 17">Prospection / Outbound sales</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 18" name="Option 18" checked={getMission.gestion_achat2 === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 18">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 19" name="Option 19" checked={getMission.response_to_pulic_and_private_tenders === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 19">Réponse aux appels d'offres publics et privés</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 20" name="Option 20" checked={getMission.sales_administration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 20">Administration des ventes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 21" name="Option 21" checked={getMission.stock_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 21">Gestion des stocks</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 22" name="Option 22" checked={getMission.business_data_crm === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 22">Saisie des données commerciales dans un CRM</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 23" name="Option 23" checked={getMission.order_data_entry === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 23">Saisie des commandes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 24" name="Option 24" checked={getMission.quote_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 24">Gestion des devis</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 25" name="Option 25" checked={getMission.billing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 25">Facturation</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 26" name="Option 26" checked={getMission.claims_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 26">Gestion des réclamations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Marketing / Communication / Digital</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 27" name="Option 27" checked={getMission.marketing_strategy_and_operational_monitoring === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 27">Stratégie marketing et suivi opérationnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 28" name="Option 28" checked={getMission.marketing_study === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 28">Réalisation d'études de marché </label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 29" name="Option 29" checked={getMission.implementation_of_inbound_marketing_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 29">Mise en œuvre d'une stratégie d'inbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 30" name="Option 30" checked={getMission.outbound_marketing === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 30">Outbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 31" name="Option 31" checked={getMission.communication_strategy === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 31">Stratégie de communication</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 32" name="Option 32" checked={getMission.outsourced_project_manager === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 32">Chef de projet externalisé</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 33" name="Option 33" checked={getMission.creation_and_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 33">Création et graphisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 34" name="Option 34" checked={getMission.ux_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 34">UX Design</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 35" name="Option 35" checked={getMission.ui_design_computer_graphics === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 35">UI Design - infographisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 36" name="Option 36" checked={getMission.redaction_design === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 36">Conception rédaction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 37" name="Option 37" checked={getMission.community_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 37">Community management</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 38" name="Option 38" checked={getMission.seo_optimization === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 38">Optimisation SEO</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 39" name="Option 39" checked={getMission.website_creation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 39">Création de site web</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 40" name="Option 40" checked={getMission.press_relation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 40">Relation presse</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 41" name="Option 41" checked={getMission.event === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 41">Evènementiel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 42" name="Option 42" checked={getMission.partnership_distribution_network_and_business_contribution === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 42">Partenariats, montage de réseaux de distribution, apporteurs d'affaire</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 43" name="Option 43" checked={getMission.translation_work === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 43">Travaux de traduction</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Financière / Contrôle de Gestion</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 44" name="Option 44" checked={getMission.administrative_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 44">Direction administrative et financière externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 45" name="Option 45" checked={getMission.financing_grant_application === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 45">Montage de dossier de financement / subvention</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 46" name="Option 46" checked={getMission.management_control === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 46">Contrôle de gestion</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 47" name="Option 47" checked={getMission.dashboard_and_financial_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 47">Tableau de bord et pilotage financier</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 48" name="Option 48" checked={getMission.business_pland_and_provisional_budget === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 48">Création de business plan et budget prévisionnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 49" name="Option 49" checked={getMission.transfer_aid_and_buyout_of_business === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 49">Aide à la cession / rachat d'activités</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">DSI</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 50" name="Option 50" checked={getMission.outsourced_information_system_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 50">Direction des Systèmes d'informations externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 51" name="Option 51" checked={getMission.schema_directeur_si === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 51">Schéma directeur SI</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 52" name="Option 52" checked={getMission.functional_architecture === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 52">Architecture fonctionnelle / applicative</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 53" name="Option 53" checked={getMission.infra_reseau === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 53">Infra / réseau</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Ressources Humaines / Juridique</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 54" name="Option 54" checked={getMission.outsourced_hr_department === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 54">Direction des Ressources Humaines externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 55" name="Option 55" checked={getMission.plannings_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 55">Gestion des plannings</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 56" name="Option 56" checked={getMission.payroll_tracking === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 56">Suivi des éléments de paie (absences, CP, RTT..)</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 57" name="Option 57" checked={getMission.establishment_of_contracts_end_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 57">Etablissement des contrats / éléments de fin de contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 58" name="Option 58" checked={getMission.suivi_mutuelle_medecine_du_travail === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 58">Suivi mutuelle et medecine du travail</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 59" name="Option 59" checked={getMission.conflict_management === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 59">Gestion des conflits</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 60" name="Option 60" checked={getMission.assembly_and_monitoring_litigation_files === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 60">Montage et suivi des dossiers de contentieux</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 61" name="Option 61" checked={getMission.harmonization_of_contracts === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 61">Harmonisation des contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 62" name="Option 62" checked={getMission.RGPD_compliation === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 62">Mise en conformité RGPD</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 63" name="Option 63" checked={getMission.harmonization_salary_scales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 63">Harmonisation des grilles salaires</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 64" name="Option 64" checked={getMission.provisional_management_of_jobs_and_skill === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 64">Gestion prévisionnelle des emplois et des compétences</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 65" name="Option 65" checked={getMission.recruitment_and_integration === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 65">Recrutement et intégration</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion de la relation clients</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 66" name="Option 66" checked={getMission.suivi_des_grands_comptes === true ? "checked" : ""}/>
                                <label className="label-prestation" for="Option 66">Suivi grands comptes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 67" name="Option 67" checked={getMission.additional_sales === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 67">Ventes additionnelles</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 68" name="Option 68" checked={getMission.measure_of_customers_satisfaction === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 68">Mesure de la satisfaction clients</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 69" name="Option 69" checked={getMission.after_sales_service === true ? "checked" : ""} />
                                <label className="label-prestation" for="Option 69">Service après ventes</label></div>
                        </div>
                    </div>

                </Form>
            </div>
        </div >
    )
}

export default SeeMission;