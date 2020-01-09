import React from 'react'
import './NeoworkerListCard.css'
import {Link} from 'react-router-dom'

const NeoworkerListCard = (list) => {
return(
    <div className='neoworkerCard'>
        <div className='neoworkerCard-content'>
            <h1>{list.firstname} {list.lastname}</h1>
            <p>{list.title}</p>
            <p>{list.status}</p>
        </div>
        <div className="neoworkerCard-btn-container">
            <Link to={`/admin/neoworker/${list.id}`}>
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