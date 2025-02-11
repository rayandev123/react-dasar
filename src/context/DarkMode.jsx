import { createContext,useState } from "react";

const DarkModeContext = createContext()

const DarkModeContextProvider = ({children})=>{
    const [isDarkMode,setIsDarkMode]=useState(false)
    const obj=[isDarkMode,setIsDarkMode]
    return (
        <DarkModeContext.Provider value={obj} >
            {children}
        </DarkModeContext.Provider>
    )
}

export const DarkMode = DarkModeContext
export default DarkModeContextProvider