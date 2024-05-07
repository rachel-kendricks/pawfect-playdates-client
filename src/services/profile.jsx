import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

//Get user profile
export const getProfile = () => {
    const pawfectTokenString = localStorage.getItem("pawfect_token");
    if (pawfectTokenString) {
        const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithResponse(`users/${pawfectToken.id}`, {
        headers: {
            Authorization: `Token ${pawfectToken.token}`,
          }
    }).then((res) => res.json())
    }
}

//Update a pet's details
export const updateProfile = (profileId, profile) => {
    const pawfectTokenString = localStorage.getItem("pawfect_token");
    if (pawfectTokenString) {
        const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithoutResponse(`users/${profileId}`, {
        method: "PUT",
        headers: {
            Authorization: `Token ${pawfectToken.token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(profile),
    })
    }
}

//Delete single pet
export const deleteProfile = (profileId) => {
    const pawfectTokenString = localStorage.getItem("pawfect_token");
    if (pawfectTokenString) {
        const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithoutResponse(`users/${profileId}`, {
        method: "DELETE",
        headers: {
            Authorization: `Token ${pawfectToken.token}`,
        }
    })
    }
}