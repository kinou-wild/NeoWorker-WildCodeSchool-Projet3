import React,{useState,useEffect} from 'react';
import axios from 'axios';

const App = () => {
  //all data
  const[dataUsers,setdataUsers] = useState([
    { role :'',
    email : '',
    password:'',
      freelancers: [{
        title:'',
        firstname:'',
      }]
    },
  ])

dataUsers[0]

  //post d'un user
  const[user,setUser] = useState({
      role:'',
      email:'',
      password:''
  })

   //hooks pour modif le user
  const[updateUser, setUpdateUser]= useState({
    role:'',
    email:'',
    password:''
  })

  //hooks permettant de stocker l'id dans l'objet pour la tj


    useEffect(() => {
       fetchData()
     },[]);
  
  const fetchData=async ()=>{
   await axios.get('http://localhost:5000/users')
    .then(res=>setdataUsers(res.data))
  }

  //le post sur la data 
  const queryData = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/users', user)
      .then(fetchData)
      .catch(err => console.log(err))
  }

  //update sur la data
  const updateQueryData = (e) => {
    e.preventDefault()
      axios.put('http://localhost:5000/user/5', updateUser)
      .then(fetchData)
      .catch(err=>console.log(err))
  }

   //delete sur la data
  const deleteData = (e) => {
    e.preventDefault()
      axios.delete('http://localhost:5000/user/5')
      .then(fetchData)
      .catch(err=>console.log(err))
  }

  console.log(dataUsers[2].email)
  return (
    
    <div>
       {dataUsers.map(x=>
        <div>
          <p>{x.role}</p>
          <p>{x.email}</p>
          <p>{x.password}</p>


        </div>)}
        <h1>post user</h1>
    <form onSubmit={queryData}>
      <p>role</p>
      <input type ="text" id="role" name="role" value={user.role} required onChange={(e) => setUser({...user, role:e.target.value})} />
      <p>email</p>
      <input type ="text" id="email" name="email" value={user.email} required onChange={(e) => setUser({...user, email:e.target.value})} />
      <p>password</p>
      <input type ="text" id="password" name="password" value={user.password} required onChange={(e) => setUser({...user, password:e.target.value})} />

      <button type="submit">add</button>
    </form>

        <h1>Update user</h1>
    <form onSubmit={updateQueryData}>
      <p>role</p>
      <input type ="text" id="role" name="role" value={updateUser.role} required onChange={(e) =>setUpdateUser({...updateUser, role:e.target.value})} />
      <p>email</p>
      <input type ="text" id="email" name="email" value={updateUser.email} required onChange={(e) => setUpdateUser({...updateUser, email:e.target.value})} />
      <p>password</p>
      <input type ="text" id="password" name="password" value={updateUser.password} required onChange={(e) => setUpdateUser({...updateUser, password:e.target.value})} />
      <button type="submit">update</button>
    </form>

        <button onClick={deleteData}>supprimer</button>
    </div>
     
  );

}



export default App;
