import React,{useState,useEffect} from 'react';
import axios from 'axios';

function ModifFree(props) {

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
  setUpdateUser({...updateUser, email: e.target.value,})
  setUpdateFreelancer({...updateFreelancer, email: e.target.value})
    }


//fonction qui modif le password user et le password free en même temps
const passwordUpdater = (e) => {
  setUpdateUser({...updateUser, password: e.target.value})
  setUpdateFreelancer({...updateFreelancer,password: e.target.value})
            }
          

  return (
    <div style={{textAlign:'center'}}>
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
      <input type ="text" id="email" name="email" value={updateUser.email} value={updateFreelancer.email} required onChange={(e) => emailUpdate(e)} /> 
      <p>password</p>
      <input type ="text" id="password" name="password" value={updateUser.password} value={updateFreelancer.password} required onChange={ (e) => {passwordUpdater(e)}}/>

      <button type="submit">update</button>
    </form>

    </div>
  
  )}

export default ModifFree;
