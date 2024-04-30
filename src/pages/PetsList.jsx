import { useState, useEffect  } from "react"
import { getAllPets } from "../services/petsService";


export const PetsList = () => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
        getAllPets().then((pets) => {
            setAllPets(pets);
        })
    }, [])

    return (
        <section>
            <div className="header">
                <h1>PetsList</h1>
            </div>
            <div className="content">
                {allPets.map((pet) => (
                    <div key={pet.id}>{pet.name}</div>
                ))}
            </div>
        </section>
    )
}