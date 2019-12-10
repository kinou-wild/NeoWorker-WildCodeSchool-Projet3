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

  // cycle de vie du fetchData pour getter le profil du freelancer
  useEffect(() => {
      fetchData()
  }, [])

  const fetchData=()=>{
    axios.get('http://localhost:5000/freelancer/profil/2')
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

  //update sur la data
  const updateQueryData = (e) => {
    e.preventDefault()
      axios.put('http://localhost:5000/freelancer/profil/2', updateFreelancer)
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
        <li>{String(dataa.mobilite)}</li>
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
        <p>excel</p>
        <li>{String(dataa.excel)}</li>
        <p>powerpoint</p>
        <li>{String(dataa.powerpoint)}</li>
        <p>word</p>
        <li>{String(dataa.word)}</li>
        <p>microsoft_365</p>
        <li>{String(dataa.microsoft_365)}</li>
        <p>crm_hubspot</p>
        <li>{String(dataa.crm_hubspot)}</li>
        <p>crm_salesforce</p>
        <li>{String(dataa.salesforce)}</li>
        <p>crm_pipedrive</p>
        <li>{String(dataa.crm_pipedrive)}</li>
        <p>crm</p>
        <li>{String(dataa.crm)}</li>
        <p>suite_adobe</p>
        <li>{String(dataa.suite_adobe)}</li>
        <p>illustrator</p>
        <li>{String(dataa.illustrator)}</li>
        <p>in_design</p>
        <li>{String(dataa.in_design)}</li>
        <p>photoshop</p>
        <li>{String(dataa.photoshop)}</li>
        <p>marketing_fb</p>
        <li>{String(dataa.marketing_fb)}</li>
        <p>google_adwards</p>
        <li>{String(dataa.google_adwards)}</li>
        <p>insta</p>
        <li>{String(dataa.insta)}</li>
        <p>reseaux_sociaux</p>
        <li>{String(dataa.reseaux_sociaux)}</li>
        <p>keynote</p>
        <li>{String(dataa.keynote)}</li>
        <p>pages</p>
        <li>{String(dataa.pages)}</li>
        <p>gsuite_google</p>
        <li>{String(dataa.gsuite_google)}</li>
        <p>numbers</p>
        <li>{String(dataa.numbers)}</li>
        <p>erp_sap</p>
        <li>{String(dataa.erp_sap)}</li>
        <p>ciel_gestion</p>
        <li>{String(dataa.ciel_gestion)}</li>
        <p>cegid</p>
        <li>{String(dataa.cegid)}</li>
        <p>sage_gestion_commercial</p>
        <li>{String(dataa.sage_gestion_commercial)}</li>
        <p>sage_comptabilite</p>
        <li>{String(dataa.sage_comptabilite)}</li>
        <p>quadra</p>
        <li>{String(dataa.quadra)}</li>
        <p>reso_pb</p>
        <li>{String(dataa.reso_pb)}</li>
        <p>confiance</p>
        <li>{String(dataa.confiance)}</li>
        <p>empathie</p>
        <li>{String(dataa.empathie)}</li>
        <p>intelligence_emo</p>
        <li>{String(dataa.intelligence_emo)}</li>
        <p>communication</p>
        <li>{String(dataa.communication)}</li>
        <p>gestion_temps</p>
        <li>{String(dataa.gestion_temps)}</li>
        <p>gestion_stress</p>
        <li>{String(dataa.gestion_stress)}</li>
        <p>creativite</p>
        <li>{String(dataa.creativite)}</li>
        <p>esprit_entre</p>
        <li>{String(dataa.esprit_entre)}</li>
        <p>audace</p>
        <li>{String(dataa.audace)}</li>
        <p>vision_visu</p>
        <li>{String(dataa.vision_visu)}</li>
        <p>motivation</p>
        <li>{String(dataa.motivation)}</li>
        <p>presence</p>
        <li>{String(dataa.presence)}</li>
        <p>sens_collectif</p>
        <li>{String(dataa.sens_collectif)}</li>
        <p>curiosite</p>
        <li>{String(dataa.curiosite)}</li>
        <p>sens_effort</p>
        <li>{String(dataa.sens_effort)}</li>
        <p>sport</p>
        <li>{String(dataa.sport)}</li>
        <p>passion</p>
        <li>{String(dataa.passion)}</li>
        <p>engagement_asso</p>
        <li>{String(dataa.engagement_asso)}</li>
        <p>autres_softskill</p>
        <li>{String(dataa.autres_softskill)}</li>
        <p>gestion_admin_compta</p>
        <li>{String(dataa.gestion_admin_compta)}</li>
        <p>gestion_op</p>
        <li>{String(dataa.gestion_op)}</li>
        <p>gestion_commerciale</p>
        <li>{String(dataa.gestion_commerciale)}</li>
        <p>marketing_com_digit</p>
        <li>{String(dataa.marketing_com_digit)}</li>
        <p>gestion_fi_controle_gestion</p>
        <li>{String(dataa.gestion_fi_controle_gestion)}</li>
        <p>dsi</p>
        <li>{String(dataa.dsi)}</li>
        <p>gestion_rh_juridique</p>
        <li>{String(dataa.gestion_rh_juridique)}</li>
        <p>gestion_rel_client</p>
        <li>{String(dataa.gestion_rel_client)}</li>
        <p>francais</p>
        <li>{String(dataa.francais)}</li>
        <p>anglais</p>
        <li>{String(dataa.anglais)}</li>
        <p>italien</p>
        <li>{String(dataa.italien)}</li>
        <p>chinois</p>
        <li>{String(dataa.chinois)}</li>
        <p>russe</p>
        <li>{String(dataa.russe)}</li>
        <p>arabe</p>
        <li>{String(dataa.arabe)}</li>
        <p>allemand</p>
        <li>{String(dataa.allemand)}</li>
        <p>autres_langue</p>
        <li>{String(dataa.autres_langue)}</li>
        

      
      </ul>

    <form onSubmit={queryData} >

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

      {/* les input pour update sur la bdd */}
      <form onSubmit={updateQueryData} >

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
      <p>password</p>
      <input type ="text" id="password" name="password" value={updateFreelancer.password} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, password:e.target.value})}} />
      <p>email</p>
      <input type ="text" id="email" name="email" value={updateFreelancer.email} required onChange={(e) => {setUpdateFreelancer({...updateFreelancer, email:e.target.value})}} />

      <button type="submit">Update</button>

    </form>

    </div>
  
  )}

export default Freelancer;
