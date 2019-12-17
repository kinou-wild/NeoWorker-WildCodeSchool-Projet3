import React, {useContext, useEffect, useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import {SidebarContext} from '../SidebarContext'
import './MissionCreateAdmin.css'
import axios from 'axios'

/* -------- Page creation mission ------------------ */
const MissionCreateAdmin = () => {

     // hooks to create a mission
    const [createm, setCreatem] = useState({
        userId: 1,
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

    /* hooks pour le rating par étoiles */
    const [rating, setRating] = useState([{Excel:0}, {Powerpoint:0}, {MicrosoftOffice:0}, {observation:0}, {temps:0}, {}, {}, {},{}])
    /* quand on clic sur une étoile, elle prend la valeur du clic, si on reclic, elle revient à 0 */
    const onStarClick = (nextValue, index, name) => {
        if (rating[index][name] === nextValue) {
            setRating([...rating, rating[index][name] = 0])
        } else {
            setRating([...rating, rating[index][name] = nextValue]);
        }

    }
   /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const [showSidebar, setShowSidebar] = useContext(SidebarContext)

    useEffect(() => {
        setShowSidebar(true)
    })


     // create a mission
    const createMissions = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/missions', createm)
            .catch((err) => console.log(err))
    }

    return(
        <div className="admin-mission">
            <div className='profil-card'>
                <p className='name-card'>Profil Admin</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
            </div> 
                <h1 className='admin-h1'>Creation d'une mission NeoWorker</h1>
            <div className='notes'>
                <Form onSubmit={createMissions}>
                    <FormGroup>
                            <Input style={{height:'150px'}} placeholder='Notes :'type="textarea" name="text" id="notes" 
                            id="nom_mission"
                            name="nom_mission"
                            value={createm.nom_mission}
                            required type="text"
                            onChange={(e) => { setCreatem({ ...createm, nom_mission: e.target.value }) }}
                            />
                    </FormGroup>
                    <div className='select-mission'>
                    <FormGroup>
                    <Input type="select" 
                        id="pref_lieu_de_travail"
                        name="pref_lieu_de_travail"
                        value={createm.pref_lieu_de_travail}
                        onChange={(e) => { setCreatem({ ...createm, pref_lieu_de_travail: e.target.value }) }}>
                        <option>Préférence lieu de travail</option>
                        <option>Présence en entreprise</option>
                        <option>Travail à distance</option>
                        <option>Peu import</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                    <Input type="select" name="select" id="exampleSelect"
                            id="profil"
                            name="profil"
                            value={createm.profil}
                            onChange={(e) => { setCreatem({ ...createm, profil: e.target.value }) }}>
                        <option>Profil</option>
                        <option>Regular</option>
                        <option>Expert</option>
                    </Input>
                    </FormGroup>
                    <FormGroup>
                    <Input type="select" id="frequence"
                    name="frequence"
                    value={createm.frequence}
                    onChange={(e) => { setCreatem({ ...createm, frequence: e.target.value }) }}>
                        <option>Fréquence</option>
                        <option>Ponctuelle</option>
                        <option>Récurrente</option>
                    </Input>
                    </FormGroup>
                    </div>
                    <FormGroup>
                            <Input style={{textAlign:'center'}} placeholder="Nom de la mission"
                            id="nom_mission"
                            name="nom_mission"
                            value={createm.nom_mission}
                            required type="text"
                            onChange={(e) => { setCreatem({ ...createm, nom_mission: e.target.value }) }} />
                    </FormGroup>
                    <div className='champs-mission'>
                    <FormGroup>
                            <Input placeholder="Nom de l'entreprise" 
                            id="nom_entreprise"
                            name="nom_entreprise"
                            value={createm.nom_entreprise}
                            required type="text"
                            onChange={(e) => { setCreatem({ ...createm, nom_entreprise: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                            <Input placeholder="Email"/>
                    </FormGroup>
                    <FormGroup>
                            <Input placeholder="Téléphone" 
                            id="tel"
                            name="tel"
                            value={createm.tel}
                            required type="number"
                            onChange={(e) => { setCreatem({ ...createm, tel: e.target.value }) }}/>
                    </FormGroup>
                    <FormGroup>
                            <Input placeholder="Adresse" 
                            id="address"
                            name="address"
                            value={createm.address}
                            required type="text"
                            onChange={(e) => { setCreatem({ ...createm, address: e.target.value }) }}/>
                    </FormGroup>
                    <FormGroup>
                            <Input placeholder="Code Postale"
                            id="cp"
                            name="cp"
                            value={createm.cp}
                            required type="number"
                            onChange={(e) => { setCreatem({ ...createm, cp: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                            <Input placeholder="Numéro de Siret"
                            id="numero_siret"
                            name="numero_siret"
                            value={createm.numero_siret}
                            required type="number"
                            onChange={(e) => { setCreatem({ ...createm, numero_siret: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                            <Input placeholder="Budget"
                            id="budget"
                            name="budget"
                            value={createm.budget}
                            required type="number"
                            onChange={(e) => { setCreatem({ ...createm, budget: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                            <Input placeholder="Date de début"
                            id="date_debut"
                            name="date_debut"
                            value={createm.date_debut}
                            required type="date"
                            onChange={(e) => { setCreatem({ ...createm, date_debut: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                            <Input placeholder="Date de fin"
                            id="date_fin"
                            name="date_fin"
                            value={createm.date_fin}
                            required type="date"
                            onChange={(e) => { setCreatem({ ...createm, date_fin: e.target.value }) }} />
                    </FormGroup>
                    <FormGroup>
                            <Input placeholder="Nb jours / mois travaillés"
                            id="nb_jour_par_mois"
                            name="nb_jour_par_mois"
                            value={createm.nb_jour_par_mois}
                            required type="number"
                            onChange={(e) => { setCreatem({ ...createm, nb_jour_par_mois: e.target.value }) }} />
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
                                    onStarClick={(e) => onStarClick(e, 0, 'Excel')}/>
                            </div>
                        <div className='mission-card'>
                            <p>Powerpoint</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[1].Powerpoint}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 1, 'Powerpoint')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Microsoft office</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[2].MicrosoftOffice}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 2, 'MicrosoftOffice')}/>
                        </div>
                    </div>
                    <h2 className='mission-title'>Soft Skills</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Sens de l'observation</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[3].observation}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 3, 'observation')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Gestion du temps</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[4].temps}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 4, 'temps')}/>
                        </div>
                        <div className='mission-card'>
                            <p>Autonomie</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating[5].autonomie}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={(e) => onStarClick(e, 5, 'autonomie')}/>
                        </div>
                    </div>
                    <h2 className='mission-title'>Langues</h2>
                    <div className='cards'>
                        <div className='mission-card'>
                            <p>Anglais</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={onStarClick}/>
                        </div>
                        <div className='mission-card'>
                            <p>Espagnol</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={onStarClick}/>
                        </div>
                        <div className='mission-card'>
                            <p>Allemand</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={onStarClick}/>
                        </div>
                        <div className='mission-card'>
                            <p>Russe</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={onStarClick}/>
                        </div>
                        <div className='mission-card'>
                            <p>Italien</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={onStarClick}/>
                        </div>
                        <div className='mission-card'>
                            <p>Chinois</p>
                            <StarRatingComponent 
                                name="rate1" 
                                starCount={3}
                                value={rating}
                                emptyStarColor={`#C4C4C4`}
                                onStarClick={onStarClick}/>
                        </div>

                    </div>
                    <Button className='btn' type='submit' 
                    onClick={() => setCreatem({ ...createm, 
                        excel: rating[0].Excel,
                        powerpoint: rating[1].Powerpoint,
                        microsoft_365: rating[1].Powerpoint
                    })}>Valider</Button>
                    </Form>
            </div>
        </div>
    )
}

export default MissionCreateAdmin