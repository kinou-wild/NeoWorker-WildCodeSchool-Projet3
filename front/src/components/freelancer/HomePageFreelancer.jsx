import React, {useContext, useEffect,useState} from 'react'
import {SidebarContext} from '../SidebarContext'
import './HomePageFreelancer.css'
import { Button } from 'reactstrap'
import axios from 'axios'
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode'



/* -------- Page d'accueil de la page Freelancer, après connexion ------------------ */
const HomePageFreelancer = () => {

    const [profileHooks, setProfileHooks] = useState({
        id:'',
        errors: {}
    })

    //hooks de la data user pour le get de l'id
    const [idUsers, setIdUsers] = useState([])


    // cycle de vie du fetchData pour getter le profil du User
    useEffect(() => {
        fetchDataUserFree()
    }, []);

    const fetchDataUserFree = () => {
        axios.get(`http://localhost:5000/admin`)
            .then(res => setIdUsers(res.data))
            .catch((err) => console.log(err))
    }

    //décoder le token
    useEffect(() => {
        console.log(localStorage.usertoken)
        const token = localStorage.usertoken
        if (token) {
            const decoded = jwt_decode(token)
            setProfileHooks({
                id:decoded.id
            })
        }
    }, [])
    return(
        <div>
            {idUsers.filter(x => x.id == profileHooks.id).map(x =>
            <div key={x.freelancers[0].id} className="freelancer-homepage">
                <div className='profil-card'>
                    <p className='name-card'>{x.freelancers[0].firstname}</p>
                    <img className='pic-card' src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='profil picture'/>
                </div> 
                <div>
                    <h1 className='freelancer-h1'>Bienvenue sur ton espace personnel</h1>
                </div>
                    <div className="champs-profil-title"><p id='freelancer-title' placeholder='métier'>{x.freelancers[0].title}</p></div>
                <div className='homepage-profil'>
                    <div className="profil-img-creation-freelancer">
                        <img className='picture-profil'src='https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?k=6&m=476085198&s=612x612&w=0&h=5cDQxXHFzgyz8qYeBQu2gCZq1_TN0z40e_8ayzne0X0=' alt='photo de profil' />
                        
{/*                         <input name="file" type="file" className="transformation" data-cloudinary-field="image_id" onChange={uploadImage}/>
 */}
                    </div>
                    <div className='infos-profil'>
                        <div className="champs-profil"><p>{x.freelancers[0].firstname}</p></div>                        
                            <div className="champs-profil"><p>{x.freelancers[0].lastname}</p></div>
                            <div className="champs-profil"><p>{x.freelancers[0].email}</p></div>
                            <div className="champs-profil"><p>{x.freelancers[0].tel}</p></div>
                    </div>
                </div>
                <div className='reste-profil'>
                    <div className="container-champs-reste-profil">
                            <div className="champs-reste-profil"><p>{x.freelancers[0].tjm_min}</p></div>
                            <div className="champs-reste-profil"><p>{x.freelancers[0].tjm_max}</p></div>
                    </div>
                    <div className="container-champs-reste-profil">
                            <div className="champs-reste-profil"><p>{x.freelancers[0].disponibilite}</p></div>
                            <div className="champs-reste-profil"><p>{x.freelancers[0].mobilite}</p></div>
                    </div>
                    <div className="container-champs-reste-profil">
                            <div className="champs-reste-profil"><p>{x.freelancers[0].address}</p></div>
                            <div className="champs-reste-profil"><p>{x.freelancers[0].cp}</p></div>
                    </div>
                    <div className="container-champs-reste-profil">
                            <div className="champs-reste-profil"><p>{x.freelancers[0].pref_lieu_de_travail}</p></div>
                            <div className="champs-reste-profil"><p>{x.freelancers[0].km_max}</p></div>
                    </div>
                </div>
                   <Link to={`/neoworker/editer/${profileHooks.id}/${x.freelancers[0].id}`}>
                <Button className='btn'>Editer</Button>
            </Link>
        </div>)}
            
        </div>
    )
}

export default HomePageFreelancer