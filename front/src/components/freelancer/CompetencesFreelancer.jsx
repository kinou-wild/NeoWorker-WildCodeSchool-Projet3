import React, {useContext, useEffect,useState} from 'react'
import {SidebarContext} from '../SidebarContext'
import { Button } from 'reactstrap'
import axios from 'axios'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3.js'
import Slide4 from './Slide4'
import './CompetencesFreelancer.css'



/* -------- Page d'accueil de la page Freelancer, après connexion ------------------ */
const CompetencesFreelancer = () => {

    /* Le boolean initiapsé dans le Sidebar context passe à True à chaque refresh de page, pour que la Sidebar s'affiche */
    const [showSidebar, setShowSidebar] = useContext(SidebarContext)

    //hooks de la data freelancer pour get un id
    const [idFree, setIdFree] = useState([])

    //hooks de la data user pour le get de l'id
    const [idUser, setIdUser] = useState([])


    // cycle de vie du fetchData pour getter le profil du freelancer
    useEffect(() => {
        fetchDataFree()
    }, [])

    const fetchDataFree = () => {
        axios.get(`http://localhost:5000/freelancer/1`)
            .then(res => setIdFree(res.data))
            .catch((err) => console.log(err))
    }

    // cycle de vie du fetchData pour getter le profil du User

    useEffect(() => {
        fetchDataUserFree()
    }, []);

    const fetchDataUserFree = () => {
        axios.get('http://localhost:5000/user/1')
            .then(res => setIdUser(res.data))
    }

    useEffect(() => {
        setShowSidebar(true)
    })

    var settings = {
      infinite: true,
      slidesToShow: 1,
    };

    return(
        
        <div className="freelancer-competences">
            <div className='profil-card'>
                <p className='name-card'>Profil NeoWorker</p>
                <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
            </div> 
                <Slider {...settings}>
                    <Slide1/>
                    <Slide2/>
                    <Slide3/>
                    <Slide4/>
                </Slider>
           
                <Link to={`/freelancer/competences/`}>
                    <Button className='btn'>Editer</Button>
                </Link>

            </div>

    )
}

export default CompetencesFreelancer