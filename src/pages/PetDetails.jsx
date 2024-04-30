import { useParams } from "react-router-dom"



export const PetDetails = () => {
    const { petId } = useParams({})

    return (
       <section>
        <h1>Pet Details</h1>
        <div>
            <h3>Pet Number:</h3>
            {petId}
        </div>
       </section>
    )
}