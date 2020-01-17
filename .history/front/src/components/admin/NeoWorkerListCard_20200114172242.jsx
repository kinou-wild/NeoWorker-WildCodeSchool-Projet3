import React from 'react'
import './ListeNeoworker&Mission.css'
import { Link } from 'react-router-dom'


const NeoworkerListCard = ({ list }) => {
    return (
        <div className='neoworkerCard'>
            <div className='neoworkerCard-content'>
                <div>
                    <p className='neoworkerCard-h1'>{list.firstname}</p>
                    <p className='neoworkerCard-h1'>{list.lastname}</p>
                </div>
                <p className='neoworkerCard-p'>{list.tel}</p>
                <p className='neoworkerCard-p'>{list.status}</p>
                <p className='neoworkerCard-p'>{list.email}</p>
                <p className='neoworkerCard-p'>{list.title}</p>
            </div>
            <div className="neoworkerCard-btn-container">
                <Link to={`/admin/neoworker/${list.id}`}>
                    <button className='button-card'> voir</button>
                </Link>
                <Link to={`/neoworker/editer/${list.id}`}>
                    <button className='button-card'> editer</button>
                </Link>
                {/* <Link to=''>
                <button className='neoworkerCard-btn'> ignorer</button>
            </Link> */}
            </div>
        </div>
    )
}

export default NeoworkerListCard