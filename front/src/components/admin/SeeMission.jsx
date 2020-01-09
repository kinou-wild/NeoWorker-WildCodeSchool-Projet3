import React, {
    useState,
    useEffect,
} from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'

const SeeMission =(props)=>{

    const params = props.match.params

    const [getMission, setGetMission] = useState([])

    const [updateMission,setUpdateMission]=useState({

        nom_mission: "",
        nom_entreprise: "",
        email:"",
        note:"",
        nb_j_par_mois: "",
        budget:0,
        date_debut:'2019-01-01',
        date_fin:'2019-01-01',
        frequence:'',
        status: 0,
        address: "",
        mobilite: 0,
        km_max: 0,
        siret:0,
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
        autres_softskill: "",

        francais: 0,
        anglais: 0,
        italien: 0,
        chinois: 0,
        russe: 0,
        arabe: 0,
        allemand: 0,
        espagnol:0,
        autres_langue: ""
    })

    useEffect(() => {getDataMission()},[])

    const getDataMission = () => {
        axios.get(`http://localhost:5000/mission/${params.id}`)
        .then(res => setGetMission(res.data))
        .catch((err) => console.log(err))
    }

    return (                    
            <div className="admin-mission">
            <div className='profil-card'>
                <p className='name-card'>Profil Admin</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture' />
            </div>
            <h1 className='admin-h1'>Voir la mission NeoWorker <span className='textModif'>:</span></h1>
            <div className='notes'>
                <Form onSubmit={getDataMission}>
                    <FormGroup>
                        <Input disabled style={{ height: '150px' }} type="textarea" name="note" 
                            value={getMission.note}
                            onChange={(e) => { setUpdateMission({ ...updateMission, note: e.target.value }) }} />
                    </FormGroup>


                    <div className='select-mission'>
                    <FormGroup>
                        <Input disabled style={{ textAlign: 'center' }}
                            
                            name="nom_mission"
                            value={getMission.nom_mission}
                            type="text"
                            onChange={(e) => { setUpdateMission({ ...updateMission, nom_mission: e.target.value }) }} />
                    </FormGroup>

                        <div className='selector-mission'>
                            <FormGroup>
                            <Label>Préférence lieu de travail <span className='textModif'>:</span></Label>
                                <Input disabled type="select"
                                    
                                    name="pref_lieu_de_travail"
                                    value={getMission.pref_lieu_de_travail}
                                    onChange={(e) => {
                                        setUpdateMission({
                                            ...updateMission,
                                            pref_lieu_de_travail: e.target.value == 'Présence en entreprise' ? 'Présence en entreprise' : e.target.value == 'Travail à distance' ? 'Travail à distance' : 'Peu importe'})}}>
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
                        <div className='champs-mission'>
                        
                            <FormGroup>
                                <Input disabled  placeholder="Nom de l'entreprise"
                                    
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
                            <p style={{minWidth:'110px', padding:'5px 10px'}}>Autres skills </p>
                            <Input disabled style={{marginRight:'5px'}} type="textaera" name="text"  value={getMission.autres_softskill} onChange={(e)=>setUpdateMission({...updateMission, autres_softskill: e.target.value})} />
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
                            <Input disabled style={{marginRight:'5px'}}
                             type="textaera"
                              name="text"
                              value={getMission.autres_langue} 
                              onChange={(e)=>setUpdateMission({...updateMission, autres_langue: e.target.value})} />
                        </div> 
                    </div>
                </div>
            </Form> 
        </div>
    </div>
            )
        }

export default SeeMission;