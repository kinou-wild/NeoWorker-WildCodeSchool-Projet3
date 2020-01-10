import React from 'react'
import './ListeNeoworker&Mission.css'
import {Link} from 'react-router-dom'


const NeoworkerListCard = ({list}) => {
return(
    <div className='neoworkerCard'>
        <img>img</img>
        <div className='neoworkerCard-content'>
            <h1 className='neoworkerCard-h1'>{list.firstname} {list.lastname}</h1>
            <p className='neoworkerCard-p'>{list.tel}</p>
            <p className='neoworkerCard-p'>{list.status}</p>
            <p className='neoworkerCard-p'>{list.email}</p>            
            <p className='neoworkerCard-p'>{list.title}</p>
        </div>
        <div className="neoworkerCard-btn-container">
            <Link to={`/admin/neoworker/${list.id}`}>
                <button className='neoworkerCard-btn'> voir</button>
            </Link>
            <Link to={`/neoworker/editer/${list.id}`}>
                <button className='neoworkerCard-btn'> editer</button>
            </Link>
            {/* <Link to=''>
                <button className='neoworkerCard-btn'> ignorer</button>
            </Link> */}
        </div>
    </div>
)
}

export default NeoworkerListCard