import React, {useState, useEffect} from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Form, FormGroup, InputGroupText, Input, Button, Label } from 'reactstrap';
import {Link} from 'react-router-dom'


const OneNeoworkerCard = ({neoworker}) => {
    console.log(neoworker)
  
    return(
        <div>
            <div className="admin-neoworker">
            <div className='profil-card'>
                <p className='name-card'> Anais</p>
                {/* <img className='pic-card' src={profilPic} alt='profil picture' /> */}
            </div>
                <h1 className='admin-h1'> NeoWorker <span className='textModif'>:</span></h1>
            <div className='body'>
                <Form className="formulaire-creation-neoworker"  >
                    <FormGroup>
                        <Input style={{ height: '150px' }} placeholder='Notes :' type="textarea" name="note" id="note"
                            value={neoworker.note}
                             />
                    </FormGroup>
                    <div className='champs-mission'>
                        <FormGroup>
                            <Input style={{ textAlign: 'center' }}
                                type="text" id="title" name="Métier"
                                placeholder="Métier"
                                value={neoworker.title}
                                required
                                 />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-firstname"
                                placeholder="Prénom" type="text"
                                id="firstname"
                                name="firstname"
                                value={neoworker.firstname}
                                required
                                 />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-lastname"
                                placeholder="Nom"
                                type="text" id="lastname" name="lastname"
                                value={neoworker.lastname}
                                required
                                />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-address"
                                placeholder="Adresse"
                                type="text" id="address" name="address"
                                value={neoworker.address}
                                required
                                 />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-cp"
                                placeholder="Code postal"
                                type="text" id="cp" name="cp"
                                value={neoworker.cp}
                                required
                                />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-email" placeholder="Email"
                                type="text" id="email" name="email"
                                value={neoworker.email}
                                required
                               />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-tel" placeholder="Telephone"
                                type="text" id="tel" name="tel"
                                value={neoworker.tel}
                                required
                                />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                className="input-password"
                                placeholder="Mot de passe" type="text"
                                id="password" name="password"
                                value={neoworker.password}
                                />
                        </FormGroup>

                        <FormGroup>
                            <Input className="input-tj_min" placeholder='Taux journalier minimum'
                                type="number" id="tjm_min" name="tjm_min"
                                value={neoworker.tjm_min}
                                required
                                />
                        </FormGroup>
                        <FormGroup>
                            <Input className="input-tj_max" placeholder='Taux journalier maximum'
                                type="number"
                                id="tjm_max" name="tjm_max"
                                value={neoworker.tjm_max}
                                required
                               />
                        </FormGroup>
                        <FormGroup>
                            <Input className="input-dispo" placeholder='Disponibilité(nb jours/mois)'
                                type="number"
                                id="disponibilite" name="disponibilite"
                                value={neoworker.disponibilite}
                                required />
                        </FormGroup>
                        <div className='selector-mission'>
                            <FormGroup>
                                <Label>Préférence lieu de travail <span className='textModif'>:</span></Label>
                                <Input type="select"
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
                                <Input type="select" name="mobilite" id='mobilite'
                                    value={neoworker.mobilite}
                                    >
                                    
                                </Input>
                            </FormGroup>

                            <FormGroup>
                                <Label>Km maximum <span className='textModif'>:</span></Label>
                                <Input type="select" name="km_max" id='km_max'
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
                                name="rate1"
                                starCount={3}
                                value={rating[0].Excel}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>Powerpoint</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[1].Powerpoint}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>Microsoft 365</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[2].microsoft_365}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>Word</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[3].Word}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Hubspot</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[4].crm_hubspot}
                                emptyStarColor={`#C4C4C4`}
                                 />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Salesforce</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[5].crm_salesforce}
                                emptyStarColor={`#C4C4C4`}
                                 />
                        </div>
                        <div className='mission-card'>
                            <p>CRM Pipedrive</p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[6].crm_pipedrive}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>CRM </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[7].crm}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>Suite Adobe </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[8].suite_adobe}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>Illustrator </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[9].illustrator}
                                emptyStarColor={`#C4C4C4`}
                                 />
                        </div>
                        <div className='mission-card'>
                            <p>In Design </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[10].in_design}
                                emptyStarColor={`#C4C4C4`}
                                 />
                        </div>
                        <div className='mission-card'>
                            <p>Photoshop </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[11].photoshop}
                                emptyStarColor={`#C4C4C4`}
                                 />
                        </div>
                        <div className='mission-card'>
                            <p>Marketing FB </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[12].marketing_fb}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>Google adwards </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[13].google_adwards}
                                emptyStarColor={`#C4C4C4`}
                                 />
                        </div>
                        <div className='mission-card'>
                            <p>Instagram </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[14].insta}
                                emptyStarColor={`#C4C4C4`}
                                 />
                        </div>
                        <div className='mission-card'>
                            <p>Reseaux sociaux </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[15].reseaux_sociaux}
                                emptyStarColor={`#C4C4C4`}
                                 />
                        </div>
                        <div className='mission-card'>
                            <p>Keynote </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[16].keynote}
                                emptyStarColor={`#C4C4C4`}
                                 />
                        </div>
                        <div className='mission-card'>
                            <p>Pages </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[17].pages}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>G Suite Google </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[18].gsuite_google}
                                emptyStarColor={`#C4C4C4`}
                                />
                        </div>
                        <div className='mission-card'>
                            <p>Numbers </p>
                            <StarRatingComponent
                                name="rate1"
                                starCount={3}
                                value={rating[19].numbers}
                                emptyStarColor={`#C4C4C4`}
                                />
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
                            <Input type="textaera" name="text" id="autres_skills" value={neoworker.autres_softskill} onChange={(e) => setFreelancer({ ...neoworker, autres_softskill: e.target.value })} />
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
                            <Input type="textaera" name="text" id="langues" value={neoworker.autres_langue} onChange={(e) => setFreelancer({ ...neoworker, autres_langue: e.target.value })} />
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
                                <input type="checkbox" className="checkbox" id="Option 1" name="Option 1" onClick={() => setFreelancer({ ...neoworker, assistance_suivi_comptable: document.getElementById('Option 1').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 1">Assistance et suivi comptable (note de frais, suivi des règlements et de la trésorerie, ...)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 2" name="Option 2" onClick={() => setFreelancer({ ...neoworker, relation_accountant: document.getElementById('Option 2').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 2">Relation avec le cabinet d'expertise comptable</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 3" name="Option 3" onClick={() => setFreelancer({ ...neoworker, customer_recovery: document.getElementById('Option 3').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 3">Relances clients</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 4" name="Option 4" onClick={() => setFreelancer({ ...neoworker, payroll_preparation: document.getElementById('Option 4').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 4">Préparation des éléments de paie (Pointages, congés payés, arrêts maladie, primes, etc…)</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 5" name="Option 5" onClick={() => setFreelancer({ ...neoworker, assembly_approval_file: document.getElementById('Option 5').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 5">Montage de dossier d'agrément</label></div>
                            <div className="checkbox-and-content">
                                <input type="checkbox" className="checkbox" id="Option 6" name="Option 6" onClick={() => setFreelancer({ ...neoworker, referencing_training_organization: document.getElementById('Option 6').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 6">Référencement organismes de formations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion opérationnelle</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 7" name="Option 7" onClick={() => setFreelancer({ ...neoworker, use_business_software: document.getElementById('Option 7').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 7">Mise en place, optimisation et formation à l'utilisation de logiciels métiers</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 8" name="Option 8" onClick={() => setFreelancer({ ...neoworker, internal_procedure: document.getElementById('Option 8').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 8">Création et mise en place de procédures internes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 9" name="Option 9" onClick={() => setFreelancer({ ...neoworker, database: document.getElementById('Option 9').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 9">Création et traitement de base de données</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 10" name="Option 10" onClick={() => setFreelancer({ ...neoworker, gestion_achat: document.getElementById('Option 10').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 10">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 11" name="Option 11" onClick={() => setFreelancer({ ...neoworker, administrative_file_management: document.getElementById('Option 11').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 11">Suivi des dossiers administratifs</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 12" name="Option 12" onClick={() => setFreelancer({ ...neoworker, management_assistantship: document.getElementById('Option 12').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 12">Assistanat de direction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 13" name="Option 13" onClick={() => setFreelancer({ ...neoworker, filing_documents: document.getElementById('Option 13').checked === true ? true : false })} />
                                <label className="label-prestationGestion administrative et comptable" for="Option 13">Classement de documents</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 14" name="Option 14" onClick={() => setFreelancer({ ...neoworker, secretariat_and_maintenance_agenda: document.getElementById('Option 14').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 14">Secrétariat et tenue de l'agenda </label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion commerciale</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 15" name="Option 15" onClick={() => setFreelancer({ ...neoworker, commercial_strategy_and_sales_pitch: document.getElementById('Option 15').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 15">Stratégie et argumentaire commercial</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 16" name="Option 16" onClick={() => setFreelancer({ ...neoworker, management_of_commercial_activity: document.getElementById('Option 16').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 16">Création de tableaux de bord, de procédure et pilotage de l'activité commerciale</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 17" name="Option 17" onClick={() => setFreelancer({ ...neoworker, prospecting_outbound_sales: document.getElementById('Option 17').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 17">Prospection / Outbound sales</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 18" name="Option 18" onClick={() => setFreelancer({ ...neoworker, gestion_achat2: document.getElementById('Option 18').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 18">Intendance et gestion des achats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 19" name="Option 19" onClick={() => setFreelancer({ ...neoworker, response_to_pulic_and_private_tenders: document.getElementById('Option 19').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 19">Réponse aux appels d'offres publics et privés</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 20" name="Option 20" onClick={() => setFreelancer({ ...neoworker, sales_administration: document.getElementById('Option 20').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 20">Administration des ventes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 21" name="Option 21" onClick={() => setFreelancer({ ...neoworker, stock_management: document.getElementById('Option 21').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 21">Gestion des stocks</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 22" name="Option 22" onClick={() => setFreelancer({ ...neoworker, business_data_crm: document.getElementById('Option 22').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 22">Saisie des données commerciales dans un CRM</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 23" name="Option 23" onClick={() => setFreelancer({ ...neoworker, order_data_entry: document.getElementById('Option 23').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 23">Saisie des commandes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 24" name="Option 24" onClick={() => setFreelancer({ ...neoworker, quote_management: document.getElementById('Option 24').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 24">Gestion des devis</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 25" name="Option 25" onClick={() => setFreelancer({ ...neoworker, billing: document.getElementById('Option 25').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 25">Facturation</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 26" name="Option 26" onClick={() => setFreelancer({ ...neoworker, claims_management: document.getElementById('Option 26').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 26">Gestion des réclamations</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Marketing / Communication / Digital</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 27" name="Option 27" onClick={() => setFreelancer({ ...neoworker, marketing_strategy_and_operational_monitoring: document.getElementById('Option 27').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 27">Stratégie marketing et suivi opérationnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 28" name="Option 28" onClick={() => setFreelancer({ ...neoworker, marketing_study: document.getElementById('Option 28').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 28">Réalisation d'études de marché </label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 29" name="Option 29" onClick={() => setFreelancer({ ...neoworker, implementation_of_inbound_marketing_strategy: document.getElementById('Option 29').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 29">Mise en œuvre d'une stratégie d'inbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 30" name="Option 30" onClick={() => setFreelancer({ ...neoworker, outbound_marketing: document.getElementById('Option 30').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 30">Outbound marketing</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 31" name="Option 31" onClick={() => setFreelancer({ ...neoworker, communication_strategy: document.getElementById('Option 31').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 31">Stratégie de communication</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 32" name="Option 32" onClick={() => setFreelancer({ ...neoworker, outsourced_project_manager: document.getElementById('Option 32').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 32">Chef de projet externalisé</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 33" name="Option 33" onClick={() => setFreelancer({ ...neoworker, creation_and_graphics: document.getElementById('Option 33').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 33">Création et graphisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 34" name="Option 34" onClick={() => setFreelancer({ ...neoworker, ux_design: document.getElementById('Option 34').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 34">UX Design</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 35" name="Option 35" onClick={() => setFreelancer({ ...neoworker, ui_design_computer_graphics: document.getElementById('Option 35').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 35">UI Design - infographisme</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 36" name="Option 36" onClick={() => setFreelancer({ ...neoworker, redaction_design: document.getElementById('Option 36').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 36">Conception rédaction</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 37" name="Option 37" onClick={() => setFreelancer({ ...neoworker, community_management: document.getElementById('Option 37').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 37">Community management</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 38" name="Option 38" onClick={() => setFreelancer({ ...neoworker, seo_optimization: document.getElementById('Option 38').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 38">Optimisation SEO</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 39" name="Option 39" onClick={() => setFreelancer({ ...neoworker, website_creation: document.getElementById('Option 39').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 39">Création de site web</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 40" name="Option 40" onClick={() => setFreelancer({ ...neoworker, press_relation: document.getElementById('Option 40').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 40">Relation presse</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 41" name="Option 41" onClick={() => setFreelancer({ ...neoworker, event: document.getElementById('Option 41').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 41">Evènementiel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 42" name="Option 42" onClick={() => setFreelancer({ ...neoworker, partnership_distribution_network_and_business_contribution: document.getElementById('Option 42').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 42">Partenariats, montage de réseaux de distribution, apporteurs d'affaire</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 43" name="Option 43" onClick={() => setFreelancer({ ...neoworker, translation_work: document.getElementById('Option 43').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 43">Travaux de traduction</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Financière / Contrôle de Gestion</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 44" name="Option 44" onClick={() => setFreelancer({ ...neoworker, administrative_and_financial_management: document.getElementById('Option 44').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 44">Direction administrative et financière externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 45" name="Option 45" onClick={() => setFreelancer({ ...neoworker, financing_grant_application: document.getElementById('Option 45').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 45">Montage de dossier de financement / subvention</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 46" name="Option 46" onClick={() => setFreelancer({ ...neoworker, management_control: document.getElementById('Option 46').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 46">Contrôle de gestion</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 47" name="Option 47" onClick={() => setFreelancer({ ...neoworker, dashboard_and_financial_management: document.getElementById('Option 47').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 47">Tableau de bord et pilotage financier</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 48" name="Option 48" onClick={() => setFreelancer({ ...neoworker, business_pland_and_provisional_budget: document.getElementById('Option 48').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 48">Création de business plan et budget prévisionnel</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 49" name="Option 49" onClick={() => setFreelancer({ ...neoworker, transfer_aid_and_buyout_of_business: document.getElementById('Option 49').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 49">Aide à la cession / rachat d'activités</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">DSI</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 50" name="Option 50" onClick={() => setFreelancer({ ...neoworker, outsourced_information_system_management: document.getElementById('Option 50').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 50">Direction des Systèmes d'informations externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 51" name="Option 51" onClick={() => setFreelancer({ ...neoworker, schema_directeur_si: document.getElementById('Option 51').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 51">Schéma directeur SI</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 52" name="Option 52" onClick={() => setFreelancer({ ...neoworker, functional_architecture: document.getElementById('Option 52').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 52">Architecture fonctionnelle / applicative</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 53" name="Option 53" onClick={() => setFreelancer({ ...neoworker, infra_reseau: document.getElementById('Option 53').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 53">Infra / réseau</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion Ressources Humaines / Juridique</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 54" name="Option 54" onClick={() => setFreelancer({ ...neoworker, outsourced_hr_department: document.getElementById('Option 54').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 54">Direction des Ressources Humaines externalisée</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 55" name="Option 55" onClick={() => setFreelancer({ ...neoworker, plannings_management: document.getElementById('Option 55').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 55">Gestion des plannings</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 56" name="Option 56" onClick={() => setFreelancer({ ...neoworker, payroll_tracking: document.getElementById('Option 56').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 56">Suivi des éléments de paie (absences, CP, RTT..)</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 57" name="Option 57" onClick={() => setFreelancer({ ...neoworker, establishment_of_contracts_end_of_contracts: document.getElementById('Option 57').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 57">Etablissement des contrats / éléments de fin de contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 58" name="Option 58" onClick={() => setFreelancer({ ...neoworker, suivi_mutuelle_medecine_du_travail: document.getElementById('Option 58').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 58">Suivi mutuelle et medecine du travail</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 59" name="Option 59" onClick={() => setFreelancer({ ...neoworker, conflict_management: document.getElementById('Option 59').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 59">Gestion des conflits</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 60" name="Option 60" onClick={() => setFreelancer({ ...neoworker, assembly_and_monitoring_litigation_files: document.getElementById('Option 60').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 60">Montage et suivi des dossiers de contentieux</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 61" name="Option 61" onClick={() => setFreelancer({ ...neoworker, harmonization_of_contracts: document.getElementById('Option 61').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 61">Harmonisation des contrats</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 62" name="Option 62" onClick={() => setFreelancer({ ...neoworker, RGPD_compliation: document.getElementById('Option 62').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 62">Mise en conformité RGPD</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 63" name="Option 63" onClick={() => setFreelancer({ ...neoworker, harmonization_salary_scales: document.getElementById('Option 63').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 63">Harmonisation des grilles salaires</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 64" name="Option 64" onClick={() => setFreelancer({ ...neoworker, provisional_management_of_jobs_and_skill: document.getElementById('Option 64').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 64">Gestion prévisionnelle des emplois et des compétences</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 65" name="Option 65" onClick={() => setFreelancer({ ...neoworker, recruitment_and_integration: document.getElementById('Option 65').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 65">Recrutement et intégration</label></div>
                        </div>

                        <div className="prestation-checkbox-div">
                            <p className="family-prestation-title">Gestion de la relation clients</p>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 66" name="Option 66" onClick={() => setFreelancer({ ...neoworker, suivi_des_grands_comptes: document.getElementById('Option 66').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 66">Suivi grands comptes</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 67" name="Option 67" onClick={() => setFreelancer({ ...neoworker, additional_sales: document.getElementById('Option 67').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 67">Ventes additionnelles</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 68" name="Option 68" onClick={() => setFreelancer({ ...neoworker, measure_of_customers_satisfaction: document.getElementById('Option 68').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 68">Mesure de la satisfaction clients</label></div>
                            <div className="checkbox-and-content"><input type="checkbox" className="checkbox" id="Option 69" name="Option 69" onClick={() => setFreelancer({ ...neoworker, after_sales_service: document.getElementById('Option 69').checked === true ? true : false })} />
                                <label className="label-prestation" for="Option 69">Service après ventes</label></div>
                        </div>
                    </div>
                    
                    <Button className='btn' type='submit'>modifier</Button>
                </Form>
            </div>
            </div>
            
            <Link to='/admin/neoworker/liste'>
                <button>back to list</button>
            </Link>
        </div>
    )
}
export default OneNeoworkerCard