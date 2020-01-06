import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap'
import './MissionsListe.css'
import MissionDisplayer from "./MissionsListeCard"
import SearchBarMission from '../searchbar/SearchBarMissions'


const MissionsListe = () => {

    // hooks to get all missions
    const [missionsAPourvoir, setMissionsAPourvoir] = useState([])
    const [missionsPourvues, setMissionsPourvues] = useState([])
    const [missionsTerminées, setMissionsTerminées] = useState([])


    //var hooks bar de recherche

    const [searchTerm, setSearchTerm] = useState({
        nom: ''
    });
    const [search, setSearch] = useState([]);
    const [result, setResult] = useState([]);

    //barre de recherche methode

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('http://localhost:5000/missions')
            .then(res => setSearch(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const results = search.filter(person =>
            person.nom_mission.toLowerCase().includes(searchTerm.nom));
        setResult(results);
    }, [searchTerm.nom]);



    useEffect(() => {
        getMissions()
    }, [])

    // get all misions
    const getMissions = () => {
        axios.get('http://localhost:5000/missions?status=0')
            .then(response => setMissionsAPourvoir(response.data))
            .catch((err) => console.log(err))
        axios.get('http://localhost:5000/missions?status=1')
            .then(response => setMissionsPourvues(response.data))
            .catch((err) => console.log(err))
        axios.get('http://localhost:5000/missions?status=2')
            .then(response => setMissionsTerminées(response.data))
            .catch((err) => console.log(err))
    }


    const fetchDeleteDataMission = (id) => {
        axios.delete(`http://localhost:5000/mission/${id}`)
            .catch((err) => console.log(err))
        window.location.reload(false);

    }
return (
    <div className="admin-mission">
            <h2 className='missions-h2'>Missions à pourvoir <span className='textModif'>:</span></h2>
            <div className='missions'>
                {missionsAPourvoir.map(mission => {
                    return <MissionDisplayer {...mission} />
                })}
            </div>
            <h2 className='missions-h2'>Missions Pourvues <span className='textModif'>:</span></h2>
            <div className='missions'>
                {missionsPourvues.map(mission => {
                    return <MissionDisplayer {...mission} />
                })
                }
            </div>
            <h2 className='missions-h2'>Missions terminées <span className='textModif'>:</span></h2>
            <div className='missions'>
                {missionsTerminées.map(mission => {
                    return <MissionDisplayer {...mission} />
                })
                }
            </div>
        </div>)
}

export default MissionsListe;