import { useState, useEffect  } from "react"
import { getAllPets } from "../services/pets";
import { PetCard } from "../components/PetCard";
import { Link } from "react-router-dom"



export const PetsList = () => {
    const [allPets, setAllPets] = useState([]);

    useEffect(() => {
          getAllPets().then((pets) => {
            setAllPets(pets);
          });
        }, []);

    return (
        <section>
            <div className="header">
                <h1>Pets List</h1>
            </div>
            <div className="content">
                {allPets.map((pet) => (
                   <div key={pet.id}>
                    <Link to={`/pets/${pet.id}`}>
                        <PetCard pet={pet} key={pet.id}/>
                    </Link>
                     </div>
                ))}
            </div>
        </section>
    )
}