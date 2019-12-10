import React,{useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const[dataa,setData] = useState([])

  const[freelancer,setFreelancer] = useState({
      img: "",
      title: "",
      firstname: "",
      lastname: "",
      address: "",
      mobilite: 4,
      pref_lieu_de_travail: 2,
      disponibilite: 1,
      fourchette_tarifaire: 1,
      password: "",
      email: ""
  })
  
  useEffect(() => {
      fetchData()
  }, [])

  const fetchData=()=>{
    axios.get('http://localhost:5000/freelancer/profil/17')
    .then(res => setData(res.data))
    .catch((err)=>console.log(err))
  }

  const queryData = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/freelancer/profil',freelancer)
    .then(fetchData)
    .catch(err=>console.log(err))
  }


  return (
    <div>
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
        <p></p> 
        <li>{dataa.pref_lieu_de_travail}</li>
        <li>{dataa.disponibilite}</li> 
        <li>{dataa.fourchette_tarifaire}</li> 
        <li>{dataa.password}</li>
        <li>{dataa.email}</li> 
      </ul>
    <form onSubmit={queryData}>
      <input type ="text" id="title" name="title" value={freelancer.title} required onChange={(e) => {setFreelancer({...freelancer, title:e.target.value})}} />
      <button type="submit">Add</button>

    </form>

    </div>
  );
}

export default App;
