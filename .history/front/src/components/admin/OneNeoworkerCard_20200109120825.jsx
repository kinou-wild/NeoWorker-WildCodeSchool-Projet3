import React from 'react';
import {Link} from 'react-router-dom'


const OneNeoworkerCard = ({neoworker}) => {
    console.log(neoworker)
    return(
        <div>
            xxxx
            <h1>{neoworker.title}</h1>
            <p>{neoworker.firstname}</p>
            <Link to='/admin/neoworker/liste'>
                <button>back to list</button>
            </Link>
        </div>
    )
}
export default OneNeoworkerCard