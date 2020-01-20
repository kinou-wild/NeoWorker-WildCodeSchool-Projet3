import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import './ListeNeoworker&Mission.css'
import axios from 'axios'
import { useState } from 'react'


const NeoworkerListCard = (neoworker) => {

    /* INCLURE ICI : méthode pour set le status d'un Neoworker pour l'ignoré */

    // hook pour le set du status

    const [statusIgnore, setStatusIgnore] = useState({
        status: 3
    })


    // permet de set le status d'un neoworker à 3 = ignoré
    const updateStatus = async (id) => {
        axios.put(`http://localhost:5000/freelancer/${id}`, statusIgnore)
            .catch((err) => console.log(err))
            window.location.reload(false);

    }

    //permet de delete un Neoworker de la bdd 
    const deleteNeoworker = (id) => {
        axios.delete(`http://localhost:5000/freelancer/${id}`)
            .catch((err) => console.log(err))
            window.location.reload(false);
    }



    return (
        <div className='neoworkerCard'>
            <div className="firstrow-card-neoworker">
                <p className='neoworkerCard-h1'>{neoworker.firstname} {neoworker.lastname}</p>
            </div>
            <div className="secondrow-card-neoworker">
                <p>Métier : {neoworker.title}</p>
                <Link to={`/admin/neoworker/${neoworker.id}`}><Button className='button-card'>Voir</Button></Link>
            </div>
            <div className="thirdrow-card-neoworker">
                <p>Téléphone : {neoworker.tel}</p>
                <Link to={`/neoworker/editer/${neoworker.id}`}><Button className='button-card'>Modifier</Button></Link>
            </div>
            <div className="fourthrow-card-neoworker">
                <p>Email : {neoworker.email}</p>
                <Button className='button-card' onClick={() => { if (window.confirm('Voulez-vous vraiment supprimer ce Neoworker ?')) deleteNeoworker(neoworker.id) }}>Supprimer</Button>
            </div>
<<<<<<< HEAD
            <div className="fifthrow-card-neoworker">
                <p></p>
                <Button className='button-card' onClick={() => {if (window.confirm('Voulez-vous vraiment ignoré ce Neoworker ?')) updateStatus(neoworker.id)}}>Ignorer</Button>
=======
            <div className="neoworkerCard-btn-container">
                <Link to={`/admin/neoworker/${list.id}`}>
                    <button className='button-card'> voir</button>
                </Link>
                <Link to={`/admin/neoworker/editer/${list.id}`}>
                    <button className='button-card'> editer</button>
                </Link>
>>>>>>> update_neoworkers_stevie
            </div>



            {/* INCLURE ICI : Bouton ignoré et affichage de la mission associé sur test du Statut du Neoworker */}


        </div>
    )
}

export default NeoworkerListCard