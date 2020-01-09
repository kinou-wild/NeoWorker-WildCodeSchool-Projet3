import React from 'react'
import './NeoworkerListCard.css'
import {Link} from 'react-router-dom'

const NeoworkerListCard = (list) => {
return(
    <div className='neoworkerCard'>
        <div className='neoworkerCard-content'>
            <h1>{firstname} {lastname}</h1>
            <p>{title}</p>
            <p>{status}</p>
        </div>
        <div className="neoworkerCard-btn-container">
            <Link to={`/admin/neoworker/${id}`}>
                <button className='neoworkerCard-btn'> voir</button>
            </Link>
            <Link to={`/neoworker/editer/${id}`}>
                <button className='neoworkerCard-btn'> editer</button>
            </Link>
        </div>
    </div>
)
}

export default NeoworkerListCard