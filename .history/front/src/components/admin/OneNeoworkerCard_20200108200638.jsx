import React from 'react';
import {Link} from 'react-router-dom'


const OneNeoworkerCard = ({neoworker}) => {
    return(
        <div>
            <h1>{neoworker.title}</h1>
            <p>{neoworker.firstname}</p>
            <Link to='/admin/neoworker/liste'>
                <button>back to list</button>
            </Link>
        </div>
    )
}
export default OneNeoworkerCard