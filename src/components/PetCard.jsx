import "./PetCard.css"

export const PetCard = ({ pet }) => {
    return (
    <div className="pet-card" key={pet.id}>
        <i className="fa-regular fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <h4>{pet.name}</h4>
        <p>Size: {pet.size.name}</p>
        <p>Play Style: {pet.play_style.name}</p>
        <p>Breed: {pet.breed}</p>

    </div>
    )
}