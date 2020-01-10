import React, { useState, useEffect } from 'react';
import axios from 'axios'
import MissionDisplayer from "./MissionsListeCard"
import SearchBarMission from '../searchbar/SearchBarMissions'
import profilPic from '../../img/anais.jpg'
import './ListeNeoworker&Mission.css'

const MissionsListe = () => {

    const [missionsAPourvoir, setMissionsAPourvoir] = useState([])
    const [missionsPourvues, setMissionsPourvues] = useState([])
    const [missionsTerminees, setMissionsTerminees] = useState([])

    //hooks searchbar
    const [result, setResult] = useState() 
    const [searchTerm, setSearchTerm] = useState({
        nom: ''
    });

    // get all misions
    const getMissions = async () => {
        await axios.get('http://localhost:5000/missions?status=0')
            .then(response => setMissionsAPourvoir(response.data))
            .catch((err) => console.log(err))
        await axios.get('http://localhost:5000/missions?status=1')
            .then(response => setMissionsPourvues(response.data))
            .catch((err) => console.log(err))
        await axios.get('http://localhost:5000/missions?status=2')
            .then(response => setMissionsTerminees(response.data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getMissions()
    }, [])

    const search = [...missionsAPourvoir, ...missionsPourvues, ...missionsTerminees]
    useEffect(() => {

    const results = search.filter(x =>
        x.nom_mission.toLowerCase().includes(searchTerm.nom));
        setResult(results);
    }, [searchTerm.nom]);

    return (

        <div className="admin-mission">
            <div className='profil-card'>
            <SearchBarMission setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil picture' />
            </div>
            <h2 className='missions-h2'>Missions à pourvoir <span className='textModif'>:</span></h2>
            <div className='missions'>
                {missionsAPourvoir
                    .filter(x=>x.nom_mission.includes(searchTerm.nom) )
                    .map(mission => {
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