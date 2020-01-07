import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { SidebarContext } from '../SidebarContext'
import { Button } from 'reactstrap'
import './MissionsListe.css'
import MissionDisplayer from "./MissionsListeCard"
import SearchBarMission from '../searchbar/SearchBarMissions'
import ReactDOM from "react-dom"


const MissionsListe = () => {

    const { hook, hook2 } = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2

    const [missionsAPourvoir, setMissionsAPourvoir] = useState([])
    const [missionsPourvues, setMissionsPourvues] = useState([])
    const [missionsTerminees, setMissionsTerminees] = useState([])

    /*    //hooks searchbar
       const [result, setResult] = useState()
       //test search
       const [searchTerm, setSearchTerm] = useState({
           nom: ''
       });
       const setMySearch = setSearchTerm.bind(this) */


    // get all misions
    const getMissions = () => {
        axios.get('http://localhost:5000/missions?status=0')
            .then(response => setMissionsAPourvoir(response.data))
            .catch((err) => console.log(err))
        axios.get('http://localhost:5000/missions?status=1')
            .then(response => setMissionsPourvues(response.data))
            .catch((err) => console.log(err))
        axios.get('http://localhost:5000/missions?status=2')
            .then(response => setMissionsTerminees(response.data))
            .catch((err) => console.log(err))
    }

    const fetchDeleteDataMission = (id) => {
        axios.delete(`http://localhost:5000/mission/${id}`)
            .catch((err) => console.log(err))
        window.location.reload(false);
    }


   /*  useEffect(() => {
        getMissions()
        setShowSidebar(true)
        setRoleSidebar("admin")
    }, []) */

   /*  const search = [...missionsAPourvoir, ...missionsPourvues, ...missionsTerminees]
    useEffect(() => {

           const results = search.filter(person =>
              person.nom_mission.toLowerCase().includes(searchTerm.nom));
          setResult(results);
      }, [searchTerm.nom]); */
   


        return (

            <div className="admin-mission">
                {/*             <SearchBarMission setSearchTerm={setSearchTerm} searchTerm={searchTerm} /> */}
                <h2 className='missions-h2'>Missions à pourvoir <span className='textModif'>:</span></h2>
                <div className='missions'>
                    {missionsAPourvoir.map(mission => {
                        return <MissionDisplayer {...mission} />
                    })}
                </div>
                <h2 className='missions-h2'>Missions pourvues <span className='textModif'>:</span></h2>
                <div className='missions'>
                    {missionsPourvues.map(mission => {
                        return <MissionDisplayer {...mission} />
                    })
                    }
                </div>
                <h2 className='missions-h2'>Missions terminées <span className='textModif'>:</span></h2>
                <div className='missions'>
                    {missionsTerminees.map(mission => {
                        return <MissionDisplayer {...mission} />
                    })
                    }
                </div>

            </div>
        )
    }

export default MissionsListe