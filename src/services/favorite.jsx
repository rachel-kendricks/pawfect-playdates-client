import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

//Add favorite to database
export const favoritePet = (petId) => {
    const pawfectTokenString = localStorage.getItem("pawfect_token");
    if (pawfectTokenString) {
        const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithoutResponse(`pets/${petId}/favorite`, {
        method: "POST",
        headers: {
            Authorization: `Token ${pawfectToken.token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({"pet_id": petId}),
    })
    }
}

//Delete favorite from database
export const unFavoritePet = (petId) => {
    const pawfectTokenString = localStorage.getItem("pawfect_token");
    if (pawfectTokenString) {
        const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithoutResponse(`pets/${petId}/favorite`, {
        method: "DELETE",
        headers: {
            Authorization: `Token ${pawfectToken.token}`,
        }
    })
    }
}