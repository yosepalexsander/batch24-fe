import { useContext } from "react"
import {UserContext} from "../contexts/userContext";

function Profile() {
  const {state} = useContext(UserContext);
  return (
    <>
      <p className='h1'>{state.user.name}</p>
      <p className='h2'>{state.user.email}</p>
      <p className='h3'>{state.user.password}</p>
    </>
  )
}

export default Profile;
