import { createContext, useState } from 'react'

export const DashboardContext = createContext(null);

export function DashboardContextProvider({children}){
    const [contentValue, setContentValue] = useState('1')

    return(
        <DashboardContext.Provider value={{contentValue, setContentValue}}>
            {children}
        </DashboardContext.Provider>
    )

}