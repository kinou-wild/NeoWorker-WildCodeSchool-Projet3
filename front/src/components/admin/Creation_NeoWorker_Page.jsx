import React, { useEffect, useState } from 'react'
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import './FormulaireCreationMission&Neoworker.css'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import { register } from '../UserFunctions'
import profilPic from '../../img/anais.jpg'

const CreationNeoWorkerPage = (props) => {

    //enregistrement d'un user freelancer
    const [registerHooks, setRegisterHooks] = useState({
        role: '',
        email: '',
        password: '',
        freelancerId: '',
        errors: {}
    })

    //hooks de la data freelancer pour get
    const [idFree, setIdFree] = useState([])

    //hooks du post de la data freelancer
    const [freelancer, setFreelancer] = useState({
        id: '',
        img: "",
        title: "",
        note: '',
        firstname: "",
        lastname: "",
        address: "",
        mobilite: 0,
        km_max: 0,
        pref_lieu_de_travail: 0,
        disponibilite: '',
        tjm_min: '',
        tjm_max: '',
        email: "",
        tel: "",
        cp: '',
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

        francais: 0,
        anglais: 0,
        italien: 0,
        chinois: 0,
        russe: 0,
        arabe: 0,
        allemand: 0,
        espagnol: 0,
        autres_langue: "",

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

    useEffect(() => {
        freeData()
    }, [])

    //get de la data du free
    const freeData = (e) => {
        axios.get('http://localhost:5000/freelancers')
            .then(res => setIdFree(res.data))
            .catch(err => console.log(err))
    }

    //le submit du register
    const onSubmit = (e) => {
        e.preventDefault()

        //le post sur la data 
        axios.post('http://localhost:5000/freelancers', freelancer)
            .then(response => console.log(response))
            .catch(err => console.log(err))

        const newUser = {
            role: registerHooks.role,
            email: registerHooks.email,
            password: registerHooks.password,
            freelancerId: freelancer.id
        }

        register(newUser)
            .then(res => {
                props.history.push(`/admin/homepage`)
            })
    }

    //crea d'un id free random
    const randomIdFree = () => {
        const idd = Math.floor(Math.random() * 1000000)
        if (idFree.filter(id => id.id !== idd)) { /////////////////////////vérif si marche /////
            return idd
        } else {
            randomIdFree()
        }
    }

    //function pour mettre l'email du user sur le free et push l'id du free en random
    const idFreeRandomFreeRole = () => {
        setFreelancer({
            ...freelancer,
            email: registerHooks.email,
            password: registerHooks.password,
            id: randomIdFree(),
            excel: rating[0].excel,
            powerpoint: rating[1].powerpoint,
            microsoft_365: rating[2].microsoft_365,
            word: rating[3].word,
            crm_hubspot: rating[4].crm_hubspot,
            crm_salesforce: rating[5].crm_salesforce,
            crm_pipedrive: rating[6].crm_pipedrive,
            crm: rating[7].crm,
            suite_adobe: rating[8].suite_adobe,
            illustrator: rating[9].illustrator,
            in_design: rating[10].in_design,
            photoshop: rating[11].photoshop,
            marketing_fb: rating[12].marketing_fb,
            google_adwards: rating[13].google_adwards,
            insta: rating[14].insta,
            reseaux_sociaux: rating[15].reseaux_sociaux,
            keynote: rating[16].keynote,
            pages: rating[17].pages,
            gsuite_google: rating[18].gsuite_google,
            numbers: rating[19].numbers,
            erp_sap: rating[20].erp_sap,
            ciel_gestion: rating[21].ciel_gestion,
            cegid: rating[22].cegid,
            sage_gestion_commercial: rating[23].sage_gestion_commercial,
            sage_comptabilite: rating[24].sage_comptabilite,
            quadra: rating[25].quadra,
            reso_pb: rating[26].reso_pb,
            confiance: rating[27].confiance,
            empathie: rating[28].empathie,
            intelligence_emo: rating[29].intelligence_emo,
            communication: rating[30].communication,
            gestion_temps: rating[31].gestion_temps,
            gestion_stress: rating[32].gestion_stress,
            creativite: rating[33].creativite,
            esprit_entre: rating[34].esprit_entre,
            audace: rating[35].audace,
            vision_visu: rating[36].vision_visu,
            motivation: rating[37].motivation,
            presence: rating[38].presence,
            sens_collectif: rating[39].sens_collectif,
            curiosite: rating[40].curiosite,
            sens_effort: rating[41].sens_effort,
            francais: rating[43].francais,
            anglais: rating[44].anglais,
            espagnol: rating[45].espagnol,
            allemand: rating[46].allemand,
            russe: rating[47].russe,
            italien: rating[48].italien,
            chinois: rating[49].chinois,
            arabe: rating[50].arabe,

        })
        setRegisterHooks({ ...registerHooks, role: 'neoworker' })
    }

    return (
        <div className="admin-neoworker">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil pic' />
            </div>
            <h1 className='admin-h1'>Création d'un NeoWorker<span className='textModif'>:</span></h1>
            <div className='body'>
                <Form onSubmit={onSubmit} >
                    <FormGroup>
                        <Input style={{ height: '150px' }} placeholder='Notes :' type="textarea" name="note" id="note"
                            value={freelancer.note}
                            required
                            onChange={(e) => { setFreelancer({ ...freelancer, note: e.target.value }) }} />
                    </FormGroup>
                    <div className='champs-mission'>
                        <FormGroup>
                            <Input className="input-metier"
                                type="text" id="title" name="Métier"
                                placeholder="Métier"
                                value={freelancer.title}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, title: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-firstname"
                                placeholder="Prénom" type="text"
                                id="firstname"
                                name="firstname"
                                value={freelancer.firstname}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, firstname: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-lastname"
                                placeholder="Nom"
                                type="text" id="lastname" name="lastname"
                                value={freelancer.lastname}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, lastname: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-address"
                                placeholder="Adresse"
                                type="text" id="address" name="address"
                                value={freelancer.address}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, address: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-cp"
                                placeholder="Code postal"
                                type="number" id="cp" name="cp"
                                min="1"
                                max="99999"
                                value={freelancer.cp}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, cp: e.target.value }) }}
                                maxlength="5" />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-email" placeholder="Email"
                                type="email" id="email" name="email"
                                value={registerHooks.email}
                                required
                                onChange={(e) => { setRegisterHooks({ ...registerHooks, email: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-tel" placeholder="Telephone"
                                type="number" id="tel" name="tel"
                                value={freelancer.tel}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, tel: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-password"
                                placeholder="Mot de passe" type="password"
                                id="password" name="password"
                                required
                                value={registerHooks.password}
                                onChange={(e) => { setRegisterHooks({ ...registerHooks, password: e.target.value }) }} />
                        </FormGroup>

                        <FormGroup>
                            <Input className="input-tj_min" placeholder='Taux journalier minimum'
                                type="number" id="tjm_min" name="tjm_min"
                                min="1"
                                value={freelancer.tjm_min}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, tjm_min: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input className="input-tj_max" placeholder='Taux journalier maximum'
                                type="number"
                                min="1"
                                id="tjm_max" name="tjm_max"
                                value={freelancer.tjm_max}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, tjm_max: e.target.value }) }} />
                        </FormGroup>
                        <div className='selector-mission'>
                        <FormGroup>
                                <Label>Disponibilité(nb jours/mois) <span className='textModif'>:</span></Label>
                                <Input className="input-dispo"
                                    type="number"
                                    min="1"
                                    max="31"
                                    id="disponibilite" name="disponibilite"
                                    value={freelancer.disponibilite}
                                    required onChange={(e) => { setFreelancer({ ...freelancer, disponibilite: e.target.value }) }} />
                            </FormGroup>
                            <FormGroup>
                                <Label>Préférence lieu de travail <span className='textModif'>:</span></Label>
                                <Input type="select"
                                    id="pref_lieu_de_travail"
                                    name="pref_lieu_de_travail"
                                    value={freelancer.pref_lieu_de_travail}
                                    required
                                    onChange={(e) => {
                                        setFreelancer({
                                            ...freelancer,
                                            pref_lieu_de_travail: e.target.value === 'Présence en entreprise' ? 'Présence en entreprise' : e.target.value === 'Travail à distance' ? 'Travail à distance' : 'Peu importe'
                                        })
                                    }}>
                                    <option hidden="true">-</option>
                                    <option>Présence en entreprise</option>
                                    <option>Travail à distance</option>
                                    <option>Peu importe</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label>Mobilité <span className='textModif'>:</span></Label>
                                <Input type="select" name="mobilite" id='mobilite'
                                    value={freelancer.mobilite}
                                    required
                                    onChange={(e) => { setFreelancer({ ...freelancer, mobilite: e.target.value === 'Non' ? 'Non' : 'Oui' }) }}>
                                    <option hidden="true">-</option>
                                    <option>Oui</option>
                                    <option>Non</option>
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Km maximum <span className='textModif'>:</span></Label>
                                <Input type="select" name="km_max" id='km_max'
                                    value={freelancer.km_max}
                                    required
                                    onChange={(e) => { setFreelancer({ ...freelancer, km_max: e.target.value === '10 km' ? '10 km' : e.target.value === '20 km' ? '20 km' : e.target.value === '30 km' ? '30 km' : e.target.value === '40 km' ? '40 km' : e.target.value === '50 km' ? '50 km' : '10 km' }) }}>
                                    <option hidden="true">-</option>
                                    <option>10 km</option>
                                    <option>20 km</option>
                                    <option>30 km</option>
                                    <option>40 km</option>
                                    <option>50 km</option>
                                </Input>
                            </FormGroup>
                        </div>
                    </div>

                    <h2 className='mission-title'>Outils</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Excel</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[0].excel}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 0, 'excel')} />
                        </div>
                        <div className='mission-card'>
                            <p>Powerpoint</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[1].powerpoint}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 1, 'powerpoint')} />
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
                                value={rating[3].word}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 3, 'word')} />
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
                            <p>Autres skills</p>
                            <Input type="textaera" name="text" id="autres_skills" value={freelancer.autres_softskill} onChange={(e) => setFreelancer({ ...freelancer, autres_softskill: e.target.value })} />
                        </div>
                    </div>
                    <h2 className='mission-title'>Langues</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Français</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[43].francais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 43, 'francais')} />
                        </div>
                        <div className='mission-card'>
                            <p>Anglais</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[44].anglais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 44, 'anglais')} />
                        </div>
                        <div className='mission-card'>
                            <p>Espagnol</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[45].espagnol}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 45, 'espagnol')} />
                        </div>
                        <div className='mission-card'>
                            <p>Allemand</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[46].allemand}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 46, 'allemand')} />
                        </div>
                        <div className='mission-card'>
                            <p>Russe</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[47].russe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 47, 'russe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Italien</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[48].italien}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 48, 'italien')} />
                        </div>
                        <div className='mission-card'>
                            <p>Chinois</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[49].chinois}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 49, 'chinois')} />
                        </div>
                        <div className='mission-card'>
                            <p>Arabe</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[50].arabe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 50, 'arabe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Autres langues</p>
                            <Input type="textaera" name="text" id="langues" value={freelancer.autres_langue} onChange={(e) => setFreelancer({ ...freelancer, autres_langue: e.target.value })} />
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
                                <input type="checkbox" className="checkbox" id="Option 1" name="Option 1" onClick={() => setFreelancer({ ...freelancer, assistance_suivi_comptable: document.getElementById('Option 1').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 1">Assistance et suivi comptable (note de frais, suivi des règlements et de la trésorerie, ...)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 2" name="Option 2" onClick={() => setFreelancer({ ...freelancer, relation_accountant: document.getElementById('Option 2').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 2">Relation avec le cabinet d'expertise comptable</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 3" name="Option 3" onClick={() => setFreelancer({ ...freelancer, customer_recovery: document.getElementById('Option 3').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 3">Relances clients</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 4" name="Option 4" onClick={() => setFreelancer({ ...freelancer, payroll_preparation: document.getElementById('Option 4').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 4">Préparation des éléments de paie (Pointages, congés payés, arrêts maladie, primes, etc…)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 5" name="Option 5" onClick={() => setFreelancer({ ...freelancer, assembly_approval_file: document.getElementById('Option 5').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 5">Montage de dossier d'agrément</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 6" name="Option 6" onClick={() => setFreelancer({ ...freelancer, referencing_training_organization: document.getElementById('Option 6').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 6">Référencement organismes de formations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion opérationnelle</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 7" name="Option 7" onClick={() => setFreelancer({ ...freelancer, use_business_software: document.getElementById('Option 7').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 7">Mise en place, optimisation et formation à l'utilisation de logiciels métiers</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 8" name="Option 8" onClick={() => setFreelancer({ ...freelancer, internal_procedure: document.getElementById('Option 8').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 8">Création et mise en place de procédures internes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 9" name="Option 9" onClick={() => setFreelancer({ ...freelancer, database: document.getElementById('Option 9').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 9">Création et traitement de base de données</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 10" name="Option 10" onClick={() => setFreelancer({ ...freelancer, gestion_achat: document.getElementById('Option 10').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 10">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 11" name="Option 11" onClick={() => setFreelancer({ ...freelancer, administrative_file_management: document.getElementById('Option 11').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 11">Suivi des dossiers administratifs</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 12" name="Option 12" onClick={() => setFreelancer({ ...freelancer, management_assistantship: document.getElementById('Option 12').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 12">Assistanat de direction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 13" name="Option 13" onClick={() => setFreelancer({ ...freelancer, filing_documents: document.getElementById('Option 13').checked === true ? true : false })} />
                                <label className="label-prestationGestion administrative et comptable" for="Option 13">Classement de documents</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 14" name="Option 14" onClick={() => setFreelancer({ ...freelancer, secretariat_and_maintenance_agenda: document.getElementById('Option 14').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 14">Secrétariat et tenue de l'agenda </label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion commerciale</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 15" name="Option 15" onClick={() => setFreelancer({ ...freelancer, commercial_strategy_and_sales_pitch: document.getElementById('Option 15').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 15">Stratégie et argumentaire commercial</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 16" name="Option 16" onClick={() => setFreelancer({ ...freelancer, management_of_commercial_activity: document.getElementById('Option 16').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 16">Création de tableaux de bord, de procédure et pilotage de l'activité commerciale</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 17" name="Option 17" onClick={() => setFreelancer({ ...freelancer, prospecting_outbound_sales: document.getElementById('Option 17').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 17">Prospection / Outbound sales</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 18" name="Option 18" onClick={() => setFreelancer({ ...freelancer, gestion_achat2: document.getElementById('Option 18').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 18">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 19" name="Option 19" onClick={() => setFreelancer({ ...freelancer, response_to_pulic_and_private_tenders: document.getElementById('Option 19').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 19">Réponse aux appels d'offres publics et privés</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 20" name="Option 20" onClick={() => setFreelancer({ ...freelancer, sales_administration: document.getElementById('Option 20').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 20">Administration des ventes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 21" name="Option 21" onClick={() => setFreelancer({ ...freelancer, stock_management: document.getElementById('Option 21').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 21">Gestion des stocks</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 22" name="Option 22" onClick={() => setFreelancer({ ...freelancer, business_data_crm: document.getElementById('Option 22').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 22">Saisie des données commerciales dans un CRM</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 23" name="Option 23" onClick={() => setFreelancer({ ...freelancer, order_data_entry: document.getElementById('Option 23').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 23">Saisie des commandes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 24" name="Option 24" onClick={() => setFreelancer({ ...freelancer, quote_management: document.getElementById('Option 24').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 24">Gestion des devis</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 25" name="Option 25" onClick={() => setFreelancer({ ...freelancer, billing: document.getElementById('Option 25').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 25">Facturation</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 26" name="Option 26" onClick={() => setFreelancer({ ...freelancer, claims_management: document.getElementById('Option 26').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 26">Gestion des réclamations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Marketing / Communication / Digital</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 27" name="Option 27" onClick={() => setFreelancer({ ...freelancer, marketing_strategy_and_operational_monitoring: document.getElementById('Option 27').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 27">Stratégie marketing et suivi opérationnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 28" name="Option 28" onClick={() => setFreelancer({ ...freelancer, marketing_study: document.getElementById('Option 28').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 28">Réalisation d'études de marché </label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 29" name="Option 29" onClick={() => setFreelancer({ ...freelancer, implementation_of_inbound_marketing_strategy: document.getElementById('Option 29').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 29">Mise en œuvre d'une stratégie d'inbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 30" name="Option 30" onClick={() => setFreelancer({ ...freelancer, outbound_marketing: document.getElementById('Option 30').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 30">Outbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 31" name="Option 31" onClick={() => setFreelancer({ ...freelancer, communication_strategy: document.getElementById('Option 31').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 31">Stratégie de communication</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 32" name="Option 32" onClick={() => setFreelancer({ ...freelancer, outsourced_project_manager: document.getElementById('Option 32').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 32">Chef de projet externalisé</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 33" name="Option 33" onClick={() => setFreelancer({ ...freelancer, creation_and_graphics: document.getElementById('Option 33').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 33">Création et graphisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 34" name="Option 34" onClick={() => setFreelancer({ ...freelancer, ux_design: document.getElementById('Option 34').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 34">UX Design</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 35" name="Option 35" onClick={() => setFreelancer({ ...freelancer, ui_design_computer_graphics: document.getElementById('Option 35').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 35">UI Design - infographisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 36" name="Option 36" onClick={() => setFreelancer({ ...freelancer, redaction_design: document.getElementById('Option 36').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 36">Conception rédaction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 37" name="Option 37" onClick={() => setFreelancer({ ...freelancer, community_management: document.getElementById('Option 37').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 37">Community management</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 38" name="Option 38" onClick={() => setFreelancer({ ...freelancer, seo_optimization: document.getElementById('Option 38').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 38">Optimisation SEO</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 39" name="Option 39" onClick={() => setFreelancer({ ...freelancer, website_creation: document.getElementById('Option 39').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 39">Création de site web</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 40" name="Option 40" onClick={() => setFreelancer({ ...freelancer, press_relation: document.getElementById('Option 40').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 40">Relation presse</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 41" name="Option 41" onClick={() => setFreelancer({ ...freelancer, event: document.getElementById('Option 41').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 41">Evènementiel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 42" name="Option 42" onClick={() => setFreelancer({ ...freelancer, partnership_distribution_network_and_business_contribution: document.getElementById('Option 42').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 42">Partenariats, montage de réseaux de distribution, apporteurs d'affaire</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 43" name="Option 43" onClick={() => setFreelancer({ ...freelancer, translation_work: document.getElementById('Option 43').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 43">Travaux de traduction</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Financière / Contrôle de Gestion</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 44" name="Option 44" onClick={() => setFreelancer({ ...freelancer, administrative_and_financial_management: document.getElementById('Option 44').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 44">Direction administrative et financière externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 45" name="Option 45" onClick={() => setFreelancer({ ...freelancer, financing_grant_application: document.getElementById('Option 45').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 45">Montage de dossier de financement / subvention</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 46" name="Option 46" onClick={() => setFreelancer({ ...freelancer, management_control: document.getElementById('Option 46').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 46">Contrôle de gestion</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 47" name="Option 47" onClick={() => setFreelancer({ ...freelancer, dashboard_and_financial_management: document.getElementById('Option 47').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 47">Tableau de bord et pilotage financier</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 48" name="Option 48" onClick={() => setFreelancer({ ...freelancer, business_pland_and_provisional_budget: document.getElementById('Option 48').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 48">Création de business plan et budget prévisionnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 49" name="Option 49" onClick={() => setFreelancer({ ...freelancer, transfer_aid_and_buyout_of_business: document.getElementById('Option 49').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 49">Aide à la cession / rachat d'activités</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">DSI</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 50" name="Option 50" onClick={() => setFreelancer({ ...freelancer, outsourced_information_system_management: document.getElementById('Option 50').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 50">Direction des Systèmes d'informations externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 51" name="Option 51" onClick={() => setFreelancer({ ...freelancer, schema_directeur_si: document.getElementById('Option 51').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 51">Schéma directeur SI</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 52" name="Option 52" onClick={() => setFreelancer({ ...freelancer, functional_architecture: document.getElementById('Option 52').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 52">Architecture fonctionnelle / applicative</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 53" name="Option 53" onClick={() => setFreelancer({ ...freelancer, infra_reseau: document.getElementById('Option 53').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 53">Infra / réseau</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Ressources Humaines / Juridique</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 54" name="Option 54" onClick={() => setFreelancer({ ...freelancer, outsourced_hr_department: document.getElementById('Option 54').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 54">Direction des Ressources Humaines externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 55" name="Option 55" onClick={() => setFreelancer({ ...freelancer, plannings_management: document.getElementById('Option 55').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 55">Gestion des plannings</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 56" name="Option 56" onClick={() => setFreelancer({ ...freelancer, payroll_tracking: document.getElementById('Option 56').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 56">Suivi des éléments de paie (absences, CP, RTT..)</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 57" name="Option 57" onClick={() => setFreelancer({ ...freelancer, establishment_of_contracts_end_of_contracts: document.getElementById('Option 57').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 57">Etablissement des contrats / éléments de fin de contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 58" name="Option 58" onClick={() => setFreelancer({ ...freelancer, suivi_mutuelle_medecine_du_travail: document.getElementById('Option 58').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 58">Suivi mutuelle et medecine du travail</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 59" name="Option 59" onClick={() => setFreelancer({ ...freelancer, conflict_management: document.getElementById('Option 59').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 59">Gestion des conflits</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 60" name="Option 60" onClick={() => setFreelancer({ ...freelancer, assembly_and_monitoring_litigation_files: document.getElementById('Option 60').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 60">Montage et suivi des dossiers de contentieux</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 61" name="Option 61" onClick={() => setFreelancer({ ...freelancer, harmonization_of_contracts: document.getElementById('Option 61').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 61">Harmonisation des contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 62" name="Option 62" onClick={() => setFreelancer({ ...freelancer, RGPD_compliation: document.getElementById('Option 62').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 62">Mise en conformité RGPD</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 63" name="Option 63" onClick={() => setFreelancer({ ...freelancer, harmonization_salary_scales: document.getElementById('Option 63').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 63">Harmonisation des grilles salaires</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 64" name="Option 64" onClick={() => setFreelancer({ ...freelancer, provisional_management_of_jobs_and_skill: document.getElementById('Option 64').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 64">Gestion prévisionnelle des emplois et des compétences</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 65" name="Option 65" onClick={() => setFreelancer({ ...freelancer, recruitment_and_integration: document.getElementById('Option 65').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 65">Recrutement et intégration</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion de la relation clients</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 66" name="Option 66" onClick={() => setFreelancer({ ...freelancer, suivi_des_grands_comptes: document.getElementById('Option 66').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 66">Suivi grands comptes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 67" name="Option 67" onClick={() => setFreelancer({ ...freelancer, additional_sales: document.getElementById('Option 67').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 67">Ventes additionnelles</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 68" name="Option 68" onClick={() => setFreelancer({ ...freelancer, measure_of_customers_satisfaction: document.getElementById('Option 68').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 68">Mesure de la satisfaction clients</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 69" name="Option 69" onClick={() => setFreelancer({ ...freelancer, after_sales_service: document.getElementById('Option 69').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 69">Service après ventes</label></div>
                        </div>
                    </div>
                    <Button className='bottom-btn' onClick={idFreeRandomFreeRole} type='submit'>Valider</Button>
                    <form />
                </Form>
            </div>
        </div>
    )
}

export default CreationNeoWorkerPage;