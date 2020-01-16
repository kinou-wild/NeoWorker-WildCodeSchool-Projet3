 import React from 'react';
 import axios from 'axios';


 const ChangeNeoworker = () => {
     //hooks to update a neoworker
    const [updateNeoworker, setUpdateNeoworker] = useState([])

    //function to update a freelancer
    const update = (e, id) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/freelancers/${id}`)
        .then(res => setUpdateNeoworker(res.data))
        .catch((err) => console.log(err))
    }

    return (


    )
 }
 
 