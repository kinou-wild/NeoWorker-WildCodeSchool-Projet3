import React from 'react';
import { Form, FormGroup, Input, Button, Label } from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom'
import profilPic from '../../img/anais.jpg'


const OneNeoworkerCard = ({ neoworker }) => {

    return (
        <div>
            <div className="admin-neoworker">
                <div className='profil-card'>
                    <p className='name-card'> Anais</p>
                    <img className='pic-card' src={profilPic} alt='profil picture' />
                </div>
                <h1 className='admin-h1'> Voir le profil NeoWorker <span className='textModif'>:</span></h1>
                <div className='body'>
                    <Form  >
                        <FormGroup>
                            <Input disabled style={{ height: '150px' }} placeholder='Notes :' type="textarea" name="note" id="note"
                                value={neoworker.note}
                            />
                        </FormGroup>
                        <div className='champs-mission'>
                            <FormGroup>
                                <Input disabled style={{ textAlign: 'center' }}
                                    type="text" id="title" name="Métier"
                                    value={neoworker.title}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input disabled
                                    className="input-firstname"
                                    placeholder="Prénom" type="text"
                                    id="firstname"
                                    name="firstname"
                                    value={neoworker.firstname}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input disabled
                                    className="input-lastname"
                                    placeholder="Nom"
                                    type="text" id="lastname" name="lastname"
                                    value={neoworker.lastname}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input disabled
                                    className="input-email" placeholder="Email"
                                    type="text" id="email" name="email"
                                    value={neoworker.email}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input disabled
                                    className="input-tel" placeholder="Telephone"
                                    type="text" id="tel" name="tel"
                                    value={neoworker.tel}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input disabled
                                    className="input-address"
                                    placeholder="Adresse"
                                    type="text" id="address" name="address"
                                    value={neoworker.address}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input disabled
                                    className="input-cp"
                                    placeholder="Code postal"
                                    type="text" id="cp" name="cp"
                                    value={neoworker.cp}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input disabled className="input-tj_min" placeholder='Taux journalier minimum'
                                    type="number" id="tjm_min" name="tjm_min"
                                    value={neoworker.tjm_min}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input disabled className="input-tj_max" placeholder='Taux journalier maximum'
                                    type="number"
                                    id="tjm_max" name="tjm_max"
                                    value={neoworker.tjm_max}
                                    required
                                />
                            </FormGroup>
                            <FormGroup>
                                <Input disabled className="input-dispo" placeholder='Disponibilité(nb jours/mois)'
                                    type="number"
                                    id="disponibilite" name="disponibilite"
                                    value={neoworker.disponibilite}
                                    required />
                            </FormGroup>
                            <div className='selector-mission'>
                                <FormGroup>
                                    <Label>Préférence lieu de travail <span className='textModif'>:</span></Label>
                                    <Input disabled type="select"
                                        id="pref_lieu_de_travail"
                                        name="pref_lieu_de_travail"
                                        value={neoworker.pref_lieu_de_travail}
                                    >
                                        <option hidden="true">-</option>
                                        <option>Présence en entreprise</option>
                                        <option>Travail à distance</option>
                                        <option>Peu importe</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Mobilité <span className='textModif'>:</span></Label>
                                    <Input disabled type="select" name="mobilite" id='mobilite'
                                        value={neoworker.mobilite}>
                                        <option hidden="true">-</option>
                                        <option>Oui</option>
                                        <option>Non</option>
                                    </Input>
                                </FormGroup>

                                <FormGroup>
                                    <Label>Km maximum <span className='textModif'>:</span></Label>
                                    <Input disabled type="select" name="km_max" id='km_max'
                                        value={neoworker.km_max}
                                    >
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
                                    starCount={3}
                                    value={neoworker.excel}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Powerpoint</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.powerpoint}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Microsoft 365</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.microsoft_365}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Word</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.word}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>CRM Hubspot</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.crm_hubspot}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>CRM Salesforce</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.crm_salesforce}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>CRM Pipedrive</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.crm_pipedrive}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>CRM </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.crm}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Suite Adobe </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.suite_adobe}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Illustrator </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.illustrator}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>In Design </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.in_design}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Photoshop </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.photoshop}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Marketing FB </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.marketing_fb}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Google adwards </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.google_adwards}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Instagram </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.insta}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Reseaux sociaux </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.reseaux_sociaux}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Keynote </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.keynote}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Pages </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.pages}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>G Suite Google </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.gsuite_google}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Numbers </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.numbers}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Erp sap </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.erp_sap}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Ciel Gestion </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.ciel_gestion}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Cegid </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.cegid}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Sage gestion commercial </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.sage_gestion_commercial}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Sage comptabilité </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.sage_comptabilite}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Quadra </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.quadra}
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
                                    value={neoworker.reso_pb}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Confiance</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.confiance}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Empathie</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.empathie}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Intelligence émotionnelle</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.intelligence_emo}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Communication </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.communication}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion du temps </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.gestion_temps}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion du stress </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.gestion_stress}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Créativité</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.creativite}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Esprit d'entreprise</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.esprit_entre}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Audace</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.audace}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Vision, visualisation </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.vision_visu}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Motivation</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.motivation}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Présence</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.presence}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Sens collectif</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.sens_collectif}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Curiosité</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.curiosite}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Sens de l'effort </p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.sens_effort}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='champ-libre'>
                                <p style={{ width: '10rem', padding: '5px 10px' }}>Autres skills </p>
                                <Input disabled style={{ marginRight: '5px' }} type="textaera" name="text" value={neoworker.autres_softskill} />
                            </div>
                        </div>
                        <h2 className='mission-title'>Langues</h2>
                        <div className='cards'>
                            <div className='mission-card'>
                                <p>Français</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.francais}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Anglais</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.anglais}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Espagnol</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.espagnol}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Allemand</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.allemand}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Russe</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.russe}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Italien</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.italien}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Chinois</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.chinois}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Arabe</p>
                                <StarRatingComponent
                                    starCount={3}
                                    value={neoworker.arabe}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Quadra </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.quadra}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                        </div>
                        <h2 className='mission-title'>Soft Skills</h2>
                        <div className='cards'>
                            <div className='mission-card'>
                                <p>Résolution de problèmes</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.reso_pb}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Confiance</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.confiance}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Empathie</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.empathie}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Intelligence émotionnelle</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.intelligence_emo}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Communication </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.communication}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion du temps </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.gestion_temps}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Gestion du stress </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.gestion_stress}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Créativité</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.creativite}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Esprit d'entreprise</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.esprit_entre}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Audace</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.audace}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Vision, visualisation </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.vision_visu}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Motivation</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.motivation}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Présence</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.presence}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Sens collectif</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.sens_collectif}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Curiosité</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.curiosite}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Sens de l'effort </p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.sens_effort}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Autres skills</p>
                                <Input disabled type="textaera" name="text" id="autres_skills" value={neoworker.autres_softskill} />
                            </div>
                        </div>
                        <h2 className='mission-title'>Langues</h2>
                        <div className='cards'>
                            <div className='mission-card'>
                                <p>Français</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.francais}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Anglais</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.anglais}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Espagnol</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.espagnol}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Allemand</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.allemand}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Russe</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.russe}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Italien</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.italien}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Chinois</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.chinois}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p>Arabe</p>
                                <StarRatingComponent
                                    name="rate1"
                                    starCount={3}
                                    value={neoworker.arabe}
                                    emptyStarColor={`#C4C4C4`}
                                />
                            </div>
                            <div className='mission-card'>
                                <p style={{ width: '15rem', padding: '5px 10px' }}>Autres langues</p>
                                <Input disabled style={{ marginRight: '5px' }}
                                    type="textaera"
                                    name="text"
                                    value={neoworker.autres_langue} />
                            </div>

                        </div>
                        <div ><Button className='button-card'type='submit'>Modifier</Button></div>
                    </Form>
                    <div >
                        <Link to='/admin/neoworker/liste'>
                            <Button className='button-card'>Retourner à la liste</Button>
                        </Link>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default OneNeoworkerCard