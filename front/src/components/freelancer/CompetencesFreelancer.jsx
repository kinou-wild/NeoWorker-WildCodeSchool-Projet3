import React, {useContext, useEffect,useState} from 'react'
import { Button } from 'reactstrap'
import axios from 'axios'
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import Slide1 from './Slide1'
import Slide2 from './Slide2'
import Slide3 from './Slide3.js'
import Slide4 from './Slide4'
import './CompetencesFreelancer.css'

const CompetencesFreelancer = (props) => {

    //hooks de la data user pour le get de l'id
    const [idUsers, setIdUsers] = useState([])

const params=props.match.params.id
    
// cycle de vie du fetchData pour getter le profil du User
useEffect(() => {
    fetchDataUserFree()
}, []);

const fetchDataUserFree = () => {
    axios.get(`http://localhost:5000/admin`)
    .then(res => setIdUsers(res.data))
    .catch((err) => console.log(err))
}

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
                    <Slide1 data={idUsers.filter(x => x.id == params).map(x => x.freelancers[0])}/>
                    <Slide2/>
                    <Slide3 data={idUsers.filter(x => x.id == params).map(x => x.freelancers[0])} />
                    <Slide4 data={idUsers.filter(x => x.id == params).map(x => x.freelancers[0])} />

                </Slider>
                <Link to={`/neoworker/editer/:id`}>
                    <Button className='btn'>Editer</Button>
                </Link>
            </div>
    )
}

export default CompetencesFreelancer