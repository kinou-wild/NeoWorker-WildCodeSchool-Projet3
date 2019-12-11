import React, {useState, createContext} from 'react'


export const SidebarContext = createContext()


const SidebarController = (props) => {

    const [showSidebar, setShowSidebar] = useState(false)

    return(

        <SidebarContext.Provider value={[showSidebar, setShowSidebar]}>
            {props.children}
        </SidebarContext.Provider>
    )
}
 export default SidebarController;