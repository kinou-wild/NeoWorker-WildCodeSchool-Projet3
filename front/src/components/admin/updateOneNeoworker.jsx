 import React from 'react';

 const ChangeNeoworker = () => {
     //hooks to update a neoworker
    const [updateNeoworker, setUpdateNeoworker] = useState({neoworkerById})

    //function to update a freelancer
    const update = (e, id) => {
        e.preventDefault()
        axios.put(`http://localhost:5000/freelancers/${id}`)
        .then(res => setUpdateNeoworker(res.data))
        .catch((err) => console.log(err))
    }
 }
 
 