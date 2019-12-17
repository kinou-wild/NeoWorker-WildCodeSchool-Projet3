import React, { useState, useContext } from 'react'
import './Sidebar.css'
import NeoWorkerLogo from '../../img/LOGO CLASSIQUE_FOND TRANSPARENT_506X254.png'
import { Link } from 'react-router-dom'
import { SidebarContext } from '../SidebarContext'

const Sidebar = (props) => {

    /* Hook qui vient de notre sidebar context, qui contient le state boolean pour afficher, ou non, la sidebar selon sur quelle page on se trouve*/
    const {hook, hook2} = useContext(SidebarContext)
    const [showSidebar, setShowSidebar] = hook
    const [roleSidebar, setRoleSidebar] = hook2

    /* Hook n°1 qui correspond au champ Neoworker, et ses sous champs */
    const [hiddenfield, setHiddenfield] = useState(false)

    /* Méthode qui permet de faire apparaitre les sous champs de Neoworker, et de faire disparaitre les sous champs de toutes les autres catégories */
    const changeFieldBoolean = () => {
        setHiddenfield(!hiddenfield)
        setHiddenfield2(false)
    }

    /* Hook n°2 qui correspond au champ Missions, et ses sous champs */
    const [hiddenfield2, setHiddenfield2] = useState(false)

    /* Méthode qui permet de faire apparaitre les sous champs de Missions, et de faire disparaitre les sous champs de toutes les autres catégories */
    const changeFieldBoolean2 = () => {
        setHiddenfield2(!hiddenfield2)
        setHiddenfield(false)
    }

    console.log(`showSidebar = ${showSidebar}`)
    console.log(`roleSidebar = ${roleSidebar}`)

    return (
        
        <>

            {roleSidebar === "admin" ?

            <div className={showSidebar === true ? "sidebar" : "sidebar-hidden"}>
                <img className="sidebar-logo" src={NeoWorkerLogo} alt="neo worker logo"></img>
                <div className="sidebar-field-group">

                    <p className="sidebar-field" onClick={changeFieldBoolean}>NeoWorker</p>

                    <Link to='/admin/neoworker/creer'>
                        <p className={hiddenfield === true ? "sidebar-little-field" : "sidebar-hidden-little-field"}>Créer</p>
                    </Link>
                    <Link to='/admin/neoworker/liste'>
                        <p className={hiddenfield === true ? "sidebar-little-field" : "sidebar-hidden-little-field"}>Liste</p>
                    </Link>


                    <p className="sidebar-field" onClick={changeFieldBoolean2}>Missions</p>

                    <Link to='/admin/mission/creer'>
                        <p className={hiddenfield2 === true ? "sidebar-little-field" : "sidebar-hidden-little-field"}>Créer</p>
                    </Link>
                    <Link to='/admin/missionListe'>
                        <p className={hiddenfield2 === true ? "sidebar-little-field" : "sidebar-hidden-little-field"}>Liste</p>
                    </Link>

                    <Link to='/admin/matchingHistory'><p className="sidebar-field">Historique matching</p></Link>

                </div>

                <Link to='/admin'>
                    <div className="sidebar-div-deconnection">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4375 3.16992C27.1289 5.80664 29.5313 10.1191 29.5313 15C29.5313 23.0156 23.0391 29.5137 15.0293 29.5312C7.03126 29.5488 0.480479 23.0273 0.468761 15.0234C0.462901 10.1426 2.86525 5.81836 6.55079 3.17578C7.23634 2.68945 8.19142 2.89453 8.60157 3.62695L9.52735 5.27344C9.87306 5.88867 9.70899 6.66797 9.14064 7.08984C6.70899 8.89453 5.15626 11.7539 5.15626 14.9941C5.1504 20.4023 9.52149 24.8438 15 24.8438C20.3672 24.8438 24.8789 20.4961 24.8438 14.9355C24.8262 11.9004 23.3965 8.9707 20.8535 7.08398C20.2852 6.66211 20.127 5.88281 20.4727 5.27344L21.3984 3.62695C21.8086 2.90039 22.7578 2.68359 23.4375 3.16992ZM17.3438 15.4688V1.40625C17.3438 0.626953 16.7168 0 15.9375 0H14.0625C13.2832 0 12.6563 0.626953 12.6563 1.40625V15.4688C12.6563 16.248 13.2832 16.875 14.0625 16.875H15.9375C16.7168 16.875 17.3438 16.248 17.3438 15.4688Z" fill="black" /></svg>
                        <p className="sidebar-field-deconnection">Se déconnecter</p>
                    </div>
                </Link>

            </div>

        : roleSidebar === "neoworker" ? 
        
        <div className={showSidebar === true ? "sidebar" : "sidebar-hidden"}>
            <img className="sidebar-logo" src={NeoWorkerLogo} alt="neo worker logo"></img>
            <div className="sidebar-field-group">

                <Link to='/neoworker/homepage'><p className="sidebar-field">Mon Espace Perso</p></Link>
                <Link to='/neoworker/competences'><p className="sidebar-field">Mes Compétences</p></Link>
                <Link to='/'><p className="sidebar-field">Mes Missions</p></Link>
                <Link to='/'><p className="sidebar-field">Mes Documents</p></Link>

            </div>

            <Link to='/neoworker'>
                <div className="sidebar-div-deconnection">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M23.4375 3.16992C27.1289 5.80664 29.5313 10.1191 29.5313 15C29.5313 23.0156 23.0391 29.5137 15.0293 29.5312C7.03126 29.5488 0.480479 23.0273 0.468761 15.0234C0.462901 10.1426 2.86525 5.81836 6.55079 3.17578C7.23634 2.68945 8.19142 2.89453 8.60157 3.62695L9.52735 5.27344C9.87306 5.88867 9.70899 6.66797 9.14064 7.08984C6.70899 8.89453 5.15626 11.7539 5.15626 14.9941C5.1504 20.4023 9.52149 24.8438 15 24.8438C20.3672 24.8438 24.8789 20.4961 24.8438 14.9355C24.8262 11.9004 23.3965 8.9707 20.8535 7.08398C20.2852 6.66211 20.127 5.88281 20.4727 5.27344L21.3984 3.62695C21.8086 2.90039 22.7578 2.68359 23.4375 3.16992ZM17.3438 15.4688V1.40625C17.3438 0.626953 16.7168 0 15.9375 0H14.0625C13.2832 0 12.6563 0.626953 12.6563 1.40625V15.4688C12.6563 16.248 13.2832 16.875 14.0625 16.875H15.9375C16.7168 16.875 17.3438 16.248 17.3438 15.4688Z" fill="black" /></svg>
                    <p className="sidebar-field-deconnection">Se déconnecter</p>
                </div>
            </Link>

        </div>

        : ""

        }
        
    </>

    );

}

export default Sidebar