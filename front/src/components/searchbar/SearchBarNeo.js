import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './SearchBarNeo.css'


function SearchBarNeo() {
  const [searchTerm, setSearchTerm] = useState({
        nom:''
    });
    const [searchResults, setSearchResults] = useState([]);
    const[result,setResult]= useState([]);

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get('http://localhost:5000/neoworker')
            .then(res => setSearchResults(res.data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        const results = searchResults.filter(person =>
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
                searchResults.map(item => {
                    return (
                        <div>
                            <li>{item.modele}</li>
                        </div>)
                }):
                result.map(item => {
                    return (
                        <div>
                            <li>{item.modele}</li>
                        </div>)
                })}

                
            </ul>
        </div>
    );
}

export default SearchBarNeo