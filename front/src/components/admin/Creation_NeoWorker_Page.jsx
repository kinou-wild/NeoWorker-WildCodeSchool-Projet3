import React, { useContext, useEffect, useState } from 'react'
import { FormGroup, InputGroupText, Input } from 'reactstrap';
import { SidebarContext } from '../SidebarContext'
import './Creation_NeoWorker_Page.css'
import axios from 'axios'


const CreationNeoWorkerPage = () => {

    /* Le boolean initialisé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const { hook, hook2 } = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2

    useEffect(() => {
        setShowSidebar(true)
        setRoleSidebar("admin")
    })

    //hooks de la data freelancer pour get
    const [idFree, setIdFree] = useState([])
    const [allFree, setAllFree] = useState([])


    //hooks du post de la data freelancer
    const [freelancer, setFreelancer] = useState({
        img: "",
        title: "",
        firstname: "",
        lastname: "",
        address: "",
        mobilite: 0,
        pref_lieu_de_travail: 0,
        disponibilite: 0,
        tj_min: 0,
        tj_max: 0,
        password: "",
        email: "",
        tel: "",
    })

    //hooks pour modif le freelancer
    const [updateFreelancer, setUpdateFreelancer] = useState({
        img: "",
        title: "",
        firstname: "",
        lastname: "",
        address: "",
        mobilite: 0,
        pref_lieu_de_travail: 0,
        disponibilite: 0,
        tj_min: 0,
        tj_max: 0,
        password: "",
        email: ""
    })

    // cycle de vie du fetchData pour getter le profil du freelancer
    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        axios.get(`http://localhost:5000/freelancer/profil/1`)
            .then(res => setIdFree(res.data))
            .catch((err) => console.log(err))
    }

    // recup all freelancer 
    useEffect(() => {
        allFreelancer()
    }, [])

    const allFreelancer = () => {
        axios.get('http://localhost:5000/allFreelancers')
            .then(res => setAllFree(res.data))
            .catch((err) => console.log(err))
    }


    //le post sur la data 
    const queryData = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5000/freelancer/profil', freelancer)
            .then(fetchData)
            .catch(err => console.log(err))
    }

    //update sur la data
    const updateQueryData = (e) => {
        e.preventDefault()
        axios.put('http://localhost:5000/freelancer/profil/1', updateFreelancer)
            .then(fetchData)
            .catch(err => console.log(err))
    }

    return (
        <div className="main-div">

            <div className='profil-card'>
                <p className='name-card'>Profil Admin</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture' />
            </div>

            <form className="formulaire-creation-neoworker" onSubmit={queryData} >

                <input className="input-metier" type="text" id="title" name="Métier" placeholder="Métier" value={freelancer.title} required onChange={(e) => { setFreelancer({ ...freelancer, title: e.target.value }) }} />

                <div className="first-div-creation-neoworker">
                    <div className="align-photoprofilwithinput-div">
                        <img className="profil-img-creation" src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=" />
                        <div className="align-field-text-div">
                            <input className="input-firstname" placeholder="Prénom" type="text" id="firstname" name="firstname" value={freelancer.firstname} required onChange={(e) => { setFreelancer({ ...freelancer, firstname: e.target.value }) }} />
                            <input className="input-lastname" placeholder="Nom" type="text" id="lastname" name="lastname" value={freelancer.lastname} required onChange={(e) => { setFreelancer({ ...freelancer, lastname: e.target.value }) }} />
                            <input className="input-email" placeholder="Email" type="text" id="email" name="email" value={freelancer.email} required onChange={(e) => { setFreelancer({ ...freelancer, email: e.target.value }) }} />
                            <input className="input-tel" placeholder="Telephone" type="text" id="tel" name="tel" value={freelancer.tel} required onChange={(e) => { setFreelancer({ ...freelancer, tel: e.target.value }) }} />
                            <input className="input-password" placeholder="Mot de passe" type="text" id="password" name="password" value={freelancer.password} required onChange={(e) => { setFreelancer({ ...freelancer, password: e.target.value }) }} />
                        </div>
                    </div>
                </div>

                <div className="second-div-creation-neoworker">
                    <div className="div-tj_min" >
                        <InputGroupText className="input-group-text">Taux journalier minimum</InputGroupText>
                        <input className="input-tj_min" type="number" id="tj_min" name="tj_min" value={freelancer.tj_min} required onChange={(e) => { setFreelancer({ ...freelancer, tj_min: e.target.value }) }} />
                    </div>

                    <div className="div-tj_max">
                        <InputGroupText>Taux journalier maximum</InputGroupText>
                        <input className="input-tj_max" type="number" id="tj_max" name="tj_max" value={freelancer.tj_max} required onChange={(e) => { setFreelancer({ ...freelancer, tj_max: e.target.value }) }} />
                    </div>

                </div>
                <div className="third-div-creation-neoworker">

                    <div className="div-dispo">
                        <InputGroupText>Disponibilité (nombres jours/mois)</InputGroupText>
                        <input className="input-dispo" type="number" id="disponibilite" name="disponibilite" value={freelancer.disponibilite} required onChange={(e) => { setFreelancer({ ...freelancer, disponibilite: e.target.value }) }} />
                    </div>

                    <div className="div-pref_lieu_travail">
                        <InputGroupText>Préférence lieu de travail</InputGroupText>
                        <select className="input-pref_lieu_travail" type="number" id="pref_lieu_de_travail" name="pref_lieu_de_travail" value={freelancer.pref_lieu_de_travail} required onChange={(e) => { setFreelancer({ ...freelancer, pref_lieu_de_travail: e.target.value }) }}>
                            <option value="">--Choisir une option--</option>
                            <option value="">Sur place</option>
                            <option value="">En remote</option>
                            <option value="">Peu importe</option>
                        </select>
                    </div>
                </div>

                <div className="fourth-div-creation-neoworker">
                    <div className="div-mobilite">
                        <InputGroupText>Mobilité</InputGroupText>
                        <select className="input-mobilite" type="number" id="mobilite" name="disponibilite" value={freelancer.mobilite} required onChange={(e) => { setFreelancer({ ...freelancer, mobilite: e.target.value }) }}>
                            <option value="">--Choisir une option--</option>
                            <option value="">Véhiculé</option>
                            <option value="">Non véhiculé</option>
                        </select>
                    </div>
                </div>

            </form>

            <hr className="separator-line"></hr>


        </div>
    )
}

export default CreationNeoWorkerPage;