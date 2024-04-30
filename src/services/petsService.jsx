import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

//get just the token from local storage
const pawfectTokenString = localStorage.getItem("pawfect_token");
const pawfectToken = JSON.parse(pawfectTokenString);
const token = pawfectToken.token;

//Get all pets
export const getAllPets = () => {
    return fetchWithResponse("pets", {
        headers: {
            Authorization: `Token ${token}`,
          }
    }).then((res) => res.json())
}