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
              title: "",
              firstname: "",
              lastname: "",
              address: "",
              mobilite: 0,
              km_max:0,
              tel:0,
              cp:0,
              pref_lieu_de_travail: 0,
              disponibilite: 0,
              tjm_min:0,
              tjm_max:0,
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
        const emailUpdater = (e) => {
          setUpdateUser({...updateUser, email: e.target.value})
          setUpdateFreelancer({...updateFreelancer, email: e.target.value})
            }
        
        
        //fonction qui modif le password user et le password free en même temps
        const passwordUpdater = (e) => {
          setUpdateUser({...updateUser, password: e.target.value})
          setUpdateFreelancer({...updateFreelancer,password: e.target.value})}

    return(
    //     
      <div style={{ textAlign: 'center' }}>

        <form onSubmit={updateQueryDataFree} >

          <p>title</p>
          <input type="text" id="title" name="title" value={updateFreelancer.title} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, title: e.target.value }) }} />
          <p>firstname</p>
          <input type="text" id="firstname" name="firstname" value={updateFreelancer.firstname} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, firstname: e.target.value }) }} />
          <p>lastname</p>
          <input type="text" id="lastname" name="lastname" value={updateFreelancer.lastname} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, lastname: e.target.value }) }} />
          <p>adress</p>
          <input type="text" id="address" name="address" value={updateFreelancer.address} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, address: e.target.value }) }} />
          <p>mobilite</p>
          <input type="text" id="mobilite" name="mobilite" value={updateFreelancer.mobilite} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, mobilite: e.target.value }) }} />
          <p>pref_lieu_de_travail</p>
          <input type="text" id="pref_lieu_de_travail" name="pref_lieu_de_travail" value={updateFreelancer.pref_lieu_de_travail} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, pref_lieu_de_travail: e.target.value }) }} />
          <p>Tél</p>
          <input type="text" id="tel" name="tel" value={updateFreelancer.tel} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, tel: e.target.value }) }} />
          <p>km Max</p>
          <input type="text" id="km_max" name="km_max" value={updateFreelancer.km_max} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, km_max: e.target.value }) }} />
          <p>disponibilite</p>  
          <input type="text" id="disponibilite" name="disponibilite" value={updateFreelancer.disponibilite} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, disponibilite: e.target.value }) }} />
          <p>tjm_min</p>
          <input type="text" id="tjm_min" name="tjm_min" value={updateFreelancer.tjm_min} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, tjm_min: e.target.value }) }} />
          <p>tjm_max</p>
          <input type="text" id="tjm_max" name="tjm_max" value={updateFreelancer.tjm_max} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, tjm_max: e.target.value }) }} />
          <p>cp</p>
          <input type="text" id="cp" name="cp" value={updateFreelancer.cp} required onChange={(e) => { setUpdateFreelancer({ ...updateFreelancer, cp: e.target.value }) }} />
          
          <button type="submit">Update</button>


        

        </form>

        <h1>Update user</h1>
        <form onSubmit={updaterEmailPassword} >
          <p>email</p>
          <input type="text" id="email" name="email" value={updateUser.email} value={updateFreelancer.email} required onChange={(e) => { emailUpdater(e) }} />
          <p>password</p>
          <input type="text" id="password" name="password" value={updateUser.password} value={updateFreelancer.password} required onChange={(e) => { passwordUpdater(e) }} />

          <button type="submit">update</button>
        </form>

      </div>

    )
}

export default EditHomePageFreelancer;

        