import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Authorized } from "../views/Authorized";
import { PetsList } from "../pages/PetsList";
import { PetDetails } from "../pages/PetDetails";
import { MyPetProfiles } from "../pages/MyPetProfiles";
import { AddPetProfile } from "../pages/AddPetProfile";
import { MyFavorites } from "../pages/MyFavorites";
import { EditPetDetails } from "../pages/EditPetDetails";
import { Profile } from "../pages/Profile";

export const ApplicationViews = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route element={<Authorized />}>
          <Route path="/pets">
            <Route index element={<PetsList />} />
            <Route path=":petId">
              <Route index element={<PetDetails />} />
              <Route path="edit" element={<EditPetDetails />} />
            </Route>
          </Route>
          <Route path="/mypetprofiles" element={<MyPetProfiles />} />
          <Route path="/add" element={<AddPetProfile />} />
          <Route path="/favorites" element={<MyFavorites />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
