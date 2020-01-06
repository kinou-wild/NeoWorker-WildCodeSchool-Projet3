import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './SearchBarMissions.css'



function SearchBarMission() {
  const [searchTerm, setSearchTerm] = useState({
        nom:''
    });
    const [search, setSearch] = useState([]);
    const[result,setResult]= useState([]);

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

    console.log (result.map(x=>x.nom_mission))
    return (
        <div className="search">
            <input
                className="search-input"
                type="text"
                placeholder="Search"
                value={searchTerm.nom}
                onChange={(e) => { setSearchTerm({ ...searchTerm,nom:e.target.value }) }}

            />
            <ul>
                {searchTerm.nom.length===0?
                search.map(item => {
                    return (
                        <div>
                            <li>{item.nom_mission}</li>
                        </div>)
                }):
                result.map(item => {
                    return (
                        <div>
                            <li>{item.nom_mission}</li>
                        </div>)
                })}

                
            </ul>
        </div>
    );
}

export default SearchBarMission