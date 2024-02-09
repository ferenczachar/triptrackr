import { createContext, useState } from 'react'

export const DashboardContext = createContext(null);

export function DashboardContextProvider({children}){
    const [contentValue, setContentValue] = useState('')

    return(
        <DashboardContext.Provider value={{contentValue, setContentValue}}>
            {children}
        </DashboardContext.Provider>
    )

}