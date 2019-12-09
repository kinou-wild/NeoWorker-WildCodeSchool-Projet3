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
    axios.get('http://localhost:5000/freelancer/profil/1')
    .then(res => setData(res.data))
    .catch((err)=>console.log(err))
  }

  return (
    <div>
      <ul>
 <li> </li>

      </ul>
     
     {dataa.title}, {data.name}, 
      
    </div>
  );
}

export default App;
