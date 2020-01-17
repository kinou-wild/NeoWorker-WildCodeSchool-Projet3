import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios'
import profilPic from '../../img/anais.jpg'


const ChangeNeoworker = (props) => {

    const params = props.match.params

     const updateDataMission = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/mission/${params.id}`, updateMission)
            .catch((err) => console.log(err))
            .then(x => {
                props.history.push('/admin/missions')
            })
    }

    // Get Neoworker data
    const [data, setData] = useState([])

    const getData = async (id) => {
        await axios.get(`http://localhost:5000/freelancer/${params.id}`)
            .then(res => setData(res.data))
            .catch((err) => console.log(err))
    }

    //hooks to update a neoworker
    const [updateNeoworker, setUpdateNeoworker] = useState([])

    //function to update a freelancer
    const update = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:5000/freelancers/${params.id}`, data)
            .catch((err) => console.log(err))
            .then(x => {
                props.history.push('/admin/neoworker/liste')
            }
            )
    }

    useEffect(() => {
        update()
    }, [])

    const onStarClick = (nextValue, name) => {
        if (updateNeoworker[name] === nextValue) {
            setUpdateNeoworker({ ...updateNeoworker, [name]: null })
        } else {
            setUpdateNeoworker({ ...updateNeoworker, [name]: nextValue })
        }
    }
    return (
        <div>
           
        </div>
    )
}

export default ChangeNeoworker;