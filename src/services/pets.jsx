import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";


//Get all pets
export const getAllPets = () => {
    const pawfectTokenString = localStorage.getItem("pawfect_token");
    if (pawfectTokenString) {
        const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithResponse("pets", {
        headers: {
            Authorization: `Token ${pawfectToken.token}`,
          }
    }).then((res) => res.json())
    }
}