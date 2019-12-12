import React, {useState, createContext} from 'react'

/* Création de notre context, qui permet d'être appeler et faire le lien */
const SidebarContext = createContext()

/* Création de notre controller, qui permet de wrap tout les éléments et composants dans lesquels on a besoin d'utiliser des méthodes, states, hooks, etc...*/
const SidebarController = (props) => {

    /* Nos hooks, nos méthodes, nos states */
    const [showSidebar, setShowSidebar] = useState(false)
    
    return(
        /* Création du provider  qui fais le lien avec le controller, et c'est l'intérieur qu'on injecte tout ce qu'on veut faire passer */
        <SidebarContext.Provider value={[showSidebar, setShowSidebar]}>
            {props.children}
        </SidebarContext.Provider>
    )
}
 export default SidebarController;
 export {SidebarContext}