import React,{useState,useEffect} from 'react';
import axios from 'axios';

function Freelancer() {

  //hooks de la data freelancer pour get
  const[dataa,setData] = useState([])


//hooks du post de la data freelancer
  const[freelancer,setFreelancer] = useState({
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
  // cycle de vie du fetchData pour getter le profil du freelancer
  useEffect(() => {
      fetchData()
  }, [])

  const fetchData=()=>{
    axios.get('http://localhost:5000/freelancer/profil/21')
    .then(res => setData(res.data))
    .catch((err)=>console.log(err))
  }

  //le post sur la data 
  const queryData = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/freelancer/profil',freelancer)
    .then(fetchData)
    .catch(err=>console.log(err))
  }


  return (
    <div style={{textAlign:'center'}}>
      {/* Les champs de la bdd  */}
      <ul>
              <p>title</p>
        <li>{dataa.title}</li> 
        <p>firstname</p>
        <li>{dataa.firstname}</li> 
        <p>lastname</p>
        <li>{dataa.lastname}</li>
        <p>address</p>
        <li>{dataa.address}</li> 
        <p>mobilite</p>
        <li>{dataa.mobilite}</li>
        <p>pref_lieu_de_travail</p> 
        <li>{dataa.pref_lieu_de_travail}</li>
        <p>disponibilite</p>
        <li>{dataa.disponibilite}</li> 
        <p>fourchette_tarifaire</p>
        <li>{dataa.fourchette_tarifaire}</li> 
        <p>password</p>
        <li>{dataa.password}</li>
        <p>email</p>
        <li>{dataa.email}</li> 
      </ul>



    <form onSubmit={queryData}>

      {/* les input pour poster sur la bdd */}
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

    </form>

    </div>
  );
}

export default Freelancer;
