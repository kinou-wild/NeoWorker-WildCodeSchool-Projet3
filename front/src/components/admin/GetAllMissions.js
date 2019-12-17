import React, {
    useState,
    useEffect,
    useContext
} from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { SidebarContext } from '../SidebarContext'

const GetAllMissions = () => {

    // hooks to get all missions
    const [missions, setMissions] = useState([])

    const { hook, hook2 } = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2

    useEffect(() => {
        getMissions() 
        setShowSidebar(true)
        setRoleSidebar("admin")
    }, [])

    // get all misions
    const getMissions = () => {
        axios.get('http://localhost:5000/missions')
            .then(response => setMissions(response.data))
            .catch((err) => console.log(err))
    }
    const fetchDeleteDataMission = (id) => {
        axios.delete(`http://localhost:5000/mission/${id}`)
            .catch((err) => console.log(err))
            window.location.reload(false);

    }

    
   
    return(
        <div style={{marginLeft:'300px'}}>
            {missions.map(x =>
                <div>   
                    <p>titre</p>
                    <p>{x.nom_mission}</p>
                    <p>{x.address}</p>

                    <p>status</p>
                    <p>{x.status}</p>
                    <p>{x.id}</p>                    
                    <button onClick={()=>fetchDeleteDataMission(x.id)} >delete</button>
                    
                    <Link to={`/mission/see/${x.id}`}><button>see</button></Link>
                    <Link to={`/updateMission/${x.id}`}><button>update</button></Link>   
            </div>)}
        </div>
        )
}

export default GetAllMissions;