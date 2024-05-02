import { Link } from "react-router-dom"


export const PetDetailsCard = ({ pet, petId }) => {
    return(
        <section>
            <h1>{pet.name}</h1>
            <ul>
                <li>Size: {pet.size?.name}</li>
                <li>Play Style: {pet.play_style?.name}</li>
                <li>Breed: {pet.breed}</li>
                <li>Bio: {pet.bio}</li>
                <li>Owner Name: {pet.user?.first_name} {pet.user?.last_name}</li>
                <li>Owner Email: {pet.user?.email}</li>
            </ul>
            <Link to="./edit">
                <button>Edit</button>
            </Link>
        </section>
    )
}