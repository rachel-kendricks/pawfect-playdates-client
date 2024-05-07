import { Link, useNavigate } from "react-router-dom"
import { deletePet } from "../services/pets"
import { favoritePet, unFavoritePet } from "../services/favorite"
import { useEffect, useState } from "react"


export const PetDetailsCard = ({ pet, petId, userFavorites }) => {
    const navigate = useNavigate()
    const [is_liked, set_is_liked] = useState(false)

    useEffect(() => {
        if (userFavorites.find((thePet) => thePet.id === pet.id)) {
            set_is_liked(true)
        }
    }, [userFavorites, pet])
    
    const handleDelete = () => {
        deletePet(petId).then(navigate("/mypetprofiles"))
    }

    const favorite = () => {
        favoritePet(petId).then(set_is_liked(true))
      }
  
      const unfavorite = () => {
        unFavoritePet(petId).then(set_is_liked(false))
      }

    return(
        <section>
            <p>
            {is_liked == true ? (
            <button onClick={unfavorite}>
            <i className="fa-solid fa-star"></i>
            </button>
            ) : (
            <button onClick={favorite}>
                <i className="fa-regular fa-star"></i>
            </button>
            )}
            </p>
            <h1>{pet.name}</h1>
            <img src={pet.img} alt="funny dog"></img>
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
            <button onClick={() => handleDelete()}>Delete</button>
        </section>
    )
}