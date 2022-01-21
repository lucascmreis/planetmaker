import { useContext } from "react"
import { useState } from "react/cjs/react.development"
import { PlanetContext } from "../contexts/PlanetContext"
import { getPlanetService } from "../services/planets"

export const PlanetProvider = ({children}) => {
    const [planets, setPlanets] = useState([])

    const list = async () => {
       const {data} = await getPlanetService()
       const dataSource = data.map(row => {
           return {
               key: row.id,
               ...row
           }
       })
       console.log('list',dataSource)
       setPlanets(dataSource)
    }

    return(
        <PlanetContext.Provider value={{planets, list}} >
            {children}
        </PlanetContext.Provider>
    )
}

export const usePlanet = () => {
    const context = useContext(PlanetContext)
    return context
}