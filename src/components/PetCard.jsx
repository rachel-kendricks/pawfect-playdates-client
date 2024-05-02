import { Link } from "react-router-dom"
import "./PetCard.css"

export const PetCard = ({ pet }) => {
    return (
    <div className="pet-card" key={pet.id}>
        <h4>{pet.name}</h4>
        <p>Size: {pet.size.name}</p>
        <p>Play Style: {pet.play_style.name}</p>
        <p>Breed: {pet.breed}</p>

    </div>
    )
}