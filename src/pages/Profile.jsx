import { useEffect, useState } from "react"
import { deleteProfile, getProfile, updateProfile } from "../services/profile"
import { useNavigate } from "react-router-dom"


export const Profile = () => {
    const [profile, setProfile] = useState({})
    const [email, setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const navigate = useNavigate()

    useEffect(() => {
        getProfile().then((profile) => {
            setProfile(profile)
            setEmail(profile.email)
            setUsername(profile.username)
            setPassword(profile.password)
            setFirstName(profile.first_name)
            setLastName(profile.last_name)
        })
    }, [])

    const handleUpdate = () => {
        updateProfile(profile.id, {
            "first_name": firstName,
            "last_name": lastName,
            "username": username,
            "email": email,
            }).then(window.alert("Profile Updated"))
      }
    
    const handleDelete = () => {
        deleteProfile(profile.id).then(navigate("/login"))
    }

    return (
        <section>
            <div>
            <section>
                <form className="form--login" >
                    <h2 className="text-xl mb-10">User Profile</h2>
                    <fieldset className="mb-4">
                        <label htmlFor="firstName"> First name </label>
                        <input type="text" id="firstName"
                            value={firstName}
                            onChange={evt => setFirstName(evt.target.value)}
                            className="form-control"
                            placeholder=""
                            required autoFocus />
                    </fieldset>
                    <fieldset className="mb-4">
                        <label htmlFor="lastName"> Last name </label>
                        <input type="text" id="lastName"
                            value={lastName}
                            onChange={evt => setLastName(evt.target.value)}
                            className="form-control"
                            placeholder=""
                            required autoFocus />
                    </fieldset>
                    <fieldset className="mb-4">
                        <label htmlFor="lastName"> Username </label>
                        <input type="text" id="username"
                            value={username}
                            onChange={evt => setUsername(evt.target.value)}
                            className="form-control"
                            placeholder=""
                            required autoFocus />
                    </fieldset>
                    <fieldset className="mb-4">
                        <label htmlFor="inputEmail"> Email address </label>
                        <input type="email" id="inputEmail"
                            value={email}
                            onChange={evt => setEmail(evt.target.value)}
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset className="mb-4">
                        <label htmlFor="inputPassword"> Password </label>
                        <input type="password" id="inputPassword"
                            value={password}
                            onChange={evt => setPassword(evt.target.value)}
                            className="form-control"
                            placeholder="Password"
                        />
                    </fieldset>
                    <fieldset>
                        <button onClick={handleUpdate}>Update Profile</button>
                        <button onClick={handleDelete}>Delete Profile</button>
                    </fieldset>
                </form>
            </section>
            </div>
        </section>
    )
}