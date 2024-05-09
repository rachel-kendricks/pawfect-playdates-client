import { useEffect, useState } from "react";
import { deleteProfile, getProfile, updateProfile } from "../services/profile";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const [profile, setProfile] = useState({});
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    getProfile().then((profile) => {
      setProfile(profile);
      setEmail(profile.email);
      setUsername(profile.username);
      setFirstName(profile.first_name);
      setLastName(profile.last_name);
    });
  }, []);

  const handleUpdate = () => {
    updateProfile(profile.id, {
      first_name: firstName,
      last_name: lastName,
      username: username,
      email: email,
    }).then(window.alert("Profile Updated"));
  };

  const handleDelete = () => {
    deleteProfile(profile.id).then(navigate("/login"));
  };

  return (
    <section className="container is-max-desktop has-text-centered">
       <div className="title is-2">
      <h1>User Profile</h1>
    </div>
      <div>
        <section>
          <form className="form--login">
            <fieldset className="mb-4">
              <label htmlFor="firstName"> First name </label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(evt) => setFirstName(evt.target.value)}
                className="form-control input mt-4"
                placeholder=""
                required
                autoFocus
              />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="lastName"> Last name </label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(evt) => setLastName(evt.target.value)}
                className="form-control input mt-4"
                placeholder=""
                required
                autoFocus
              />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="lastName"> Username </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(evt) => setUsername(evt.target.value)}
                className="form-control input mt-4"
                placeholder=""
                required
                autoFocus
              />
            </fieldset>
            <fieldset className="mb-4">
              <label htmlFor="inputEmail"> Email address </label>
              <input
                type="email"
                id="inputEmail"
                value={email}
                onChange={(evt) => setEmail(evt.target.value)}
                className="form-control input mt-4"
                placeholder="Email address"
                required
                autoFocus
              />
            </fieldset>
            <fieldset>
              <button className="button mr-2" onClick={handleUpdate}>Update Profile</button>
              <button className="button ml-2" onClick={handleDelete}>Delete Profile</button>
            </fieldset>
          </form>
        </section>
      </div>
    </section>
  );
};
