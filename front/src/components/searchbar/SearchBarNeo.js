import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './SearchBarNeo.css'


function SearchBarNeo() {
  const [searchTerm, setSearchTerm] = useState({
        nom:''
    });
    const [search, setSearch] = useState([]);
    const[result,setResult]= useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('http://localhost:5000/neoworker')
            .then(res => setSearch(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const results = search.filter(person =>
            person.modele.toLowerCase().includes(searchTerm.nom));
            setResult(results);
    }, [searchTerm.nom]);


    return (
        <div className="search">
            <input
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
                            <li>{item.lastname}</li>
                        </div>)
                }):
                result.map(item => {
                    return (
                        <div>
                            <li>{item.lastname}</li>
                        </div>)
                })}

                
            </ul>
        </div>
    );
}

export default SearchBarNeo