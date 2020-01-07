import React, { useContext, useEffect, useState } from 'react'
import { FormGroup, InputGroupText, Input, Form, Button } from 'reactstrap';
import './Creation_NeoWorker_Page.css'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import { register } from '../UserFunctions'



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
        firstname: "",
        lastname: "",
        address: "",
        mobilite: 0,
        km_max: 0,
        pref_lieu_de_travail: 0,
        disponibilite: 0,
        tjm_min: 0,
        tjm_max: 0,
        password: "",
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
        engagement_asso: "",
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
        const id = Math.floor(Math.random() * 1000000)
        if (idFree.filter(id => id.id !== id)) {
            return id
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
            excel: rating[0].Excel,
            powerpoint: rating[1].Powerpoint,
            microsoft_365: rating[2].microsoft_365,
            word: rating[3].Word,
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
            engagement_asso: rating[42].engagement_asso,
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

    const [prestation, setPrestation] = useState("")

    return (
        <div className="main-div">
            {/*<div className='profil-card'>
                <p className='name-card'>Profil Admin</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476084398?k=6&m=476084398&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture' />
            </div>*/}

            <form className="formulaire-creation-neoworker" onSubmit={onSubmit} >
                <p className="main-title">Création d'un nouveau NeoWorker</p>
                <input className="input-metier"
                    type="text" id="title" name="Métier"
                    placeholder="Métier"
                    value={freelancer.title}
                    required
                    onChange={(e) => { setFreelancer({ ...freelancer, title: e.target.value }) }} />
                <div className="first-div-creation-neoworker">
                    <div className="align-photoprofilwithinput-div">
                        {/*<img className="profil-img-creation" src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476084398?k=6&m=476084398&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" />*/}
                        <div className="align-field-text-div">
                            <input
                                className="input-firstname"
                                placeholder="Prénom" type="text"
                                id="firstname"
                                name="firstname"
                                value={freelancer.firstname}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, firstname: e.target.value }) }} />

                            <input
                                className="input-lastname"
                                placeholder="Nom"
                                type="text" id="lastname" name="lastname"
                                value={freelancer.lastname}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, lastname: e.target.value }) }} />

                            <input
                                className="input-address"
                                placeholder="Adresse"
                                type="text" id="address" name="address"
                                value={freelancer.address}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, address: e.target.value }) }} />

                            <input
                                className="input-cp"
                                placeholder="Code postal"
                                type="text" id="cp" name="cp"
                                value={freelancer.cp}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, cp: e.target.value }) }}
                                maxlength="5" />

                        </div>

                        <div className="align-field-text-div">
                            <input
                                className="input-email" placeholder="Email"
                                type="text" id="email" name="email"
                                value={registerHooks.email}
                                required
                                onChange={(e) => { setRegisterHooks({ ...registerHooks, email: e.target.value }) }} />

                            <input
                                className="input-tel" placeholder="Telephone"
                                type="text" id="tel" name="tel"
                                value={freelancer.tel}
                                required
                                onChange={(e) => { setFreelancer({ ...freelancer, tel: e.target.value }) }} />

                            <input
                                className="input-password"
                                placeholder="Mot de passe" type="text"
                                id="password" name="password"
                                value={registerHooks.password}
                                onChange={(e) => { setRegisterHooks({ ...registerHooks, password: e.target.value }) }}
                            />
                        </div>
                    </div>
                </div>
                <div className="second-div-creation-neoworker">

                    <div className="div-tj_min" >
                        <InputGroupText className="input-group-text">Taux journalier minimum</InputGroupText>
                        <input className="input-tj_min"
                            type="number" id="tjm_min" name="tjm_min"
                            value={freelancer.tjm_min}
                            required
                            onChange={(e) => { setFreelancer({ ...freelancer, tjm_min: e.target.value }) }} />
                    </div>

                    <div className="div-tj_max">
                        <InputGroupText className="input-group-text">Taux journalier maximum</InputGroupText>
                        <input className="input-tj_max" type="number"
                            id="tjm_max" name="tjm_max"
                            value={freelancer.tjm_max}
                            required
                            onChange={(e) => { setFreelancer({ ...freelancer, tjm_max: e.target.value }) }} />
                    </div>
                </div>

                <div className="third-div-creation-neoworker">
                    <div className="div-dispo">
                        <InputGroupText className="input-group-text">Disponibilité (nombres jours/mois)</InputGroupText>
                        <input className="input-dispo" type="number"
                            id="disponibilite" name="disponibilite"
                            value={freelancer.disponibilite}
                            required onChange={(e) => { setFreelancer({ ...freelancer, disponibilite: e.target.value }) }} />
                    </div>
                    <div className="div-pref_lieu_travail">
                        <InputGroupText className="input-group-text">Préférence du lieu de travail</InputGroupText>
                        <FormGroup>
                            <Input className="input-pref_lieu_travail" type="select"
                                id="pref_lieu_de_travail"
                                name="pref_lieu_de_travail"
                                value={freelancer.pref_lieu_de_travail}
                                onChange={(e) => {
                                    setFreelancer({
                                        ...freelancer,
                                        pref_lieu_de_travail: e.target.value == 'Présence en entreprise' ? 'Présence en entreprise' : e.target.value == 'Travail à distance' ? 'Travail à distance' : 'Peu importe'
                                    })
                                }}>
                                <option className="option-class">--Choisir une option--</option>
                                <option>Présence en entreprise</option>
                                <option>Travail à distance</option>
                                <option>Peu importe</option>
                            </Input>
                        </FormGroup>
                    </div>
                </div>

                <div className="fourth-div-creation-neoworker">
                    <div className="div-mobilite">
                        <InputGroupText className="input-group-text">Mobilité</InputGroupText>
                        <FormGroup>
                            <Input className="input-mobilite" type="select" name="mobilite" id='mobilite'
                                value={freelancer.mobilite}
                                onChange={(e) => { setFreelancer({ ...freelancer, mobilite: e.target.value === 'Non' ? 'Non' : 'Oui' }) }}>
                                <option className="option-css">--Choisir une option--</option>
                                <option>Oui</option>
                                <option>Non</option>
                            </Input>
                        </FormGroup>
                    </div>



                    <div className="div-km_max">
                        <InputGroupText className="input-group-text">Km maximum</InputGroupText>
                        <FormGroup>
                            <Input className="input-Km_max" type="select" name="km_max" id='km_max'
                                value={freelancer.km_max}
                                onChange={(e) => { setFreelancer({ ...freelancer, km_max: e.target.value === '10 km' ? '10 km' : e.target.value === '20 km' ? '20 km' : e.target.value === '30 km' ? '30 km' : e.target.value === '40 km' ? '40 km' : e.target.value === '50 km' ? '50 km' : '10 km' }) }}>
                                <option>--Choisir une option--</option>
                                <option>10 km</option>
                                <option>20 km</option>
                                <option>30 km</option>
                                <option>40 km</option>
                                <option>50 km</option>
                            </Input>
                        </FormGroup>
                    </div>
                </div>



                <div><hr className="separator-line"></hr></div>

                {/*<div className="title-softskills"><p>Soft Skills</p></div>*/}

                <div className="div-rating">

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
                            <p>Engagement associatif </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[42].engagement_asso}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 42, 'engagement_asso')} />
                        </div>

                        <div className='champ-libre'>
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



                </div>

                <p className="main-title">Famille de prestations</p>

                <div className="fifth-div-creation-neoworker">


                    <select
                        className="famille-prestation-select" type="select" name="famille-prestation" id='famille-prestation'
                        onChange={(e) => setPrestation(e.target.value)}
                    >
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



                    <div className="prestation-checkbox-div" style={prestation === 'Gestion administrative et comptable' ? { display: "flex" } : { display: "none" }}>
                        <div className="checkbox-and-content">
                            <input type="checkbox" className="checkbox" id="Option 1" name="Option 1" />
                            <label for="Option 1">Assistance et suivi comptable (note de frais, suivi des règlements et de la trésorerie, ...)</label></div>
                        <div className="checkbox-and-content">
                            <input type="checkbox" className="checkbox" id="Option 2" name="Option 2" />
                            <label for="Option 2">Relation avec le cabinet d'expertise comptable</label></div>
                        <div className="checkbox-and-content">
                            <input type="checkbox" className="checkbox" id="Option 3" name="Option 3" />
                            <label for="Option 3">Relances clients</label></div>
                        <div className="checkbox-and-content">
                            <input type="checkbox" className="checkbox" id="Option 4" name="Option 4" />
                            <label for="Option 4">Préparation des éléments de paie (Pointages, congés payés, arrêts maladie, primes, etc…)</label></div>
                        <div className="checkbox-and-content">
                            <input type="checkbox" className="checkbox" id="Option 5" name="Option 5" />
                            <label for="Option 5">Montage de dossier d'agrément</label></div>
                        <div className="checkbox-and-content">
                            <input type="checkbox" className="checkbox" id="Option 6" name="Option 6" />
                            <label for="Option 6">Référencement organismes de formations</label></div>
                    </div>



                    <div className="prestation-checkbox-div" style={prestation === 'Gestion opérationnelle' ? { display: "flex" } : { display: "none" }}>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 7" name="Option 7" />
                            <label for="Option 7">Mise en place, optimisation et formation à l'utilisation de logiciels métiers</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 8" name="Option 8" />
                            <label for="Option 8">Création et mise en place de procédures internes</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 9" name="Option 9" />
                            <label for="Option 9">Création et traitement de base de données</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 10" name="Option 10" />
                            <label for="Option 10">Intendance et gestion des achats</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 11" name="Option 11" />
                            <label for="Option 11">Suivi des dossiers administratifs</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 12" name="Option 12" />
                            <label for="Option 12">Assistanat de direction</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 13" name="Option 13" />
                            <label for="Option 13">Classement de documents</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 14" name="Option 14" />
                            <label for="Option 14">Secrétariat et tenue de l'agenda </label></div>

                    </div>



                    <div className="prestation-checkbox-div" style={prestation === 'Gestion commerciale' ? { display: "flex" } : { display: "none" }}>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 15" name="Option 15" />
                            <label for="Option 15">Stratégie et argumentaire commercial</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 16" name="Option 16" />
                            <label for="Option 16">Création de tableaux de bord, de procédure et pilotage de l'activité commerciale</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 17" name="Option 17" />
                            <label for="Option 17">Prospection / Outbound sales</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 18" name="Option 18" />
                            <label for="Option 18">Intendance et gestion des achats</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 19" name="Option 19" />
                            <label for="Option 19">Réponse aux appels d'offres publics et privés</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 20" name="Option 20" />
                            <label for="Option 20">Administration des ventes</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 21" name="Option 21" />
                            <label for="Option 21">Gestion des stocks</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 22" name="Option 22" />
                            <label for="Option 22">Saisie des données commerciales dans un CRM</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 23" name="Option 23" />
                            <label for="Option 23">Saisie des commandes</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 24" name="Option 24" />
                            <label for="Option 24">Gestion des devis</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 25" name="Option 25" />
                            <label for="Option 25">Facturation</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 26" name="Option 26" />
                            <label for="Option 26">Gestion des réclamations</label></div>
                    </div>



                    <div className="prestation-checkbox-div" style={prestation === "Marketing / Communication / Digital" ? { display: "flex" } : { display: "none" }}>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 27" name="Option 27" />
                            <label for="Option 27">Stratégie marketing et suivi opérationnel</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 28" name="Option 28" />
                            <label for="Option 28">Réalisation d'études de marché</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 29" name="Option 29" />
                            <label for="Option 29">Mise en œuvre d'une stratégie d'inbound marketing</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 30" name="Option 30" />
                            <label for="Option 30">Outbound marketing</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 31" name="Option 31" />
                            <label for="Option 31">Stratégie de communication</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 32" name="Option 32" />
                            <label for="Option 32">Chef de projet externalisé</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 33" name="Option 33" />
                            <label for="Option 33">Création et graphisme</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 34" name="Option 34" />
                            <label for="Option 34">UX Design</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 35" name="Option 35" />
                            <label for="Option 35">UI Design - infographisme</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 36" name="Option 36" />
                            <label for="Option 36">Conception rédaction</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 37" name="Option 37" />
                            <label for="Option 37">Community management</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 40" name="Option 40" />
                            <label for="Option 40">Relation presse</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 41" name="Option 41" />
                            <label for="Option 41">Evènementiel</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 42" name="Option 42" />
                            <label for="Option 42">Partenariats, montage de réseaux de distribution, apporteurs d'affaire</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 43" name="Option 43" />
                            <label for="Option 43">Travaux de traduction</label></div>
                    </div>



                    <div className="prestation-checkbox-div" style={prestation === "Gestion Financière / Contrôle de Gestion" ? { display: "flex" } : { display: "none" }}>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 44" name="Option 44" />
                            <label for="Option 44">Direction administrative et financière externalisée</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 45" name="Option 45" />
                            <label for="Option 45">Montage de dossier de financement / subvention</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 46" name="Option 46" />
                            <label for="Option 46">Contrôle de gestion</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 47" name="Option 47" />
                            <label for="Option 47">Tableau de bord et pilotage financier</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 48" name="Option 48" />
                            <label for="Option 48">Création de business plan et budget prévisionnel</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 49" name="Option 49" />
                            <label for="Option 49">Aide à la cession / rachat d'activités</label></div>
                    </div>



                    <div className="prestation-checkbox-div" style={prestation === "DSI" ? { display: "flex" } : { display: "none" }}>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 50" name="Option 50" />
                            <label for="Option 50">Direction des Systèmes d'informations externalisée</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 51" name="Option 51" />
                            <label for="Option 51">Schéma directeur SI</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 52" name="Option 52" />
                            <label for="Option 52">Architecture fonctionnelle / applicative</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 53" name="Option 53" />
                            <label for="Option 53">Infra / réseau</label></div>
                    </div>



                    <div className="prestation-checkbox-div" style={prestation === "Gestion Ressources Humaines / Juridique" ? { display: "flex" } : { display: "none" }}>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 54" name="Option 54" />
                            <label for="Option 54">Direction des Ressources Humaines externalisée</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 55" name="Option 55" />
                            <label for="Option 55">Gestion des plannings</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 56" name="Option 56" />
                            <label for="Option 56">Suivi des éléments de paie (absences, CP, RTT..)</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 57" name="Option 57" />
                            <label for="Option 57">Etablissement des contrats / éléments de fin de contrats</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 58" name="Option 58" />
                            <label for="Option 58">Suivi mutuelle et medecine du travail</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 59" name="Option 59" />
                            <label for="Option 59">Gestion des conflits</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 60" name="Option 60" />
                            <label for="Option 60">Montage et suivi des dossiers de contentieux</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 61" name="Option 61" />
                            <label for="Option 61">Harmonisation des contrats</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 62" name="Option 62" />
                            <label for="Option 62">Mise en conformité RGPD</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 63" name="Option 63" />
                            <label for="Option 63">Harmonisation des grilles salaires</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 64" name="Option 64" />
                            <label for="Option 64">Gestion prévisionnelle des emplois et des compétences</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 65" name="Option 65" />
                            <label for="Option 65">Recrutement et intégration</label></div>
                    </div>



                    <div className="prestation-checkbox-div" style={prestation === "Gestion de la relation clients" ? { display: "flex" } : { display: "none" }}>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 66" name="Option 66" />
                            <label for="Option 66">Suivi grands comptes</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 67" name="Option 67" />
                            <label for="Option 67">Ventes additionnelles</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 68" name="Option 68" />
                            <label for="Option 68">Mesure de la satisfaction clients</label></div>
                        <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 69" name="Option 69" />
                            <label for="Option 69">Service après ventes</label></div>
                    </div>



                </div>
                <Button className='btn' onClick={idFreeRandomFreeRole} type='submit'>Valider</Button>
                <form />
            </form>
        </div>

    )
}

export default CreationNeoWorkerPage;