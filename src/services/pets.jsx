import { fetchWithResponse, fetchWithoutResponse } from "./fetcher";

//Get all pets
export const getAllPets = () => {
  const pawfectTokenString = localStorage.getItem("pawfect_token");
  if (pawfectTokenString) {
    const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithResponse("pets", {
      headers: {
        Authorization: `Token ${pawfectToken.token}`,
      },
    }).then((res) => res.json());
  }
};

//Get single pet
export const getSinglePet = (petId) => {
  const pawfectTokenString = localStorage.getItem("pawfect_token");
  if (pawfectTokenString) {
    const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithResponse(`pets/${petId}`, {
      headers: {
        Authorization: `Token ${pawfectToken.token}`,
      },
    }).then((res) => res.json());
  }
};

//Get play styles
export const getPlayStyles = () => {
  const pawfectTokenString = localStorage.getItem("pawfect_token");
  if (pawfectTokenString) {
    const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithResponse("playstyles", {
      headers: {
        Authorization: `Token ${pawfectToken.token}`,
      },
    }).then((res) => res.json());
  }
};
//Get sizes
export const getSizes = () => {
  const pawfectTokenString = localStorage.getItem("pawfect_token");
  if (pawfectTokenString) {
    const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithResponse("sizes", {
      headers: {
        Authorization: `Token ${pawfectToken.token}`,
      },
    }).then((res) => res.json());
  }
};

//Add Pet to database
export const addPet = (pet) => {
  const pawfectTokenString = localStorage.getItem("pawfect_token");
  if (pawfectTokenString) {
    const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithResponse("pets", {
      method: "POST",
      headers: {
        Authorization: `Token ${pawfectToken.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    }).then((res) => res.json());
  }
};

//Delete single pet
export const deletePet = (petId) => {
  const pawfectTokenString = localStorage.getItem("pawfect_token");
  if (pawfectTokenString) {
    const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithoutResponse(`pets/${petId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Token ${pawfectToken.token}`,
      },
    });
  }
};

//Update a pet's details
export const updatePet = (petId, pet) => {
  const pawfectTokenString = localStorage.getItem("pawfect_token");
  if (pawfectTokenString) {
    const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithoutResponse(`pets/${petId}`, {
      method: "PUT",
      headers: {
        Authorization: `Token ${pawfectToken.token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet),
    });
  }
};

//Get a user's favorites
export const getUserFavorites = () => {
  const pawfectTokenString = localStorage.getItem("pawfect_token");
  if (pawfectTokenString) {
    const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithResponse("pets/favorites", {
      headers: {
        Authorization: `Token ${pawfectToken.token}`,
      },
    }).then((res) => res.json());
  }
};

//Get a user's pet profiles
export const getUsersPetProfiles = () => {
  const pawfectTokenString = localStorage.getItem("pawfect_token");
  if (pawfectTokenString) {
    const pawfectToken = JSON.parse(pawfectTokenString);
    return fetchWithResponse("pets/user_pets", {
      headers: {
        Authorization: `Token ${pawfectToken.token}`,
      },
    }).then((res) => res.json());
  }
};
