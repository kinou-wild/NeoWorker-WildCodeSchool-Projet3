import React, {useContext, useEffect, useState} from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import {SidebarContext} from '../SidebarContext'
import './MissionCreateAdmin.css'

/* -------- Page creation mission ------------------ */
const MissionCreateAdmin = () => {
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
console.log()
    /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const [showSidebar, setShowSidebar] = useContext(SidebarContext)

    useEffect(() => {
        setShowSidebar(true)
    })

    return(
        <div className="admin-mission">
            <div className='profil-card'>
                <p className='name-card'>Profil Admin</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
            </div> 
                <h1 className='admin-h1'>Creation d'une mission NeoWorker</h1>
            <div className='notes'>
                <Form>
                    <FormGroup>
                        <Input style={{height:'150px'}} placeholder='Notes :'type="textarea" name="text" id="notes" />
                    </FormGroup>
                        <div className='select-mission'>
                            <FormGroup>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Préférence lieu de travail</option>
                                    <option>Présence en entreprise</option>
                                    <option>Travail à distance</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Profil</option>
                                    <option>Regular</option>
                                    <option>Expert</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Fréquence</option>
                                    <option>Ponctuelle</option>
                                    <option>Récurrente</option>
                                </Input>
                            </FormGroup>
                        </div>
                        <FormGroup>
                            <Input style={{textAlign:'center'}} placeholder="Nom de la mission" />
                        </FormGroup>
                        <div className='champs-mission'>
                            <FormGroup>
                                <Input placeholder="Nom de l'entreprise" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Nom du responsable" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Email" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Téléphone" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Adresse" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Code Postale" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Dénomination Sociale" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Numero de Siret" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Budget" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Récurrence" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Date de début / fin" />
                            </FormGroup>
                            <FormGroup>
                                <Input placeholder="Nb jours / mois travaillés" />
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
                    </Form>
                    <Button className='btn'>Valider</Button>
            </div>
        </div>
    )
}

export default MissionCreateAdmin