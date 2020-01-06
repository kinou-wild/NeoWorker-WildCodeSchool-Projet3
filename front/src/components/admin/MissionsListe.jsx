import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import { SidebarContext } from '../SidebarContext'
import { Button } from 'reactstrap'
import './MissionsListe.css'
import SearchBarMission from '../searchbar/SearchBarMissions'

const MissionsListe = () => {

    // hooks to get all missions
    const [missions, setMissions] = useState([])

    const { hook, hook2 } = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2


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

    //return searchbar
    return (

        <div className="admin-mission">


            <div className="search">
                <input
                    className="search-input"
                    type="text"
                    placeholder="Search"
                    value={searchTerm.nom}
                    onChange={(e) => { setSearchTerm({ ...searchTerm, nom: e.target.value }) }}

                />
                <ul>
                    {searchTerm.nom.length === 0 ?
                        search.map(item => {
                            return (
                                <div>
                                    <li>{item.nom_mission}</li>
                                </div>)
                        }) :
                        result.map(item => {
                            return (
                                <div>
                                    <li>{item.nom_mission}</li>
                                </div>)
                        })}


                </ul>
            </div>





            <div className='profil-card'>
                <p className='name-card'>Profil Admin</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture' />
            </div>
            <h2 className='missions-h2'>Missions créées</h2>
            <div className='missions'>
                {console.log(searchTerm)}
                {missions.filter(mission => (searchTerm.nom.length === 0 || mission.nom_mission.toLowerCase().includes(searchTerm.nom.toLocaleLowerCase()))).map(mission =>
                    <div className='missions-cards'>
                        <div className='firstrow-card'>
                            <p className='titleofmission'>{mission.nom_mission}</p>
                            <p className='dateofmission'>du : {mission.date_debut} au : {mission.date_fin}</p>
                        </div>
                        <div className='secondrow-card'>
                            <p>{mission.nom_entreprise}</p>
                            <Link to={`/mission/see/${mission.id}`}><Button className='button-card'>Voir</Button></Link>
                        </div>

                        <div className='thirdrow-card'>
                            <p>telephone : {mission.tel}</p>
                            <Link to={`/updateMission/${mission.id}`}><Button className='button-card'>Modifier</Button></Link>
                        </div>
                        <div className='fourthrow-card'>
                            <p>email : {mission.email}</p>
                            <Button className='button-card' onClick={() => fetchDeleteDataMission(mission.id)} >Supprimer</Button>
                        </div>
                    </div>)}
            </div>
        </div>
    )
}

export default MissionsListe;