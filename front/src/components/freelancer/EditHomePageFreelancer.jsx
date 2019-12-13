import React, {useContext, useState, useEffect} from 'react'
import {SidebarContext} from '../SidebarContext'
import './HomePageFreelancer.css'
import { Button, Label, Input } from 'reactstrap'
import {Link} from 'react-router-dom'
import axios from 'axios';

/* -------- Page d'édition pour l'espace perso Neoworker ------------------ */
const EditHomePageFreelancer = (props) => {


    /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const [showSidebar, setShowSidebar] = useContext(SidebarContext)

    useEffect(() => {
        setShowSidebar(true)
    })
          //recup des query de l'id
          const params = props.match.params;

          //hooks pour modif le freelancer
          const[updateFreelancer, setUpdateFreelancer]= useState({
              img: "",
              metier: "",
              firstname: "",
              lastname: "",
              address: "",
              mobilite: 0,
              pref_lieu_de_travail: 0,
              disponibilite: 0,
              fourchette_tarifaire: 0,
              password: "",
              email: ""
          })
        
           //hooks pour modif le user
           const [updateUser, setUpdateUser] = useState({
             email: '',
             password: ''
           })
        
           //update sur la data user
           const updateQueryDataUserFree = (e) => {
             e.preventDefault()
             axios.put(`http://localhost:5000/user/${params.id}`, updateUser)
             .catch(err => console.log(err))
            console.log(updateUser)
            }
        
        
          //update sur la data du free
          const updateQueryDataFree = (e) => {
            e.preventDefault()
              axios.put(`http://localhost:5000/freelancer/${params.id}`, updateFreelancer)
              .catch(err=>console.log(err))
              console.log(updateFreelancer)
              
          }
        
          //fonction qui regroupe l'axios put du dataUserFree et l'axios du dataFree
          const updaterEmailPassword = (e) => {
            updateQueryDataFree(e)
            updateQueryDataUserFree(e)
          }
        
          //fonction qui modif l'email user et l'email free en même temps
        const emailUpdate = (e) => {
          setUpdateUser({...updateUser, email: e.target.value})
          setUpdateFreelancer({...updateFreelancer, email: e.target.value})
            }
        
        
        //fonction qui modif le password user et le password free en même temps
        const passwordUpdater = (e) => {
          setUpdateUser({...updateUser, password: e.target.value})
          setUpdateFreelancer({...updateFreelancer,password: e.target.value})}

    return(
        <div className="freelancer-homepage">
          <div className='profil-card'>
            <p className='name-card'>Profil NeoWorker</p>
            <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
          </div>
            <h1 className='freelancer-h1'>Bienvenue sur ton espace personnel</h1>
            <div className='homepage-content'>
              <img className='pic-profil' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='photo de profil' />
              <div className='infos-profil'>
                <div className='champs-profil'>
                <Label>Métier</Label>
                <Input type ="text" id="metier" name="metier" value={updateFreelancer.metier} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, metier:e.target.value})}} />
                </div>
                <div className='champs-profil'>
                <Label>Prenom</Label>
                <Input  type ="text" id="firstname" name="firstname" value={updateFreelancer.firstname} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, firstname:e.target.value})}} />
                </div>
                <div className='champs-profil'>
                <Label>Nom</Label>
                <Input type ="text" id="lastname" name="lastname" value={updateFreelancer.lastname} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, lastname:e.target.value})}} />
                </div>
                <div className='champs-profil'>
              <div className='champs-profil'>
                <Label>Téléphone</Label>
                <Input type ="text" id="telephone" name="telephone" value={updateUser.telephone} value={updateFreelancer.telephone} required onChange={(e) => {emailUpdate(e)}} /> 
              </div>
              </div>


              </div>
                <div className='reste-profil'>
                  <Label className='champs-profil'>Taux journalier moyen</Label>
                  <Input className='champs-profil' placeholder='MIN en €' type ="text" id="tjm_min" name="tjm_min" value={updateFreelancer.tjm_min} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, tjm_min:e.target.value})}} />
                  <Input className='champs-profil' placeholder='MAX en €' type ="text" id="tjm_max" name="tjm_max" value={updateFreelancer.tjm_max} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, tjm_max:e.target.value})}} />
                    <Label className='champs-profil'>Disponibilité</Label>
                    <Input className='champs-profil' placeholder='Nb jours dispo / mois' type ="text" id="disponibilite" name="disponibilite" value={updateFreelancer.disponibilite} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, disponibilite:e.target.value})}} />
                      <Label className='champs-profil'>Mobilité</Label>
                      <Input className='champs-profil' placeholder='OUI/NON' type ="text" id="mobilite" name="mobilite" value={updateFreelancer.mobilite} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, mobilite:e.target.value})}} />
                      <Input className='champs-profil' placeholder='KM MAX' type ="text" id="km_max" name="km_max" value={updateFreelancer.km_max} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, km_max:e.target.value})}} />

                    <Label className='champs-profil'>Adresse Postale</Label>
                    <Input className='champs-profil' type ="text" id="address" name="address" value={updateFreelancer.address} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, address:e.target.value})}} />
                    <Label className='champs-profil'>Code Postale</Label>
                    <Label className='champs-profil'>Préférence du lieu de travail</Label>
                    <Input className='champs-profil' type ="text" id="pref_lieu_de_travail" name="pref_lieu_de_travail" value={updateFreelancer.pref_lieu_de_travail} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, pref_lieu_de_travail:e.target.value})}} />
                    
                </div>

          
          <form onSubmit={updaterEmailPassword} >
            <p>email</p>
            <input type="text" id="email" name="email" value={updateUser.email} value={updateFreelancer.email} required onChange={(e) => { emailUpdate(e) }} />
            <p>password</p>
            <input type="text" id="password" name="password" value={updateUser.password} value={updateFreelancer.password} required onChange={(e) => { passwordUpdater(e) }} />

            <button type="submit">update</button>
          </form>
            <Link to = "/freelancer/homepage">
            <Button className='btn'>Valider</Button>
            </Link>
    </div>
    </div>
    )
}

export default EditHomePageFreelancer;

        