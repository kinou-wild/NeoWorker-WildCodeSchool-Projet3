import React, {useContext, useState, useEffect} from 'react'
import {SidebarContext} from '../SidebarContext'
import './HomePageFreelancer.css'
import { Button } from 'reactstrap'
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
              title: "",
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
        {/* 
            <form onSubmit={queryData}>
           <p> les input pour poster sur la bdd</p>
              <p>title</p>
              <input type ="text" id="title" name="title" value={freelancer.title} required onChange={(e) => {setFreelancer({...freelancer, title:e.target.value})}} />
              <p>firstname</p>
              <input type ="text" id="firstname" name="firstname" value={freelancer.firstname} required onChange={(e) => {setFreelancer({...freelancer, firstname:e.target.value})}} />
              <p>lastname</p>
              <input type ="text" id="lastname" name="lastname" value={freelancer.lastname} required onChange={(e) => {setFreelancer({...freelancer, lastname:e.target.value})}} />
              <p>adress</p>
              <input type ="text" id="address" name="address" value={freelancer.address} required onChange={(e) => {setFreelancer({...freelancer, address:e.target.value})}} />
              <p>mobilite</p>
              <input type ="text" id="mobilite" name="mobilite" value={freelancer.mobilite} required onChange={(e) => {setFreelancer({...freelancer, mobilite:e.target.value})}} />
              <p>pref_lieu_de_travail</p>
              <input type ="text" id="pref_lieu_de_travail" name="pref_lieu_de_travail" value={freelancer.pref_lieu_de_travail} required onChange={(e) => {setFreelancer({...freelancer, pref_lieu_de_travail:e.target.value})}} />
              <p>disponibilite</p>
              <input type ="text" id="disponibilite" name="disponibilite" value={freelancer.disponibilite} required onChange={(e) => {setFreelancer({...freelancer, disponibilite:e.target.value})}} />
              <p>fourchette_tarifaire</p>
              <input type ="text" id="fourchette_tarifaire" name="fourchette_tarifaire" value={freelancer.fourchette_tarifaire} required onChange={(e) => {setFreelancer({...freelancer, fourchette_tarifaire:e.target.value})}} />
              <p>password</p>
              <input type ="text" id="password" name="password" value={freelancer.password} required onChange={(e) => {setFreelancer({...freelancer, password:e.target.value})}} />
              <p>email</p>
              <input type ="text" id="email" name="email" value={freelancer.email} required onChange={(e) => {setFreelancer({...freelancer, email:e.target.value})}} />
              
              <button type="submit">Add</button>
              </form> */}
        
              {/* les input pour update sur la bdd */}

              <div className='profil-card'>
            <p className='name-card'>Profil NeoWorker</p>
            <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
            </div> 
            <h1 className='freelancer-h1'>Bienvenue sur ton espace personnel</h1>
            <div className='homepage-content'>
                <img className='pic-profil' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='photo de profil' />
                <div className='infos-profil'>
                <p className='champs-profil'>Métier</p>
                <p className='champs-profil'>Nom / Prenom</p>
                <p className='champs-profil'>Email / Téléphone</p>
                </div>
                </div>
                <div className='reste-profil'>
                    <p className='champs-profil'>Taux journalier moyen : Min / Max</p>
                    <p className='champs-profil'>Disponibilité : Nb jours dispo / mois</p>
                    <p className='champs-profil'>Mobilité : Oui / Non (km max)</p>
                    <p className='champs-profil'>Remote : Oui / Non</p>
                    <p className='champs-profil'>Adresse Postale</p>
                    <p className='champs-profil'>Code Postale</p>
                    <p className='champs-profil'>Préférence du lieu de travail</p>                    
                </div>

                </div>
              <form onSubmit={updateQueryDataFree} >
        
              <p>title</p>
              <input type ="text" id="title" name="title" value={updateFreelancer.title} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, title:e.target.value})}} />
              <p>firstname</p>
              <input type ="text" id="firstname" name="firstname" value={updateFreelancer.firstname} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, firstname:e.target.value})}} />
              <p>lastname</p>
              <input type ="text" id="lastname" name="lastname" value={updateFreelancer.lastname} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, lastname:e.target.value})}} />
              <p>adress</p>
              <input type ="text" id="address" name="address" value={updateFreelancer.address} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, address:e.target.value})}} />
              <p>mobilite</p>
              <input type ="text" id="mobilite" name="mobilite" value={updateFreelancer.mobilite} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, mobilite:e.target.value})}} />
              <p>pref_lieu_de_travail</p>
              <input type ="text" id="pref_lieu_de_travail" name="pref_lieu_de_travail" value={updateFreelancer.pref_lieu_de_travail} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, pref_lieu_de_travail:e.target.value})}} />
              <p>disponibilite</p>
              <input type ="text" id="disponibilite" name="disponibilite" value={updateFreelancer.disponibilite} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, disponibilite:e.target.value})}} />
              <p>fourchette_tarifaire</p>
              <input type ="text" id="fourchette_tarifaire" name="fourchette_tarifaire" value={updateFreelancer.fourchette_tarifaire} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, fourchette_tarifaire:e.target.value})}} />
              <button type="submit">Update</button>
            </form>
            <h1>Update user</h1>
            <form onSubmit={updaterEmailPassword} >
              <p>email</p>
              <input type ="text" id="email" name="email" value={updateUser.email} value={updateFreelancer.email} required onChange={(e) => {emailUpdate(e)}} /> 
              <p>password</p>
              <input type ="text" id="password" name="password" value={updateUser.password} value={updateFreelancer.password} required onChange={ (e) => {passwordUpdater(e)}}/>
              <button type="submit">update</button>
            </form>
            <Link to = "/freelancer/homepage">
            <Button className='btn'>Valider</Button>
            </Link>
    </div>
    )
}

export default EditHomePageFreelancer

