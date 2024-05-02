import { Link } from "react-router-dom";



export const MyPetProfiles = () => {
    return (
        <section>
            <h1>MyPetProfiles</h1>
            <Link to="../add">
            <button>Add Pet Profile</button>
            </Link>
        </section>
    )
}