import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getSinglePet } from "../services/pets"
import { PetDetailsCard } from "../components/PetDetailsCard"
import { PetDetailsCard_noEdit } from "../components/PetDetailsCard_noEdit"



export const PetDetails = () => {
    const { petId } = useParams({})
    const [pet, setPet] = useState({})
    const [user, setUser] = useState("")

    useEffect(() => {
        getSinglePet(petId).then((pet) => {
            setPet(pet)
        });
    }, [])

useEffect(() => {
    const pawfectTokenString = localStorage.getItem("pawfect_token");
    if (pawfectTokenString) {
        const pawfectToken = JSON.parse(pawfectTokenString);
        setUser(pawfectToken.id)
          }
}, [])

    return (
       <section>
        <div className="header">
            <h1>Pet Details</h1>
        </div>
        <div className="content">
            {pet.user?.id === user ? <PetDetailsCard pet={pet} petId={petId}/> : <PetDetailsCard_noEdit pet={pet} petId={petId}/> }
            
        </div>
       </section>
    )
}