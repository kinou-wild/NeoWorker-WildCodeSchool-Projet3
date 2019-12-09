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
      password: "dfgsfd",
      email: ""
  })
  
  useEffect(() => {
      fetchData()
  }, [])

  const fetchData=()=>{
    axios.get('http://localhost:5000/freelancer/profil/4')
    .then(res => setData(res.data))
    .catch((err)=>console.log(err))
  }

  return (
    <div>
      <ul>
        <li>{dataa.title}</li> 
        <li>{dataa.firstname}</li> 
        <li>{dataa.lastname}</li>
        <li>{dataa.address}</li> 
        <li>{dataa.mobilite}</li> 
        <li>{dataa.pref_lieu_de_travail}</li>
        <li>{dataa.disponibilite}</li> 
        <li>{dataa.fourchette_tarifaire}</li> 
        <li>{dataa.password}</li>
        <li>{dataa.email}</li> 
      </ul>
      
    </div>
  );
}

export default App;
