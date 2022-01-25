import { useContext } from "react"
import { useState } from "react/cjs/react.development"
import { PlanetContext } from "../contexts/PlanetContext"
import { getPlanetService, createPlanetService } from "../services/planets"

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
       setPlanets(dataSource)
    }

    const create = async (newData) => {
        const response = await createPlanetService(newData)
        return response
    }

    const value = {
        planets, 
        list,
        create
    }

    return(
        <PlanetContext.Provider value={value} >
            {children}
        </PlanetContext.Provider>
    )
}

export const usePlanet = () => {
    const context = useContext(PlanetContext)
    return context
}