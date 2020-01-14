import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import profilPic from '../../img/anais.jpg'

const UpdateDeleteMission = (props) => {

    const params = props.match.params
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

    /* quand on clic sur une étoile, elle prend la valeur du clic, si on reclic, elle revient à 0 */
    const onStarClick = (nextValue, name) => {
        if (updateMission[name] === nextValue) {
            setUpdateMission({ ...updateMission, [name]: null })
        } else {
            setUpdateMission({ ...updateMission, [name]: nextValue });
        }
    }

    useEffect(() => { getDataMission() }, [])

    const getDataMission = async () => {
        await axios.get(`http://localhost:5000/mission/${params.id}`)
            .then(res => setUpdateMission(res.data))
            .catch((err) => console.log(err))
    }

    const updateDataMission = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/mission/${params.id}`, updateMission)
            .catch((err) => console.log(err))
            .then(x => {
                props.history.push('/admin/missions')
            }
            )
    }

    return (
        <div className="admin-mission">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil pic' />
            </div>
            <h1 className='admin-h1'>Modification d'une mission NeoWorker <span className='textModif'>:</span></h1>
            <div className='body'>
                <Form onSubmit={(e) => updateDataMission(e)}>
                    <FormGroup>
                        <Input style={{ height: '150px' }} placeholder='Notes :' type="textarea" name="note" value={updateMission.note}
                            onChange={(e) => { setUpdateMission({ ...updateMission, note: e.target.value }) }} />
                    </FormGroup>
                    <div className='champs-mission'>
                        <FormGroup>
                            <Input style={{ textAlign: 'center' }}
                                name="nom_mission"
                                value={updateMission.nom_mission}
                                type="text"
                                onChange={(e) => { setUpdateMission({ ...updateMission, nom_mission: e.target.value }) }} />
                        </FormGroup>

                        <FormGroup>
                            <Input placeholder="Nom de l'entreprise"
                                name="nom_entreprise"
                                value={updateMission.nom_entreprise}
                                type="text"
                                onChange={(e) => { setUpdateMission({ ...updateMission, nom_entreprise: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Email" name="email"
                                value={updateMission.email}
                                type="email"
                                onChange={(e) => { setUpdateMission({ ...updateMission, email: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Téléphone"
                                name="tel"
                                value={updateMission.tel}
                                type="tel"
                                onChange={(e) => { setUpdateMission({ ...updateMission, tel: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder="Adresse"
                                name="address"
                                value={updateMission.address}
                                type="text"
                                onChange={(e) => { setUpdateMission({ ...updateMission, address: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Code Postal'
                                name="cp"
                                value={updateMission.cp}
                                type="text"
                                maxLength={5}
                                onChange={(e) => { setUpdateMission({ ...updateMission, cp: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input className='date-mission' placeholder='Date de début'
                                name="date_debut"
                                value={updateMission.date_debut}
                                type="date"
                                onChange={(e) => { setUpdateMission({ ...updateMission, date_debut: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input className='date-mission' placeholder="Date de fin"
                                name="date_fin"
                                value={updateMission.date_fin}
                                type="date"
                                onChange={(e) => { setUpdateMission({ ...updateMission, date_fin: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Nombre de jour(s) par mois'
                                name="nb_j_par_mois"
                                value={updateMission.nb_j_par_mois}
                                type="number"
                                min="1"
                                max="31"
                                onChange={(e) => { setUpdateMission({ ...updateMission, nb_j_par_mois: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Siret'
                                name="siret"
                                value={updateMission.siret}
                                type="number"
                                onChange={(e) => { setUpdateMission({ ...updateMission, siret: e.target.value }) }} />
                        </FormGroup>
                        <FormGroup>
                            <Input placeholder='Budget'
                                name="budget"
                                value={updateMission.budget}
                                type="number"
                                onChange={(e) => { setUpdateMission({ ...updateMission, budget: e.target.value }) }} />
                        </FormGroup>
                    </div>
                    <div className='selector-mission'>
                        <FormGroup>
                            <Label>Préférence lieu de travail <span className='textModif'>:</span></Label>
                            <Input type="select"
                                name="pref_lieu_de_travail"
                                value={updateMission.pref_lieu_de_travail}
                                onChange={(e) => {
                                    setUpdateMission({
                                        ...updateMission,
                                        pref_lieu_de_travail: e.target.value === 'Présence en entreprise' ? 'Présence en entreprise' : e.target.value === 'Travail à distance' ? 'Travail à distance' : 'Peu importe'
                                    })
                                }}>
                                <option hidden={true}>-</option>
                                <option>Présence en entreprise</option>
                                <option>Travail à distance</option>
                                <option>Peu importe</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Profil <span className='textModif'>:</span></Label>
                            <Input type="select" name="type_profil" value={updateMission.type_profil}
                                onChange={(e) => { setUpdateMission({ ...updateMission, type_profil: e.target.value === 'Regular' ? 'Regular' : 'Expert' }) }}>
                                <option hidden={true}>-</option>
                                <option>Regular</option>
                                <option>Expert</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Fréquence <span className='textModif'>:</span></Label>
                            <Input type="select" name="frequence" value={updateMission.frequence}
                                onChange={(e) => { setUpdateMission({ ...updateMission, frequence: e.target.value === 'Ponctuelle' ? 'Ponctuelle' : 'Récurrente' }) }}>
                                <option hidden={true}>-</option>
                                <option>Ponctuelle</option>
                                <option>Récurrente</option>
                            </Input>
                        </FormGroup>
                        <FormGroup>
                            <Label>Mobilité <span className='textModif'>:</span></Label>
                            <Input type="select" name="mobilite" value={updateMission.mobilite}
                                onChange={(e) => { setUpdateMission({ ...updateMission, mobilite: e.target.value === 'Non' ? 'Non' : 'Oui' }) }}>
                                <option hidden={true} >-</option>
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
                                value={updateMission.excel}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'excel')} />
                        </div>
                        <div className='mission-card'>
                            <p>Powerpoint</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.powerpoint}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'powerpoint')} />
                        </div>
                        <div className='mission-card'>
                            <p>Microsoft 365</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.microsoft_365}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'microsoft_365')} />
                        </div>
                        <div className='mission-card'>
                            <p>Word</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.word}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'word')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Hubspot</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.crm_hubspot}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm_hubspot')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Salesforce</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.crm_salesforce}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm_salesforce')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Pipedrive</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.crm_pipedrive}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm_pipedrive')} />
                        </div>
                        <div className='mission-card'>
                            <p>CRM </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.crm}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'crm')} />
                        </div>
                        <div className='mission-card'>
                            <p>Suite Adobe </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.suite_adobe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'suite_adobe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Illustrator </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.illustrator}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'illustrator')} />
                        </div>
                        <div className='mission-card'>
                            <p>In Design </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.in_design}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'in_design')} />
                        </div>
                        <div className='mission-card'>
                            <p>Photoshop </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.photoshop}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'photoshop')} />
                        </div>
                        <div className='mission-card'>
                            <p>Marketing FB </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.marketing_fb}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'marketing_fb')} />
                        </div>
                        <div className='mission-card'>
                            <p>Google adwards </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.google_adwards}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'google_adwards')} />
                        </div>
                        <div className='mission-card'>
                            <p>Instagram </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.insta}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'insta')} />
                        </div>
                        <div className='mission-card'>
                            <p>Reseaux sociaux </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.reseaux_sociaux}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'reseaux_sociaux')} />
                        </div>
                        <div className='mission-card'>
                            <p>Keynote </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.keynote}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'keynote')} />
                        </div>
                        <div className='mission-card'>
                            <p>Pages </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.pages}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'pages')} />
                        </div>
                        <div className='mission-card'>
                            <p>G Suite Google </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.gsuite_google}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'gsuite_google')} />
                        </div>
                        <div className='mission-card'>
                            <p>Numbers </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.numbers}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'numbers')} />
                        </div>
                        <div className='mission-card'>
                            <p>Erp sap </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.erp_sap}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'erp_sap')} />
                        </div>
                        <div className='mission-card'>
                            <p>Ciel Gestion </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.ciel_gestion}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'ciel_gestion')} />
                        </div>
                        <div className='mission-card'>
                            <p>Cegid </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.cegid}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'cegid')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sage gestion commercial </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.sage_gestion_commercial}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sage_gestion_commercial')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sage comptabilité </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.sage_comptabilite}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sage_comptabilite')} />
                        </div>
                        <div className='mission-card'>
                            <p>Quadra </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.quadra}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'quadra')} />
                        </div>
                    </div>
                    <h2 className='mission-title'>Soft Skills</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Résolution de problèmes</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.reso_pb}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'reso_pb')} />
                        </div>
                        <div className='mission-card'>
                            <p>Confiance</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.confiance}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'confiance')} />
                        </div>
                        <div className='mission-card'>
                            <p>Empathie</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.empathie}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'empathie')} />
                        </div>
                        <div className='mission-card'>
                            <p>Intelligence émotionnelle</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.intelligence_emo}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'intelligence_emo')} />
                        </div>
                        <div className='mission-card'>
                            <p>Communication </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.communication}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'communication')} />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du temps </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.gestion_temps}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'gestion_temps')} />
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du stress </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.gestion_stress}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'gestion_stress')} />
                        </div>
                        <div className='mission-card'>
                            <p>Créativité</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.creativite}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'creativite')} />
                        </div>
                        <div className='mission-card'>
                            <p>Esprit d'entreprise</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.esprit_entre}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'esprit_entre')} />
                        </div>
                        <div className='mission-card'>
                            <p>Audace</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.audace}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'audace')} />
                        </div>
                        <div className='mission-card'>
                            <p>Vision, visualisation </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.vision_visu}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'vision_visu')} />
                        </div>
                        <div className='mission-card'>
                            <p>Motivation</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.motivation}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'motivation')} />
                        </div>
                        <div className='mission-card'>
                            <p>Présence</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.presence}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'presence')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sens collectif</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.sens_collectif}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sens_collectif')} />
                        </div>
                        <div className='mission-card'>
                            <p>Curiosité</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.curiosite}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'curiosite')} />
                        </div>
                        <div className='mission-card'>
                            <p>Sens de l'effort </p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.sens_effort}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'sens_effort')} />
                        </div>
                        <div className='champ-libre'>
                            <p style={{ minWidth: '110px', padding: '5px 10px' }}>Autres skills </p>
                            <Input style={{ marginRight: '5px' }} type="textaera" name="text" value={updateMission.autres_softskill} onChange={(e) => setUpdateMission({ ...updateMission, autres_softskill: e.target.value })} />
                        </div>
                    </div>
                    <h2 className='mission-title'>Langues</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Français</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.francais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'francais')} />
                        </div>
                        <div className='mission-card'>
                            <p>Anglais</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.anglais}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'anglais')} />
                        </div>
                        <div className='mission-card'>
                            <p>Espagnol</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.espagnol}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'espagnol')} />
                        </div>
                        <div className='mission-card'>
                            <p>Allemand</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.allemand}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'allemand')} />
                        </div>
                        <div className='mission-card'>
                            <p>Russe</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.russe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'russe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Italien</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.italien}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'italien')} />
                        </div>
                        <div className='mission-card'>
                            <p>Chinois</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.chinois}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'chinois')} />
                        </div>
                        <div className='mission-card'>
                            <p>Arabe</p>
                            <StarRatingComponent
                                starCount={3}
                                value={updateMission.arabe}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 'arabe')} />
                        </div>
                        <div className='mission-card'>
                            <p>Autres langues</p>
                            <Input style={{ marginRight: '5px' }} type="textaera" name="text" value={updateMission.autres_langue} onChange={(e) => setUpdateMission({ ...updateMission, autres_langue: e.target.value })} />
                        </div>
                    </div>
                    <Button className="btn" type="submit">Valider les modifications</Button>
            </Form>
        </div>
    </div >
            )
        }

export default UpdateDeleteMission;