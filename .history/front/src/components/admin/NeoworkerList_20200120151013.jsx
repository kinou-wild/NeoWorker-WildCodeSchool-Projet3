import React, { useState, useEffect } from 'react'
import axios from 'axios'
import NeoworkerListCard from './NeoWorkerListCard'
import profilPic from '../../img/anais.jpg'
import './ListeNeoworker&Mission.css'
/* import SearchBarNeo from '../searchbar/SearchBarNeo' */

const NeoworkerList = () => {

    // 4 hooks pour classer les neoworker : disponible, partiellement, non dispo, ignoré
    const [neoworkerStatusZero, setNeoworkerStatusZero] = useState([])
    const [neoworkerStatusUn, setNeoworkerStatusUn] = useState([])
    const [neoworkerStatusDeux, setNeoworkerStatusDeux] = useState([])
    const [neoworkerStatusTrois, setNeoworkerStatusTrois] = useState([])

    /* 
    //hooks searchbar
    const [result, setResult] = useState()
    const [searchTerm, setSearchTerm] = useState({
        nom: ''
    });
    */


    // function to get all Neoworkers
    const getNeoworker = async () => {
        await axios.get('http://localhost:5000/freelancers?status=0')
            .then(res => setNeoworkerStatusZero(res.data))
            .catch((err) => console.log(err))
        await axios.get('http://localhost:5000/freelancers?status=1')
            .then(res => setNeoworkerStatusUn(res.data))
            .catch((err) => console.log(err))
        await axios.get('http://localhost:5000/freelancers?status=2')
            .then(res => setNeoworkerStatusDeux(res.data))
            .catch((err) => console.log(err))
        await axios.get('http://localhost:5000/freelancers?status=3')
            .then(res => setNeoworkerStatusTrois(res.data))
            .catch((err) => console.log(err))

    }

    //permet de refresh le get neoworker si un truc change sur la page 
    useEffect(() => {
        getNeoworker()

    }, [])

<<<<<<< HEAD

    ////////////////////////////////////////////////////////////////////////////

    /*
    const search = [...neoworkerStatus0, ...neoworkerStatus1, ...neoworkerStatus2, ...neoworkerStatus3]
    useEffect(() => {

        const results = search.filter(x =>
            x.modele.toLowerCase().includes(searchTerm.nom));
        setResult(results);
    }, [searchTerm.nom]);
    */

    


    return (
        <div className="admin-neoworker">
            <div className='profil-card'>
                {/* <SearchBarNeo setSearchTerm={setSearchTerm} searchTerm={searchTerm} />*/}
                <p className='name-card'> Anais</p>
                <img className='pic-card' src={profilPic} alt='profil pic' />
            </div>
            <h2 className="neoworker-h2">Disponible :</h2>
            <div className="neoworker-card-div">
                {neoworkerStatusZero.map(neoworker => {
                    return <NeoworkerListCard {...neoworker} />
                })}
            </div>
            <h2 className="neoworker-h2">Partiellement disponible :</h2>
            <div className="neoworker-card-div">
                {neoworkerStatusUn.map(neoworker => {
                    return <NeoworkerListCard {...neoworker} />
                })}
            </div>
            <h2 className="neoworker-h2">Non-disponible :</h2>
            <div className="neoworker-card-div">
                {neoworkerStatusDeux.map(neoworker => {
                    return <NeoworkerListCard {...neoworker} />
                })}
            </div>
            <h2 className="neoworker-h2">Ignoré :</h2>
            <div className="neoworker-card-div">
                {neoworkerStatusTrois.map(neoworker => {
                    return <NeoworkerListCard {...neoworker} />
=======
   
    return (
        <div className="neoworker-div" style={{padding: '500px'}}>
            <h2 className="neoworker-h2">Neoworkers :</h2>
            <div className="neoworker-card-div">
                {list.map(x => {
                    return <NeoworkerListCard key={x.id} list={{ ...x }} />
>>>>>>> update_neoworkers_stevie
                })}
            </div>

        </div>
    )
}

export default NeoworkerList