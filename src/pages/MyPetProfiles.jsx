import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getUsersPetProfiles } from "../services/pets";
import { PetCard } from "../components/PetCard";



export const MyPetProfiles = () => {
    const [usersPetProfiles, setUsersPetProfiles] = useState([])

    useEffect(() => {
        getUsersPetProfiles().then((pets) => {
            setUsersPetProfiles(pets)
        })
    }, [])

    return (
        <section>
            <div>
                <h1>MyPetProfiles</h1>
            </div>
            <Link to="../add">
            <button>Add Pet Profile</button>
            </Link>
            {usersPetProfiles.map((pet) => (
                   <div key={pet.id}>
                    <Link to={`/pets/${pet.id}`}>
                        <PetCard pet={pet} key={pet.id}/>
                    </Link>
                     </div>
                ))}
        </section>
    )
}