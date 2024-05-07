import { useEffect, useState } from "react"


export const PetDetailsCard_noEdit = ({ pet, petId, userFavorites }) => {
    const [is_liked, set_is_liked] = useState(false)

    useEffect(() => {
        if (userFavorites.find((thePet) => thePet.id === pet.id)) {
            set_is_liked(true)
        }
    }, [userFavorites, pet])
    return(
        <section>
            <p>
            {is_liked == true ? (<i className="fa-solid fa-star"></i>
            ) : (
                <i className="fa-regular fa-star"></i>
            )}
            </p>
            <h1>{pet.name}</h1>
            <ul>
                <li>Size: {pet.size?.name}</li>
                <li>Play Style: {pet.play_style?.name}</li>
                <li>Breed: {pet.breed}</li>
                <li>Bio: {pet.bio}</li>
                <li>Owner Name: {pet.user?.first_name} {pet.user?.last_name}</li>
                <li>Owner Email: {pet.user?.email}</li>
            </ul>
        </section>
    )
}